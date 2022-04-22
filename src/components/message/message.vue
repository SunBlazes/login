<template>
  <transition
    enter-active-class="animated inDown"
    leave-active-class="animated out"
  >
    <div class="message" v-show="show" :style="messageStyle">
      <div class="message_wrapper">
        <p class="message_text">
          <i :class="`iconfont ${iconArr[type]}`"></i>
          <span>{{ message }}</span>
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Message",
    data() {
      return {
        show: false,
        duration: 3000,
        message: "message",
        center: true,
        iconArr: {
          success: "icon-chenggong",
          error: "icon-jinggao",
          info: "icon-Group-",
        },
        count: 1,
        type: "error",
        info: {
          color: "#909399",
          backgroundColor: "#fdf5e6",
        },
        success: {
          backgroundColor: "#f0f9eb",
          color: "#67C23A",
        },
        error: {
          backgroundColor: "#fef0f0",
          color: "var(--danger-color)",
        },
      }
    },
    watch: {
      show(nv) {
        if (nv) {
          setTimeout(() => {
            this.show = false
            setTimeout(() => {
              document.body.removeChild(this.$el)
            }, 200)
            this.onAfterClosed()
          }, this.duration)
        }
      },
    },
    computed: {
      messageStyle() {
        return {
          "text-align": this.center ? "center" : "initial",
          ...this[this.type],
          top: 40 * this.count + (this.count - 1) * 20 + "px",
        }
      },
    },
    methods: {
      onAfterClosed() {},
    },
  }
</script>

<style scoped lang="less">
  .message {
    position: fixed;
    width: 300px;
    line-height: 40px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    box-sizing: border-box;
    border-radius: 3px;
    z-index: 1000;
    min-height: 40px;
    margin-bottom: 100px;
    .message_wrapper {
      .message_text {
        line-height: 20px;
        width: 100%;
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      i {
        margin-right: 10px;
      }
    }
  }
  .animated {
    animation-duration: 0.2s !important;
  }
  @keyframes inDown {
    from {
      -webkit-transform: translate3d(0, -100%, 0) translateX(-50%);
      transform: translate3d(0, -100%, 0) translateX(-50%);
      visibility: visible;
      // top: 0;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0) translateX(-50%);
      transform: translate3d(0, 0, 0) translateX(-50%);
    }
  }
  .inDown {
    -webkit-animation-name: inDown;
    animation-name: inDown;
  }
  @keyframes out {
    from {
      opacity: 1;
      transform: translateX(-50%) translateY(0px);
    }

    to {
      opacity: 0;
      transform: translateX(-50%) translateY(-30px);
    }
  }
  .out {
    -webkit-animation-name: out;
    animation-name: out;
  }
</style>
