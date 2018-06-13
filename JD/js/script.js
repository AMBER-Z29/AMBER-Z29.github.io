setInterval(function (){
    x();
    
},1000);
setInterval(function (){
    e();
    h();
},1500);
function x(){
    $(".news .center a").css({"transform": "translateY(-16px)","transition": "1s"});
}
function e(){
    $(".news .center a").css({"transform": "translateY(0px)","transition": "0s"});
}
function h(){
    $(".news .center a").eq(0).appendTo($(".news .center"));
}











//首页京东秒杀部分的效果（倒计时）

var zxx = {
    $: function(id){
        return document.getElementById(id);
    },
    futureDate: Date.UTC(2018, 5, 31, 16),
    obj: function(){
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
            day: zxx.$("day"),
            month: zxx.$("month"),
            year: zxx.$("year")
        }
    }
};
fnTimeCountDown(zxx.futureDate, zxx.obj());



var mySwiper = new Swiper ('.banner .swiper-container', {
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    

  })  






//为你推荐样式
//Vue
new Vue({
    el:"#bottom",
    data:{
        arrs:[
            {name:"自营【京东超市】e洁 自动收口垃圾袋加厚手提式 45c...",img:"img/weinituijian/01.png",price:"￥21.80",pe:"￥19.80"},
            {name:"安析 良选男士船袜5双庄 中通棉袜商务男袜子吸汗透气短袜 船...",img:"img/weinituijian/02.png",price:"￥38.00"},
            {name:"自营【京东超市】e洁 自动收口垃圾袋加厚手提式 45c...",img:"img/weinituijian/01.png",price:"￥21.80",pe:"￥19.80"},
            {name:"安析 良选男士船袜5双庄 中通棉袜商务男袜子吸汗透气短袜 船...",img:"img/weinituijian/02.png",price:"￥38.00"},
            {name:"自营【京东超市】e洁 自动收口垃圾袋加厚手提式 45c...",img:"img/weinituijian/01.png",price:"￥21.80",pe:"￥19.80"},
            {name:"安析 良选男士船袜5双庄 中通棉袜商务男袜子吸汗透气短袜 船...",img:"img/weinituijian/02.png",price:"￥38.00"},
            {name:"自营【京东超市】e洁 自动收口垃圾袋加厚手提式 45c...",img:"img/weinituijian/01.png",price:"￥21.80",pe:"￥19.80"},
            {name:"安析 良选男士船袜5双庄 中通棉袜商务男袜子吸汗透气短袜 船...",img:"img/weinituijian/02.png",price:"￥38.00"},
        ]
    }
})
        




//返回顶部样式
var dingbu = document.querySelector(".dingbu");
dingbu.addEventListener("click",function(){
    var q = setInterval(function(){
        document.body.scrollTop = document.body.scrollTop -20;
        document.documentElement.scrollTop = document.documentElement.scrollTop -20;
        if(document.body.scrollTop === 0){
            clearInterval(q);
        }
    },10)
    
})


//js滚动条事件
window.onscroll = function(){
    var ttop = document.querySelector(".dingbu");
    if(document.body.scrollTop > 400){
        ttop.style.display = "inline-block";
    }else{
        ttop.style.display = "none";
    }
}

//$(".dingbu").click(function(){
//    $("html,body").animate({scrollTop:0},500);
//})

//返回顶部样式  结束




//分类  的样式








