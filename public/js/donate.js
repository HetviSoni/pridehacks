addEventListener('DOMContentLoaded', () => {

    var stripe = Stripe('pk_test_51NKHZ8SCn3GaZc9Yla23lBRQR4OXw8H3SqqjLXZMCueDDsOgtk0G0JHwneQ9bwqpdPlfPMdRxGtU1zi1gTeXrEPZ00dalngSVq');

    const stripe = require('stripe')('YOUR_SECRET_KEY');

  
    var form = document.getElementById('donation-form');
    var errorMessage = document.getElementById('error-message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var amount = document.getElementById('amount').value;
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
  
      stripe.confirmCardPayment('CLIENT_SECRET', {
        payment_method: {
          card: {
            number: '4242 4242 4242 4242',
            exp_month: 12,
            exp_year: 30,
            cvc: '123',
            name: name
          }
        }
      }).then(function(result) {
        if (result.error) {
          // Display error message to the user
          errorMessage.textContent = result.error.message;
        } else {
          // Payment successful, submit the form to your server
          donate(amount, name, email);
        }
      });
    });
  
    function donate(amount, name, email) {
      // Send donation details to your server for processing
      // Here, you can make an AJAX request or submit a hidden form to your server
      // Include the amount, name, and email as parameters in your request
      // Example using AJAX with jQuery:
      $.post('/donate', { amount: amount, name: name, email: email })
        .done(function(response) {
          // Handle the response from your server
          // For example, display a success message to the user
          console.log(response);
        })
        .fail(function(error) {
          // Handle errors from your server
          console.log(error);
        });
    }
  

});