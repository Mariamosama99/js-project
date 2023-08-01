function save() {
    var user = document.getElementById('name');
    var mail = document.getElementById('email');
    var password = document.getElementById('password');
    var nameRegex = /^[A-Za-z]{3,}$/;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!nameRegex.test(user.value)) {
      user.style.border = "3px red solid";
      document.getElementById('err1').style.display = "block";
    } else {
      user.style.border = "1px solid black";
      document.getElementById('err1').style.display = "none";
    }
  
    if (!emailRegex.test(mail.value)) {
      mail.style.border = "3px red solid";
      document.getElementById('err2').style.display = "block";
    } else {
      mail.style.border = "1px solid black";
      document.getElementById('err2').style.display = "none";
    }
    if (password.value.length < 8) {
      password.style.border = "3px red solid";
      document.getElementById('err3').style.display = "block";
    } else {
      password.style.border = "1px solid black";
      document.getElementById('err3').style.display = "none";
    }
  
      if (nameRegex.test(user.value) && emailRegex.test(mail.value)) {
        localStorage.setItem('username', user.value);
        localStorage.setItem('email', mail.value);
        localStorage.setItem('password', password.value);
        open("home.html");
    }
    }
  
