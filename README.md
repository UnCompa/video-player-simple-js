# Video Player Package

A simple video player package for the web.

## Installation

```bash
npm install my-video-player
```

## Usage

```js
import createPlayer from 'my-video-player';

const container = document.getElementById('video-container');
const player = createPlayer({ container, videoSrc: 'myvideo.mp4' });

player.play();
```