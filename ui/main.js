//counter code
var button = document.getElementById('counter' );
var counter = 0;
button.onclick = function(){
    // create a request to counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            // takle some action
            if(request.status === 200){
                var counter =  request/responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // not done yet
    };
    //render the variable in the correct span
    
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};

// make request
    request.open('GET','http://guhanp.imad.hasura-app.io/counter',true);
    request.send(null);

//console.log('Loaded!');

// Change the text of the main-text div
//var element = document.getElementById('main-text');
//element.innerHTML='New Value';

// move the image

var img = document.getElementById('madi');
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft+1;
    img.style.marginLeft =marginLeft + 'px';
}

img.onclick = function( ) {
    var interval = setInterval(moveRight,50);
};

//var i = 0;
//img.onclick = function( ) {
//    var interval = setInterval((marginLeft+i)+ 'px',50);
//    i=i+1;
//   img.style.marginLeft ='100px';
    
//};