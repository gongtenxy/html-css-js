// 初始化英雄类
class Hero{
    constructor(config){
        this.width = config.width;
        this.height = config.height;
        this.x = (480 - config.width)/2;
        this.y = 650 - config.height;
        this.frame = config.frame;
        this.frameLiveIndex = 0;
        this.frameDeathIndex = 0;
        // 销毁
        this.destroy = false;
        // 当前展示图片
        this.nowimg = null;
        this.live = true;
        this.lasttime = new Date().getTime();
        this.speed = config.speed;
        // 子弹
        this.lastShootTime = new Date().getTime();
        this.shootInterval = 100;
        this.bulletList = [];
    }
    judge(){
        const currentTime = new Date().getTime();
        if((currentTime - this.lasttime)>this.speed){
            if(this.live){
                this.nowimg = this.frame.live[this.frameLiveIndex++ % this.frame.live.length];
            }else{
                this.nowimg = this.frame.death[this.frameDeathIndex++];
                if(this.frameDeathIndex === this.frame.death.length){
                    this.destroy = true;
                }
            }
            this.lasttime = currentTime;
        }
    }
    draw(ctx){
        ctx.drawImage(this.nowimg,this.x,this.y,this.width,this.height);
    }
    // 射击子弹
    shoot(ctx){
        const currentTime = new Date().getTime();
        if((currentTime - this.lastShootTime) > this.shootInterval){
            let bullet = new Bullet(BULLET,this.x+this.width/2-BULLET.width/2,this.y - BULLET.height);
            this.bulletList.push(bullet);
            bullet.draw(ctx);
            this.lastShootTime = currentTime;
        }
    }
    collide(){
        this.live = false;
    }
}
