/* ==================================
   ITACE - FUNCIONES JAVASCRIPT
================================== */

// 1. MENÚ PARA CELULAR
const botonMenu = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("abierto");

  if (menu.classList.contains("abierto")) {
    botonMenu.textContent = "✕ CERRAR";
  } else {
    botonMenu.textContent = "☰ MENÚ";
  }
});

// Cerrar el menú al seleccionar una sección
menu.querySelectorAll("a").forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menu.classList.remove("abierto");
    botonMenu.textContent = "☰ MENÚ";
  });
});

// 2. BOTÓN DE MENSAJES MOTIVADORES
const mensajes = [
  "Tu próxima meta comienza con lo que aprendes hoy.",
  "La práctica convierte las ideas en habilidades.",
  "Cada proyecto es una oportunidad para mejorar.",
  "La constancia también forma parte del aprendizaje.",
  "Nunca dejes de aprender cosas nuevas."
];

document.getElementById("btnMensaje").addEventListener("click", function () {
  const numero = Math.floor(Math.random() * mensajes.length);

  document.getElementById("mensajeDia").textContent =
    mensajes[numero];
});

// 3. BOTÓN PARA MOSTRAR CURIOSIDADES
const listaCuriosidades = document.querySelectorAll("#curiosidades li");

document.getElementById("btnCuriosidad").addEventListener("click", function () {
  const numero = Math.floor(Math.random() * listaCuriosidades.length);

  document.getElementById("curiosidadAleatoria").textContent =
    listaCuriosidades[numero].textContent;
});

// 4. MOSTRAR Y OCULTAR REFLEXIÓN
document.getElementById("btnOpinion").addEventListener("click", function () {
  const reflexion = document.getElementById("reflexion");

  reflexion.classList.toggle("oculto");

  if (reflexion.classList.contains("oculto")) {
    this.textContent = "Ver reflexión";
  } else {
    this.textContent = "Ocultar reflexión";
  }
});

// 5. GALERÍA: AMPLIAR FOTOGRAFÍAS
const visor = document.getElementById("visor");
const imagenGrande = document.getElementById("imagenGrande");
const tituloGrande = document.getElementById("tituloGrande");

document.querySelectorAll(".foto").forEach(function (boton) {
  boton.addEventListener("click", function () {
    const imagen = boton.querySelector("img");

    // Comprobar que la imagen se haya cargado
    if (!imagen.complete || imagen.naturalWidth === 0) {
      alert(
        "No se encontró esta fotografía. Revisa el nombre del archivo en la carpeta imagenes."
      );
      return;
    }

    imagenGrande.src = imagen.src;
    imagenGrande.alt = imagen.alt;
    tituloGrande.textContent = boton.dataset.titulo;

    visor.showModal();
  });
});

// Cerrar el visor
document.getElementById("cerrarVisor").addEventListener("click", function () {
  visor.close();
});

// Cerrar al pulsar fuera de la fotografía
visor.addEventListener("click", function (evento) {
  if (evento.target === visor) {
    visor.close();
  }
});

// HIMNO DEL ITACE
const audioItace = document.getElementById("audioItace");
const btnItace = document.getElementById("btnItace");

// HIMNO DE TAMAULIPAS
const audioTamaulipas = document.getElementById("audioTamaulipas");
const btnTamaulipas = document.getElementById("btnTamaulipas");

// Reproducir y pausar los audios
async function controlarAudio(audio, boton, otroAudio, otroBoton, texto) {
    if (audio.paused) {
        otroAudio.pause();
        otroAudio.currentTime = 0;
        otroBoton.textContent = "▶ Reproducir";

        try {
            await audio.play();
            boton.textContent = "⏸ Pausar";
        } catch (error) {
            console.error("Error de audio:", error);
            alert("No se pudo reproducir. Revisa la ubicación del archivo.");
        }
    } else {
        audio.pause();
        boton.textContent = texto;
    }
}

btnItace.addEventListener("click", function () {
    controlarAudio(
        audioItace,
        btnItace,
        audioTamaulipas,
        btnTamaulipas,
        "▶ Reproducir himno"
    );
});

btnTamaulipas.addEventListener("click", function () {
    controlarAudio(
        audioTamaulipas,
        btnTamaulipas,
        audioItace,
        btnItace,
        "▶ Reproducir audio"
    );
});

// Restablecer botones al terminar
audioItace.addEventListener("ended", function () {
    btnItace.textContent = "▶ Reproducir himno";
});

audioTamaulipas.addEventListener("ended", function () {
    btnTamaulipas.textContent = "▶ Reproducir audio";
});


// Restablecer el botón cuando termine la canción
audio.addEventListener("ended", function () {
  botonAudio.textContent = "▶ Reproducir audio";
});

// 7. BARRA DE PROGRESO DE LECTURA
window.addEventListener("scroll", function () {
  const desplazamiento = document.documentElement.scrollTop;

  const alturaTotal =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let porcentaje = 0;

  if (alturaTotal > 0) {
    porcentaje = (desplazamiento / alturaTotal) * 100;
  }

  document.getElementById("progreso").style.width =
    porcentaje + "%";
});