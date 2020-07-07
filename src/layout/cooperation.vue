<template>
  <div class="cooperation">
    <div class="cooperation-lunbo">
      <el-carousel trigger="click" height="592px">
        <el-carousel-item>
          <img src="@/assets/hezuo.jpg" />
          <div class="biaoqian">
            <p class="titel">饭云助力牧牛谷创新运营</p>
            <p>饭云金牌顾问团队拥有来自不同行业的咨询顾问，我们联合国际著名咨询公司，帮助企业实现了管理的信息化。 现在饭云企业版用户直接可以获得专属金牌服务，包含1对1顾问支持、技术支持、部署和迁移服务。</p>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/diannei.png" />
          <div class="biaoqian">
            <p class="titel">饭云助力牧牛谷创新运营</p>
            <p>饭云金牌顾问团队拥有来自不同行业的咨询顾问，我们联合国际著名咨询公司，帮助企业实现了管理的信息化。 现在饭云企业版用户直接可以获得专属金牌服务，包含1对1顾问支持、技术支持、部署和迁移服务。</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="cooperation-shang">
      <p class="titel">快速成长的品牌共同认可</p>
      <div class="cooperation-log">
        <ul>
          <li v-for="item in 24" :key="item">
            <img src="@/assets/timg5.png" />
          </li>
        </ul>
      </div>
    </div>
    <div class="cooperation-btn">查看所有合作案例</div>
    <div class="cooperation-fanan">
      <div class="fanan-text">
        <p>我们为所有餐厅提供价格低廉的软件解决方案</p>
        <p>真正让所有的经营者体验到管理自动化带来的优势</p>
        <p>同时达到最佳的投资回报率</p>
      </div>

      <div></div>
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
.cooperation-lunbo {
  max-width: 1300px;
  margin: 0 auto;
  background: azure;
  position: relative;
  img {
    position: absolute;
    z-index: 1;
  }

  .biaoqian {
    width: 522px;
    height: 355px;
    overflow: hidden;
    padding: 0 28px;
    font-size: 20px;

    position: relative;
    z-index: 2;
    color: #fff;
    line-height: 38px;
    margin-top: 109px;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1352ae+0,54eeef+97,54efef+100&0.6+0,0.6+100 */
    background: -moz-linear-gradient(
      left,
      rgba(19, 82, 174, 0.6) 0%,
      rgba(84, 238, 239, 0.6) 97%,
      rgba(84, 239, 239, 0.6) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      rgba(19, 82, 174, 0.6) 0%,
      rgba(84, 238, 239, 0.6) 97%,
      rgba(84, 239, 239, 0.6) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      rgba(19, 82, 174, 0.6) 0%,
      rgba(84, 238, 239, 0.6) 97%,
      rgba(84, 239, 239, 0.6) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#991352ae', endColorstr='#9954efef',GradientType=1 ); /* IE6-9 */

    .titel {
      font-size: 38px;
      margin-bottom: 45px;
      margin-top: 50px;
    }
  }
}
.cooperation-shang {
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
  padding-top: 310px;

  .titel {
    font-size: 38px;
    font-weight: 300;
    color: #322e2f;
  }
  .cooperation-log {
    text-align: left;
    margin-top: 100px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    li {
      width: 15%;
      list-style: none;
      margin-bottom: 35px;

      img {
        width: 100%;
      }
    }
  }
}
.cooperation-btn {
  width: 197px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #d3d7dc;
  border-radius: 8px;
  font-size: 20px;
  color: #01bcd5;
  margin: 0 auto;
  margin-top: 32px;
}
.fanan-text {
  font-size: 38px;
  line-height: 68px;
  font-weight: 300;
  text-align: center;
}
</style>
