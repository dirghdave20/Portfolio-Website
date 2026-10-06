// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();





// ================= CONTACT FORM =================

document.getElementById("contactForm").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        // Get values

        let name =
            document.getElementById("name").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let subject =
            document.getElementById("subject").value.trim();

        let message =
            document.getElementById("message").value.trim();



        // Error elements

        let nameError =
            document.getElementById("nameError");

        let emailError =
            document.getElementById("emailError");

        let subjectError =
            document.getElementById("subjectError");

        let messageError =
            document.getElementById("messageError");

        let successMessage =
            document.getElementById("successMessage");



        // Clear previous errors

        nameError.textContent = "";

        emailError.textContent = "";

        subjectError.textContent = "";

        messageError.textContent = "";

        successMessage.style.display = "none";



        let valid = true;



        // Name validation

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        }



        // Email validation

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            valid = false;

        }

        else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email.";

            valid = false;

        }



        // Subject validation

        if (subject === "") {

            subjectError.textContent =
                "Please enter a subject.";

            valid = false;

        }



        // Message validation

        if (message === "") {

            messageError.textContent =
                "Please enter your message.";

            valid = false;

        }



        // Successful submission

        if (valid) {

            successMessage.style.display = "block";

            document.getElementById("contactForm").reset();

        }

    }

);
