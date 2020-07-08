<template>
  <div class="fanyun-index">
    <div class="index-titel">
      <p>支持多种餐饮业态</p>
      <p>饭云智能餐饮解决方案支持</p>
      <p>正餐,快餐，团餐，自助，咖啡厅，饮品店，甜品店，生鲜店，便利店等业态。</p>
    </div>
    <div class="index-box1">
      <div class="box-1-1" v-for="item in 6" :key="item">
        <img src="@/assets/timg.png" alt />
        <p class="titel">西餐厅</p>
        <p>聚合多种支付方式 化繁为简</p>
        <p>支持多种移动支付方式闪电支付快捷体验支付宝闪付会员储值微信支付</p>
        <p class="ljie">了解更多</p>
      </div>
    </div>
    <div class="index-btn">更多应用方案</div>
    <div class="index-center">
      <div class="left-img">
        <div class="center-img">
          <img src="@/assets/index/1.png" alt />
        </div>
        <div class="center-text">
          <p class="text-1">饭云智能收银系统</p>
          <p class="text-2">业绩明显提升</p>
          <p class="text-3">
            菜品一键导入，多种餐台转换，实时掌控收银数据结果，断网也能正常点餐开台收款，支持多种移动支付方式，无缝集成3大外卖平台，
            软件兼容各系统平台及外接打印扫描等硬件，餐饮业态全覆盖的新一代收银系统
          </p>
          <div class="center-btn">了解饭云智能餐饮后台 ></div>
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="right-img">
        <div class="center-text">
          <p class="text-1">饭云智能餐饮云后台</p>
          <p class="text-2">用饭云后台掌控生意</p>
          <p class="text-3">一个系统就能管理你的生意，多端同步，用手机即可查询报表、商品、会员营销和货流尽在掌握</p>
          <div class="center-btn">了解饭云智能餐饮后台 ></div>
        </div>
        <div class="center-img">
          <img src="@/assets/index/2.png" alt />
        </div>
      </div>
    </div>
    <div class="index-center">
      <div class="left-img">
        <div class="center-img">
          <img src="@/assets/index/3.png" alt />
        </div>
        <div class="center-text">
          <p class="text-1">微信店铺</p>
          <p class="text-2">用餐高峰， 无需增加人力</p>
          <p class="text-3">
            饭云微店支持“微信自助点餐”功能，顾客只需扫描桌面二
            维码、或者登陆饭云微店，即可自助点餐，无需等待服务员
            到场。同时，后厨根据点餐内容即可按桌号备餐，全程自动
            化！帮助你实现高峰期客户分流，人力成本大大降低。
          </p>
          <div class="center-btn">了解饭云智能餐饮后台 ></div>
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="right-img">
        <div class="center-text">
          <p class="text-1">会员精准营销</p>
          <p class="text-2">精准的CRM， 帮你找回更多顾客</p>
          <p
            class="text-3"
          >玩转会员营销，无需羡慕大企业的CRM。现在您可以设置会员积分制度，并根据不同的客户设置充值赠送、满额立减和返现活动，实实在在回流更多资金。此外，饭云智能餐饮系统能够帮您分析潜水会员，一键设置短信推送，利用系统内置的促销功能实现激活。</p>
          <div class="center-btn">了解饭云智能餐饮后台 ></div>
        </div>
        <div class="center-img">
          <img src="@/assets/index/4.png" alt />
        </div>
      </div>
    </div>

    <div class="kds-box">
      <p class="kds-p1">KDS电子厨显</p>
      <p class="kds-p2">按时出菜，告别人为错单漏单</p>
      <p>餐厅前台的点餐数据实时同步到后厨显示屏，后厨根据点餐内容即可按桌号备餐，服务</p>
      <p>员也可用手机收到取菜通知，再不会出现因掉单漏单造成的麻烦。</p>
      <p>同时，一线管理人员可以在屏幕上看到实时的后厨工作量、备餐时间，管理人员即可实时作出优化安排。</p>
      <img src="@/assets/index/5.png" alt />
      <div class="center-btn">了解更多 ></div>
    </div>
    <div class="right-box">
      <div class="right-img">
        <div class="center-text">
          <p class="text-1">营业数据分析</p>
          <p class="text-2">餐饮专用分析报表，直指利润丢失根源</p>
          <p
            class="text-3"
          >销售额－成本＝利润？在发现利润原地踏步时，或许应该看看损耗。饭云智能餐饮系统支持菜品按原材料组合管理，能够让菜消耗与原材料挂钩，帮您从源头管理门店成本。同时，你可以利用菜品销售占比、口味销售占等多个维度比来衡量营业状况，找出滞销菜品，并制定畅销组合。</p>
          <div class="center-btn">了解饭云智能餐饮后台 ></div>
        </div>
        <div class="center-img">
          <img src="@/assets/index/6.png" alt />
        </div>
      </div>
    </div>
    <div class="index-center">
      <div class="left-img">
        <div class="center-img">
          <img src="@/assets/index/7.png" alt />
        </div>
        <div class="center-text">
          <p class="text-2">24h快速服务。</p>
          <p class="text-3">
            我们为终端用户提供专业的 24/7 技术支持服务，各个网点
            的工程师时刻准备为客户解答所有产品技术问题并提供上门
            或远程支持。我们的工程师还会提供远程软件培训。为使我
            们的客户可以快速的启用饭云智能产品服务方案, 我们还可
            提供新旧系统数据库迁移及菜单编程各项服务
          </p>
          <div class="center-btn">了解饭云智能餐饮后台 ></div>
        </div>
      </div>
    </div>
    <cooperation></cooperation>
    <cooperationText></cooperationText>
  </div>
