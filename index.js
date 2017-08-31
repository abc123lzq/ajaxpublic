$(function () {
    if (isInclude("bluebird.js")) {
        return false;
    } else {
        W_creatScript('/base/bluebird/3.5/bluebird.js');
    }
});

/**
 * 通用插件写法之：ajax
 */
(function (win, $) {
    var _orderCance = orderCance;
    var _bindEvent = _bindEvent;

    function orderCance(opt1) {//配置参数
        // this.init(opt1);
    }

    $.extend(orderCance.prototype, {
        init: function (opt1) {
            var that = this;
            that.opt2 = {
                res: function () {
                    //不需要Promise时候默认为空
                },
                fire: function () {
                    //默认参数之之定义事件
                }
            };//深拷贝配置参数
            $.extend(true, that.opt2, opt1 || {});
            that.opt2.fire();//进入图书馆
            that.startPOST();
            return that;
        },
        startPOST: function () {
            var that = this;
            $.ajax({
                url: that.opt2.Url,
                type: 'post',
                data: that.opt2.data[0],
                dataType: 'json',
                beforeSend: function () {
                    $.showIndicator();
                    fireEvent(that, 'beforeSend')
                },
                success: function (data) {
                    $.hideIndicator();
                    $.toast(data.Message);
                    fireEvent(that, 'success');
                    //Promise对象给then()调用
                    var getRes = that.opt2.res;
                    getRes(data);
                },
                error: function (err) {
                    $.hideIndicator();
                    $.toast(err.Message);
                    fireEvent(that, 'error')
                }

            });
        }

    });


    //创建图书馆
    function bindEvent(obj, events, fn) {
        obj.listeners = obj.listeners || {};
        obj.listeners[events] = obj.listeners[events] || [];
        obj.listeners[events].push(fn);
        if (obj.nodeType) {
            if (obj.addEventListener()) {
                obj.addEventListener(events, fn, false)
            } else {
                obj.attachEvent('on' + events, fn);
            }
        }
    }

    //查找书籍
    function fireEvent(obj, events) {
        if (obj.listeners && obj.listeners[events]) {
            for (var i = 0; i < obj.listeners[events].length; i++) {
                obj.listeners[events][i]();
            }
        }
    }

    win.orderCance = orderCance;
    win.bindEvent = bindEvent;

})(window, Zepto);

