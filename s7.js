window.onload = function () {
  loadPage('login.html', 'loader');
};


function loadPage(page, divId) {
  console.log(page);
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
    if(data['success']) {
      document.getElementById('message_div').classList.add("alert-success");
      document.getElementById('message').innerHTML = data['success'];
      document.getElementById('message_div').style["display"] = "visible";

      setTimeout(function () {
        window.location.replace("logged.php");
      }, 5000);
      
    } else {
      document.getElementById('message_div').classList.add("alert-danger");
      document.getElementById('message').innerHTML = data['error'];
      document.getElementById('message_div').style["display"] = "visible";
    }
    
  }).catch(function (err) {
    console.log('Failed to fetch page: ', err);
  });

}

