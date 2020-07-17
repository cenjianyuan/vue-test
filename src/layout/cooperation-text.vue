<template>
  <div class="cooperation">
    <div class="cooperation-fanan">
      <div class="fanan-ico">
        <div class="ico-box">
          <img src="@/assets/yingyong.png" alt />
          <div>
            <p class="titel">跨平台，跨设备</p>
            <p>你可以在Windows、iOS、安卓</p>
            <p>使用饭云进 行收银和生意管理，</p>
            <p>无需额外购买收银机。</p>
          </div>
        </div>
        <div class="ico-box">
          <img src="@/assets/tongdao.png" alt />
          <div>
            <p class="titel">零IT成本</p>
            <p>你将获得一套含收银系统、ERP、CRM、</p>
            <p>SCM的业务管理系统，更新和配套服务都</p>
            <p>交给我们，你无需额外IT支出。</p>
          </div>
        </div>
        <div class="ico-box">
          <img src="@/assets/shouhun.png" alt />
          <div>
            <p class="titel">享受企业级服务</p>
            <p>饭云提供专业的咨询顾问，为你提供远程</p>
            <p>协助，您可以选择电话、QQ、微信等任意</p>
            <p>方式联系到我们。</p>
          </div>
        </div>
      </div>
      <div class="fanan-btn">立即体验</div>
      <p class="fanan-win">全面支持windows/安卓和iOS</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.cooperation {
  background: #f7fafc;
}
.cooperation-fanan{
  margin-bottom: 200px;
}
.fanan-text {
  font-size: 38px;
  line-height: 68px;
  font-weight: 300;
  text-align: center;
}
.fanan-ico {
  display: flex;
  justify-content: space-between;
  max-width: 1268px;
  margin: 0 auto;
  font-size: 20px;
  color: #707070;
  line-height: 23px;
  font-weight: 300;
  // margin-top: 60px;
  padding-top: 60px;
  .ico-box {
    display: flex;
    width: 33%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .titel {
      font-size: 24px;
      color: #434a54;
      margin-bottom: 5px;
      margin-top: 75px;
    }
  }
}
.fanan-btn {
  margin: 0 auto;
  margin-top: 120px;
  cursor: pointer;
  width: 380px;
  height: 62px;
  line-height: 62px;
  border-radius: 8px;
  color: #fff;
  font-size: 28px;
  text-align: center;
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
.fanan-win {
  text-align: center;
  color: #656d78;
  font-size: 16px;
  margin-top: 9px;
}
</style>
