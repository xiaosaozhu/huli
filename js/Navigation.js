document.onreadystatechange =function(){
	if(document.readyState == "interactive"){
		Navitest();
		title();
	}
}
//判定界面
function title(){
	var tle = document.title;
	//返回首页按钮
	var home = document.getElementById("home");
	var ind =document.getElementById("ind");
	//家具界面按钮
	var li = document.getElementsByClassName("li");
	if(tle == "户里家"){
		home.onclick = function(){
			location.href="html/Land.html";
		}
		ind.onclick = function(){
			location.href="#";
		}
		li[0].onclick = function(){
			location.href="html/sofas.html";
		}
		li[1].onclick = function(){
			location.href="html/tab.html";
		}
		li[2].onclick = function(){
			location.href="html/beds.html";
		}
		li[3].onclick = function(){
			location.href="html/stor.html";
		}
	}
	else{
		home.onclick = function(){
			location.href="../html/Land.html";
		}
		ind.onclick = function(){
			location.href="../index.html";
		}
		li[0].onclick = function(){
			location.href ="../html/sofas.html";
		}
		li[1].onclick = function(){
			location.href ="../html/tab.html";
		}
		li[2].onclick = function(){
			location.href ="../html/beds.html";
		}
		li[3].onclick = function(){
			location.href ="../html/stor.html";
		}
	}
}

