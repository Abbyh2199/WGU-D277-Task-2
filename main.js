document.addEventListener("DOMContentLoaded",  
 function () {
        const email = document.getElementById("email");
        const confirmemail = document.getElementById("confirm_email");
        const emailmatchtext = document.createElement("p");
        emailmatchtext.style.marginTop = "5px";
        confirmemail.parentNode.appendChild(emailmatchtext);

        confirmemail.addEventListener("input", function () {
            if (confirmemail.value === email.value) {
                emailmatchtext.textContent = "Emails Match";
                emailmatchtext.style.color = "green";
            } else {
                emailmatchtext.textContent = "Emails Do Not Match. Try Again.";
                emailmatchtext.style.color = "red";
            }
        });
      });
      