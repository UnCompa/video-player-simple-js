# Video Player Package

A simple video player package for the web.

## Installation

```bash
npm install video-player-simple-js
```

## Usage

```js
import createPlayer from 'video-player-simple-js';

const container = document.getElementById('video-container');
const player = createPlayer("./myvideo.mp4", container, {
  controls: true
});

player.play();
```
