import Trait from "../Trait.js";

export default class Fire extends Trait{
    constructor(){
        super('fire');

        this.fired = false;
        this.fire = false;
    }

    start(){
        this.fire = true;
    }

    cancel(){
        this.fire = false;
    }

    update(entity, deltaTime){
        if(this.fire){
            entity.pos.y -= entity.vel.y * deltaTime
        }
    }
}