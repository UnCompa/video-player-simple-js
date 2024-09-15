interface PlayerOptions {
    controls?: boolean;
    width?: string;
    height?: string;
    showOverlayControls?: boolean;
}
interface Player {
    play: () => void;
    pause: () => void;
    stop: () => void;
    setVolume: (volume: number) => void;
}
export declare function createPlayer(videoSrc: string, container: HTMLElement, options?: PlayerOptions): Player;
export declare function createAudio(audioSrc: string, container: HTMLElement, options?: PlayerOptions): Player;
export default createPlayer;
