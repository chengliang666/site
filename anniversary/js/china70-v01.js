// 需求：根据设计图的比例去动态设置不同屏幕下面对应的font-size值
// 这段JS不要添加入口函数，并且引用的时候放到最前面
// ui的大小根据自己的需求去改
// 设计图的宽度
var ui = 750;
// 自己设定的font值
var font = 16;
// 得到比例值
var ratio = ui/font;
var oHtml = document.documentElement;
var screenWidth = oHtml.offsetWidth;
// 初始的时候调用一次
getSize();
window.addEventListener('resize', getSize);
// 在resize的时候动态设置fontsize值
function getSize(){
  screenWidth = oHtml.offsetWidth;
  // 限制区间
  if(screenWidth <= 320){
    screenWidth = 320;
  }else if(screenWidth >= ui){
    screenWidth = ui;
  }
  oHtml.style.fontSize = screenWidth/ratio + 'px';
  // console.log(oHtml.style.fontSize)
};
String.prototype.format = function () {
  var values = arguments;
  return this.replace(/\{(\d+)\}/g, function (match, index) {
      if (values.length > index) {
          return values[index];
      } else {
          return "";
      }
  });
};
const vm = new Vue({
  el: "#app",
  data: {
    chinaForm: {
      bgUrl: 'img/a-index.jpg',
      username: '',
      ananda: '',
      isGenerate: false,
      // anandas:[
      //   '{0}为祖国喝彩!'
      // ],
      imgs: [
        'a-template1.jpg', 'a-template2.jpg'
      ],
      configs: [
        'Config001', 'Config002'
      ],
      selectTemplateIndex: 0
    },
  },
  // computed: {
  //   ananda() {
  //     const index = this.random(this.chinaForm.anandas.length)
  //     return this.chinaForm.anandas[index].format(this.chinaForm.username)
  //   }
  // },
  methods: {
    random(len) {
      return Math.floor(Math.random()*100) % len
    },
    changeImage() {
      // const index = this.random(this.chinaForm.imgs.length)
      this.chinaForm.bgUrl = 'img/' + this.chinaForm.imgs[this.chinaForm.selectTemplateIndex]
    },
    downloadIamge(imgsrc, name) {//下载图片地址和图片名
      var image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        var url = canvas.toDataURL("image/jpg"); //得到图片的base64编码数据
    
        var a = document.createElement("a"); // 生成一个a元素
        var event = new MouseEvent("click"); // 创建一个单击事件
        a.download = name || "photo"; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = imgsrc;
    },
    generateImageHandle1(){
      if(!this.chinaForm.isGenerate) {
        if (!this.chinaForm.username) {
          alert('请输入姓名')
          return
        }
        if (!this.chinaForm.ananda) {
          alert('请输祝福语')
          return
        }
      }
      const url = 'http://ne.szewec.com/FP/api/GenerateImage/{0}|{1}|{2}'
        .format(this.chinaForm.configs[this.chinaForm.selectTemplateIndex], 
        encodeURIComponent(this.chinaForm.ananda),
        encodeURIComponent('@'+this.chinaForm.username));
      this.downloadIamge(url, 'TempPic')
    },
    // 点击生成海报
    generateImageHandle() {
      // this.chinaForm.isGenerate=localStorage.getItem('ISGENERATE')
      if(!this.chinaForm.isGenerate) {
        if (!this.chinaForm.username) {
          alert('请输入姓名')
          return
        }
        if (!this.chinaForm.ananda) {
          alert('请输祝福语')
          return
        }
        this.chinaForm.isGenerate=true
        // localStorage.setItem('ISGENERATE', this.chinaForm.isGenerate)
        // localStorage.setItem('USERNAME', this.loginForm.username)
      } else {
        // this.chinaForm.username=localStorage.getItem('USERNAME')
      }
      this.changeImage()
      // 动态修改背景图片
      // this.$refs.Page.style.background = 'url(' + this.chinaForm.bgUrl + ') 100% 100% / cover no-repeat'
    },
    selectTemplateHandle(index) {
      this.chinaForm.selectTemplateIndex = index
    }
  },
  created() {
    // this.changeImage()
  }
});
