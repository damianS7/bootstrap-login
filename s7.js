window.onload = function () {

  loadPage('login.html', 'loader');
};


function loadPage(page, divId) {
  fetch(page).then(function (response) {
    // When the page is loaded convert it to text
    return response.text()
  }).then(function (html) {
    // Initialize the DOM parser
    //var parser = new DOMParser();

    // Parse the text
    //var doc = parser.parseFromString(html, "text/html");

    // You can now even select part of that html as you would in the regular DOM 
    // Example:
    document.getElementById(divId).innerHTML = html;

  }).catch(function (err) {
    console.log('Failed to fetch page: ', err);
  }); 

}

function post() {
  //loadPage('danger.html', 'message_div');
  var data = {
    "username": "damianS7",
    "email": "peter@klaven",
    "post": "asdasd",
    "password": "cityslicka"
  }

  var headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json'                                                                                           
 }

  fetch("login.php", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  })
   .then(function(response){ 
    console.log(response); 
  })
   .then(function(data){ 
    console.log(data)
  }).catch(function (err) {
    console.log('Failed to fetch page: ', err);
  });

}

