export default class SpriteSheet{
    constructor(image, width, height){
        this.image = image;
        this.height = height;
        this.width = width;
        this.tiles = new Map();
    }

    define(name, x, y, zoom = 1){
        const buffer = document.createElement('canvas');
        buffer.width = this.width*zoom;
        buffer.height = this.height*zoom;

        buffer
            .getContext('2d')
            .drawImage(this.image,
                x*this.width,
                y*this.height,
                this.width*zoom,
                this.height*zoom,
                0,
                0,
                this.width*zoom,
                this.height*zoom,
        );

        this.tiles.set(name, buffer);
    }

    draw(name, context, x, y){
        const buffer = this.tiles.get(name);

        context.beginPath();
        context.strokeStyle = 'red';
        context.lineWidth = 0.1;

        context.drawImage(buffer, x, y);

        context.strokeRect(x, y, this.width, this.height);

    }
}