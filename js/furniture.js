//定义数据对象
var sofa = {
	name: ["终极沙发","终极沙发","终极沙发","终极沙发"],
	img: ["../img/Sofa1.jpg","../img/Sofa1.jpg","../img/Sofa1.jpg","../img/Sofa1.jpg"],
	old: ["￥500","￥500","￥500","￥500"],
	new: ["￥400","￥400","￥400","￥400"]
}
var tab ={
	name: ["终极板凳","终极板凳","终极板凳"],
	img: ["../img/tabcha1.jpg","../img/tabcha1.jpg","../img/tabcha1.jpg"],
	old: ["￥600","￥600","￥600","￥600"],
	new: ["￥500","￥500","￥500","￥500"],
}
var beds ={
	name: ["终极皮床","终极皮床","终极皮床","终极皮床"
		   ,"终极皮床"],
	img: ["../img/Bed1.jpg","../img/Bed1.jpg","../img/Bed1.jpg","../img/Bed1.jpg","../img/Bed1.jpg"],
	old: ["￥1000","￥1000","￥1000","￥1000","￥1000"],
	new: ["￥800","￥800","￥800","￥800","￥800"],
}
var stor ={
	name: ["终极皮柜","终极皮柜","终极皮柜","终极皮柜"
		   ,"终极皮柜"],
	img: ["../img/Cabinet2.jpg","../img/Cabinet2.jpg","../img/Cabinet2.jpg","../img/Cabinet2.jpg","../img/Cabinet2.jpg"],
	old: ["￥1000","￥1000","￥1000","￥1000","￥1000"],
	new: ["￥800","￥800","￥800","￥800","￥800"],
}

//var sofalen = loginsInfo.sofaname.length;
fur();
function fur(){
	var tle = document.title;
	if( tle == "沙发"){
		text(sofa);
	}
	if (tle == "桌椅"){
		text(tab);
	}
	if(tle == "床"){
		text(beds)
	}
	if(tle =="柜子"){
		text(stor);
	}

}
function text(param){
	//生成位子
	var choose = document.getElementsByClassName("choose")[0];
	for(var i=0;i<param.name.length;i++){
		choose.innerHTML+=
			'<a>'+
			'<div class="goodsImg">'+
			'<img src="'+param.img[i]+'">'+
			'</div>'+
			'<div class="imgtext">'+
			'<span class="goodsname">'+param.name[i]+'</span>'+
			'<span class="oldprice">'+param.old[i]+'</span>'+
			'<span class="newprice">'+param.new[i]+'</span>'+
			'</div>'+
			'</a>';
	}
	//获取每个商品位子
	var a = choose.getElementsByTagName("a");
	for(let i = 0;i<a.length;i++){
		a[i].onclick =function(){
			location.href="../html/purchase.html";
			var name =param.name[i];
			var img =param.img[i];
			var old=param.old[i];
			var news=param.new[i];
			sessionStorage.setItem("name",name);
			sessionStorage.setItem("img",img);
			sessionStorage.setItem("old",old);
			sessionStorage.setItem("news",news);
		}
	}
}
