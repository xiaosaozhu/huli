//获取商品图片位子
var img = document.getElementById("img");
//获取商品名称
var names = document.getElementById("names");
//获取原来价格
var old = document.getElementById("old");
//获取现在价格
var news =document.getElementById("new");
//获取商品展示第一个的位子
var img1 =document.getElementById("img1");
//取出储存的信息
var getimg = sessionStorage.getItem("img");
var getname = sessionStorage.getItem("name");
var getold = sessionStorage.getItem("old");
var getnew = sessionStorage.getItem("news");
//获取下面显示图
var ull = document.getElementById("ull");
var li = ull.getElementsByTagName("li");
//获取商品数量
var str =document.getElementById("nub").textContent;
//获取显示数量位子
var numb =document.getElementById("numb");
//获取+
var plus = document.getElementById("plus");
//获取-
var minsu = document.getElementById("minsu");
purtest();
function purtest(){
	img.src = getimg;
	img1.src =getimg;
	names.textContent =getname;
	old.textContent =getold;
	news.textContent=getnew;
}
for(let i=0;i<li.length;i++){
	li[i].onclick=function(){
		var imgget = li[i].getElementsByTagName("img")[0].src;
		for(let j=0;j<li.length;j++){
			li[j].style.border="2px solid #fff";
		}
		this.style.border="2px solid #ff00e2";
		img.src = imgget;
		return;
	}
}
plus.onclick =function(){
	plusout();
}
minsu.onclick =function(){
	minsuout();
}
function plusout(){
	var numbe =numb.value;
	if(numbe >= 5){
		plus.style.cursor ="not-allowed";
		plus.style.background ="#c5c3c4";
		minsu.style.cursor ="pointer";
		minsu.style.background="#e3e3e3";
		return;
	}
	numbe = Number(numbe)+1;
	numb.value = numbe;
	if(numbe >= str){
		plus.style.cursor ="not-allowed";
		plus.style.background ="#c5c3c4";
	}
	if(numbe >= 0){
		minsu.style.cursor ="pointer";
		minsu.style.background="#e3e3e3";
	}
}
function minsuout(){
	var numbe =numb.value;
	if(numbe <= 0){
		plus.style.cursor ="pointer";
		plus.style.background ="#e3e3e3";
		minsu.style.cursor ="not-allowed";
		minsu.style.background="#c5c3c4";
		return;
	}
	numbe = Number(numbe)-1;
	numb.value = numbe;
	if(numbe < str){
		plus.style.cursor ="pointer";
		plus.style.background ="#e3e3e3";
	}
	if(numbe <= 0){
		minsu.style.cursor ="not-allowed";
		minsu.style.background="#c5c3c4";
	}
	else{
		minsu.style.cursor ="pointer";
		minsu.style.background="#e3e3e3";
		plus.style.cursor ="not-allowed";
		plus.style.background ="#c5c3c4";
	}
}
