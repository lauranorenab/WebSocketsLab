// Pizarra.jsx
import React, { useEffect, useState } from 'react';

const Pizarra = () => {
  const [dibujando, setDibujando] = useState(false);
  const [colorLapiz, setColorLapiz] = useState('blue');
  const [x, setX] = useState(150);
  const [y, setY] = useState(150);
  

  useEffect(() => {
    const cuadrito = document.getElementById('area_de_dibujo');
    const papel = cuadrito.getContext('2d');
    const botonBorrar = document.getElementById("borrarBtn");
    const botonCambiarColor = document.getElementById("cambiarColorBtn");

    const teclas = {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39,
    };

    const dibujarLinea = (color, xinicial, yinicial, xfinal, yfinal) => {
      papel.beginPath();
      papel.strokeStyle = color;
      papel.lineWidth = 1.5;
      papel.moveTo(xinicial, yinicial);
      papel.lineTo(xfinal, yfinal);
      papel.stroke();
      papel.closePath();
    };

    const darle = (evento) => {
      dibujarLinea(colorLapiz, x, y, evento.layerX, evento.layerY);
      setX(evento.layerX);
      setY(evento.layerY);
    };

    const dibujarSi = (evento) => {
      dibujarLinea(colorLapiz, x, y, evento.layerX, evento.layerY);
      setX(evento.layerX);
      setY(evento.layerY);
    };

    const dibujarMouse = (evento) => {
      setX(evento.layerX);
      setY(evento.layerY);
    };

    const dibujarTeclado = (evento) => {
      const movimiento = 10;
      switch (evento.keyCode) {
        case teclas.UP:
          darle({ layerX: x, layerY: y - movimiento });
          break;
        case teclas.DOWN:
          darle({ layerX: x, layerY: y + movimiento });
          break;
        case teclas.LEFT:
          darle({ layerX: x - movimiento, layerY: y });
          break;
        case teclas.RIGHT:
          darle({ layerX: x + movimiento, layerY: y });
          break;
        default:
          console.log('Otra tecla plis!');
      }
    };

    botonBorrar.addEventListener("click", function() {
        // Limpiar el canvas
        papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
        // Volver a dibujar la línea azul en el centro (si es necesario)
        dibujarLinea(colorLapiz, x - 1, y - 1, x + 1, y + 1, papel);
    });

    botonCambiarColor.addEventListener("click", function() {
        // Cambiar el color del lápiz (puedes personalizar los colores)
        colorLapiz = getRandomColor();
    });

    const getRandomColor = () => {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    cuadrito.addEventListener('mousedown', (evento) => {
      dibujarMouse(evento);
      setDibujando(true);
    });

    cuadrito.addEventListener('mouseup', (evento) => {
      dibujarSi(evento);
      setDibujando(false);
    });

    cuadrito.addEventListener('mousemove', (evento) => {
      if (dibujando) {
        darle(evento);
      }
    });

    document.addEventListener('keyup', dibujarTeclado);

    return () => {
      cuadrito.removeEventListener('mousedown', dibujarMouse);
      cuadrito.removeEventListener('mouseup', dibujarSi);
      cuadrito.removeEventListener('mousemove', darle);
      document.removeEventListener('keyup', dibujarTeclado);
    };
  }, [dibujando, colorLapiz, x, y]);

  return (
    <div>
      <canvas
      id="area_de_dibujo"
      width="500"
      height="500"
      style={{ border: '1px solid #000' }}>
       </canvas>
       <p>Mueve las flechas del teclado o el mouse para dibujar</p>
       <button id="borrarBtn">Borrar</button>
       <button id="cambiarColorBtn">Cambiar Color</button>
    </div>
  );
};

export default Pizarra;

