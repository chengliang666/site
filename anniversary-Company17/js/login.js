/*!
 * @Author: laichengliang
 * @Date: 2019-08-23 10:20
 * @Desc: 登陆页
 */
const vm = new Vue({
  el: "#Page",
  data: {
    // urlConfig: 'http://eip-test.gcnao.cn:8080/',
    urlConfig: 'https://ei-gate.gcnao.cn/',
    isCap: true,
    getCapWord: '获取验证码',
    loginForm: {
      bgUrl: 'img/login.jpg',
      username: '',
      captchaId: '',
      captcha: ''
    },
  },
  methods: {
    // 获取手机验证码
    getCap() {
      if (!this.isCap) {
        return
      }
      if (!this.loginForm.username) {
        alert('请输入手机号码')
        return
      }
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.loginForm.username)) {
        alert('手机号码有误')
        return
      }
      const data = {
        cellphone: this.loginForm.username,
        captchaType: 'PERSON_LOGIN'
      }
      this.$http({
        url: this.urlConfig + 'api/admin/interfac/call/get-cap',
        method: 'post',
        data
      }).then(function (res) {
        console.log(res)
        this.loginForm.captchaId = res.data.result.id
        // 验证码——倒计时
        const _this = this
        let num = 60
        const int = setInterval(() => {
          this.isCap = false
          const lit = num - 1
          if (num > 0) {
            num = lit
            _this.getCapWord = '重新获取(' + num + ')'
          } else {
            clearInterval(int)
            _this.getCapWord = '获取验证码'
            _this.isCap = true
          }
        }, 1000)
      }, function (res) {
	      alert('服务异常')
        console.log('error' + res)
      });
    },
    // 验证码登录
    handleLoginCap() {
      if (!this.loginForm.username) {
        alert('请输入手机号码')
        return
      }
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.loginForm.username)) {
        alert('手机号码有误')
        return
      }
      if (!this.loginForm.captcha) {
        alert('请输入验证码')
        return
      }
      const data = {
        body: {
          username: this.loginForm.username,
          accountType: 'PERSONAL',
          captchaId: this.loginForm.captchaId,
          captcha: this.loginForm.captcha
        }
      }
      this.$http({
        url: this.urlConfig + 'api/admin/interfac/call/phoneLogin',
        method: 'post',
        data
      }).then(function (res) {
        const data = res.data
        if (data.code !== 'SUCCESS') {
          console.log(data.message)
          alert(data.message)
        } else {
          console.log(data.result)
          localStorage.setItem('SET_TOKEN', data.result)
          localStorage.setItem('SET_USERNAME', this.loginForm.username)
          window.location.href = 'index.html'
        }
      }, function (res) {
        alert('服务异常')
        console.log('error' + res)
      });
    }
  }
});
