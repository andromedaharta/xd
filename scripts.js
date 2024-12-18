// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', evento => {
        evento.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        const idDestino = evento.target.getAttribute('href').substring(1); // Extraer el ID de la sección destino
        const seccionDestino = document.getElementById(idDestino); // Obtener la sección correspondiente

        if (seccionDestino) {
            window.scrollTo({
                top: seccionDestino.offsetTop - 50, // Ajustar el desplazamiento para la altura de la barra de navegación
                behavior: 'smooth' // Desplazamiento suave
            });
        }
    });
});

// Validación del formulario en la sección de reservas
document.querySelector('#reservations form').addEventListener('submit', evento => {
    evento.preventDefault(); // Evitar que el formulario se envíe

    const nombre = evento.target.name.value.trim();
    const correo = evento.target.email.value.trim();
    const fecha = evento.target.date.value;
    const hora = evento.target.time.value;

    // Verificar que todos los campos estén completos
    if (!nombre || !correo || !fecha || !hora) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Simulación de un formulario enviado con éxito
    alert(`Gracias, ${nombre}. Tu reserva para el ${fecha} a las ${hora} ha sido confirmada.`);
    evento.target.reset(); // Limpiar los campos del formulario
});

// Resaltar el enlace activo de navegación al hacer scroll
const secciones = document.querySelectorAll('section'); // Obtener todas las secciones
const enlacesNavegacion = document.querySelectorAll('nav a'); // Obtener los enlaces de navegación

window.addEventListener('scroll', () => {
    let seccionActual = '';

    // Detectar la sección visible en el viewport
    secciones.forEach(seccion => {
        const topSeccion = seccion.offsetTop - 60; // Ajuste para la altura de la barra de navegación fija
        if (window.scrollY >= topSeccion) {
            seccionActual = seccion.getAttribute('id'); // Obtener el ID de la sección actual
        }
    });

    // Resaltar el enlace de navegación correspondiente
    enlacesNavegacion.forEach(enlace => {
        enlace.classList.remove('activo'); // Remover clase activa de todos los enlaces
        if (enlace.getAttribute('href').substring(1) === seccionActual) {
            enlace.classList.add('activo'); // Añadir clase activa al enlace de la sección actual
        }
    });
});
