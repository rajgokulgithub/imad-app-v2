console.log('Loaded!');
var img = document.getElementById('bomma');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft+3;
    img.style.marginLeft = marginLeft+'px'
}
img.onclick = function(){
     var mes = document.getElementById("text");
     mes.innerHTML = "What Have You Done!!!!!!!";
     
     var inteval = setInterval(moveRight,50);
};

