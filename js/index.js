//获取背景图位子img_1
var img1 = document.getElementsByClassName("img_1_1")[0];
var str = 0;
setInterval(testImg1,3000);
function testImg1(){
	str = str + 1;
	if(str >2){
		str = 1;
	}
	if(str == 1){
		img1.style.backgroundImage ="url(img/bed2.png)";
	}
	if(str == 0){
		img1.style.backgroundImage ="url(img/bed1.jpg)";
	}
	if(str == 2){
		img1.style.backgroundImage ="url(img/Cabinet1.jpg)";
	}
}

