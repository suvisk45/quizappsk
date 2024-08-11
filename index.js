document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // Retrieve stored user data
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.username === username && user.password === password) {
        // Redirect to quiz page
        window.location.href = 'quiz.html';
    } else {
        alert('Invalid username or password');
    }
});
