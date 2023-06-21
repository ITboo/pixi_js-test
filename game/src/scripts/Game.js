import Hero from "./Entities/Hero.js";
import Platform from "./Entities/Platform.js";

export default class Game {
    #pixiapp
    #hero
    constructor(pixiApp) {
        this.#pixiapp = pixiApp;

        this.#hero = new Hero();
        this.#hero.x = 200;
        this.#hero.y = 200;
        this.#pixiapp.stage.addChild(this.#hero);

        const platform = new Platform();
        platform.x = 100;
        platform.y = 300;
        this.#pixiapp.stage.addChild(platform);
    }
    update() {
        this.#hero.update();
    };
}