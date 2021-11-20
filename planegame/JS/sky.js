// 初始化天空对象
class Sky{
    // 静态属性
    constructor(config){
        this.bimg = config.bimg,
        this.width = config.width,
        this.height = config.height,
        this.pimgx = 0,
        this.pimgy = -this.height,
        this.imgx = 0,
        this.imgy = 0,
        this.speed = config.speed,
        // 最后更新时间
        this.lasttime = new Date().getTime();
    }
    // 动态方法
    // 判断方法：判断这个时间段天空是否移动
    judge(){
        let currentTime = new Date().getTime();
        if((currentTime-this.lasttime)>this.speed){
            this.imgy++;
            this.pimgy++;
            this.lasttime = currentTime;
        }
        if(this.pimgy === 0){
            this. imgy = 0;
            this.pimgy = -this.height;
        }
    }
    // 绘制方法
    draw(ctx){
        ctx.drawImage(this.bimg,this.imgx,this.imgy,this.width,this.height);
        ctx.drawImage(this.bimg,this.pimgx,this.pimgy,this.width,this.height);
    }
}
