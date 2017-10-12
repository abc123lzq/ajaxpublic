//定义当前域名
var DN_HOST = window.location;
//定义域名host
var DN_HOST_SPLIT = DN_HOST.host.split('.');
//定义域名pathname
var DN_PATHNAME_SPLIT = DN_HOST.pathname.split('/');
//根据域名定义变量后缀
switch(DN_HOST_SPLIT[2])
{
    case 'com':
        if(DN_HOST_SPLIT[3] == undefined){
            var SUFFIX = 'com';
        }else {
            var SUFFIX = 'com.cn';
        }
        break;
    case 'net':
        var SUFFIX = 'net';
        break;
    case 'cn':
        var SUFFIX = 'cn';
        break;
}

//根据域名定义全局变量
//网站一级域名
var WEB_HOST_URL = 'http://lzq.'+SUFFIX;
//网站主域名
var WEB_MAIN_URL = 'http://www.lzq.'+SUFFIX;
//会员中心
var WEB_MEMBER_URL = 'http://member.lzq.'+SUFFIX;
//网站后台管理
var WEB_ADMIN_URL =  'http://admin.lzq.'+SUFFIX;
//旅游
var WEB_TOUR_URL = 'http://tour.lzq.'+SUFFIX;
//签证
var WEB_VISA_URL = 'http://visa.lzq.'+SUFFIX;
//酒店
var WEB_HOTEL_URL = 'http://hotel.lzq.'+SUFFIX;
//留学
var WEB_STUDY_URL = 'http://study.lzq.'+SUFFIX;
//微信
var WEB_WECHAT_URL = 'http://wx.lzq.'+SUFFIX;
//手机站
var WEB_M_URL = 'http://m.lzq.'+SUFFIX;
//手机会员中心
var WEB_MUSER_URL = 'http://muser.lzq.'+SUFFIX;
//留学公寓
var WEB_HOUSE_URL = 'http://house.lzq.'+SUFFIX;
//行程助手
var WEB_PLAN_URL = 'http://plan.lzq.'+SUFFIX;
//分销系统
var WEB_VIP_URL = 'http://vip.lzq.'+SUFFIX;
//js路径
var JsURL = 'http://js.lzq.'+SUFFIX;
//css路径
var CssURL = 'http://css.lzq.'+SUFFIX;
//图片服务器
var ImageURLP2 = 'http://images.lzq.com/p2';
var ImageURLP4 = 'http://images.lzq.com/p2';
var ImageURLP6 = 'http://images.lzq.com/p6';
var ImageURLP8 = 'http://images.lzq.com/p8';
var LImageURL = 'http://images.lzq.com/l';
var ImageURL = 'http://images.lzq.com';
//旧变量以后废除
var member = 'http://member.lzq.'+SUFFIX;
var js_url = 'http://js.lzq.'+SUFFIX;
var CSSURL = 'http://css.lzq.'+SUFFIX;

//判断是否ie浏览器,true是 false不是
var isIE = !!window.ActiveXObject || "ActiveXObject" in window;

/**
 * js插件直接引入对应的css文件
 *
 * @param cssUrl 对应css文件地址
 */
function W_creatLink(cssUrl,time) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    if(time == undefined){
        link.href = js_url + cssUrl;
    }else {
        link.href = CSSURL + cssUrl +'?'+time;
    }
    document.getElementsByTagName("head")[0].appendChild(link);
}

/**
 * 动态创建js文件
 *
 * @param jsUrl 对应js文件地址
 */
function W_creatScript(jsUrl) {
    var script = document.createElement("script");
    script.src = js_url + jsUrl;
    document.getElementsByTagName("head")[0].appendChild(script);
}

/**
 * 获取url中"?"符后的字串
 *
 * @param name url地址对应取的名称 使用方法 var xx = GetQueryString('xx');
 * @returns {*}
 */
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}

/**
 * 获取url中"?"符后的字串
 *
 * @param url
 * @returns {Object}
 * @constructor  返回对象方式
 */
