<template>
  <div class="register">
    <div class="wrapper clearfix">
      <div class="left">
        <h1>Welcome Register!!</h1>
      </div>
      <div class="right">
        <h1 class="title">Hello!!</h1>
        <form>
          <div class="form-item">
            <i class="iconfont icon-yonghu"></i>
            <input
              type="text"
              v-model="form.username"
              maxlength="20"
              ref="user_input"
            />
            <p :class="`error ${name.occur ? 'occur_error' : ''}`">
              <i class="iconfont icon-jinggao"></i>
              <span>{{ name.name_error }}</span>
            </p>
            <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <i
                class="iconfont icon-qingchu"
                v-show="form.username"
                @click="handdleClear('username')"
              ></i>
            </transition>
          </div>
          <div class="form-item">
            <i class="iconfont icon-mima"></i>
            <input
              type="password"
              v-model="form.userpwd"
              maxlength="20"
              ref="pwd_input"
            />
            <i
              class="iconfont icon-keshi"
              @click="handlepwd('keshi')"
              ref="keshi"
            ></i>
            <p :class="`error ${pwd.occur ? 'occur_error' : ''}`">
              <i class="iconfont icon-jinggao"></i>
              <span>{{ pwd.pwd_error }}</span>
            </p>
            <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <i
                class="iconfont icon-qingchu"
                v-show="form.userpwd"
                @click="handdleClear('userpwd')"
              ></i>
            </transition>
          </div>
          <div class="form-item">
            <i class="iconfont icon-youxiang"></i>
            <input
              type="text"
              v-model="form.usermail"
              maxlength="20"
              ref="mail_input"
            />
            <p :class="`error ${mail.occur ? 'occur_error' : ''}`">
              <i class="iconfont icon-jinggao"></i>
              <span>{{ mail.mail_error }}</span>
            </p>
            <div
              :class="`send_mail_btn ${send_btn.disabled ? 'disabled' : ''}`"
              @click="sendMail"
            >
              <span v-show="!send_btn.isSent">send</span>
              <span class="countdown" v-show="send_btn.isSent">{{
                send_btn.countdown
              }}</span>
            </div>
            <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <i
                class="iconfont icon-qingchu"
                v-show="form.usermail"
                @click="handdleClear('usermail')"
              ></i>
            </transition>
          </div>
          <div class="form-item">
            <i class="iconfont icon-yanzhengma" title="验证码"></i>
            <input
              type="text"
              v-model="form.code"
              maxlength="20"
              ref="code_input"
            />
            <p :class="`error ${code.occur ? 'occur_error' : ''}`">
              <i class="iconfont icon-jinggao"></i>
              <span>{{ code.code_error }}</span>
            </p>
          </div>
          <div class="regitser-btn" @click="onSubmit">
            Register
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Validator from "./validator"
  export default {
    name: "Register",
    data() {
      return {
        form: {
          username: "",
          userpwd: "",
          // usertel: "",
          usermail: "",
          code: "",
        },
        validator: null,
        name: {
          name_error: "",
          occur: false,
        },
        pwd: {
          pwd_error: "",
          occur: false,
        },
        // tel: {
        //   tel_error: "",
        //   occur: false,
        // },
        mail: {
          mail_error: "",
          occur: false,
        },
        code: {
          code_error: "",
          occur: false,
        },
        send_btn: {
          isSent: false,
          countdown: 60,
          disabled: false,
        },
      }
    },
    methods: {
      prepare() {
        this.validator = new Validator()
      },
      validateName() {
        this.validator.setValidate(this.$refs.user_input, [
          {
            trigger: "blur",
            rule: /^[a-zA-Z](?=\w+\d)\w{3,}$/,
            callback: (flag) => {
              if (!flag) {
                this.name.name_error = "用户名必须由首字母和数字组成的4位数以上"
                this.name.occur = true
              } else {
                this.name.name_error = ""
                this.name.occur = false
              }
            },
          },
        ])
      },
      validatePwd() {
        this.validator.setValidate(this.$refs.pwd_input, [
          {
            trigger: "blur",
            rule: /^\w{6,}$/,
            callback: (flag) => {
              if (!flag) {
                this.pwd.pwd_error = "密码必须由字母和数字组成的6位数以上"
                this.pwd.occur = true
              } else {
                this.pwd.pwd_error = ""
                this.pwd.occur = false
              }
            },
          },
        ])
      },
      /*validateTel() {
        this.validator.setValidate(this.$refs.tel_input, [
          {
            trigger: "blur",
            rule: /^\d{11}$/,
            callback: (flag) => {
              if (!flag) {
                this.tel.tel_error = "电话号码必须由11位数字组成"
                this.tel.occur = true
              } else {
                this.tel.tel_error = ""
                this.tel.occur = false
              }
            },
          },
        ])
      },*/
      validateMail() {
        this.validator.setValidate(this.$refs.mail_input, [
          {
            trigger: "blur",
            rule: /^.+?@\w+?\.com$/,
            callback: (flag) => {
              if (!flag) {
                this.mail.mail_error = "必须是合法的邮箱格式"
                this.mail.occur = true
              } else {
                this.mail.mail_error = ""
                this.mail.occur = false
              }
            },
          },
        ])
      },
      validateCode() {
        this.validator.setValidate(this.$refs.code_input, [
          {
            trigger: "blur",
            rule: /^\d{6}$/,
            callback: (flag) => {
              if (!flag) {
                this.code.code_error = "验证码必须是六位数字"
                this.code.occur = true
              } else {
                this.code.code_error = ""
                this.code.occur = false
              }
            },
          },
        ])
      },
      validate() {
        this.validateName()
        this.validatePwd()
        // this.validateTel()
        this.validateMail()
        this.validateCode()
      },
      handlepwd() {
        let dom = this.$refs.keshi
        if (dom.className.indexOf("show_pwd") == -1) {
          dom.className += " show_pwd"
          this.$refs.pwd_input.type = "text"
        } else {
          dom.className = "iconfont icon-keshi"
          this.$refs.pwd_input.type = "password"
        }
      },
      handdleClear(attr) {
        this.form[attr] = ""
      },
      async onSubmit() {
        let flag = this.validator.verifyAll()
        if (flag) {
          let { data: res } = await this.$axios.post(
            "/user/register",
            this.form
          )
          if (res.meta.status == 200) {
            this.$message({
              type: "success",
              message: "注册成功",
              onAfterClosed: () => {
                this.$router.replace({
                  name: "home",
                  params: {
                    username: this.form.username,
                    userpwd: this.form.userpwd,
                  },
                })
              },
            })
          } else {
            this.$message({
              type: "error",
              message: res.meta.msg,
            })
          }
        }
      },
      sendMail() {
        if (this.send_btn.disabled || this.send_btn.isSent) return
        if (/^.+?@\w+?\.com$/.test(this.form.usermail) == false) {
          return this.$message({
            message: "邮箱格式错误",
          })
        }
        this.$axios.get("/getcode", {
          params: {
            mail: this.form.usermail,
          },
        })
        this.send_btn.isSent = true
        this.send_btn.disabled = true
        this.setMailCountdown()
      },
      setMailCountdown() {
        setTimeout(() => {
          this.send_btn.countdown--
          if (this.send_btn.countdown != 0) {
            this.setMailCountdown()
          } else {
            this.send_btn.isSent = false
            this.send_btn.disabled = false
            this.send_btn.countdown = 5
          }
        }, 1000)
      },
    },
    mounted() {
      this.prepare()
      this.validate()
    },
  }
