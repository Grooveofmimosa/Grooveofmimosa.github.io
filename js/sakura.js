var stop, staticx;
var img = new Image();
img.src = "data:image/png;base64,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";

function Sakura(x, y, s, r, fn) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
}
Sakura.prototype.draw = function (cxt) {
    cxt.save();
    var xc = 40 * this.s / 4;
    cxt.translate(this.x, this.y);
    cxt.rotate(this.r);
    cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
    cxt.restore();
}
Sakura.prototype.update = function () {
    this.x = this.fn.x(this.x, this.y);
    this.y = this.fn.y(this.y, this.y);
    this.r = this.fn.r(this.r);
    if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
        this.r = getRandom('fnr');
        if (Math.random() > 0.4) {
            this.x = getRandom('x');
            this.y = 0;
            this.s = getRandom('s');
            this.r = getRandom('r');
        } else {
            this.x = window.innerWidth;
            this.y = getRandom('y');
            this.s = getRandom('s');
            this.r = getRandom('r');
        }
    }
}
SakuraList = function () {
    this.list = [];
}
SakuraList.prototype.push = function (sakura) {
    this.list.push(sakura);
}
SakuraList.prototype.update = function () {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].update();
    }
}
SakuraList.prototype.draw = function (cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].draw(cxt);
    }
}
SakuraList.prototype.get = function (i) {
    return this.list[i];
}
SakuraList.prototype.size = function () {
    return this.list.length;
}

function getRandom(option) {
    var ret, random;
    switch (option) {
        case 'x':
            ret = Math.random() * window.innerWidth;
            break;
        case 'y':
            ret = Math.random() * window.innerHeight;
            break;
        case 's':
            ret = Math.random();
            break;
        case 'r':
            ret = Math.random() * 6;
            break;
        case 'fnx':
            random = -0.5 + Math.random() * 1;
            ret = function (x, y) {
                return x + 0.5 * random - 1.7;
            };
            break;
        case 'fny':
            random = 1.5 + Math.random() * 0.7
            ret = function (x, y) {
                return y + random;
            };
            break;
        case 'fnr':
            random = Math.random() * 0.03;
            ret = function (r) {
                return r + random;
            };
            break;
    }
    return ret;
}

function startSakura() {
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var canvas = document.createElement('canvas'),
        cxt;
    staticx = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
    canvas.setAttribute('id', 'canvas_sakura');
    document.getElementsByTagName('body')[0].appendChild(canvas);
    cxt = canvas.getContext('2d');
    var sakuraList = new SakuraList();
    for (var i = 0; i < 50; i++) {
        var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
        randomX = getRandom('x');
        randomY = getRandom('y');
        randomR = getRandom('r');
        randomS = getRandom('s');
        randomFnx = getRandom('fnx');
        randomFny = getRandom('fny');
        randomFnR = getRandom('fnr');
        sakura = new Sakura(randomX, randomY, randomS, randomR, {
            x: randomFnx,
            y: randomFny,
            r: randomFnR
        });
        sakura.draw(cxt);
        sakuraList.push(sakura);
    }
    stop = requestAnimationFrame(function () {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stop = requestAnimationFrame(arguments.callee);
    })
}
window.onresize = function () {
    var canvasSnow = document.getElementById('canvas_snow');
}
img.onload = function () {
    startSakura();
}

function stopp() {
    if (staticx) {
        var child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
        window.cancelAnimationFrame(stop);
        staticx = false;
    } else {
        startSakura();
    }
}
