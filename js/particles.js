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