//导航栏生成
function Navitest(){
	//生成导航栏位子
	var head = document.getElementById("head");
	//生成导航栏
	head.innerHTML =
		'<div class="header_main">'+
		'<div class="header_bg"></div>'+
		'<div class="mark"></div>'+
		'<div class="logo">'+
		'<a href="#" target="_self" id="ind">'+
		'</a>'+
		'</div>'+
		'<div class="loginshop">'+
		'<a class="login" id="home"></a>'+
		'<span></span>'+
		'<a class="shopping"></a>'+
		'</div>'+
		'<div class="select">'+
		'<span>成都地区</span>'+
		'</div>'+
		'<dl class="select_span">'+
		'<dt>成都地区</dt>'+
		'<dt>北京地区</dt>'+
		'<dt>上海地区</dt>'+
		'<dt>深圳地区</dt>'+
		'<dt>其他地区</dt>'+
		'</dl>'+
		'</div>'+
		'<div class="main_nav">'+
		'<ul class="ul">'+
		'<li class="li">'+
		'<a>沙发'+'&nbsp;&nbsp;&nbsp;SOFAS</a>'+
		'<div>'+
		'<a href="">单人位</a>'+
		'<a href="">双人位</a>'+
		'<a href="">三人位</a>'+
		'<a href="">休闲沙发</a>'+
		'<a href="">转角沙发</a>'+
		'</div>'+
		'</li>'+
		'<li class="li">'+
		'<a>桌椅&nbsp;&nbsp;&nbsp;TABLES/CHAIRS</a>'+
		'<div class="tab">'+
		'<a href="">餐桌</a><a href="">餐椅</a>'+

		'<a href="">书桌</a><a href="">凳子</a>'+
		'<a href="">电脑桌</a><a href="">休闲椅</a>'+
		'<a href="">梳妆台</a><a href="">户外椅</a>'+
		'<a href="" class="qt">其他</a>'+
		'</div>'+
		'</li>'+
		'<li class="li"><a>床'+'&nbsp;&nbsp;&nbsp;BEDS</a>'+
		'<div>'+
		'<a href="">1.5米</a>'+
		'<a href="">1.8米</a>'+
		'<a href="">其他</a>'+
		'</div>'+
		'</li>'+
		'<li class="li">'+'<a>柜&nbsp;&nbsp;&nbsp;STORAGE</a>'+
		'<div>'+
		'<a href="">衣柜</a><a href="">储物柜</a>'+
		'<a href="">书柜</a><a href="">电视柜</a>'+
		'<a href="">鞋柜</a><a href="">床头柜</a>'+
		'<a href="" class="qt">其他</a>'+
		'</div>'+
		'</li>'+
		'<li class="li">'+'<a>更多&nbsp;&nbsp;&nbsp;MORE</a>'+
		'<div>'+
		'<a href="">组合产品</a>'+
		'<a href="">日用家具</a>'+
		'<a href="">家具饰品</a>'+
		'<a href="">其他</a>'+
		'</div>'+
		'</li>'+
		'<li class="litext">'+
		'<input type="text" placeholder="搜索" class="text">'+
		'<i class="imgi"></i>'+
		'</li>'+
		'</ul>'+
		'</div>';
	//获取foot生成位子
	var foot = document.getElementById("foot");
	//生成footer
	foot.innerHTML =
		'<div class="ft_title">生活要过得朴素而有味道，但不一定过得奢华</div><div class="ft_mark"><div class="mark_key"><i>环保</i><span>无甲醛 大自然</span></div>	<div class="mark_key"><i>低价</i><span>低于购买价格6折</span></div>	<div class="mark_key"><i>安全</i><span>专业清洁消毒处理</span></div>	<div class="mark_key"><i>省心</i><span>专业物流配送安装</span></div>	<div class="mark_key"><i>快捷</i><span>24小时内送货</span></div>	</div><div class="ft_info"><div class="ft_info_con"><h2>关于我们</h2><p><a>关于户里&nbsp;</a><a>注册协议</a></p><p><a>业务合作&nbsp;</a><a>免责声明</a></p><p><a>加入户里&nbsp;</a><a>隐私保护</a></p></div><div class="ft_info_con"><h2>流程指南</h2><p><a>购买家具&nbsp;</a><a>出售家具</a></p><p><a>支付方式&nbsp;</a><a>配送安装</a></p><p><a>售后保障</a></p></div><div class="ft_info_con"><h2>会员中心</h2><p><a>会员计划</a></p><p><a>积分规则</a></p><p><a>投诉建议</a></p></div><div class="ft_info_con"><h2>联系客服</h2><span>电话：</span><span>028-67635062</span><span>邮箱：</span><span>hello@hulihome.com</span></div><div class="ft_info_con"><p><i></i><span>新浪微博@户里网</span></p><div class="sina"></div></div><div class="ft_info_con6"><p><i></i><span>关注微信"户里网"</span></p><div class="sina"></div></div></div><div class="ft_copy">蜀ICP备15028224号7&nbsp;&nbsp;成都户里科技有限公司</div>';
	//获取点击地区
	var select = document.getElementsByClassName("select")[0];
	//获取地区显示
	var sel =select.getElementsByTagName("span")[0];
	//获取其他地区
	var select_span = document.getElementsByClassName("select_span")[0];
	//获取登陆位子
	var home = document.getElementById("home");
	var str1 =sessionStorage.getItem("str1");
	log();
	function log(){
		if(str1 == 1){
			var name = sessionStorage.getItem("accounts");
			home.style.background ="none";
			home.textContent =name;
		}
		if(str1 == 0){
			var tle = document.title;
			if(tle=="户里家"){
				home.style.backgroundImage ="url(img/login.png)";
				home.textContent ="";}
			else{
				home.style.backgroundImage ="url(../img/login.png)";
				home.textContent ="";
			}
		}
	}
	//获取注销的位子
	var shop =document.getElementsByClassName("shopping")[0];
	shop.onclick=function(){
		var str1 =0;
		var tle = document.title;
		sessionStorage.setItem("str1",str1);
		if(tle=="户里家"){
			home.style.backgroundImage ="url(img/login.png)";
			home.textContent ="";}
		else{
			home.style.backgroundImage ="url(../img/login.png)";
			home.textContent ="";
		}
	}
	//获取地区信息
	var sel_span =select_span.getElementsByTagName("dt");
	for(let i=0;i<sel_span.length;i++){
		sel_span[i].onclick=function(){
			sel.textContent =sel_span[i].textContent;
			select_span.style.display ="none";
		}
	}
	select.onclick =function(){
		select_span.style.display ="block";
	}
	select_span.onmouseleave = function(){
		select_span.style.display ="none";
	}
}
