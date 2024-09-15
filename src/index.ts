interface PlayerOptions {
  controls?: boolean;
  width?: string;
  height?: string;
  showOverlayControls?: boolean; // Nueva opción para mostrar los botones superpuestos
}

interface Player {
  play: () => void;
  pause: () => void;
  stop: () => void;
  setVolume: (volume: number) => void;
}

export function createPlayer(
  videoSrc: string, 
  container: HTMLElement, 
  options: PlayerOptions = { controls: true, showOverlayControls: true }
): Player {
  const videoElement = document.createElement('video');
  videoElement.src = videoSrc;
  videoElement.controls = options.controls ?? true;
  videoElement.classList.add('video-player');

  // Aplicar estilos si vienen en las opciones
  if (options.width) videoElement.style.width = options.width;
  if (options.height) videoElement.style.height = options.height;

  container.appendChild(videoElement);
  const showControls = options.showOverlayControls ?? true;
  // Crear botones superpuestos si la opción está habilitada
  if (showControls) {
    createOverlayControls(videoElement, container);
  }

  return {
    play: () => videoElement.play(),
    pause: () => videoElement.pause(),
    stop: () => {
      videoElement.pause();
      videoElement.currentTime = 0;
    },
    setVolume: (volume: number) => {
      videoElement.volume = volume;
    }
  };
}

// Función auxiliar para crear los botones superpuestos
function createOverlayControls(videoElement: HTMLVideoElement, container: HTMLElement) {
  // Crear el botón de Play
  const playBtn = document.createElement('button');
  playBtn.innerText = 'Play';
  playBtn.classList.add('overlay-btn');
  playBtn.style.position = 'absolute';
  playBtn.style.bottom = '20px';
  playBtn.style.left = '20px';
  
  // Crear el botón de Pause
  const pauseBtn = document.createElement('button');
  pauseBtn.innerText = 'Pause';
  pauseBtn.classList.add('overlay-btn');
  pauseBtn.style.position = 'absolute';
  pauseBtn.style.bottom = '20px';
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
  
  // Al principio, mostrar el botón de Play
  pauseBtn.style.display = 'none';
}


export function createAudio(
  audioSrc: string, 
  container: HTMLElement, 
  options: PlayerOptions = { controls: true }
): Player {
  const audioElement = document.createElement('audio');
  audioElement.src = audioSrc;
  audioElement.controls = options.controls ?? true; // Si no se proporciona, default es `true`
  audioElement.classList.add('audio-player');
  container.appendChild(audioElement);

  return {
    play: () => audioElement.play(),
    pause: () => audioElement.pause(),
    stop: () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    },
    setVolume: (volume: number) => {
      audioElement.volume = volume;
    }
  };
}
export default createPlayer;