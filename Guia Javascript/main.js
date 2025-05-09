//Ejercicio 1
document.getElementById('miFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    var num1 = parseInt(document.getElementById('edad').value);
    var resultadoDiv = document.getElementById('resultado');

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

    var alumno = document.getElementById('nombrea');
    console.log(alumno.value);

    var carnet = document.getElementById('carnet');
    console.log(carnet.value);

    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var nota3 = parseInt(document.getElementById('nota3').value);
    var nota4 = parseInt(document.getElementById('nota4').value);

    nota1 = nota1 * 0.2;
    nota2 = nota2 * 0.4;
    nota3 = nota3 * 0.1;
    nota4 = nota4 * 0.3;
    var notatotal = nota1 + nota2 + nota3 + nota4;

    console.log(nota1, nota2, nota3, nota4, notatotal, alumno.value, carnet.value);

    document.getElementById('res-alumno').textContent = alumno.value;
    document.getElementById('res-carnet').textContent = carnet.value;
    document.getElementById('res-nota1').textContent = nota1.toFixed(2);
    document.getElementById('res-nota2').textContent = nota2.toFixed(2);
    document.getElementById('res-nota3').textContent = nota3.toFixed(2);
    document.getElementById('res-nota4').textContent = nota4.toFixed(2);
    document.getElementById('res-notafinal').textContent = notatotal.toFixed(2);

});

//Ejercicio 3
document.getElementById('miFormulario3').addEventListener('submit', function (event) {
    event.preventDefault();

    var clase = document.getElementById('clase');
    var nombre = document.getElementById('nombre');
    var sueldo = parseInt(document.getElementById('sueldo').value);

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

    console.log('Su sueldo es:' + sueldo.toFixed(2));
});

//Ejercicio 4
document.getElementById('miFormulario4').addEventListener('submit', function (event) {
    event.preventDefault();

    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);

    var resultadoDiv = document.getElementById('resultado4');

    resultadoDiv.classList.remove('alert-success', 'alert-danger', 'd-none');

    resultadoDiv.textContent = num1 > num2
        ? "El numero mayor es " + num1
        : "El numero mayor es " + num2;

    resultadoDiv.classList.add(num1 > num2 ? 'alert-success' : 'alert-danger');

});

//Ejercicio 5
document.getElementById('miFormulario5').addEventListener('submit', function (event) {
    event.preventDefault();

    var clase = document.getElementById('tipo');

    console.log(clase.value);

    var preciof = 52345, precioo = 41234, precioe = 41234
    if (clase.value == 'A') {
        precio = preciof - (preciof * 0.15);
        document.getElementById('res-precio1').textContent = `$${preciof}`;
        document.getElementById('res-carro').textContent = "Ford Fiesta";
        document.getElementById('res-precio2').textContent = `$${precio.toFixed(2)}`;


    }
    else if (clase.value == 'B') {
        precio = precioo - (precioo * 0.15)
        document.getElementById('res-precio1').textContent = `$${precioo}`;
        document.getElementById('res-carro').textContent = "Ford Focus";
        document.getElementById('res-precio2').textContent = `$${precio.toFixed(2)}`;


    } else if (clase.value == 'C') {
        precio = precioe - (precioe * 0.15)
        document.getElementById('res-precio1').textContent = `$${precioe}`;
        document.getElementById('res-carro').textContent = "Ford Escape";
        document.getElementById('res-precio2').textContent = `$${precio.toFixed(2)}`;


    } else {
        return;
    }


});

//Ejercicio 6
document.getElementById('miFormulario6').addEventListener('submit', function (event) {
    event.preventDefault();

    var clase = document.getElementById('lugar');

    console.log(clase.value);

    var preciof = 4234, precioo = 1234, precioe = 5234

    if (clase.value == 'A') {
        precio = preciof - (preciof * 0.15);
        document.getElementById('lugarp').textContent = `$${preciof}`;
        document.getElementById('res-destino').textContent = "Ciudad de Palma";
        document.getElementById('lugard').textContent = `$${precio.toFixed(2)}`;


    }
    else if (clase.value == 'B') {
        precio = precioo - (precioo * 0.15)
        document.getElementById('lugarp').textContent = `$${precioo}`;
        document.getElementById('res-destino').textContent = "La costa del Sol";
        document.getElementById('lugard').textContent = `$${precio.toFixed(2)}`;


    } else if (clase.value == 'C') {
        precio = precioe - (precioe * 0.15)
        document.getElementById('lugarp').textContent = `$${precioe}`;
        document.getElementById('res-destino').textContent = "Panchimalco";
        document.getElementById('lugard').textContent = `$${precio.toFixed(2)}`;


    } else if (clase.value == 'D') {
        precio = precioe - (precioe * 0.15)
        document.getElementById('lugarp').textContent = `$${precioe}`;
        document.getElementById('res-destino').textContent = "Puerto el Triunfo";
        document.getElementById('lugard').textContent = `$${precio.toFixed(2)}`;
    }

    else {
        return;
    }

});


