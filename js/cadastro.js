document.querySelector('#login-inputs button').addEventListener('click', () => {
    let nome = document.querySelector('#nome').value;
    let siape = document.querySelector('#siape').value;
    let email = document.querySelector('#email').value;
    let area = document.querySelector('#area').value;
    let horas = parseInt(document.querySelector('#horas').value);

    if (isNaN(horas) || siape == '' || area == '' || !((/^(\d{7,8})$/).test(siape)) || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
        alert('Algum valor foi digitado incorretamente, envie os dados novamente.');
        return;
    }
    
    localStorage.setItem('nome', nome);
    localStorage.setItem('horas', horas);

    alert('Confira seu e-mail para validar o cadastro.');

    window.location.href = 'login.html';
});
