<template>
  <div class="loading"></div>
</template>

<script>
  export default {
    name: "Loading",
    created() {
      console.log("created")
    },
  }
</script>

<style scoped lang="less">
  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 100px;
    height: 100px;
    background-image: linear-gradient(
      45deg,
      transparent,
      transparent 40%,
      pink
    );
    animation: rotate 1s infinite linear;
    border-radius: 50%;
    &::before {
      position: absolute;
      left: 3px;
      right: 3px;
      bottom: 3px;
      top: 3px;
      background-color: #fff;
      content: "";
      border-radius: 50%;
    }
    &::after {
      position: absolute;
      left: 3px;
      right: 3px;
      bottom: 3px;
      top: 3px;
      content: "";
      border-radius: 50%;
      background-image: linear-gradient(
        45deg,
        transparent,
        transparent 40%,
        pink
      );
      z-index: -1;
      filter: blur(10px);
    }
    @keyframes rotate {
      0% {
        filter: hue-rotate(0);
        transform: translate3d(-50%, -50%, 0) rotate(0);
      }
      100% {
        filter: hue-rotate(360deg);
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
      }
    }
  }
</style>
