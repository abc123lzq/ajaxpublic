> 主要是目的是让数据、结构、行为三分离让后期的增删改效率大增.

**基础使用方法**
> 默认事件是提示信息：增加方法用自定义事件或原型上添加
```
    //数据模块
    var data = {
        Intention: 'TourList',
        NO: GetQueryString('NO'),
        t: GetQueryString('t'),
        op: GetQueryString('op'),
        Cause: $('.choseLabel li input:checked').val(),
        Remark: html_encode($('#message').val())//防止xss攻击
    };
    
    
    //生成实例结构
    var orderCancex1 = new orderCance();
    orderCancex1.init({
        data: [data],
        Url: '/ajaxorder/',
        fire: fires
     });
    
    
    
    //自定义事件模块
    function fires() {
    bindEvent(orderCancex1, 'success', function () {
        console.log('自定义事件成功！');
    });
    bindEvent(orderCancex1, 'error', function () {
        console.log('自定义事件失败！');
    });
    }
```

###Promise使用方法
> 原理：采用bluebird来兼容所有游览器。在实例上套上Promise对象并把res函数传到结构里去取ajax的返回值

```
    //数据模块
    var data = {
        Intention: 'ExchangeCoupon',
        Code: html_encode($('#Code').val())
    };
    
    //生成实例结构
    var orderCancex2 = new Promise(function (res) {
    var orderCancex1 = new orderCance();
        orderCancex1.init({
        data: [data],
        Url: '/ajax/',
        res: res//把成功回调传入结构里以获取ajax得的数据
        });
    });
    
    
    orderCancex2.then(function (data) {
        console.log(data);
        }).catch(function (err) {
            throw new err(err);
        }).then(function () {
            console.log('我是可以无限回调')
    })

```
