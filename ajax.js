//fetch('https://you.sharecare.com/api/event').then(function(response) {
//	console.log(response)
//}).catch(function(err) {
	// Error :(
//});
var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log('success', request.responseText);
  } else {
    console.warn('error');
  }
};

request.open('GET', 'https://mywebsite.com/endpoint/');
request.send();


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
       }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send(); 



$(document).ajaxSuccess(function(event, xhr, settings, ajaxData) {
    var data = xhr.responseText;
  	var jsonResponse; 
  console.log(event, "this is the event");
  console.log(xhr, "this is the xhr");
  console.log(ajaxData, "this is the ajaxData");
  console.log(settings, "this is settings")
  console.log(jsonResponse,"this is the jsonResponse")
});

var response = new Response('BODY'{
	ok: false,
	status: 404,
	url: '/'
};

$(document).ajaxComplete(function(event,xhr,options){
console.log(xhr, "this is xhr")
});


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this);
    //var x = JSON.parse(will.responsexml);
    //console.log(will)
    //var x = this.responseXML;
    //console.log(x);
    console.log(this.getAllResponseHeaders());
    //console.log(this.response);
  }
};
xhttp.open("GET","https://you.sharecare.com/pi/event", true);
xhttp.send();

c.progress && ("post" === c.method || "put" === c.method ? 
	p.upload.addEventListener("progress", c.progress) 
	: "get" === c.method && p.addEventListener("progress", c.progress)),
        void 0 === d && (d = null),
        p.send(d
readyState





$(window).ajaxSuccess(function(){
    console.log("ajaxsuccess window")
});
$(document).ajaxSuccess(function(){
    console.log("ajaxsuccess doc")
});
$(document).ajaxSend(function(e, xhr, opt){
    console.log(e);
    console.log(xhr);
});