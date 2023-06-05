let atividades = []

window.onload = () => {
    document.querySelector('#title h2').innerHTML = `Bem-vindo ${localStorage.nome}`;
    document.querySelector('#title p').innerHTML = `Carga horária: ${localStorage.horas} horas.`;
}

document.querySelector('#cadastrar-button').addEventListener('click', () => {
    let atividade = document.getElementsByName('atividade')[0].value;
    let ds = document.getElementsByName('ds')[0].value;
    let inicioString = document.getElementsByName('inicio')[0].value;
    let fimString = document.getElementsByName('fim')[0].value;

    var inicio = new Date(0)
    inicio.setHours(parseInt(inicioString.split(':')[0]));
    inicio.setMinutes(parseInt(inicioString.split(':')[1]));

    var fim = new Date(0)
    fim.setHours(parseInt(fimString.split(':')[0]));
    fim.setMinutes(parseInt(fimString.split(':')[1]));
    

    console.log(inicio)
    console.log(fim)

    if (atividade == '' || ds == '' || inicio == '' || fim == '') {
        alert('Insira os dados corretamente!')
        return
    }

    if (fim <= inicio) {
        alert('Insira os dados corretamente!')
        return
    }

    // for (a of atividades) {
    //     if (a.day != ds) {
    //         continue
    //     }
    //     if (a.day == ds)
    // }

    atividades.push({
        type: 'activity',
        activity: atividade,
        day: ds,
        initialDate: inicio,
        finalDate: fim
    });

});