new Vue({
    el:"#pic2",
    data:{
        pic:[
            {name:"电风扇",img:"img/fenlei/5b056472N771896da.png",link:""},
            {name:"手机",img:"img/fenlei/5b054fedN2ba90518 (1).jpg",link:""},
            {name:"空调",img:"img/fenlei/5b055000N410a7553.png",link:""},
            {name:"充电宝",img:"img/fenlei/5b055011Nb89b2bda.png",link:""},
            {name:"蓝牙耳机",img:"img/fenlei/5b05507eN6a4152bc.jpg",link:""},
            {name:"蚊帐",img:"img/fenlei/5b056485N5ff83ec1.png",link:""},
            {name:"凉席",img:"img/fenlei/5b05648bN0b429032.png",link:""},
            {name:"耳机",img:"img/fenlei/5b05522dNa2aae1bb.png",link:""},
            {name:"电饭煲",img:"img/fenlei/5b055555N9245f8aa.jpg",link:""},
            {name:"空调挂机",img:"img/fenlei/5b055225N991ebfb0.png",link:""},
            {name:"路由器",img:"img/fenlei/5b0565a7N8dbc0017.png",link:""},
            {name:"空调扇",img:"img/fenlei/5b0552f2Nac9a0c92.png",link:""},
            {name:"男鞋",img:"img/fenlei/5b0552eaNbc8f1bda.png",link:""},
            {name:"热水器",img:"img/fenlei/5b055235Nf8fb2d6c.png",link:""},
            {name:"防晒",img:"img/fenlei/5b055644Nf0b93238.jpg",link:""},
        ],num1:[
            {name:"小米",img:"img/fenlei/5a1692eeN105a64b4.png",link:""},
            {name:"华为",img:"img/fenlei/5a1692e2Nbea6e136.jpg",link:""},
            {name:"荣耀",img:"img/fenlei/5a1692e2N6df7c609.jpg",link:""},
            {name:"ipone",img:"img/fenlei/5a1692ebN8ae73077.jpg",link:""},
            {name:"vivo",img:"img/fenlei/5a169244Nff0179e0.png",link:""},
            {name:"oppo",img:"img/fenlei/5a169254N4bbbd9fb.png",link:""},
            {name:"魅族",img:"img/fenlei/5a169243N40eca33c.jpg",link:""},
            {name:"三星",img:"img/fenlei/5a16925aN8a6dfd03.png",link:""},
            {name:"一加",img:"img/fenlei/5a16923fNfc14307e.jpg",link:""},
            {name:"360手机",img:"img/fenlei/5a16924fNeac7677e.jpg",link:""},
            {name:"锤子手机",img:"img/fenlei/5a9fa5e0N6754e52a.jpg",link:""},
            {name:"努比亚",img:"img/fenlei/5a9fa5e7Nc5cc0f6b.jpg",link:""},
            {name:"老人机",img:"img/fenlei/5a169217N5d1b842e.jpg",link:""},
            {name:"游戏手机",img:"img/fenlei/5a169238Nc8f0882b.jpg",link:""},
            {name:"女性手机",img:"img/fenlei/5a9fa728Nbff29ad2.jpg",link:""},
        ],num2:[
            {name:"电水壶",img:"img/fenlei/5a17f1d2N8078d5e6.jpg",link:""},
            {name:"电压力锅",img:"img/fenlei/5a17f21dN905aaf4c.jpg",link:""},
            {name:"电饭煲",img:"img/fenlei/5a17f224Nea1d3f59.jpg",link:""},
            {name:"电磁炉",img:"img/fenlei/5a17f1edN56abbe6e.jpg",link:""},
            {name:"微波炉",img:"img/fenlei/5a17f203N50016f64.jpg",link:""},
            {name:"电饼铛",img:"img/fenlei/5a17f1e3Nf7957b34.jpg",link:""},
            {name:"豆浆机",img:"img/fenlei/5a17f229Nc4c681fb.jpg",link:""},
            {name:"多用途锅",img:"img/fenlei/5a17f1ccN019c7fda.jpg",link:""},
            {name:"料理机",img:"img/fenlei/5a17f237Nb9978251.jpg",link:""},
            {name:"榨汁机",img:"img/fenlei/5a17f224N9756f6e5.jpg",link:""},
            {name:"电烤箱",img:"img/fenlei/5a17f1f1N9c125c81.jpg",link:""},
            {name:"养生壶",img:"img/fenlei/5a17c966Nd140f4e3.jpg",link:""},
            {name:"电炖锅",img:"img/fenlei/5a17f1aeNf7647558.jpg",link:""},
            {name:"电烧烤炉",img:"img/fenlei/5a17f1a9N8a775fab.jpg",link:""},
            {name:"面包机",img:"img/fenlei/5a17f20aNde6af185.jpg",link:""},
        ],num3:[
            {name:"轻薄本",img:"img/fenlei/5a17b962Nf77d9f6c.jpg",link:""},
            {name:"游戏本",img:"img/fenlei/5a17b948Nf6918c9e.jpg",link:""},
            {name:"机械键盘",img:"img/fenlei/5a17ba73N07b12f0c.jpg",link:""},
            {name:"组装电脑",img:"img/fenlei/5a17f20aNde6af185.jpg",link:""},
            {name:"移动硬盘",img:"img/fenlei/5a17ba7fN0740c051.jpg",link:""},
            {name:"显卡",img:"img/fenlei/5a17ba57Nf179b4e4.jpg",link:""},
            {name:"游戏台式机",img:"img/fenlei/5a17ba8bN911b7264.jpg",link:""},
            {name:"家用打印机",img:"img/fenlei/5a17ba5dN8f6ffa5e.jpg",link:""},
            {name:"吃鸡装备",img:"img/fenlei/5a9fa34bNff4ef403.jpg",link:""},
            {name:"曲屏显示器",img:"img/fenlei/5a17ba6dNafc95373.jpg",link:""},
            {name:"投影仪",img:"img/fenlei/5a17ba61N61a74bc3.jpg",link:""},
            {name:"日本文具",img:"img/fenlei/5a9fa366N889aad0f.jpg",link:""},
            {name:"笔记本",img:"img/fenlei/5a17b976N7ab8a3a6.jpg",link:""},
            {name:"平板电脑",img:"img/fenlei/5a17b918N0785e503.jpg",link:""},
            {name:"一体机",img:"img/fenlei/5a17b978N2a93f7a9.jpg",link:""},
        ]
    }
})

//main 选项卡样式
var navli = document.querySelectorAll(".navli > li");
console.log(navli);
var navdiv = document.querySelectorAll(".col-xs-9 > div");
console.log(navdiv);

//索引的方法
for(i=0;i<navli.length;i++){
    navli[i].index = i;
    navli[i].onclick = function(){
        for(i=0;i<navli.length;i++){
//            先全部移除class
            navli[i].classList.remove("active");
            navdiv[i].classList.remove("active");
        }
//        然后再追加class
        navli[this.index].classList.add("active");
        navdiv[this.index].classList.add("active");
    }
}


//顶部
var opn = document.querySelector("#opn");
var open = document.querySelector(".open");
if(sessionStorage.open == "false"){
    open.style.display = "none";
}else{
    open.style.display = "block";
}

opn.onclick = function(){
    open.style.display = "none";
    sessionStorage.open = "false";
}






