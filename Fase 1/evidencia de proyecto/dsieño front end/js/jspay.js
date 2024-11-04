document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('paymentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Mostrar alerta de pago
        alert('Pago realizado con éxito.');

        // Redirigir a otra página después de 2 segundos (2000 ms)
        setTimeout(function() {
            window.location.href = 'index.html'; // Cambia esto por la URL a la que quieres redirigir
        }, 0);
    });
});