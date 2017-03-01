// moving a image across the screen
/*console.log('Loaded!');
var img = document.getElementById('bomma');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft+'px'
}
img.onclick = function(){
     var mes = document.getElementById("text");
     mes.innerHTML = "What Have You Done!!!!!!!";
     
     var inteval = setInterval(moveRight,50);
};
*/

//likes for a pic 
var button = document.getElementById('likes');
var likes = 0;
button.onclick= function(){
      likes=likes=1;
      var span = document.getElementById('like');
      span.innerHTML = likes.toString(); 
};