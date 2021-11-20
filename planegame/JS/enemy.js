// 初始化敌机类
class Enemy{
    constructor(config){
        this.type = config.type;
        this.width = config.width;
        this.height = config.height;
        this.x = Math.floor(Math.random()*(480 - config.width));
        this.y = -config.height;
        this.life = config.life;
        this.score = config.score;
        this.frame = config.frame;
        this.nowimg = this.frame.live[0];
        this.live = true;
        // this.minSpeed = config.minSpeed;
        // this.maxSpeed = config.maxSpeed;
        this.speed = Math.floor(Math.random()*(config.maxSpeed - config.minSpeed+1))+config.maxSpeed;
        // 最后时间--过了此时间要变化
        this.lasttime = new Date().getTime();
        // 死亡下标
        this.deathIndex = 0;
        // 确认销毁
        this.destroy = false;
    }
    move(){
        const currentTime = new Date().getTime();
        if((currentTime - this.lasttime) >= this.speed){
            if(this.live){
                this.nowimg = this.frame.live[0];
                this.y++;
            }else{
                this.nowimg = this.frame.death[this.deathIndex++ ];
                if(this.deathIndex === this.frame.death.length){
                    this.destroy = true;
                }
            }
            this.lasttime = currentTime;
        }
    }
    draw(ctx){
        ctx.drawImage(this.nowimg,this.x,this.y)
    }
    hit(o){
        let el = this.x;
        let er = this.x + this.width;
        let et = this.y;
        let eb = this.y + this.height;
        let ol = o.x;
        let or = o.x + o.width;
        let ot = o.y;
        let ob = o.y + o.height;
        if(ol>er || or<el || ot>eb || ob<et){
            return false;
        }else{
            return true;
        }
    }
    collide(){
        this.life--;
        if(this.life === 0){
            this.live = false;
            score+=this.score;
        }
    }
    outOfBound(){
        if(this.y>650){
            return true;
        }
    }
}
