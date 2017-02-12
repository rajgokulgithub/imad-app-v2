console.log('Loaded!');
var img = document.getElementById('bomma');
var marginLeft=0;
img.onclick = function(){
     var mes = document.getElementById("text");
     mes.innerHTML = "What Have You Done!!!!!!!";
     
     var inteval = setInterval(moveRight,50);
};

function moveRight(){
    marginLeft = marginLeft+10;
    img.style.marginLeft = marginLeft+'px';
}