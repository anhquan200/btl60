// Include EmailJS SDK 
         document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            emailjs.sendForm('service_pi0tqr4', 'template_67a1zd8', this) 
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Gửi thư thành công!");
                }, function(error) {
                    console.log('FAILED...', error);
                    alert("Gửi thư thất bại.");
                });
        });
