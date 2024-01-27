function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    $.ajax({
      type: 'POST',
      url: '/register',
      contentType: 'application/json',
      data: JSON.stringify({ username, email, password }),
      success: function (response) {
        alert(response);
      },
      error: function (error) {
        alert('Error registering user');
      }
    });
  }
  