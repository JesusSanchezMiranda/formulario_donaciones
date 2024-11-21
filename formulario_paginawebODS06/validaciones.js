
  document.addEventListener("DOMContentLoaded", () => {
    const donationForm = document.getElementById("donationForm");

    // Función para mostrar mensajes de error
    function showError(elementId, message) {
      const errorElement = document.getElementById(elementId);
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }

    // Función para ocultar mensajes de error
    function hideError(elementId) {
      const errorElement = document.getElementById(elementId);
      errorElement.style.display = 'none';
    }

    // Validación del formulario al enviar
    donationForm.addEventListener("submit", (e) => {
      e.preventDefault();  // Prevenir el envío del formulario para validarlo primero

      let isValid = true;

      // Validación del nombre
      const name = document.getElementById("name").value.trim();
      if (name === "") {
        showError("nameError", "El nombre es obligatorio.");
        isValid = false;
      } else {
        hideError("nameError");
      }

      // Validación del correo electrónico
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        showError("emailError", "Por favor ingresa un correo electrónico válido.");
        isValid = false;
      } else {
        hideError("emailError");
      }

      // Validación del teléfono
      const phone = document.getElementById("celphone").value.trim();
      const phonePattern = /^\d{9}$/;
      if (!phonePattern.test(phone)) {
        showError("celphoneError", "El teléfono debe tener 9 dígitos.");
        isValid = false;
      } else {
        hideError("celphoneError");
      }

      // Validación del monto de la donación
      const amount = document.getElementById("amount").value;
      if (!amount) {
        showError("amountError", "Selecciona un monto de donación.");
        isValid = false;
      } else {
        hideError("amountError");
      }

      // Validación de la tarjeta de crédito/débito
      const cardType = document.getElementById("card_type").value;
      if (cardType === "") {
        showError("cardTypeError", "Selecciona el tipo de tarjeta.");
        isValid = false;
      } else {
        hideError("cardTypeError");
      }

      // Validación del número de tarjeta
      const cardNumber = document.getElementById("card_number").value.trim();
      const cardNumberPattern = /^\d{16}$/;
      if (!cardNumberPattern.test(cardNumber)) {
        showError("cardNumberError", "El número de tarjeta debe tener 16 dígitos.");
        isValid = false;
      } else {
        hideError("cardNumberError");
      }

      // Validación del CVC
      const cvc = document.getElementById("cvc").value.trim();
      const cvcPattern = /^\d{3}$/;
      if (!cvcPattern.test(cvc)) {
        showError("cvcError", "El CVC debe tener 3 dígitos.");
        isValid = false;
      } else {
        hideError("cvcError");
      }

      // Validación de la fecha de expiración
      const expirationDate = document.getElementById("expiration_date").value.trim();
      const expirationDatePattern = /^\d{2}\/\d{2}$/;
      if (!expirationDatePattern.test(expirationDate)) {
        showError("expirationDateError", "La fecha de expiración debe tener el formato MM/YY.");
        isValid = false;
      } else {
        hideError("expirationDateError");
      }

      // Si todos los campos son válidos, enviar el formulario
      if (isValid) {
        donationForm.submit();
      }
    });

    // Funcionalidad de los botones de monto
    const amountButtons = document.querySelectorAll(".amount-button");
    amountButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remover la clase 'selected' de todos los botones
        amountButtons.forEach(btn => btn.classList.remove("selected"));

        // Agregar la clase 'selected' al botón que fue clickeado
        button.classList.add("selected");

        // Establecer el valor del monto en el campo oculto
        const amount = button.getAttribute("data-amount");
        document.getElementById("amount").value = amount;
        hideError("amountError");
      });
    });
  });

