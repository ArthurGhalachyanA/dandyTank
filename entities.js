import Entity from './Entity.js';
import {loadTankStripe} from './sprites.js'
import Velocity from "./traits/Velocity.js";

export function createTank(){
    return loadTankStripe()
        .then(sprite => {
            const tank = new Entity();

            tank.pos.set(320, 768);
            tank.vel.set(0, 0);

            tank.draw = function drawTank(context){
                sprite.draw('tank', context, this.pos.x, this.pos.y);
            };

            tank.addTrait(new Velocity());

            return tank;
        });
}