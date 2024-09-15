"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlayer = createPlayer;
exports.createAudio = createAudio;
// Función para crear el reproductor de video
function createPlayer(videoSrc, container, options = { controls: true, showOverlayControls: true }) {
    var _a;
    const videoElement = document.createElement('video');
    videoElement.src = videoSrc;
    videoElement.controls = (_a = options.controls) !== null && _a !== void 0 ? _a : true;
    videoElement.classList.add('video-player');
    // Aplicar estilos si vienen en las opciones
    if (options.width)
        videoElement.style.width = options.width;
    if (options.height)
        videoElement.style.height = options.height;
    // Agregar el video al contenedor
    container.appendChild(videoElement);
    // Verificar si se deben mostrar los controles superpuestos
    if (options.showOverlayControls) {
        createOverlayControls(videoElement, container);
    }
    return {
        play: () => videoElement.play(),
        pause: () => videoElement.pause(),
        stop: () => {
            videoElement.pause();
            videoElement.currentTime = 0;
        },
        setVolume: (volume) => {
            videoElement.volume = volume;
        }
    };
}
// Función auxiliar para crear los botones superpuestos
function createOverlayControls(videoElement, container) {
    // Crear el botón de Play
    const playBtn = document.createElement('button');
    playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4v16l13 -8z" />
</svg>`;
    playBtn.classList.add('overlay-btn');
    // Crear el botón de Pause
    const pauseBtn = document.createElement('button');
    pauseBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-stop" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 5m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
</svg>`;
    pauseBtn.classList.add('overlay-btn');
    // Estilo para los botones
    [playBtn, pauseBtn].forEach(btn => {
        btn.style.position = 'absolute';
        btn.style.bottom = '20px';
        btn.style.padding = '10px';
        btn.style.backgroundColor = '#121212';
        btn.style.border = 'none';
        btn.style.color = 'white';
        btn.style.borderRadius = '5px';
        btn.style.cursor = 'pointer';
    });
    // Posicionar botones a izquierda y derecha
    playBtn.style.left = '20px';
    pauseBtn.style.right = '20px';
    // Añadir los botones al contenedor
    container.style.position = 'relative'; // Asegurar que el contenedor tenga un posicionamiento relativo
    container.appendChild(playBtn);
    container.appendChild(pauseBtn);
    // Añadir funcionalidad a los botones
    playBtn.addEventListener('click', () => videoElement.play());
    pauseBtn.addEventListener('click', () => videoElement.pause());
    // Ocultar/mostrar botones basados en el estado del video
    videoElement.addEventListener('play', () => {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    });
    videoElement.addEventListener('pause', () => {
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
    });
    // Al principio, mostrar solo el botón de Play
    pauseBtn.style.display = 'none';
}
// Función para crear el reproductor de audio
function createAudio(audioSrc, container, options = { controls: true }) {
    var _a;
    const audioElement = document.createElement('audio');
    audioElement.src = audioSrc;
    audioElement.controls = (_a = options.controls) !== null && _a !== void 0 ? _a : true;
    audioElement.classList.add('audio-player');
    // Agregar el audio al contenedor
    container.appendChild(audioElement);
    return {
        play: () => audioElement.play(),
        pause: () => audioElement.pause(),
        stop: () => {
            audioElement.pause();
            audioElement.currentTime = 0;
        },
        setVolume: (volume) => {
            audioElement.volume = volume;
        }
    };
}
// Exportar la función createPlayer como predeterminada
exports.default = createPlayer;
