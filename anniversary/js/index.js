const vm = new Vue({
  el: "#Page",
  data: {
    TokenKey: '',
    phone: '',
    userNmae: '',
    year: '',
    days: '',
    type: '',
    urlConfig: 'https://ei-gate.gcnao.cn/',
    // urlConfig: 'http://eip-test.gcnao.cn:8080/',
    bgImg: ''
  },
  methods: {
    // 获取用户信息
    getUserInfo() {
      this.$http({
        url: this.urlConfig + 'api/hr/hr/employee/query/cellphone/' + this.phone,
        method: 'get',
        headers: {
          'Authorization': this.TokenKey
        }
      }).then(function (res) {
        console.log(res)
        this.userNmae = res.data.name
        const hiredate = res.data.hiredate
        const curTime = new Date('2019/08/26').getTime() // 计算当前时间戳
        const resultTime = curTime - new Date(hiredate).getTime() // 计算入职时间戳
        this.year = Math.floor(resultTime / (3600 * 24 * 1000 * 365)) // 计算年龄
        const leaveTime = resultTime % (3600 * 24 * 1000 * 365) // 计算剩余时间戳
        this.days = Math.floor(leaveTime / (3600 * 24 * 1000)) // 计算天数
        // 根据年龄分类
        if (this.year > 15) {
          this.type = '见证辉煌的开创元勋'
          this.bgImg = 'img/index-1.jpg'
        } else if (this.year > 9) {
          this.type = '不忘初心的忠实老铁'
          this.bgImg = 'img/index.jpg'
        } else if (this.year > 4) {
          this.type = '风雨同舟的硬核队友'
          this.bgImg = 'img/index.jpg'
        } else if (this.year > 2) {
          this.type = '共担责任的至诚伙伴'
          this.bgImg = 'img/index-2.jpg'
        } else {
          this.type = '活力满满的新锐力量'
          this.bgImg = 'img/index-2.jpg'
        }
        // 动态修改背景图片
        this.$refs.Page.style.background = 'url(' + this.bgImg + ') 100% 100% / cover no-repeat'
      }, function (res) {
        console.log('error' + res)
      });
    }
  },
  mounted: function () {
    this.TokenKey = localStorage.getItem('SET_TOKEN')
    this.phone = localStorage.getItem('SET_USERNAME')
    this.getUserInfo()
  }
});
