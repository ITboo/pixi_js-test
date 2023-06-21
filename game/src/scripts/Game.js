import Hero from "./Entities/Hero.js";

export default class Game {
    #pixiapp
    constructor(pixiApp) {
        this.#pixiapp = pixiApp

        const hero = new Hero()
        hero.x = 200;
        hero.y = 200;
        this.#pixiapp.stage.addChild(hero)
    }
}