</template>

<script>
import cooperation from "../layout/cooperation";
import cooperationText from "../layout/cooperation-text";
export default {
  components: {
    cooperation,
    cooperationText
  }
};
</script>
<style scoped lang="scss">
.fanyun-index {
  .index-titel {
    text-align: center;
    font-size: 20px;
    line-height: 38px;
    color: #707070;
    font-weight: 300;

    p:nth-child(1) {
      font-size: 38px;
      line-height: 43px;
      color: #322e2f;
      margin-bottom: 20px;
    }
  }
  .index-box1 {
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    margin: 0 auto;
    flex-wrap: wrap;
    line-height: 30px;
    font-weight: 300;
    margin-top: 80px;
    .box-1-1 {
      width: 30%;
      padding: 29px 36px;
      border: #d3d7dc 1px solid;
      border-radius: 8px;
      font-size: 18px;
      color: #434a54;
      position: relative;
      margin-bottom: 90px;
      box-sizing: border-box;
      &:hover {
        box-shadow: 10px 10px 18px #cceffd;
        border: #fff 1px solid;
        top: -2px;
        left: 2px;
        transition: all 0.25s ease-in-out;
      }
      img {
        width: 100%;
      }
      .titel {
        font-weight: bold;
      }
      .ljie {
        color: #1352ae;
        margin-top: 30px;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }
  .index-btn {
    width: 240px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    margin: 0 auto;
    font-size: 18px;
    border-radius: 8px;
    margin-bottom: 135px;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#24e4ff+0,10b6ff+100,10b7ff+100,41c4fe+100 */
    background: rgb(36, 228, 255); /* Old browsers */
    background: -moz-linear-gradient(
      left,
      rgba(36, 228, 255, 1) 0%,
      rgba(16, 182, 255, 1) 100%,
      rgba(16, 183, 255, 1) 100%,
      rgba(65, 196, 254, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      rgba(36, 228, 255, 1) 0%,
      rgba(16, 182, 255, 1) 100%,
      rgba(16, 183, 255, 1) 100%,
      rgba(65, 196, 254, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      rgba(36, 228, 255, 1) 0%,
      rgba(16, 182, 255, 1) 100%,
      rgba(16, 183, 255, 1) 100%,
      rgba(65, 196, 254, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#24e4ff', endColorstr='#41c4fe',GradientType=1 ); /* IE6-9 */
  }
  .index-center {
    background: #fff;
    .left-img {
      max-width: 1260px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 140px 0;
      .center-img {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 100%;
        }
      }
      .center-text {
        width: 50%;
        font-size: 20px;
        line-height: 48px;
        color: #707070;
        font-weight: 300;
        padding-left: 80px;
        .text-1 {
          font-size: 24px;
          color: #434a54;
        }
        .text-2 {
          font-size: 38px;
          color: #322e2f;
          font-weight: 400;
          margin-bottom: 50px;
        }
        .center-btn {
          width: 220px;
          height: 40px;
          border: 1px solid #01bcd5;
          color: #01bcd5;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
          font-size: 16px;
          border-radius: 8px;
          margin-top: 80px;
        }
      }
    }
  }
  .right-box {
    width: 100%;
    background: #f7fafc;
    .right-img {
      max-width: 1260px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 140px 0;
      .center-img {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 100%;
        }
      }
      .center-text {
        width: 50%;
        font-size: 20px;
        line-height: 48px;
        color: #707070;
        font-weight: 300;
        padding-right: 80px;
        padding-left: 46px;
        .text-1 {
          font-size: 24px;
          color: #434a54;
        }
        .text-2 {
          font-size: 38px;
          color: #322e2f;
          font-weight: 400;
          margin-bottom: 50px;
        }
        .center-btn {
          width: 220px;
          height: 40px;
          border: 1px solid #01bcd5;
          color: #01bcd5;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
          font-size: 16px;
          border-radius: 8px;
          margin-top: 80px;
        }
      }
    }
  }
  .kds-box {
    max-width: 1300px;
    margin: 0 auto;
    font-size: 20px;
    line-height: 38px;
    color: #707070;
    font-weight: 300;
    text-align: center;
    padding-top: 44px;
    padding-bottom: 50px;
    .kds-p1 {
      font-size: 24px;
      color: #434a54;
      margin-bottom: 26px;
    }
    .kds-p2 {
      font-size: 38px;
      color: #322e2f;
      font-weight: 400;
      margin-bottom: 30px;
    }
    img {
      max-width: 100%;
    }
    .center-btn {
      width: 146px;
      height: 40px;
      border: 1px solid #01bcd5;
      color: #01bcd5;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      font-size: 16px;
      border-radius: 8px;
      margin-top: 80px;
      margin: 0 auto;
      margin-top: 30px;
    }
  }
}
</style>