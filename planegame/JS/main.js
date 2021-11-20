const canv = document.querySelector("#canv");
// 天空对象实例
const sky = new Sky(SKY);
let state = START;
// 飞机对象实例
const loading = new Loading(LOADING)
// 英雄实例
let hero = new Hero(HERO);

// 碰撞检测函数
function checkHit() {
    // 遍历所有敌机
    for (let i = 0; i < enemies.length; i++) {
        // 遍历所有子弹
        for (let j = 0; j < hero.bulletList.length; j++) {
            if (enemies[i].hit(hero)) {
                enemies[i].collide();
                hero.collide();
            }
            if (enemies[i].hit(hero.bulletList[j])) {
                enemies[i].collide();
                hero.bulletList[j].collide();
            }
        }
    }
}

// 全局函数 判断所有子弹/敌人组件
function judgeComponent() {
    for (let i = 0; i < hero.bulletList.length; i++) {
        hero.bulletList[i].move();
    }
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].move();
    }
}
// 全局函数 绘制所有子弹/敌人组件
let score = 0;
let life = 3;
function drawComponent(ctx) {
    for (let i = 0; i < hero.bulletList.length; i++) {
        hero.bulletList[i].draw(ctx);
    }
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].draw(ctx);
    }
    ctx.font = "20px 微软雅黑";
    ctx.textAlign = "left";
    ctx.fillText("score:" + score, 10, 20);
    ctx.textAlign = "right";
    ctx.fillText("life:" + life, 480 - 10, 20);

    // 重置画笔
    ctx.textAlign = "left";
}
// 全局函数 销毁所有子弹/敌人组件
function deleteComponent() {
    if (hero.destroy) {
        life--;
        hero.destroy = false;
        if (life === 0) {
            state = END;
        } else {
            hero = new Hero(HERO);
        }
    }
    for (let i = 0; i < hero.bulletList.length; i++) {
        if (hero.bulletList[i].outOfBound() || hero.bulletList[i].destroy) {
            hero.bulletList.splice(i, 1);
        }
    }
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].outOfBound() || enemies[i].destroy) {
            enemies.splice(i, 1);
        }
    }
}
// 全局函数 初始化敌机
let enemies = [];
let ENEMY_CREATE_INTERVAL = 800;
let ENEMY_LASTTIME = new Date().getTime();
function createComponent() {
    const currentTime = new Date().getTime();
    if (currentTime - ENEMY_LASTTIME >= ENEMY_CREATE_INTERVAL) {
        let ran = Math.floor(Math.random() * 100);
        // 小飞机产生概率60% 中飞机30% 大飞机10%
        if (ran < 60) {
            enemies.push(new Enemy(E1));
        } else if (ran < 90 && ran > 60) {
            enemies.push(new Enemy(E2));
        } else {
            enemies.push(new Enemy(E3));
        }
        ENEMY_LASTTIME = currentTime;
    }
}

// 为canvas绑定鼠标移动事件
canv.addEventListener("mousemove", function (ev) {
    let x = ev.offsetX;
    let y = ev.offsetY;
    hero.x = x - hero.width / 2;
    hero.y = y - hero.height / 2;
})
// 为canvas绑定鼠标移开事件
canv.addEventListener("mouseleave", function () {
    if (state === RUNNING) {
        state = PAUSE;
    }
})
// 为canvas绑定鼠标进入事件
canv.addEventListener("mouseenter", function () {
    if (state === PAUSE) {
        state = RUNNING;
    }
})

//主流程
if (canv.getContext) {
    const ctx = canv.getContext("2d");
    // canv绑定点击事件，START---STARTING
    canv.addEventListener("click", function () {
        if (state === START) {
            state = STARTING;
        }
    })
    bimg.onload = function () {
        setInterval(function () {
            switch (state) {
                case START:
                    // 渲染天空
                    sky.judge();
                    sky.draw(ctx);
                    // 渲染logo
                    let logo_x = (480 - 441) / 2
                    let logo_y = (650 - 255) / 2
                    ctx.drawImage(loimg, logo_x, logo_y, 441, 255);
                    break;
                case STARTING:
                    // 渲染天空
                    sky.judge();
                    sky.draw(ctx);
                    // 飞机加载类 Loading
                    loading.judge();
                    loading.draw(ctx);
                    break;
                case RUNNING:
                    // 渲染天空
                    sky.judge();
                    sky.draw(ctx);
                    // 渲染我方飞机和敌方飞机
                    hero.judge();
                    hero.draw(ctx);
                    hero.shoot(ctx);
                    createComponent();
                    judgeComponent();
                    deleteComponent();
                    drawComponent(ctx);
                    checkHit();
                    break;
                case PAUSE:
                    let pause_x = (480 - pause.naturalWidth) / 2
                    let pause_y = (650 - pause.naturalHeight) / 2
                    ctx.drawImage(pause, pause_x, pause_y);
                    break;
                case END:
                    // 渲染结束文字
                    ctx.font = "bold 24px 微软雅黑";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "center";
                    ctx.fillText("GAME_OVER", 480 / 2, 650 / 2);
                    break;
            }

        }, 10);
    }
}