document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    // Data admin
    const admins = [
        { username: 'ujai', password: '12345' },
        { username: 'wahyu', password: '12345' },
        { username: 'admin', password: '12345' },
        { username: 'admin2', password: '12345' }
    ];

    const isValidAdmin = admins.some(admin => 
        admin.username === username && admin.password === password
    );

    if (isValidAdmin) {
        
        window.location.href = '../dashboard/dashboard.html';
    } else {
        passwordError.classList.remove('hidden');
    }
});