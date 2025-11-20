let isSignup = false;

document.getElementById('toggle-signup').addEventListener('click', function(e) {
    e.preventDefault();
    isSignup = !isSignup;

    const loginFields = document.getElementById('login-fields');
    const signupFields = document.getElementById('signup-fields');
    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('login-button');
    const toggleText = document.getElementById('toggle-text');

    if (isSignup) {
        loginFields.style.display = 'none';
        signupFields.style.display = 'block';
        formTitle.innerText = "Sign Up";
        submitBtn.innerText = "Sign Up";
        toggleText.innerHTML = 'Already have an account? <a href="#" id="toggle-signup">Login Here</a>';
    } else {
        loginFields.style.display = 'block';
        signupFields.style.display = 'none';
        formTitle.innerText = "Login";
        submitBtn.innerText = "Login";
        toggleText.innerHTML = 'Don\'t Have an Account? <a href="#" id="toggle-signup">Register Here</a>';
    }
});

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
            window.location.href = 'index1.html';
        } else {
            alert("Invalid credentials");
        }

    } else {
        var name = document.getElementById('signup-name').value;
        var email = document.getElementById('signup-email').value;
        var password = document.getElementById('signup-password').value;

        if (name === "") {
            alert("enter value in name");
            return;
        }
        if (email === "") {
            alert("enter value in email");
            return;
        }
        if (password === "") {
            alert("enter value in password");
            return;
        }

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