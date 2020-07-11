<template>
  <div class="help-box">
    <div class="help-content">
      <div class="help-left">
        <ul>
          <li class="titel" >热点问题</li>
          <li :class="{active: index ===  currentIndex}" @click='itemClick(index)'>安装、设置与运行</li>
          <li :class="{active: index ===  currentIndex}" @click='itemClick(index)'>登陆、员工与权限</li>
          <li :class="{active: index ===  currentIndex}" @click='itemClick(index)'>收银操作、快捷键</li>
          <li :class="{active: index ===  currentIndex}" @click='itemClick(index)'>硬件相关</li>
          <li :class="{active: index ===  currentIndex}" @click='itemClick(index)'>商品、库存与货流</li>
          <li :class="{active: index ===  currentIndex}" @click='itemClick(index)'>报表、数据与同步</li>
          <li :class="{active: index ===  currentIndex}" @click='itemClick(index)'>促销管理、优惠券</li>
          <li :class="{active: index ===  currentIndex}" @click='itemClick(index)'>我的店铺</li>
          <li :class="{active: index ===  currentIndex}" @click='itemClick(index)'>会员管理</li>
          <li :class="{active: index ===  currentIndex}" @click='itemClick(index)'>网店相关</li>
        </ul>
      </div>
      <div class="help-right">
        <div class="search">
          <div>热点问题</div>
        </div>
        <div class="search-list">
          <div class="list-item">
            <p v-for="item in problem" :key="item">{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      problem: [
        {
          text:
            ". 网店登陆提示错误. 错误将退货单据反结账，如何让后台的收入和利润保持一致？"
        },
        {
          text:
            ". 单件商品利润计算错误. 整单商品打折出现金额计算出错的问题. 数据清空以后前台无法登陆，后台重新新建工号后也无法登陆？"
        },
        { text: ". 为什么打印的交接班金额和后台日结报表里的不一样？" },
        { text: ". 为什么交接班的时候提示网络异常，数据提交失败？" },
        { text: ". 如何连接设置电子称？" },
        { text: ". 为什么小票打印出来是乱码？" },
        { text: ". 小票机不打印有哪几种原因？" },
        { text: ". 小票logo的大小和颜色可以自定义吗？" },
        { text: ". 厨房小票IP要填在哪里？" },
        { text: ". USB小票机突然不打印了？" },
        { text: ". 网口小票机如何获取IP？" },
        { text: ". USB口小票机如何连接？" },
        { text: ". 厨房打印机如何设置？" },
        { text: ". 为什么小票机打印出来有字没有商品名称？" },
        { text: ". 在哪里设置和修改小票机模板和字体？" },
        { text: ". 小票机需要驱动吗？" },
        { text: ". 餐饮行业怎么设置商品口味管理？" },
        { text: ". 如何设置桌号？" },
        { text: ". 为什么收银时会提示“单据存入失败”？" },
        { text: ". 收银时，找钱给客户的时候忘记要找多少钱了怎么办？" },
        { text: ". 收银时候如何去掉金额的尾数或者四舍五入？" },
        { text: ". 我想要退货，怎么操作？" },
        { text: ". 为什么按空格键（快捷键）不能收银了？" },
        { text: ". 员工有自己独立的后台吗？" },
        {
          text:
            ". 收银员是否可以登入后台操作进货/调货等，但只让他看到部分信息？"
        },
        { text: ". 为什么前台员工不能进行退货操作？" },
        { text: ". 为什么收银前台看不到日结报表？" },
        { text: ". 怎么给员工开通后台权限？" },
        { text: ". 软件登陆提示无此账号怎么办？" },
        { text: ". 收银员登录时，提示“工号不存在”怎么办？" },
        { text: ". 想要换个账号登录，如何操作？" },
        { text: ". 如何进入云端后台？" },
        { text: ". 如何注销账号 ？" },
        { text: ". 账号和工号有什么区别？" },
        { text: ". 如何登录PosPal银豹收银系统？" },
        { text: ". 为什么登录时提示“无法连接远程服务器”？" },
        {
          text:
            ". 为什么登陆时提示“当前程序发生错误，请尝试关闭软件后重试或及时反馈给我们”？"
        },
        { text: ". Xp系统安装以后，第二次开机后无法打开软件？" },
        { text: ". 安装软件时，提示“银豹收银系统已停止工作”？" },
        { text: ". 收银员登录时，提示“工号不存在”怎么办？" },
        { text: ". 想要换个账号登录，如何操作？" },
        { text: ". 如何进入云端后台？" },
        { text: ". 如何注销账号 ？" },
        { text: ". 账号和工号有什么区别？" },
        { text: ". 如何登录PosPal银豹收银系统？" },
        { text: ". 为什么登录时提示“无法连接远程服务器”？" },
        {
          text:
            ". 为什么登陆时提示“当前程序发生错误，请尝试关闭软件后重试或及时反馈给我们”？"
        },
        { text: ". Xp系统安装以后，第二次开机后无法打开软件？" },
        { text: ". 安装软件时，提示“银豹收银系统已停止工作”？" },
        { text: ". 收银员登录时，提示“工号不存在”怎么办？" },
        { text: ". 想要换个账号登录，如何操作？" },
        { text: ". 如何进入云端后台？" },
        { text: ". 如何注销账号？" },
        { text: ". 账号和工号有什么区别？" },
        { text: ". 如何登录PosPal银豹收银系统？" },
        { text: ". 为什么登录时提示“无法连接远程服务器”？" },
        {
          text:
            ". 为什么登陆时提示“当前程序发生错误，请尝试关闭软件后重试或及时反馈给我们”？"
        },
        { text: ". Xp系统安装以后，第二次开机后无法打开软件？" },
        { text: ". 安装软件时，提示“银豹收银系统已停止工作”？" },
        { text: ". 断网了还能正常收银吗？" },
        { text: ". 软件使用中突然断网会怎么样？" },
        { text: ". 为什么软件老是提示“系统错误”？" },
        { text: ". 为什么点击软件图标却打不开？" },
        { text: ". 开启软件时提示“已经开启不要重复开启”" },
        { text: ". 为什么刚下载软件安装后会出现报错？" }
      ],
      currentIndex: 0
    };
  },
  methods: {
  
  }
};
</script>
<style scoped lang="scss">
.help-box {
  width: 100%;
  padding: 200px 0;
  background: #f7fafc;
  font-weight: 400;
  font-size: 20px;
  color: #707070;
  .help-content {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    .help-left {
      width: 297px;
      font-size: 20px;
      line-height: 43px;
      color: #707070;
      .titel {
        border-bottom: 1px solid #707070;
        padding-left: 32px;
        background: #d3d7dc;
      }
      li {
        border-bottom: 1px solid #aab2bd;
        padding-left: 32px;
        cursor: pointer;
        &:hover {
          border-right: 5px solid #1352ae;
        }
      }
    }
    .help-right {
      padding-left: 53px;
      flex: 1;
      color: #707070;
      .search {
        line-height: 38px;
        background: #d3d7dc;
        padding-left: 13px;
      }
      .search-list {
        padding-left: 13px;
        .list-item {
          line-height: 44px;
        }
      }
    }
  }
}
</style>