// 初始化子弹类
class Bullet{
    constructor(config,x,y){
        this.img = config.img;
        this.width = config.width;
        this.height = config.height;
        this.x = x;
        this.y = y;
        this.destroy = false;
    }
    move(){
        this.y-=2;
    }
    draw(ctx){
        ctx.drawImage(this.img,this.x,this.y);
    }
    collide(){
        this.destroy = true;
    }
    outOfBound(){
        return this.y < -this.height;
    }
}
