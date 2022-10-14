import {loadLevel} from './loaders.js';
import {createTank} from './entities.js';
import Keyboard from "./KeyboardState.js";
import Timer from "./Timer.js";

const canvas = document.getElementById('context');
const context = canvas.getContext('2d');

context.fillStyle = 'black';
context.fillRect(0, 0, 960, 832);

Promise.all([
    createTank(),
    loadLevel('1')
]).then(async ([Tank, Level]) => {


    console.log(Level);

    const input = new Keyboard();
    input.addMapping(32, (keyState) => {
        if(keyState){
            Tank.go.start();
        }else{
            Tank.go.cancel();
        }

        console.log(keyState);
    });
    input.listenTo(window);

    Level.add(Tank);

    Level.comp.draw(context);


    const timer = new Timer(1/60);
    timer.update = function(deltaTime){


        // console.log(Level);




        // Tank.update(deltaTime);

        // Tank.pos.x += 2;
        // Tank.pos.y += 2;

    };

    timer.start();
});
