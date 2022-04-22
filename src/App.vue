<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",
  }
</script>

<style lang="less">
  html {
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    height: 100%;
  }
  #app {
    height: 100%;
  }
  input[type="text"],
  input[type="password"] {
    outline: none;
    border: none;
    background-color: transparent;
    color: #fff;
    border-bottom: 3px solid rgba(187, 255, 255, 0.4);
  }
  @themeColor: rgb(187, 255, 255);
  .none {
    opacity: 0 !important;
  }
  :root {
    --theme-color: #afeeee;
    --danger-color: #f56c6c;
  }
  @import url(//at.alicdn.com/t/font_1765369_i5n5v33myvs.css);
</style>
