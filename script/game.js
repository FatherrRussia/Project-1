class Timer {
    delay;
    enlapsed;

    constructor(delay){
        this.delay = delay;
        this.enlapsed = 0;
    }

    reset(){
        this.enlapsed = 0;
    }

    update(){
        if(this.enlapsed < this.delay){
            this.enlapsed += 1000 / GAME_FPS;
        }
    }

    onFire(){
        let tick = false;
        if(this.enlapsed >= this.delay){
            tick = true;
            this.reset;
        }
        return tick;
    }
}

class Animation {
    
    constructor(sources, interval){
        this.imageSrcs = sources;
        this.images = [];
        for(let src of this.imageSrcs){
            let img = new Image();
            img.src = src;
            this.images.push(img);
        }

        this.currentFrame = 0;
        this.frames = sources.length;
        this.timer = new Timer(interval);
    }

    update() {
        this.timer.update();
        if(this.timer.onFire()){
            this.currentFrame = (this.currentFrame + 1) % this.frames;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.images[this.currentFrame], 50, 50, 150);
    }


}

class Game {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    init(){
        this.canvas.style.position = 'absolute';
        this.canvas.width = BG_WIDTH;
        this.canvas.height = BG_HEIGHT;
        this.canvas.style.backgroundImage = "url('" + BACKGROUND_IMG_SRC + "')";
        this.canvas.style.backgroundSize = "contain";

        this.player = new Animation(PLAYER_SRC, 150);
    }

    update(){
        this.player.update();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player
    }
}