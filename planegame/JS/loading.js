//初始化飞机对象加载类
class Loading{
    constructor(config){
        this.frame = config.frame;
        this.findex = 0;
        this.width = config.width;
        this.height = config.height;
        this.x = config.x;
        this.y = config.y;
        this.speed = config.speed;
        this.lasttime = new Date().getTime();
    }
    judge(){
        const currentTime = new Date().getTime();
        if((currentTime - this.lasttime) > this.speed){
            this.findex++;
            // 进入运行状态
            if(this.findex === 3){
                state = RUNNING;
            }
            this.lasttime = currentTime;
        }
    }
    draw(ctx){
        ctx.drawImage(this.frame[this.findex],this.x,this.y,this.width,this.height);
    }
}
