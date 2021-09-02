let header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

let body = document.getElementsByTagName('body');
body[0].style.backgroundColor = '#e9e9e9';

let emergencia = document.querySelectorAll('.emergency-tasks');
for (let index = 0; index < emergencia.length; index += 1) {
    emergencia[index].style.backgroundColor = 'pink';
}

let emergenciaH3 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergenciaH3.length; index += 1) {
    emergenciaH3[index].style.backgroundColor = '#b7277e';
}

let naoEmergencia = document.querySelectorAll('.no-emergency-tasks');
for (let index = 0; index < naoEmergencia.length; index += 1) {
    naoEmergencia[index].style.backgroundColor = 'yellow';
}

let naoEmergenciaH3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < naoEmergenciaH3.length; index += 1) {
    naoEmergenciaH3[index].style.backgroundColor = 'black';
}

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#1a4d20';