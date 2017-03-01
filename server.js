var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

/*var plays = {
    'play1':{
        title:'First Play',
        content:`<p>
             im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........
         </p>
         <p>
             im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........im first...........
         </p>`
         },
    'play2':{
           title:'Second Play',
           content: `<p>
             im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....
         </p>
         <p>
             im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second.....im second..............im second.....im second.....im second.....
         </p>`
           
        },
    'play3':{
       title:'Third Play',
       content:`<p>
             im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... 
         </p>
         <p>
             im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... im third....... 
             </p>`
    }
        };



function createtemplate(data)
{
     var title = data.title;
     var content = data.content;
     var template = `
    <html>
      <head>
       <title>${title}</title> 
       <link href="/ui/style.css" rel="stylesheet" />
       <meta name="viewport" content="width=device-width,initialscale=1"/>

    </head>
    <body>
      <div>
         <a href='/'>Home</a>
      </div>
      <hr/>
      <h2>Guess what!</h2>
      <div>
         Im Doing This
      </div>
     
      <div>
          ${content}
      </div>
     
    </body>
</html>`;
return template;
}
*/
var counter =0;
app.get('/likes',function(req,res){
    likes=likes+1;
    res.send(likes.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
/*
app.get('/:play', function (req, res) {
   var play = req.params.play
  res.send(createtemplate(plays[play]));
});
*/
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});






var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
