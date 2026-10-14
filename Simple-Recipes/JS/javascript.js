// Recipe Pop-Up Modal Section

// Sets up the buttons that will open the recipe modals.
var btns = document.querySelectorAll("input.modal-button");

// Defines all modals for each recipe.
var modals = document.querySelectorAll(".recipe-modal");

// Gets the span elements that close the recipe modals.
var closeBtn = document.getElementsByClassName("close-btn");


// Open Recipe Modals

// When the user clicks a recipe button, open its corresponding modal.
for (var i = 0; i < btns.length; i++) {

    btns[i].onclick = function(event) {

        // Retrieves the ID selector stored in the button's data-modal attribute.
        var modalID = event.target.getAttribute("data-modal");

        // Finds the corresponding recipe modal.
        var modal = document.querySelector(modalID);

        // Displays the selected modal.
        if (modal) {
            modal.style.display = "block";

        //automatically close the model after 10 seconds
        setTimeout(function() {
            modal.style.display = "none";
        }, 10000);
        }

    };

}


// Close Recipe Modals

// When the user clicks the span (X), close the corresponding modal.
for (var i = 0; i < closeBtn.length; i++) {

    closeBtn[i].onclick = function() {

        // Finds the recipe modal containing the clicked close button.
        var modal = this.closest(".recipe-modal");

        // Hides the selected modal.
        if (modal) {
            modal.style.display = "none";
        }

    };

}

//Email Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    //override the default browser refresh when the submit button is pressed
    event.preventDefault();
    //variables to validate that each field is filled out
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    //email pattern checks for the symbols needed in an email address
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //use this variable to display validation or thank you message
    const valMSG = document.getElementById("validateMSG");

    //checks if all required fields have been filled out
    if (!firstName.trim() || !lastName.trim() || !phone.trim() || !message.trim()) {
        valMSG.innerHTML = '<p style=color: red;">Please fill out all empty fields.</p>';
    } else if (!emailPattern.test(email)) {
        //checks if there is a valid email
        valMSG.innerHTML = '<p style="color: red; ">Please enter a valid email.</p>';
    } else {
        //if all fields are filled out correctly, display thank you message
        valMSG.innerHTML = '<p style="color: red;">Thank you for submitting!</p>';
    }

    //create an object to store the information entered in the form
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        subscribe: document.getElementById("Subscription").checked
    };
    //displays what the user wrote in the console
    console.log(JSON.stringify(formData));
});
