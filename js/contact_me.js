

  function submitForm(event) {
    event.preventDefault();

    // Get values from form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Your EmailJS template ID
    var templateId = "template_sap0hrj";

    // Send email using EmailJS
    emailjs.send("service_linwznf", templateId, {
      from_name: name,
      from_email: email,
      message: message
    }).then(
      function(response) {
        console.log("Email sent successfully:", response);
        // Clear form fields after 2 seconds
        setTimeout(clearForm, 2000);
      },
      function(error) {
        console.log("Email failed to send:", error);
      }
    );
  }

  function clearForm() {
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

