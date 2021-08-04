/**
 * @Author: laichengliang
 * @Date: 2017-10-28 17:58
 * @Desc: animation
 */
//第一页像飞机更换动画
$(".page1 .flight").on("webkitAnimationEnd", function () {
	$(this).removeClass("flyIn").addClass("scale");
	$(this).off("webkitAnimationEnd");
})

//第四页点击路灯的时候
$(".page4 .on").on("touchstart", function () {
	//移除点亮提示
	$(".page4 .guide").remove();
	//让亮的灯淡入
	$(this).addClass("fadeIn");
	//为bg1和title添加淡出
	$(".page4 .bg1").addClass("fadeOut");
	$(".page4 .title").addClass("fadeOut");
	//为bg2和know添加淡入
	$(".page4 .bg2").addClass("fadeIn");
	$(".page4 .know").addClass("fadeIn");
})

//音乐播放暂停的方法
var audio = document.getElementById("audio");
$(".music").on("touchstart", function () {
	if (audio.paused) {
		audio.play();
		this.src = "img/musicBtn.png";
	} else {
		audio.pause();
		this.src = "img/musicBtnOff.png";
	}
})
