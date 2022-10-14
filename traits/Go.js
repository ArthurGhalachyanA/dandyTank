import Trait from "../Trait.js";

export default class Go  extends Trait{
    constructor(){
        super('go');

        this.go = false
    }

    start(){
        this.go = true;
    }

    cancel(){
        this.go = false;
    }

    update(entity, deltaTime){
        if(this.go){
            entity.pos.y -= entity.vel.y * deltaTime
        }
    }
}