</script>

<style scoped lang="less">
  * {
    user-select: none;
  }
  .register {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: "";
      display: block;
      height: 100%;
      background-image: radial-gradient(circle, #99cccc, #7171b7);
      position: absolute;
      width: 100%;
      filter: blur(144px);
      z-index: -1;
    }
    .wrapper {
      width: 1000px;
      height: 600px;
      background: linear-gradient(45deg, #7a88ff, #7affaf);
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 0 0 15px 5px #7affaf, 0 0 15px 10px #7a88ff;
      .left {
        width: calc(50% - 2px);
        height: 100%;
        border-right: 2px solid #7a88ff;
        float: left;
        text-align: center;
        h1 {
          margin-top: 200px;
          background-image: linear-gradient(-135deg, #7a88ff, #7affaf);
          background-clip: text;
          color: transparent;
        }
      }
      .right {
        width: calc(50% - 2px);
        height: 100%;
        border-left: 2px solid rgba(0, 0, 0, 0.2);
        float: right;
        h1 {
          margin-top: 70px;
          text-align: center;
          background-image: linear-gradient(-135deg, #7a88ff, #7affaf);
          background-clip: text;
          color: transparent;
        }
        form {
          width: 80%;
          margin: 0 auto;
          margin-top: 50px;
          .form-item {
            margin-bottom: 50px;
            position: relative;
            > i:first-child {
              width: 30px;
              height: 30px;
              font-size: 30px;
              vertical-align: -4px;
              margin-right: 10px;
              color: #7affaf;
            }
            > i:last-child {
              width: 20px;
              height: 20px;
              font-size: 20px;
              vertical-align: -4px;
              color: var(--danger-color);
              cursor: pointer;
            }
            > i[class*="icon-keshi"] {
              position: absolute;
              bottom: 3px;
              color: white;
              right: 30px;
              font-size: 20px;
              transition: color 0.2s;
              cursor: pointer;
              &.show_pwd {
                color: #67c23a;
              }
            }
            input {
              width: calc(100% - 60px);
              font-size: 1.5rem;
            }
          }
          .regitser-btn {
            @height: 50px;
            width: 150px;
            height: @height;
            border-radius: 10px;
            line-height: @height;
            text-align: center;
            margin: 0 auto;
            color: #90f7ec;
            font-size: 1.3rem;
            background-image: linear-gradient(
              135deg,
              #90f7ec 10%,
              #32ccbc 100%
            );
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              box-shadow: 0 0 10px 3px #32ccbc;
            }
          }
          .error {
            position: absolute;
            left: 40px;
            bottom: -20px;
            color: var(--danger-color);
            font-size: 1rem;
            opacity: 0;
            i {
              font-size: 1rem !important;
            }
            transition: all 0.2s;
            &.occur_error {
              opacity: 1;
            }
          }
          .send_mail_btn {
            position: absolute;
            bottom: 3px;
            right: 25px;
            height: 100%;
            line-height: 31px;
            background-color: #7affaf;
            opacity: 0.5;
            color: black;
            padding: 0 5px;
            border-radius: 5px;
            cursor: pointer;
            width: 40px;
            text-align: center;
            &:not(.disabled):hover {
              opacity: 0.7;
            }
            &.disabled {
              opacity: 0.7;
            }
          }
        }
      }
      @media screen and(max-width: 768px) {
        .left {
          display: none;
        }
        .right {
          width: 100%;
          border: none;
        }
        background-image: none;
        box-shadow: none;
      }
    }
  }
  .animated {
    animation-duration: 0.2s !important;
  }
</style>
