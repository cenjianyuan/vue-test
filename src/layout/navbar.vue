<template>
  <div :class="'head '+headclass">
    <div class="navbar content">
      <div class="navbar-left">
        <img src="@/assets/logo.png" />
        <h4>饭云智能科技</h4>
      </div>
      <div>
        <ul class="nav-wrap">
          <li v-for="item in navs" :key="item.name" class="nav clearfix" @click="mypath(item.page)">
            <router-link :to="item.path">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="navbar-rg">
        <div class="login">登录</div>
        <div class="registered">免费注册</div>
      </div>
      <div class="language">中文 | EN</div>
    </div>

    <div class="content" v-show="page_num==0">
      <div class="content-noe">
        <p>深度融合餐饮场景</p>
        <p>饭云智能餐饮系统</p>
      </div>
      <div class="content-tow">专注餐饮 | 跨平台 | 云端同步 | 免费使用</div>
      <div class="content-btn">免费下载</div>
      <div class="content-foort">全面支持windows/安卓和iOS</div>
    </div>
    <div class="content" v-show="page_num==1">
      <div class="block">
        <el-carousel :interval="40000" arrow="never" trigger="click" height="908px">
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>饭云餐饮收银系统</p>
                  <p>不挑硬件平台</p>
                  <p>电脑也可收银</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy">
                  <el-image :src="banner1" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>FanYun AI 1X</p>
                  <p>智能餐饮系统</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy item_2">
                  <el-image :src="banner2" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>FanYun AI 1X</p>
                  <p>智能餐饮系统</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy item_3">
                  <el-image :src="banner3" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>FanYun AI 1X</p>
                  <p>智能餐饮系统</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy item_3">
                  <el-image :src="banner4" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="content nav_2_btn" v-show="page_num==2">
      <div class="block">
        <el-carousel :interval="40000" arrow="never" trigger="click" height="908px">
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>饭云智能餐饮系统</p>
                  <p>中餐运营效率解决方案</p>
                </div>
                <div class="content-tow">
                  饭云智能餐饮系统多平台统一设计，采用扁
                  平化界面并重新设计功能布局， 更支持触屏
                  操作，为您快速提升收银效率。从传统餐饮
                  系统快速转换再无不适感。
                </div>
                <div class="content-btn">饭云智能收银系统</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy">
                  <el-image :src="banner5" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>饭云智能餐饮系统</p>
                  <p>中餐运营效率解决方案</p>
                </div>
                <div class="content-tow">
                  饭云智能餐饮系统多平台统一设计，采用扁
                  平化界面并重新设计功能布局， 更支持触屏
                  操作，为您快速提升收银效率。从传统餐饮
                  系统快速转换再无不适感。
                </div>
                <div class="content-btn">饭云智能收银系统</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy">
                  <el-image :src="banner5" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>饭云智能餐饮系统</p>
                  <p>中餐运营效率解决方案</p>
                </div>
                <div class="content-tow">
                  饭云智能餐饮系统多平台统一设计，采用扁
                  平化界面并重新设计功能布局， 更支持触屏
                  操作，为您快速提升收银效率。从传统餐饮
                  系统快速转换再无不适感。
                </div>
                <div class="content-btn">饭云智能收银系统</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy">
                  <el-image :src="banner5" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>饭云智能餐饮系统</p>
                  <p>中餐运营效率解决方案</p>
                </div>
                <div class="content-tow">
                  饭云智能餐饮系统多平台统一设计，采用扁
                  平化界面并重新设计功能布局， 更支持触屏
                  操作，为您快速提升收银效率。从传统餐饮
                  系统快速转换再无不适感。
                </div>
                <div class="content-btn">饭云智能收银系统</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy">
                  <el-image :src="banner5" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="content" v-show="page_num==3">
      <div class="content-item">
        <div class="content-left">
          <div class="content-noe">
            <p>实现质的飞跃</p>
            <p>需要有饭云餐饮系统</p>
          </div>
          <div class="content-tow">
            饭云智能餐饮系统能快速部署，数据无缝对接，快速上手
            能处理各项经营场景和找出经营不足，业绩也明显提升
            当然大家才更爱用
          </div>
          <div class="content-btn">免费注册</div>
        </div>
        <div class="content-rg">
          <div class="demo-image__lazy">
            <el-image :src="banner6" :lazy="true"></el-image>
          </div>
        </div>
      </div>
    </div>
    <div class="content" v-show="page_num==4">
      <div class="content-item">
        <div class="content-left">
          <div class="content-noe">
            <p>加入饭云</p>
            <p>为智能餐饮贡献智慧</p>
          </div>
          <div class="content-btn">我要加入</div>
        </div>
        <div class="content-rg">
          <div class="demo-image__lazy">
            <img :src="banner8" alt />
          </div>
        </div>
      </div>
      <div class="banner-bg">
        <img :src="banner7" alt />
      </div>
    </div>
    <div class="content" v-show="page_num==5">
      <div class="content-item">
        <div class="content-left">
          <div class="content-noe">
            <p>搜索获得帮助</p>
            <div class="search">
              <input type="text" placeholder="请输入关键字.." />
              <div class="search-btn">搜索</div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-bg">
        <img :src="banner9" alt />
      </div>
    </div>
    <div class="content" v-show="page_num==6">
      <div class="block">
        <el-carousel :interval="40000" arrow="never" trigger="click" height="908px">
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>饭云餐饮收银系统</p>
                  <p>不挑硬件平台</p>
                  <p>电脑也可收银</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy">
                  <el-image :src="banner1" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>FanYun AI 1X</p>
                  <p>智能餐饮系统</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy item_2">
                  <el-image :src="banner2" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>FanYun AI 1X</p>
                  <p>智能餐饮系统</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy item_3">
                  <el-image :src="banner3" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>FanYun AI 1X</p>
                  <p>智能餐饮系统</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy item_3">
                  <el-image :src="banner4" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="content" v-show="page_num==7">
      <div class="block">
        <el-carousel :interval="40000" arrow="never" trigger="click" height="908px">
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>饭云餐饮收银系统</p>
                  <p>不挑硬件平台</p>
                  <p>电脑也可收银</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy">
                  <el-image :src="banner1" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>FanYun AI 1X</p>
                  <p>智能餐饮系统</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy item_2">
                  <el-image :src="banner2" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>FanYun AI 1X</p>
                  <p>智能餐饮系统</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy item_3">
                  <el-image :src="banner3" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content-item">
              <div class="content-left">
                <div class="content-noe">
                  <p>FanYun AI 1X</p>
                  <p>智能餐饮系统</p>
                </div>
                <div class="content-tow">3秒极速支付 聚合微信 支付宝 银联 Apple pay等多种支付方式让账单一目了然</div>
                <div class="content-btn">免费下载</div>
                <div class="content-foort">全面支持windows/安卓和iOS</div>
              </div>
              <div class="content-rg">
                <div class="demo-image__lazy item_3">
                  <el-image :src="banner4" :lazy="true"></el-image>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { name: "首页", path: "/", page: "0" },
        { name: "智能产品", path: "/", page: "1" },
        { name: "服务方案", path: "/", page: "2" },
        { name: "合作案例", path: "/", page: "3" },
        { name: "加入我们", path: "/", page: "4" },
        { name: "帮助中心", path: "/", page: "5" },
        { name: "官方商城", path: "/", page: "6" },
        { name: "下载中心", path: "/", page: "7" }
      ],
      banner1: require("../assets/banner1.png"),
      banner2: require("../assets/banner2.png"),
      banner3: require("../assets/banner3.png"),
      banner4: require("../assets/banner4.png"),
      banner5: require("../assets/sucai2.png"),
      banner6: require("../assets/banner6.png"),
      banner7: require("../assets/banner7.png"),
      banner8: require("../assets/banner5.png"),
      banner9: require("../assets/banner8.png"),
      page_num: 0,
      headclass: ""
    };
  },
  ready() {},
  methods: {
    mypath(page) {
      let self = this;
      console.log(page);
      this.page_num = page;
      if (page == 0) {
        this.headclass = "";
      }
      if (page == 1) {
        this.headclass = "head_1";
      }
      if (page == 2) {
        this.headclass = "head_2";
      }
      if (page == 3) {
        this.headclass = "head_3";
      }
      if (page == 4) {
        this.headclass = "head_4";
      }
      if (page == 5) {
        this.headclass = "head_5";
      }
      if (page == 6) {
        this.headclass = "head_6";
      }
      if (page == 7) {
        this.headclass = "head_7";
      }
    }
  },
  components: {},
  beforeCreate() {
    console.log(this.page_num);
    console.group("------beforeCreate创建前状态------");
  },
  created() {
    console.log(this.page_num);
    console.group("------created创建完毕状态------");
  },
  beforeMount() {
    console.log(this.page_num);
    console.group("------beforeMount挂载前状态------");
  },
  mounted() {
    console.log(this.page_num);
    console.group("------mounted 挂载结束状态------");
  },
  beforeUpdate() {
    console.group("beforeUpdate 更新前状态===============》");
  },
  updated() {
    console.group("updated 更新完成状态===============》");
  },
  beforeDestroy() {
    console.group("beforeDestroy 销毁前状态===============》");
  },
  destroyed() {
    console.group("destroyed 销毁完成状态===============》");
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 1300px;
  margin: 0 auto;
}
.head {
  background: url("../assets/index-top.png") no-repeat;
  height: 1080px;
  background-size: 100%;
  min-width: 1300px;
  .navbar {
    display: flex;
    color: #fff;
    min-width: 1300px;
    align-items: center;
    padding-top: 30px;
    position: relative;
    .nav-wrap {
      margin-left: 142px;
      li {
        list-style: none;
        display: inline-block;
        font-size: 14px;
        width: 79px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        &:hover {
          background: #093b90;
          font-weight: bold;
          cursor: pointer;
          border-radius: 8px;
        }
      }
    }

    .navbar-left {
      display: flex;
      align-items: center;
      h4 {
        font-size: 28px;
        font-weight: bold;
        margin-left: 3px;
      }
    }
    .navbar-rg {
      margin-left: 85px;
      display: inline-flex;
      align-items: center;
      font-size: 16px;
      line-height: 38px;
      text-align: center;
      .login {
        width: 75px;
        border: 1px solid #cfe2f5;
        border-radius: 4px;
        cursor: pointer;
      }
      .registered {
        border-radius: 4px;
        width: 122px;
        background: #cfe2f5;
        margin-left: 15px;
        cursor: pointer;
      }
    }
    .language {
      position: absolute;
      right: 2px;
      top: 5px;
      font-size: 14px;
    }
  }
  .content {
    color: #fff;
    line-height: 1;
    .content-noe {
      font-size: 44px;
      margin-top: 218px;
      margin-left: 116px;
      p {
        margin-bottom: 18px;
      }
    }
    .content-tow {
      margin-left: 116px;
      font-size: 18px;
      margin-top: 32px;
      width: 338px;
      line-height: initial;
    }
    .content-btn {
      margin-left: 116px;
      width: 298px;
      height: 62px;
      text-align: center;
      line-height: 62px;
      font-size: 28px;
      border-radius: 8px;
      margin-top: 92px;
      cursor: pointer;
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#24e4ff+0,10b7ff+100 */
      background: rgb(36, 228, 255); /* Old browsers */
      background: -moz-linear-gradient(
        left,
        rgba(36, 228, 255, 1) 0%,
        rgba(16, 183, 255, 1) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        left,
        rgba(36, 228, 255, 1) 0%,
        rgba(16, 183, 255, 1) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to right,
        rgba(36, 228, 255, 1) 0%,
        rgba(16, 183, 255, 1) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#24e4ff', endColorstr='#10b7ff',GradientType=1 ); /* IE6-9 */
    }
    .content-foort {
      margin-top: 16px;
      margin-left: 116px;
      width: 298px;
      text-align: center;
      color: #5be3ee;
      font-size: 18px;
    }
  }
}
.head_1 {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1592e6+0,016b8f+0,016b8e+0,01dae0+99,01dae0+100,1592e6+100 */
  background: rgb(21, 146, 230); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(21, 146, 230, 1) 0%,
    rgba(1, 107, 143, 1) 0%,
    rgba(1, 107, 142, 1) 0%,
    rgba(1, 218, 224, 1) 99%,
    rgba(1, 218, 224, 1) 100%,
    rgba(21, 146, 230, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(21, 146, 230, 1) 0%,
    rgba(1, 107, 143, 1) 0%,
    rgba(1, 107, 142, 1) 0%,
    rgba(1, 218, 224, 1) 99%,
    rgba(1, 218, 224, 1) 100%,
    rgba(21, 146, 230, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(21, 146, 230, 1) 0%,
    rgba(1, 107, 143, 1) 0%,
    rgba(1, 107, 142, 1) 0%,
    rgba(1, 218, 224, 1) 99%,
    rgba(1, 218, 224, 1) 100%,
    rgba(21, 146, 230, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1592e6', endColorstr='#1592e6',GradientType=1 ); /* IE6-9 */
  li {
    &:hover {
      background: #01a7ba !important;
    }
  }
  .content-noe,
  .content-tow,
  .content-btn {
    margin-left: 90px !important;
  }
  .content-item {
    display: flex;
    align-items: flex-end;
    .item_2 {
      margin-left: 126px;
      top: 20px;
      position: relative;
    }
    .item_3 {
      margin-left: 271px;
      top: 30px;
      position: relative;
    }
  }
}
.head_2 {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#320d98+0,9e81f5+100 */
  background: rgb(50, 13, 152); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(50, 13, 152, 1) 0%,
    rgba(158, 129, 245, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(50, 13, 152, 1) 0%,
    rgba(158, 129, 245, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(50, 13, 152, 1) 0%,
    rgba(158, 129, 245, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#320d98', endColorstr='#9e81f5',GradientType=1 ); /* IE6-9 */
  li {
    &:hover {
      background: #9d79ff !important;
    }
  }
  .content-noe,
  .content-tow,
  .content-btn,
  .content-foort {
    margin-left: 0 !important;
  }
  .content-noe {
    width: 440px;
  }
  .content-item {
    display: flex;
    align-items: flex-end;
  }
  .nav_2_btn .content-btn {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b59bff+0,9873ff+100 */
    background: rgb(181, 155, 255); /* Old browsers */
    background: -moz-linear-gradient(
      left,
      rgba(181, 155, 255, 1) 0%,
      rgba(152, 115, 255, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      rgba(181, 155, 255, 1) 0%,
      rgba(152, 115, 255, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      rgba(181, 155, 255, 1) 0%,
      rgba(152, 115, 255, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b59bff', endColorstr='#9873ff',GradientType=1 ); /* IE6-9 */
  }
}
.head_3 {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b93fb2+0,b78cf2+100 */
  background: rgb(185, 63, 178); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(185, 63, 178, 1) 0%,
    rgba(183, 140, 242, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(185, 63, 178, 1) 0%,
    rgba(183, 140, 242, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(185, 63, 178, 1) 0%,
    rgba(183, 140, 242, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b93fb2', endColorstr='#b78cf2',GradientType=1 ); /* IE6-9 */
  li {
    &:hover {
      background: #ba3fb1 !important;
    }
  }
  .content-left {
    position: relative;
    z-index: 1;
  }
  .content-rg {
    position: absolute;
    top: 275px;
    left: 50%;
    margin-left: -876px;
  }

  .content-noe,
  .content-tow,
  .content-btn,
  .content-foort {
    margin-left: 112px !important;
  }
}
.head_4 {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#11b280+0,1cbdae+100 */
  background: rgb(17, 178, 128); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(17, 178, 128, 1) 0%,
    rgba(28, 189, 174, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(17, 178, 128, 1) 0%,
    rgba(28, 189, 174, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(17, 178, 128, 1) 0%,
    rgba(28, 189, 174, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#11b280', endColorstr='#1cbdae',GradientType=1 ); /* IE6-9 */
  li {
    &:hover {
      background: #15ab7d !important;
    }
  }
  .content-noe,
  .content-btn {
    margin-left: 60px !important;
    margin-right: 120px;
  }
  .content-item {
    display: flex;
    align-items: center;
  }
  .content-left,
  .navbar {
    position: relative;
    z-index: 2;
  }
  .content-rg {
    margin-top: 148px;
  }
  .banner-bg {
    img {
      width: 100%;
      position: absolute;
      left: 0;
      top: -141px;
    }
  }
}
.head_5 {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#83ab15+0,b1d038+100 */
  background: rgb(131, 171, 21); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(131, 171, 21, 1) 0%,
    rgba(177, 208, 56, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(131, 171, 21, 1) 0%,
    rgba(177, 208, 56, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(131, 171, 21, 1) 0%,
    rgba(177, 208, 56, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#83ab15', endColorstr='#b1d038',GradientType=1 ); /* IE6-9 */
  li {
    &:hover {
      background: #3dab15 !important;
    }
  }
  .content-left,
  .navbar {
    position: relative;
    z-index: 2;
  }
  .content-item {
    display: flex;
    justify-content: center;
  }
  .content-noe {
    width: 733px;
    height: 65px;
    margin: 0 auto;
    p {
      font-size: 28px;
      padding-left: 23px;
      font-weight: bold;
    }
    .search {
      border-radius: 40px;
      width: 100%;
      position: relative;
      input {
        width: 100%;
        height: 65px;
        border: #cfe2f5 4px solid;
        border-radius: 40px;
        color: #707070;
        padding-left: 20px;
        font-size: 20px;
      }
      .search-btn {
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#75dcfa+0,74c1fc+100 */
        background: rgb(117, 220, 250); /* Old browsers */
        background: -moz-linear-gradient(
          left,
          rgba(117, 220, 250, 1) 0%,
          rgba(116, 193, 252, 1) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
          left,
          rgba(117, 220, 250, 1) 0%,
          rgba(116, 193, 252, 1) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
          to right,
          rgba(117, 220, 250, 1) 0%,
          rgba(116, 193, 252, 1) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#75dcfa', endColorstr='#74c1fc',GradientType=1 ); /* IE6-9 */
        width: 130px;
        height: 65px;
        position: absolute;
        right: 0;
        top: 0;
        color: #fff;
        font-size: 28px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        border: #cfe2f5 4px solid;
        cursor: pointer;
      }
    }
  }
  .banner-bg {
    img {
      width: 100%;
      position: absolute;
      left: 0;
      top: -141px;
    }
  }
}
.head_6 {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ad0715+0,ed5b46+100 */
  background: rgb(173, 7, 21); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(173, 7, 21, 1) 0%,
    rgba(237, 91, 70, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(173, 7, 21, 1) 0%,
    rgba(237, 91, 70, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(173, 7, 21, 1) 0%,
    rgba(237, 91, 70, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ad0715', endColorstr='#ed5b46',GradientType=1 ); /* IE6-9 */
  li {
    &:hover {
      background: #f26e0e !important;
    }
  }
  .content-noe,
  .content-tow,
  .content-btn {
    margin-left: 90px !important;
  }
  .content-item {
    display: flex;
    align-items: flex-end;
    .item_2 {
      margin-left: 126px;
      top: 20px;
      position: relative;
    }
    .item_3 {
      margin-left: 271px;
      top: 30px;
      position: relative;
    }
  }
}
.head_7 {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#261188+0,06d6ea+100 */
  background: rgb(38, 17, 136); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(38, 17, 136, 1) 0%,
    rgba(6, 214, 234, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(38, 17, 136, 1) 0%,
    rgba(6, 214, 234, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(38, 17, 136, 1) 0%,
    rgba(6, 214, 234, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#261188', endColorstr='#06d6ea',GradientType=1 ); /* IE6-9 */
  li {
    &:hover {
      background: #154cab !important;
    }
  }
  .content-noe,
  .content-tow,
  .content-btn {
    margin-left: 90px !important;
  }
  .content-item {
    display: flex;
    align-items: flex-end;
    .item_2 {
      margin-left: 126px;
      top: 20px;
      position: relative;
    }
    .item_3 {
      margin-left: 271px;
      top: 30px;
      position: relative;
    }
  }
}
.el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 30px;
  transition: 0.8s;
  opacity: 1;
}
.el-carousel__indicator.is-active button {
  opacity: 1;
  width: 100px;
  height: 12px;
  border-radius: 12px;
}
</style>