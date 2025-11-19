document.getElementById('login-button').addEventListener('click', function() {
    if(!isSignup) {
       
        var username = document.getElementById('user').value;
        var password = document.getElementById('pass').value;
        if(document.getElementById("user").value==""){
            alert("enter value in username");}
        if(document.getElementById("pass").value==""){
            alert("enter value in password");}
       
        if(username === 'test' && password === 'test') {
            window.location.href = 'index1.html';
        }
    } else {
       
        var name = document.getElementById('signup-name').value;
        var email = document.getElementById('signup-email').value;
        var password = document.getElementById('signup-password').value;
        if(document.getElementById("signup-name").value==""){
            alert("enter value in name");}
        if(document.getElementById("signup-email").value==""){
            alert("enter value in email");}
        if(document.getElementById("signup-password").value==""){
            alert("enter value in password");}
       
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'signup.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText);
            }
        };
        xhr.send('name=' + name + '&email=' + email + '&password=' + password);
    }
});






