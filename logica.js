
let lastNumber = null

document.getElementById('gerar').addEventListener('click', function() {
    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * 350) + 1;
    } while (numeroAleatorio === lastNumber);

    lastNumber = numeroAleatorio;

    const inpuField = document.getElementById('pesq');
    inpuField.value = '';
    inpuField.classList.remove('visible');

    setTimeout(function() {
        inpuField.value = numeroAleatorio;
        inpuField.classList.add('visible');
    }, 2000);
});

document.getElementById('pesq').addEventListener('click', function() {
    document.getElementById('pesq').value = '';
});