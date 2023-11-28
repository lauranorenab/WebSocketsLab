/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

var wsUri = "ws://"+ document.location.host + document.location.pathname + "pizarraendpoint";
var websocket = new WebSocket(wsUri); 
websocket.onerror = function(evt) {
    console.log("Ha sucedido un error: "+evt.data);
    
};

websocket.onopen = function(evt){
    console.log("Se ha conectado a: "+ wsUri);
};

websocket.onmessage = function(evt) {
    
    console.log("Se ha recibido un mensaje del servidor: "+evt.data);
    var json = JSON.parse(evt.data);
    
    if(json.methodName == "beginDraw") beginDraw(null);
    if(json.methodName == "drawImage") drawImage(null, json.coords);
    
    
};



