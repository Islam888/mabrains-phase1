(function () {
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        var inputs = document.querySelectorAll('input[type=text], input[type=tel], textarea, select');
        Array.prototype.filter.call(inputs, (input) => {
            input.onfocus = () => {
            }
        })
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            Array.prototype.filter.call(inputs, (input) => {
                input.onfocusout = (e) => {
                    if (!e.target.value) {
                        input.nextSibling.nextSibling.style.display = "none"
                        input.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "block"

                    } else {
                        input.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "none"
                        input.nextSibling.nextSibling.style.display = "block"
                    }

                }
            })
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (form.id === "hire-application") {
                        document.getElementById('hire-form').classList.remove('collapsing')
                        document.getElementById('hire-form').classList.add('show')
                    } else {
                        document.getElementById('apply-form').classList.remove('collapsing')
                        document.getElementById('apply-form').classList.add('show')
                    }
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();