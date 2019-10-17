window.onload = function () {
  loadPage('login.html', 'loader');
};


function loadPage(page, divId) {
  fetch(page).then(function (response) {
    return response.text()
  }).then(function (html) {
    document.getElementById(divId).innerHTML = html;
  }).catch(function (err) {
    console.log('Failed to fetch page: ', err);
  }); 

}

function post() {
  
  var data = {
    "username": "damianS7",
    "email": "peter@klaven",
    "password": "123456"
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
    return response.json();
  })
   .then(function(data){ 
    console.log(data);
    if(data['sucess']) {
      console.log('logged!');
    } else {
      document.getElementById('error_message').innerHTML = data['error'];
    }
    //window.location.replace("logged.php");
  }).catch(function (err) {
    console.log('Failed to fetch page: ', err);
  });

}

