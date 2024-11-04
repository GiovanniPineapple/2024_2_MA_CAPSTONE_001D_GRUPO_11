// Objetos que contienen las comunas y horarios disponibles según el día seleccionado
const comunasPorDia = {
    lunes: ['Comuna A', 'Comuna B', 'Comuna C'],
    martes: ['Comuna B', 'Comuna D'],
    miercoles: ['Comuna A', 'Comuna E'],
    jueves: ['Comuna C', 'Comuna D', 'Comuna F'],
    viernes: ['Comuna A', 'Comuna B', 'Comuna E'],
    sabado: ['Comuna C', 'Comuna F'],
    domingo: ['Comuna D', 'Comuna E']
};

const horariosPorComuna = {
    'Comuna A': ['10:00 AM', '12:00 PM', '02:00 PM'],
    'Comuna B': ['09:00 AM', '01:00 PM', '03:00 PM'],
    'Comuna C': ['11:00 AM', '03:00 PM'],
    'Comuna D': ['08:00 AM', '10:00 AM', '12:00 PM', '04:00 PM'],
    'Comuna E': ['09:30 AM', '01:30 PM'],
    'Comuna F': ['11:30 AM', '03:30 PM']
};

// Evento que se activa al cambiar la selección del día
document.getElementById('daySelect').addEventListener('change', function() {
    const selectedDay = this.value;
    const comunaList = document.getElementById('comunaList');
    const resultContainer = document.getElementById('resultContainer');
    const comunaSelect = document.getElementById('comunaSelect');
    const comunaSelectContainer = document.getElementById('comunaSelectContainer');

    // Limpiar la lista de comunas y horarios
    comunaList.innerHTML = '';
    comunaSelect.innerHTML = '<option value="">-- Selecciona una comuna --</option>';
    document.getElementById('scheduleTableBody').innerHTML = '';
    document.getElementById('tableContainer').style.display = 'none'; // Ocultar la tabla de horarios

    // Verificar si hay comunas para el día seleccionado
    if (selectedDay && comunasPorDia[selectedDay]) {
        comunasPorDia[selectedDay].forEach(comuna => {
            const li = document.createElement('li');
            li.textContent = comuna;
            comunaList.appendChild(li);
            const option = document.createElement('option');
            option.value = comuna;
            option.textContent = comuna;
            comunaSelect.appendChild(option);
        });
        resultContainer.style.display = 'block'; // Mostrar el contenedor de resultados
        comunaSelectContainer.style.display = 'block'; // Mostrar el contenedor de selección de comuna
    } else {
        resultContainer.style.display = 'none'; // Ocultar si no hay comunas
        comunaSelectContainer.style.display = 'none'; // Ocultar la selección de comuna
    }
});

// Evento que se activa al cambiar la selección de la comuna
document.getElementById('comunaSelect').addEventListener('change', function() {
    const selectedComuna = this.value;
    const scheduleTableBody = document.getElementById('scheduleTableBody');
    const tableContainer = document.getElementById('tableContainer');

    // Limpiar la tabla de horarios
    scheduleTableBody.innerHTML = '';

    // Verificar si hay horarios disponibles para la comuna seleccionada
    if (selectedComuna && horariosPorComuna[selectedComuna]) {
        horariosPorComuna[selectedComuna].forEach(horario => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${horario}</td><td>Disponible</td>`;
            
            // Agregar evento de clic a la fila para seleccionarla
            tr.addEventListener('click', function() {
                const selectedRows = document.querySelectorAll('#scheduleTableBody tr.selected');
                selectedRows.forEach(row => row.classList.remove('selected')); // Limpiar selección anterior
                tr.classList.add('selected'); // Agregar clase para marcar como seleccionado
            });

            scheduleTableBody.appendChild(tr);
        });
        tableContainer.style.display = 'block'; // Mostrar la tabla de horarios
    } else {
        tableContainer.style.display = 'none'; // Ocultar la tabla si no hay horarios
    }
});

// Evento que se activa al hacer clic en el botón de Agendar Visita
document.getElementById('scheduleButton').addEventListener('click', function() {
    const selectedComuna = document.getElementById('comunaSelect').value;
    const selectedSchedule = document.querySelector('#scheduleTableBody tr.selected');
    
    if (selectedComuna && selectedSchedule) {
        const selectedTime = selectedSchedule.querySelector('td').textContent;
        alert(`Visita agendada en ${selectedComuna} a las ${selectedTime}.`);
        
        // Redirigir a otra página
        window.location.href = 'pago.html'; // Cambia esto por la URL a la que quieres redirigir
    } else {
        alert('Por favor, selecciona una comuna y un horario disponible.');
    }
});
