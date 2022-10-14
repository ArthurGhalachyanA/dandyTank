const tile_size = 64;

function createWall(sprites, context, x, y, slot = 3, slot1 = 3, slot2 = 0, slot3 = 0){
    for(let i = 0; i < 4; i++){
        if(i < slot2){
            continue;
        }

        for(let j = 0; j < 4; j++){
            if(j < slot3){
                continue;
            }

            sprites.draw('wall_' + (i+j)%2, context, (x+j/4) * tile_size, (y+i/4) * tile_size);

            if(j === slot1){
                break;
            }
        }

        if(i === slot){
            break;
        }
    }
}

function drawBackground(background, context, sprites){
    background.ranges.forEach(range => {
        if(background.name === "wall"){
            createWall(sprites, context, ...range);
        }
    });
}

export function createBackgroundLayer(backgrounds, sprites){
    const buffer = document.createElement('canvas');
    buffer.width = 960;
    buffer.height = 832;

    backgrounds.forEach(background => {
        drawBackground(background, buffer.getContext('2d'), sprites);
    });

    return function (context){
        context.drawImage(buffer, 0, 0);
    }
}

export function createSpriteLayer(entities){
    return function(context){
        entities.forEach(entity => {
            entity.draw(context);
        });
    }
}
