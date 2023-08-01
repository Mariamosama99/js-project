

function save() {
  var mail = document.getElementById('email');
  var password = document.getElementById('password');
  
  var locuser = localStorage.getItem('email');
  var locpassword = localStorage.getItem('password');    
  
if (mail.value ==="" || password.value === "") {
      mail.style.border = "3px red solid";
    document.getElementById('err2').style.display = "block";
  } else {
    mail.style.border = "1px solid black";
    document.getElementById('err2').style.display = "none";
    if ((locuser && locuser === mail.value) && (locpassword && locpassword === password.value)) {
      open("home.html");
    } else {
      alert("e-mail or password is wrong");
    }
  }
}