function W_GetRequest(url) {
    url = url || location.search;
    var theRequest = new Object();
    if(url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

/**
 * 获取短信验证点击倒计时 ipnut按钮
 *
 * @param o 当前操作的this
 * @param _wait 倒计时秒数
 */
var _wait = 60;
get_code_time = function(o) {
    if(_wait == 0) {
        o.removeAttribute("disabled");
        o.value = "获取动态密码";
        _wait = 60;
    } else {
        o.setAttribute("disabled", true);
        o.value = "重新获取(" + _wait + ")";
        _wait--;
        setTimeout(function() {
            get_code_time(o)
        }, 1000)
    }
};

/**
 * 页面滚动到顶部或某个位置
 *
 * @param dom 带入id或者class 需要带入#或者. 选择器
 * @param headspace 滚动位置往上 或者往少 使用+ -表示
 */
function W_ScrollTo(dom, headspace) {
    var speed = 50,
        finishAbs = speed / 2 + 1,
        ScrollToTop = dom ? $(dom).offset().top : 0,
        ScrollTop = document.body.scrollTop;
    if(headspace) {
        ScrollToTop -= headspace;
    }
    $(window).scrollTop(ScrollToTop);
}


/**
 * 获取当前日期方法
 *
 * @returns {clock} 返回当前日期 格式 yyyy-mm-dd
 */
function CurentDate(){
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var clock = year + "-";
    if(month < 10)
        clock += "0";
    clock += month + "-";
    if(day < 10)
        clock += "0";
    clock += day;
    return(clock);
}

/**
 * 获取当前时间方法
 *
 * @returns {clock} 返回当前时间 格式 hh:mm
 */
function CurentTime(){
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var clock = '';
    if(hh < 10)
        clock += "0";
    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm;
    return(clock);
}

/**
 * 获取系统时间戳
 */
function get_time() {
    return Date.parse(new Date());
}

/**
 * HTML转义方法方法,使用于textarea 提交给后端 增加\n \a
 *
 * @param str 带入的需要转义的文本
 * @returns {s} 返回转义完的html代码
 */
function html_encode(str){
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&gt;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
}

/**
 * HTML转义方法方法,使用于textarea 后端返回 删除\n \a
 *
 * @param str 带入的需要转义的文本
 * @returns {s} 返回转义完的html代码
 */
function html_decode(str){
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&gt;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
}

/**
 * 一维数组去重方法
 *
 * @param arr 需要去重数组
 * @returns {Array} 返回已经去重数组
 */
function unique(arr) {
    var ret = [];
    var hash = {};
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var key = typeof(item) + item
        if (hash[key] !== 1) {
            ret.push(item);
            hash[key] = 1
        }
    }
    return ret
}

/**
 * 文字限制输入
 *
 * @param _this 当前操作的dom
 * @param Num 可以输入几个字
 * @returns {boolean} 返回剩余可输入的字数
 */
function checkLength(_this,Num) {
    var maxChars = Num; //取字数总数
    if(_this.val().length > maxChars) {
        _this.value = _this.val().substring(0, maxChars);
        return false;
    } else {
        var curr = maxChars - _this.val().length; //250 减去 当前输入的
        _this.prev().text(curr.toString() + '/'+Num+'');
        return true;
    }
};

//验证规则
var rule={
    phone:/^1(3|4|5|7|8)\d{9}$/, //手机号
    //phone:/^1(3\d|5[0-35-9]|8[025-9]|47)\d{8}$/, //手机号
    company:/^[\u4E00-\u9FA5a-zA-Z][\u4E00-\u9FA5a-zA-Z0-9\s-,-.]*$/,
    uname:/^[\u4E00-\u9FA5a-zA-Z][\u4E00-\u9FA5a-zA-Z0-9_]*$/,
    zh:/^[\u4e00-\u9fa5]+$/,//纯中文
    en:/^[a-zA-Z|\s]+$/, //纯英文
    card:/^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}(((((19|20)((\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(\d{2}(0[13578]|1[02])31)|(\d{2}02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[48])0229)))|20000229)\d{3}(\d|X|x))|(((\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(\d{2}(0[13578]|1[02])31)|(\d{2}02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[48])0229))\d{3}))$/, //身份证号
    int:/^[0-9]*$/, //整数
    s:'',
    NameEN:/^[a-zA-Z|\s]{2,20}$/, //英文姓名
    NameZH:/^[\u4e00-\u9fa5 ]{2,10}$/, //中文姓名
    Name:/^[\u4e00-\u9fa5 ]{2,10}$|^[a-zA-Z|\s]{2,20}$/, //中英姓名
    Nick:/^[\w|\d|\u4e00-\u9fa5]{3,15}$/, //昵称
    Num:/^\d+$/, //纯数字>0
    Num2:/^[+-]?\d+(\.\d+)?$/, //数字和小数点
    YZM:/^[0-9a-zA-Z]{4}$/, //图形验证码
    Postcode:/^[0-9]\d{5}$/,//邮政编码
    Mail:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, //邮箱
    PassWord:/^[0-9a-zA_Z]{6,128}$/, //密码
    // PassWord:/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*.]{6,20}$/, //密码
    HZ:/^[a-zA-Z0-9]{3,21}$/ //护照
};



//判断时候有重复文件引用
function isInclude(name) {
    var js = /js$/i.test(name);
    var es = document.getElementsByTagName(js ? 'script' : 'link');
    for (var i = 0; i < es.length; i++)
        if (es[i][js ? 'src' : 'href'].indexOf(name) != -1)return true;
    return false;
}
// alert(isInclude("aStudyPublic.js"));
