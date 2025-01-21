document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const admins = [
        { username: 'ujai12345@gmail.com', password: 'bandungtengah' },
        { username: 'user', password: 'admin12345' }
    ];
    const isValidAdmin = admins.some(admin => 
        admin.username === username && admin.password === password
    );
    if (isValidAdmin) {
        window.location.href = '../admin/admin.html';
    } else {
        passwordError.classList.remove('hidden');
    }
});