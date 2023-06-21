import * as PIXI from './pixi/pixi.mjs';
import Game from './scripts/Game.js'


const _pixiApp = new PIXI.Application({
    width: 1200,
    height: 600
}
);
document.body.appendChild(_pixiApp.view);

new Game(_pixiApp)