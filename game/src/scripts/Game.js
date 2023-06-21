import Hero from "./Entities/Hero.js";
import Platform from "./Entities/Platform.js";

export default class Game {
    #pixiapp
    #hero
    #platforms = []
    constructor(pixiApp) {
        this.#pixiapp = pixiApp;

        this.#hero = new Hero();
        this.#hero.x = 100;
        this.#hero.y = 100;
        this.#pixiapp.stage.addChild(this.#hero);

        const platform1 = new Platform();
        platform1.x = 50;
        platform1.y = 400;
        this.#pixiapp.stage.addChild(platform1);

        const platform2 = new Platform();
        platform2.x = 200;
        platform2.y = 450;
        this.#pixiapp.stage.addChild(platform2);

        const platform3 = new Platform();
        platform3.x = 400;
        platform3.y = 400;
        this.#pixiapp.stage.addChild(platform3);

        this.#platforms.push(platform1);
        this.#platforms.push(platform2);
        this.#platforms.push(platform3);
    }
    update() {

        const prevPoint = {
            y: this.#hero.y,
            x: this.#hero.x
        }
        this.#hero.update();

        for (let i = 0; i < this.#platforms.length; i++) {
            if (!this.isCheckedAABB(this.#hero, this.#platforms[i])) {
                continue;
            }
            const currY = this.#hero.y;
            this.#hero.y = prevPoint.y;
            if (!this.isCheckedAABB(this.#hero, this.#platforms[i])) {
                this.#hero.stay()
                continue;
            }
            this.#hero.y = currY;
            this.#hero.x = prevPoint.x;
        }
    };
    isCheckedAABB(entity, area) {
        return (entity.x < area.x + area.width &&
            entity.x + entity.width > area.x &&
            entity.y < area.y + area.height &&
            entity.y + entity.height > area.y)
    }

}
