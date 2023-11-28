/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", function(evt){
    isLocalDrawing = true;
    beginDraw(evt);
    
}, false);

canvas.addEventListener("mouseup", end, false);
canvas.addEventListener("mouseout", end, false);

function getCoords(clientX, clientY){
    var rect = canvas.getBoundingClientRect();
    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    };
    
}


function beginDraw(evt){
    if(evt == null) isLocalDrawing = false;
    
    ctx.beginPath();
    
    if(isLocalDrawing){
        canvas.addEventListener("mousemove", drawImage, false);
        sendData(evt, "beginDraw");
    }
    
    
    
}

function drawImage(evt, currentCoords) {
    
    var coords;
    if(isLocalDrawing) coords = getCoords(evt.clientX, evt.clientY);
    else coords = getCoords(currentCoords.x, currentCoords.y);
    
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    
    if(isLocalDrawing){
        sendData(evt, "drawImage");
        
    }
    
}

function end(evt){
    if(isLocalDrawing) canvas.removeEventLister("mousemove", drawImage);
    
}

function sendData (evt, methodName){
    websocket.send(JSON.stringify(
            {
                coords: {
                    x: evt.clientX,
                    y: evt.clientY
                },
                
                methodName: methodName
                
            }
                    ));
    
    
    
}

