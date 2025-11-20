let isSignup = false;

document.getElementById('login-button').addEventListener('click', function() {
    if (!isSignup) {
     
        var username = document.getElementById('user').value;
        var password = document.getElementById('pass').value;

        if (username === "") {
            alert("enter value in username");
            return;
        }
        if (password === "") {
            alert("enter value in password");
            return;
        }

        if (username === 'test' && password === 'test') {
            
           
            var mockResponse = {
                status: 200,
                message: "Login Successful"
            };

          
            if (mockResponse.status === 200) {
                
                var sessionData = {
                    active: true,
                    startTime: Date.now() 
                };
                localStorage.setItem('userSession', JSON.stringify(sessionData));

                alert("Status 200: Login OK. Redirecting...");
                window.location.href = 'index.html';
            }

        } else {
            alert("Invalid credentials");
        }

    } else {
        
        var name = document.getElementById('signup-name').value;
        var email = document.getElementById('signup-email').value;
        var password = document.getElementById('signup-password').value;

        if (name === "") { alert("enter value in name"); return; }
        if (email === "") { alert("enter value in email"); return; }
        if (password === "") { alert("enter value in password"); return; }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'signup.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
               
                if (xhr.status === 200) {
                    alert(xhr.responseText);
                } else {
                    alert("Error: " + xhr.status);
                }
            }
        };
        xhr.send('name=' + name + '&email=' + email + '&password=' + password);
    }
});