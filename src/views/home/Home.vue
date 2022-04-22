<template>
  <div class="home">
    <form>
      <div class="wrapper">
        <div class="logo"></div>
        <div
          :class="`form-item ${!isInputing1 && !form.username ? '' : 'input'}`"
        >
          <input
            type="text"
            v-model="form.username"
            @focus="isInputing1 = true"
            @blur="isInputing1 = false"
          />
          <span
            :class="
              `placeholder ${!isInputing1 && !form.username ? '' : 'input'}`
            "
            >用户名</span
          >
          <span :class="`error ${form.username ? '' : 'show_err'}`">
            <i class="iconfont icon-jinggao"></i> 用户名不能为空</span
          >
        </div>
        <div
          :class="`form-item ${!isInputing2 && !form.userpwd ? '' : 'input'}`"
        >
          <input
            type="password"
            v-model="form.userpwd"
            @focus="isInputing2 = true"
            @blur="isInputing2 = false"
          />
          <span
            :class="
              `placeholder ${!isInputing2 && !form.userpwd ? '' : 'input'}`
            "
            >密码</span
          >
          <span :class="`error ${form.userpwd ? '' : 'show_err'}`"
            ><i class="iconfont icon-jinggao"></i> 密码不能为空</span
          >
        </div>
        <div class="submit" @click="onSubmit">
          登录
        </div>
        <router-link class="register" to="/register">注册</router-link>
      </div>
    </form>
    <router-link to="/music" class="tomusic">music</router-link>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        form: {
          username: "",
          userpwd: "",
        },
        isInputing1: false,
        isInputing2: false,
      }
    },
    methods: {
      async onSubmit() {
        let { data: res } = await this.$axios.post("/user/login", this.form)
        sessionStorage.setItem("token", res.token)
        if (res.meta.status == 200) {
          this.$message({
            message: res.meta.msg,
            type: "success",
          })
        } else {
          this.$message({
            message: res.meta.msg,
            type: "error",
          })
        }
        return false
      },
    },
    mounted() {
      if (this.$route.params) {
        const { username, userpwd } = this.$route.params
        this.form.username = username
        this.form.userpwd = userpwd
      }
    },
  }
</script>

<style lang="less" scoped>
  * {
    user-select: none;
  }
  @bgurl: "https://i.loli.net/2020/04/19/lQJpFfaKtIbUG7H.jpg";
  .home {
    background-image: url(@bgurl);
    height: 100%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      width: 900px;
      height: 500px;
      background-image: url(@bgurl);
      background-attachment: fixed;
      box-shadow: 0 3px 44px 0 rgba(0, 0, 0, 0.5);
      padding: 100px;
      @media screen and (max-width: 768px) {
        width: 100% !important;
        padding: 100px 50px;
        .form-item {
          margin: 50px 0 !important;
        }
      }
      .wrapper {
        .logo {
          width: 100px;
          height: 100px;
          background-image: url(~"http://img4.imgtn.bdimg.com/it/u=4197736396,2698895290&fm=26&gp=0.jpg");
          background-position: center 0;
          background-size: 165%;
          margin: 0 auto;
          border-radius: 50%;
          opacity: 0.7;
          margin-bottom: 50px;
        }
        .form-item {
          margin: 50px 100px;
          position: relative;
          .placeholder {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.1rem;
            color: white;
            transition: all 0.3s;
            &.input {
              left: 0;
              top: -5px;
              font-size: 1rem;
            }
          }
          input {
            font-size: 1.5rem;
            padding: 10px 10px;
            box-sizing: border-box;
            position: relative;
            z-index: 1;
          }
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            height: 3px;
            left: 0;
            background-color: #00ffff;
            transition: width 0.3s;
            width: 0;
          }
          &.input::after {
            width: 100%;
          }
          .error {
            position: absolute;
            color: var(--danger-color);
            left: 0;
            bottom: 10px;
            z-index: -1;
            transition: all 0.2s;
            &.show_err {
              bottom: -25px;
              z-index: 0;
            }
          }
        }
        .submit {
          background-image: linear-gradient(
            135deg,
            #6e8efb,
            var(--theme-color)
          );
          width: 200px;
          height: 70px;
          margin: 0 auto;
          margin-top: 70px;
          border-radius: 999px;
          text-align: center;
          line-height: 70px;
          color: var(--theme-color);
          font-size: 1.2rem;
          cursor: pointer;
        }
        .register {
          color: var(--theme-color);
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .tomusic {
      position: absolute;
      top: 20px;
      left: 20px;
      color: #97ffff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  input {
    width: 100%;
  }
</style>
