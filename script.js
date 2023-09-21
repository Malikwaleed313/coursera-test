document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform form validation here if needed

    // Display a confirmation alert
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
});
