<template>
  <div class="zsw-music">
    <div class="wrapper">
      <div class="header">
        <div class="logo"></div>
        <div class="tags">
          <router-link
            to="/music/hall"
            :class="`tag ${active == 0 ? 'active' : ''}`"
            @click="tagClick(0)"
            >Music Hall</router-link
          >
          <router-link
            to="/music/singer"
            :class="`tag ${active == 1 ? 'active' : ''}`"
            @click="tagClick(1)"
            >Hot Singer</router-link
          >
          <router-link
            to="/music/profile"
            :class="`tag ${active == 2 ? 'active' : ''}`"
            @click="tagClick(2)"
            >Profile</router-link
          >
        </div>
        <div class="search">
          <input
            type="text"
            class="search-input"
            placeholder="keywords"
            maxlength="15"
          />
          <a href="javascript:;" class="search-btn">
            <i class="iconfont icon-sousuo"></i>
          </a>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ZSWMUSIC",
    data() {
      return {
        active: 0,
      }
    },
    methods: {
      tagClick(flag) {
        this.active = flag
      },
    },
  }
</script>

<style scoped lang="less">
  .zsw-music {
    .wrapper {
      width: 1100px;
      margin: 0 auto;
      .header {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo {
          background-image: url(~"http://img4.imgtn.bdimg.com/it/u=4197736396,2698895290&fm=26&gp=0.jpg");
          height: 80%;
          width: 48px;
          background-position: center 0;
          background-size: 165%;
          border-radius: 50%;
        }
        .tags {
          padding: 0 80px;
          .tag {
            color: salmon;
            padding: 0 50px;
            text-decoration: none;
            font-size: 1.2rem;
            height: 60px;
            display: inline-block;
            line-height: 60px;
            transition: all 0.2s;
            &.active {
              .hover();
            }
            &:hover {
              .hover();
            }
            .hover() {
              background-color: #ff6a6a;
              color: white;
            }
          }
        }
        .search {
          width: 30px;
          height: 30px;
          background-color: #2f3640;
          border-radius: 50%;
          line-height: 30px;
          transition: all 0.4s;
          padding: 5px;
          .search-input {
            width: 0;
            border: none;
            transition: 0.4s;
          }
          .search-btn {
            display: inline-block;
            border-radius: 50%;
            color: salmon;
            transition: 0.4s;
            background-color: transparent;
            height: 100%;
            width: 30px;
            text-align: center;
          }
          &:hover {
            width: 200px;
            border-radius: 999px;
            padding-left: 20px;
            .search-btn {
              background-color: white;
            }
            .search-input {
              width: 165px;
              display: inline-block;
            }
          }
        }
      }
    }
    height: 100%;
    position: relative;
    &::before {
      content: "";
      background-color: #f0ffff;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: -1;
    }
  }
  a {
    text-decoration: none;
  }
</style>
