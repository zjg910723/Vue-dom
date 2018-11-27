function Util() {};

Util.prototype.frontInit = function(float) {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / float + 'px';
    window.addEventListener('resize', function() {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / float + 'px';
    }, false);
};

Util.prototype.extends = function(obj, newObj) {
    for (let i in obj) {
        newObj[i] = obj[i];
    }

    return newObj;
};

// Util.prototype.preventWhite = function(DOMS) {
//     var _this = DOMS;
//     var _array = new Array(DOMS.length);

//     Array.from(DOMS).forEach((dom, index, array) => {
//         dom.addEventListener('touchstart', function(e) {
//             try {
//                 _this.touchY = e.touches[0].clientY;
//             } catch (e) {
//                 throw e;
//             }
//         }, false);
//         dom.addEventListener('touchmove', function(e) {
//             _this.moveY = e.touches[0];
//             _this.topHeight = e.currentTarget.scrollTop;
//             _array.index = e.currentTarget.scrollHeight - e.currentTarget.offsetHeight;
//             if (_this.topHeight == 0) {
//                 if (_this.moveY.clientY > _this.touchY) {
//                     e.preventDefault();
//                 } else {
//                     // 阻止冒泡
//                     // 正常执行
//                     e.stopPropagation();
//                 }
//             } else if (_this.topHeight == _array.index) {
//                 if (_this.moveY.clientY < _this.touchY) {
//                     e.preventDefault();
//                 } else {
//                     e.stopPropagation();
//                 }
//             } else if (_this.topHeight > 0 && _this.topHeight < _array.index) {
//                 e.stopPropagation();
//             } else {
//                 e.preventDefault();
//             }
//         });
//     })
// };

export default new Util();