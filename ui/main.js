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
// make request
    request.open('GET','http://guhanp.imad.hasura-app.io/counter',true);
    request.send(null);
  
};


