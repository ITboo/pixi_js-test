import * as PIXI from './pixi/pixi.mjs';
import Game from './scripts/Game.js'


const _pixiApp = new PIXI.Application({
    width: 1200,
    height: 600
}
);

const game = new Game(_pixiApp)
_pixiApp.ticker.add(game.update, game)
document.body.appendChild(_pixiApp.view);

