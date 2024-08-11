document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const department = document.getElementById('signup-department').value;
    
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify({ username, password, department }));
    
    // Redirect to login page
    window.location.href = 'index.html';
});