//Ejercicio 7
document.getElementById('miFormulario7').addEventListener('submit', function (event) {
    event.preventDefault()

    const numeros = [];
    for (let i = 1; i <= 10; i++) {
        const valor = parseFloat(document.getElementById(`nej7${i}`).value) || 0;
        numeros.push(valor);
    }
    console.log(numeros);

    let negativos = 0;
    let positivos = 0;
    let multiplos15 = 0;
    let sumaPares = 0;

    for (const numero of numeros) {
        if (numero < 0) {
            negativos++;
        }
        else if (numero > 0) {
            positivos++;
        }

        if (numero !== 0 && numero % 15 === 0) {
            multiplos15++;
        }

        if (numero % 2 === 0) {
            sumaPares += numero;
        }
    }

    document.getElementById('negativos').textContent = negativos;
    document.getElementById('positivos').textContent = positivos;
    document.getElementById('multiplos15').textContent = multiplos15;
    document.getElementById('sumaPares').textContent = sumaPares;

    console.log(negativos, positivos, multiplos15, sumaPares);

});


//Ejercicio 8
document.getElementById('miFormulario8').addEventListener('submit', function (event) {
    event.preventDefault()

    var tablam = parseInt(document.getElementById('tablam').value);
    console.log(tablam);

    let tablaHTML = '<h3>Tabla de multiplicar del ' + tablam + '</h3><table class="table table-bordered">';

    for (let i = 1; i <= 10; i++) {
        tablaHTML += `
            <tr>
                <td>${tablam} × ${i}</td>
                <td>=</td>
                <td>${tablam * i}</td>
            </tr>
        `;
    }

    tablaHTML += '</table>';
    document.getElementById('resultadoTabla').innerHTML = tablaHTML;


});

//Ejercicio 9
document.getElementById('miFormulario9').addEventListener('submit', function (event) {
    event.preventDefault()

    var celsius = parseInt(document.getElementById('cel').value);
    console.log(celsius);

    fah = (celsius * 9 / 5) + 32;

    let faht = 'Grados Fahrenheit ' + fah + '°';
    document.getElementById('faht').textContent = faht;

    if (fah >= 14 && fah <= 32) {
        document.getElementById('tempc').textContent = "Temperatura baja";
    } else if (fah > 32 && fah <= 68) {
        document.getElementById('tempc').textContent = "Temperatura adecuada";
    } else if (fah > 68 && fah <= 96) {
        document.getElementById('tempc').textContent = "Temperatura alta";
    } else {
        document.getElementById('tempc').textContent = "Temperatura desconocida";
    }

});

//Ejercicio 10
document.getElementById('miFormulario10').addEventListener('submit', function (event) {
    event.preventDefault();

    const edadesMañana = [
        parseInt(document.getElementById('edadM1').value),
        parseInt(document.getElementById('edadM2').value),
        parseInt(document.getElementById('edadM3').value),
        parseInt(document.getElementById('edadM4').value),
        parseInt(document.getElementById('edadM5').value)
    ];

    const edadesTarde = [
        parseInt(document.getElementById('edadT1').value),
        parseInt(document.getElementById('edadT2').value),
        parseInt(document.getElementById('edadT3').value),
        parseInt(document.getElementById('edadT4').value),
        parseInt(document.getElementById('edadT5').value),
        parseInt(document.getElementById('edadT6').value)
    ];

    const edadesNoche = [
        parseInt(document.getElementById('edadN1').value),
        parseInt(document.getElementById('edadN2').value),
        parseInt(document.getElementById('edadN3').value),
        parseInt(document.getElementById('edadN4').value),
        parseInt(document.getElementById('edadN5').value),
        parseInt(document.getElementById('edadN6').value),
        parseInt(document.getElementById('edadN7').value),
        parseInt(document.getElementById('edadN8').value),
        parseInt(document.getElementById('edadN9').value),
        parseInt(document.getElementById('edadN10').value),
        parseInt(document.getElementById('edadN11').value)
    ];

    const promedioMañana = edadesMañana.reduce((a, b) => a + b, 0) / edadesMañana.length;
    const promedioTarde = edadesTarde.reduce((a, b) => a + b, 0) / edadesTarde.length;
    const promedioNoche = edadesNoche.reduce((a, b) => a + b, 0) / edadesNoche.length;

    let mayor;
    let turnoMayor;

    if (promedioMañana >= promedioTarde && promedioMañana >= promedioNoche) {
        mayor = promedioMañana;
        turnoMayor = "Turno Mañana";
    } else if (promedioTarde >= promedioMañana && promedioTarde >= promedioNoche) {
        mayor = promedioTarde;
        turnoMayor = "Turno Tarde";
    } else {
        mayor = promedioNoche;
        turnoMayor = "Turno Noche";
    }

    console.log(edadesMañana, edadesTarde, edadesNoche, promedioMañana, promedioTarde, promedioNoche, mayor, turnoMayor);

    document.getElementById('promedioMañana').textContent = promedioMañana.toFixed(0);
    document.getElementById('promedioTarde').textContent = promedioTarde.toFixed(0);
    document.getElementById('promedioNoche').textContent = promedioNoche.toFixed(0);

    document.getElementById('mayorPromedio').textContent = turnoMayor;
});

//No debi hacerlo asi xd, me tarde mucho ☠☠