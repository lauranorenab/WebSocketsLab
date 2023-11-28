/*import { MapContainer, Marker, Popup ,TileLayer, useMapEvent } from "react-leaflet"
import L from 'leaflet'
import CocheSVG from "./CocheSVG"*/
import { useEffect, useState } from "react"
import { Client } from "@stomp/stompjs"
import Pizarra from './Pizarra/';

/*useEffect (()=> {
const cliente = new Client({
  brokerURL: 'ws://localhost:8080/websocket' 
})})*/

const App = () => {
  return (
    <div>
      <Pizarra />
      {/* Agrega otros elementos y controles si es necesario */}
    </div>
  );
};

export default App;

 /*
cliente.onConnect = () => {
  console.log('Conectado')
  cliente.subscribe('/taxi/coordenada' , (m) => {
    const coordenada = JSON.parse(m.body)
    const puntoNuevo = [coordenada.x, coordenada.y]
    const anguloNuevo = calcularAnguloDireccionGPS(posicionAnterior, puntoNuevo)
    setPosicionAnterior(puntoNuevo)
    setPosicionCoche([coordenada.x, coordenada.y])
    setAnguloCoche(anguloNuevo)

//    setPosicionCoche(puntoNuevo)
  })
}

cliente.activate()
return () => {
  if(cliente) {
    cliente.deactivate()
  }
}

}, [posicionAnterior])

const svgIconoCoche = L.divIcon({
    html: `<div class='svg-icon' style="transform: rotate(${anguloCoche}deg);">${CocheSVG}</div>
    `,
    className: 'svg-icon'
})

  return(
   
<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   <EvtClickMapa onClick={(c) => console.log('coordenadas.add(new Coordenadas('+ c.lat +', ' + c.lng +'));')} />
  <Marker position={posicionCoche} icon={svgIconoCoche} />
  
   
  </MapContainer>

  )
}
*/
