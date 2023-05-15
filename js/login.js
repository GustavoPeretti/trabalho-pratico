document.querySelector('#login-inputs button').addEventListener('click', () => {
    let siape = document.querySelector('#siape').value;
    let horas = parseInt(document.querySelector('#horas').value);

    if (isNaN(horas) || siape == '' || !((/^(\d{7,8})$/).test(siape))) {
        alert('Algum valor foi digitado incorretamente, envie os dados novamente.');
        return;
    }
    
    localStorage.setItem('siape', siape);
    localStorage.setItem('horas', horas);

    window.location.href = 'index.html';
});

window.onload = () => {
    Particles.init({
        selector: 'canvas',
        maxParticles: 150,
        connectParticles: 'true',
        speed: 0.5,
        minDistance: 50,
        sizeVariations: 2,
        color: '#ffffff',
    });
}



