import Hero from "./Entities/Hero.js";
import Platform from "./Entities/Platform.js";

export default class Game {
    #pixiapp
    constructor(pixiApp) {
        this.#pixiapp = pixiApp

        const hero = new Hero()
        hero.x = 200;
        hero.y = 200;
        this.#pixiapp.stage.addChild(hero)

        const platform = new Platform()
        platform.x = 100;
        platform.y = 300;
        this.#pixiapp.stage.addChild(platform)
    }
}