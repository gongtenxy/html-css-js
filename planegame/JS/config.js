//状态
// 开始
const START = 0;
// 开始时
const STARTING = 1;
// 运行时
const RUNNING = 2;
// 暂停时
const PAUSE = 3;
// 结束时
const END = 4;
//背景图片
const bimg = new Image();
bimg.src = "img/background.png";
// logo图片
const loimg = new Image();
loimg.src = "img/logo.png";
// 初始化四张飞机大战加载图片
const lo_frame = [];
lo_frame[0] = new Image();
lo_frame[0].src = "img/g_lo1.png";
lo_frame[1] = new Image();
lo_frame[1].src = "img/g_lo2.png";
lo_frame[2] = new Image();
lo_frame[2].src = "img/g_lo3.png";
lo_frame[3] = new Image();
lo_frame[3].src = "img/g_lo4.png";
// 初始化英雄图片
const he_frame = {
    live: [],
    death: [],
};
he_frame.live[0] = new Image();
he_frame.live[0].src = "img/me1.png";
he_frame.live[1] = new Image();
he_frame.live[1].src = "img/me2.png";
he_frame.death[0] = new Image();
he_frame.death[0].src = "img/me_destroy_1.png";
he_frame.death[1] = new Image();
he_frame.death[1].src = "img/me_destroy_2.png";
he_frame.death[2] = new Image();
he_frame.death[2].src = "img/me_destroy_3.png";
he_frame.death[3] = new Image();
he_frame.death[3].src = "img/me_destroy_4.png";
// 初始化子弹图
const b = new Image();
b.src = "img/bullet1.png";
// 敌机1类
const e1 = {
    live: [],
    death: [],
}
e1.live[0] = new Image();
e1.live[0].src = "img/enemy1.png";
e1.death[0] = new Image();
e1.death[0].src = "img/enemy1_down1.png"
e1.death[1] = new Image();
e1.death[1].src = "img/enemy1_down2.png"
e1.death[2] = new Image();
e1.death[2].src = "img/enemy1_down3.png"
e1.death[3] = new Image();
e1.death[3].src = "img/enemy1_down4.png"
// 敌机2类
const e2 = {
    live: [],
    death: [],
}
e2.live[0] = new Image();
e2.live[0].src = "img/enemy2.png";
e2.death[0] = new Image();
e2.death[0].src = "img/enemy2_down1.png"
e2.death[1] = new Image();
e2.death[1].src = "img/enemy2_down2.png"
e2.death[2] = new Image();
e2.death[2].src = "img/enemy2_down3.png"
e2.death[3] = new Image();
e2.death[3].src = "img/enemy2_down4.png"
// 敌机3类
const e3 = {
    live: [],
    death: [],
}
e3.live[0] = new Image();
e3.live[0].src = "img/enemy3_n1.png";
e3.live[1] = new Image();
e3.live[1].src = "img/enemy3_n2.png";
e3.death[0] = new Image();
e3.death[0].src = "img/enemy3_down1.png"
e3.death[1] = new Image();
e3.death[1].src = "img/enemy3_down2.png"
e3.death[2] = new Image();
e3.death[2].src = "img/enemy3_down3.png"
e3.death[3] = new Image();
e3.death[3].src = "img/enemy3_down4.png"
e3.death[4] = new Image();
e3.death[4].src = "img/enemy3_down5.png"
e3.death[5] = new Image();
e3.death[5].src = "img/enemy3_down6.png"
// 初始化暂停图片
const pause = new Image();
pause.src = "img/pause_nor.png"


//天空对象配置 
const SKY = {
    // 背景图
    bimg: bimg,
    // 图宽高
    width: bimg.width,
    height: bimg.height,
    // 数字越大，速度越慢
    speed: 10,
}

// 飞机对象配置
const LOADING = {
    frame: lo_frame,
    width: 186,
    height: 38,
    x: 0,
    y: 650 - 38,
    speed: 400,
}

// 英雄配置
const HERO = {
    frame: he_frame,
    width: 99,
    height: 124,
    speed: 10,
}

// 初始化子弹配置
const BULLET = {
    img: b,
    width: 9,
    height: 11,
}

// 初始化敌机配置
const E1 = {
    type: 1,
    width: 57,
    height: 51,
    life: 1,
    score: 1,
    frame: e1,
    minSpeed: 20,
    maxSpeed: 10
}
const E2 = {
    type: 2,
    width: 69,
    height: 95,
    life: 5,
    score: 5,
    frame: e2,
    minSpeed: 50,
    maxSpeed: 20
}
const E3 = {
    type: 3,
    width: 169,
    height: 258,
    life: 20,
    score: 20,
    frame: e3,
    minSpeed: 100,
    maxSpeed: 100
}
