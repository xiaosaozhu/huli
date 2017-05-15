//获取账号匡
var text =document.getElementById("acn");
//获取账号匡的红字
var latext=document.getElementsByClassName("latext");
//获取密码框
var pass= document.getElementById("pass");
//获取密码框的红字
var pstext =document.getElementById("pstext");
//获取登陆框
var btn =document.getElementById("btn");
//获取确认密码
var password =document.getElementById("password");
//获取确认密码红字
var psstext = document.getElementById("psstext");
var tel = document.title;
//储存账号密码
var Accounts ="";
var passs =""
var determine1 =0;
var determine2 =0;
var determine3 =0;
var str1 =1;
btn.onclick =function(){
	if(tel =="注册"){
		if(determine1 == 1 && determine2 ==1 && determine3==1){
			Accounts = text.value;
			passs = pass.value;
			sessionStorage.setItem("accounts",Accounts);
			sessionStorage.setItem("passs",passs);
			alert("注册成功");
			location.href="../html/Land.html";
		}
		else{
			alert("注册失败");
		}
	}
	else{
		if(determine1 == 1 && determine2 ==1){
			Account =sessionStorage.getItem("accounts");
			passs = sessionStorage.getItem("passs");
			if(text.value == Account && passs == pass.value){
				alert("登陆成功");
				sessionStorage.setItem("str1",str1);
				location.href="../index.html";
			}
			else{
				alert("账号密码错误");
			}
		}
	}
}
text.oninput =function(){
	Account();
	if(tel == "登陆"){
		if(determine1 == 1 && determine2 ==1){
			btn.style.cursor ="pointer";
			btn.style.background ="#00ff62";
		}
		else{
			btn.style.cursor ="not-allowed";
			btn.style.background ="#838281";
		}
	}
	else{
		if(determine1 == 1 && determine2 ==1 && determine3 ==1){
			btn.style.cursor ="pointer";
			btn.style.background ="#00ff62";
		}
		else{
			btn.style.cursor ="not-allowed";
			btn.style.background ="#838281";
		}
	}
}
if(password){
	password.oninput = function(){
		passwordout();
		if(determine1 == 1 && determine2 ==1 && determine3 ==1){
			btn.style.cursor ="pointer";
			btn.style.background ="#00ff62";
		}
		else{
			btn.style.cursor ="not-allowed";
			btn.style.background ="#838281";
		}
	}

}

pass.oninput =function(){
	passout();
	if(tel == "登陆"){
		if(determine1 == 1 && determine2 ==1){
			btn.style.cursor ="pointer";
			btn.style.background ="#00ff62";
		}
		else{
			btn.style.cursor ="not-allowed";
			btn.style.background ="#838281";
		}
	}
	else{
		if(determine1 == 1 && determine2 ==1 && determine3 ==1){
			btn.style.cursor ="pointer";
			btn.style.background ="#00ff62";
		}
		else{
			btn.style.cursor ="not-allowed";
			btn.style.background ="#838281";
		}
	}
}
function Account(){
	var reg = /\w{1,}@+\w{1,}\.[A-Za-z]{1,}$/;
	if(reg.test(text.value)){
		latext[0].style.opacity ="0";
		return determine1=1;
	}
	else{
		latext[0].style.opacity = "1";
		return determine1=0;
	}
}
function passout(){
	if(pass.value.length <6){
		pstext.style.opacity="1";
		return determine2=0;
	}
	if(/^\d{1,}$/.test(pass.value)){
		pstext.style.opacity="1";
		return determine2=0;
	}
	if(/[A-Za-z0-9_]/.test(pass.value)){
		pstext.style.opacity="0";
		return determine2=1;
	}
	else{
		pstext.style.opacity="1";
		return determine2=0;
	}
}
function passwordout(){
	if(password.value == pass.value){
		psstext.style.opacity="0";
		return determine3=1;
	}
	else{
		psstext.style.opacity="1";
		return determine3=0;
	}
}
