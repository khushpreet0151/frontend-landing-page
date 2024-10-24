
// a.html
var countDownDate = new Date("oct 25, 2024 12:00:00").getTime();
 
var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 

// contact us
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the normal way
  
  // Simulate form submission
  const responseText = "Thank you! Your message has been sent.";
  
  document.getElementById('form-response').textContent = responseText;
  document.getElementById('form-response').style.display = 'block';
  
  // Optionally, clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});

// join now
document.getElementById('join-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission for demo purposes

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (name && email && phone) {
      alert(`Thank you, ${name}! We have received your details. We'll contact you soon at ${email} or ${phone}.`);
      document.getElementById('join-form').reset(); // Reset form after submission
  } else {
      alert('Please fill out all fields.');
  }
});

// sign up for free
document.getElementById('sign-up-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission for demo purposes

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (name && email && phone) {
      alert(`Thank you, ${name}! You have successfully signed up for a free trial. We'll contact you at ${email} or ${phone}.`);
      document.getElementById('sign-up-form').reset(); // Reset form after submission
  } else {
      alert('Please fill out all fields.');
  }
});

//pro
document.getElementById('pro-signup-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission for demo purposes

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const card = document.getElementById('card').value;

  if (name && email && phone && card) {
      alert(`Thank you, ${name}! You've successfully signed up for the Pro membership at ₹150/month. We'll contact you at ${email} or ${phone} for confirmation.`);
      document.getElementById('pro-signup-form').reset(); // Reset form after submission
  } else {
      alert('Please fill out all fields.');
  }
});

// enterprise
document.getElementById('enterprise-signup-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission for demo purposes

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const card = document.getElementById('card').value;

  if (name && email && phone && card) {
      alert(`Thank you, ${name}! You've successfully signed up for the Enterprise membership at ₹500/month. We'll contact you at ${email} or ${phone} for confirmation.`);
      document.getElementById('enterprise-signup-form').reset(); // Reset form after submission
  } else {
      alert('Please fill out all fields.');
  }
});
