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
console.log('Loaded!');
var button = document.getElementById('likes');
button.onclick= function(){
  var request = new XMLRequest();
    request.onreadystatechange = function(){
         if(request.readystate===XMLRequest.DONE)
         {
              if(request.status===200){
                  var likes = request.responseText;
                  var span = document.getElementById('like');
                  span.innerHTML = likes.toString(); 
              }
         }
    };
    
    request.open("GET",'http://http://rajgokulgithub.imad.hasura-app.io/likes',true);
    request.send(null);
      
};
