//Ejercicio 1
document.getElementById('miFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    let num1 = parseInt(document.getElementById('edad').value);
    let resultadoDiv = document.getElementById('resultado');

    resultadoDiv.classList.remove('alert-success', 'alert-danger', 'd-none');

    resultadoDiv.textContent = num1 >= 18 
    ? "La persona es mayor de edad" 
    : "La persona es menor de edad";
    
    resultadoDiv.classList.add(num1 >= 18 ? 'alert-success' : 'alert-danger');

    resultadoDiv.classList.remove('d-none');
});

//Ejercicio 2
document.getElementById('miFormulario2').addEventListener('submit', function (event) {
    event.preventDefault();

    let alumno = document.getElementById('nombrea');
    console.log(alumno.value);

    let carnet = document.getElementById('carnet');
    console.log(carnet.value);

    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    let nota3 = parseInt(document.getElementById('nota3').value);
    let nota4 = parseInt(document.getElementById('nota4').value);

    nota1 = nota1 * 0.2;
    nota2 = nota2 * 0.4;
    nota3 = nota3 * 0.1;
    nota4 = nota4 * 0.3;
    let notatotal = nota1 + nota2 + nota3 + nota4;

    console.log(nota1, nota2, nota3, nota4, notatotal, alumno.value, carnet.value);

    document.getElementById('res-alumno').textContent = alumno.value;
    document.getElementById('res-carnet').textContent = carnet.value;
    document.getElementById('res-nota1').textContent = nota1.toFixed(2);
    document.getElementById('res-nota2').textContent = nota2.toFixed(2);
    document.getElementById('res-nota3').textContent = nota3.toFixed(2);
    document.getElementById('res-nota4').textContent = nota4.toFixed(2);
    document.getElementById('res-notafinal').textContent = notatotal.toFixed(2);
    
    document.getElementById('resultados').classList.remove('d-none');
});

//Ejercicio 3
document.getElementById('miFormulario3').addEventListener('submit', function (event) {
    event.preventDefault();

    let clase = document.getElementById('clase');
    let nombre = document.getElementById('nombre');
    let sueldo =parseInt(document.getElementById('sueldo').value);

    console.log(clase.value, nombre.value, sueldo);

    switch (clase.value) {
        case 'A':
            sueldoa = sueldo * 1.15;
            break;
        case 'B':
            sueldoa = sueldo * 1.3;
            break;
        case 'C':
            sueldoa = sueldo * 1.1;
            break;
        case 'D':
            sueldoa = sueldo * 1.2;
            break;
        default:
            alert('Clase no válida');
            return;
    }

    document.getElementById('res-nombre').textContent = nombre.value;
    document.getElementById('res-clase').textContent = clase.value;
    document.getElementById('res-sueldo1').textContent = `$${sueldo}`;
    document.getElementById('res-sueldo2').textContent = `$${sueldoa.toFixed(2)}`;
    document.getElementById('resultados3').classList.remove('d-none');

    console.log('Su sueldo es:'+ sueldo.toFixed(2));
});
