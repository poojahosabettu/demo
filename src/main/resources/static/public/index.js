window.onload = function () {
    document.getElementById('alertonSubmit').style.display = "none";
    document.getElementById('navbar').style.display = "none";
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                form.classList.add('was-validated');
            }

        });
    });


    document.getElementById('submit').addEventListener('click', function (event) {
        event.preventDefault();
        getUserValidation();
    });


    function getUserValidation() {
        user = document.getElementById('email').value;
        pwd = document.getElementById('password').value;
        if (user && pwd) {
            fetch('http://localhost:8080/validateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: user,
                    password: pwd

                }),
            }).then(response => response.json())
                .then(data => {
                    if (!data) {
                        document.getElementById('alertonSubmit').style.display = "block";
                        document.getElementById('alertonSubmit').innerHTML = '<strong>' + "Holy guacamole!" + '</strong>' + "User credentials invalid"

                        console.log('Success:', data);
                    } else {
                        document.getElementById('loginForm').style.display = "none";
                        document.getElementById('navbar').style.display = "block";
                    }
                    console.log(data);
                })
                .catch((error) => {
                    document.getElementById('alertonSubmit').style.display = "block";
                    document.getElementById('alertonSubmit').innerHTML = '<strong>' + "OOps!!" + '</strong>' + " Something went wrong try again in some time !!"

                });
        } else {
            document.getElementById('alertonSubmit').style.display = "block";
            document.getElementById('alertonSubmit').innerHTML = '<strong>' + "Submit failed " + '</strong>' + " files are being uploaded !!"
        }

        setTimeout(() => {
            document.getElementById('alertonSubmit').style.display = "none";
        }, 6000);
    }


}