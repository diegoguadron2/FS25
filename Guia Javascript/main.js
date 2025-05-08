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
    
    // Mostrar el div de resultados
    document.getElementById('resultados').classList.remove('d-none');

});