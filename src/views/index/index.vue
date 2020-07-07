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
  </div>
</template>

<script>
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
        // transition: all 0.3s ease-in-out;
        box-shadow: 12px 12px 18px #cceffd;
        border: #fff 1px solid;
        top: -2px;
        left: 2px;
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
}
</style>