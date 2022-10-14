import {loadImage} from "./Loaders.js";
import SpriteSheet from "./SpriteSheet.js";

export function loadTankStripe() {
    return loadImage('img/tiles.png')
        .then(image => {
            const sprite = new SpriteSheet(image, 64, 64);
            sprite.define('tank', 0, 0);

            return sprite;
        });
}

export function loadBackgroundSprites(){
    return loadImage('img/tiles.png')
        .then(image => {
            const sprites = new SpriteSheet(image, 16, 16);

            sprites.define('wall_0', 73.7, 16);
            sprites.define('wall_1', 74.74, 16);

            sprites.define('stone', 65.75, 18, 2);


            // sprite.define('bullet_1', 82.36, 25.52); //16 16


            return sprites;
        });
}