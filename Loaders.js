import Level from "./Level.js";
import {createBackgroundLayer, createSpriteLayer} from './layers.js';
import {loadBackgroundSprites} from './sprites.js';
import {Matrix} from './math.js';


function createTiles(level, backgrounds){

    backgrounds.forEach(background => {




    })




}

export function loadImage(url){
    const image = new Image();

    return new Promise(resolve => {
        image.addEventListener('load', () => {
            resolve(image);
        });

        image.src = url;
    });
}

export function loadLevel(name){
    return Promise.all([
        fetch(`./levels/${name}.json`).then(response => response.json()),
        loadBackgroundSprites()
    ]).then(([levelSpec, backgroundSprites]) => {
            const level = new Level();

            const background = createBackgroundLayer(levelSpec.backgrounds, backgroundSprites);
            level.comp.layers.push(background);


            const spriteLayer = createSpriteLayer(level.entities);
            level.comp.layers.push(spriteLayer);

            return level;
        });
}
