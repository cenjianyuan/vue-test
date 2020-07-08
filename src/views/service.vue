<template>
  <div class="service">
    <div class="service-wrapper">
      <div class="service-box">
        <p class="service-p1">饭云智能餐饮</p>
        <p class="service-p1" style="margin-bottom: 38px;">运营效率解决方案</p>
        <p>为商家提供涵盖点餐、收银、预订、排队、外卖、报表、后厨管理等餐饮消费全流程的效率提升工具，打破数据孤岛，为业务发展带来更低成本、更高效率、更多可能。</p>
        <div class="service-btn">查看方案</div>
      </div>
      <div class="service-box box2">
        <div class="box-item">
          <img src="@/assets/index/service.png" alt />
          <div>
            <p class="service-p1">点餐管理</p>
            <p>
              多种点餐方式最大幅度提升点餐效率释放餐厅劳动力
              OnPOS点餐K-Mobile点餐Pad点餐
              Handset点餐微信门店点餐二维码点餐
              OnKiosk Tablet点餐
              OnKiosk Tower点餐
              OnPOS mini点餐
            </p>
          </div>
        </div>
        <div class="box-item">
          <img src="@/assets/index/service.png" alt />
          <div>
            <p class="service-p1">预订管理</p>
            <p>
              多渠道光速预定 让服务零距离
              微信预订 电话预订 到店预订
              准确记录顾客预订的需求
              以及顾客来源
            </p>
          </div>
        </div>
        <div class="box-item">
          <img src="@/assets/index/service.png" alt />
          <div>
            <p class="service-p1">报表管理</p>
            <p>
              运筹帷幄 轻松管理门店
              报表统计多样化
              经营报表统一汇总，经营状况一目了然。
              数据分析精准化
              深度挖掘数据信息，助力商业决策
              门店管理云端化
              随时随地查看报表，让老板高枕无忧
            </p>
          </div>
        </div>
        <div class="box-item">
          <img src="@/assets/index/service.png" alt />
          <div>
            <p class="service-p1">厨房信息系统</p>
            <p>
              传菜系统
              服务于传菜部，智能管理不同来源菜品，保障商品准确高效的从传菜部传送至顾客
              出品系统
              服务于堂口，智能管控菜品的出品进度
              保障厨房商品制作流程顺畅
            </p>
          </div>
        </div>
      </div>
      <div class="service-box box2">
        <div class="box-item">
          <img src="@/assets/index/service.png" alt />
          <div>
            <p class="service-p1">支付管理</p>
            <p>
              收银管理
              聚合多种支付方式 化繁为简
              支持多种移动支付方式闪电支付快捷体验/支付宝闪付会员储值微信支付/百度钱包银行卡现金Apple Pay
            </p>
          </div>
        </div>
        <div class="box-item">
          <img src="@/assets/index/service.png" alt />
          <div>
            <p class="service-p1">排队管理</p>
            <p>
              支持微信、点评、糯米等平台远程取号
              顾客可以在家、在公司、在电影院等排
              队取号
              自动提醒顾客准备入场
            </p>
          </div>
        </div>
        <div class="box-item">
          <img src="@/assets/index/service.png" alt />
          <div>
            <p class="service-p1">外卖管理</p>
            <p>
              众多C端入口 千万量级用户引流
              全渠道外卖融合，统一接单
              沉淀顾客信息拉动会员转化
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped lang="scss">
.service {
  width: 100%;
  padding: 200px 0;
  background: #f7fafc;
  .service-wrapper {
    max-width: 1143px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 28px;
    color: #434a54;
    display: flex;
    font-weight: 300;
    padding-top: 42px;
    .service-box {
      padding: 0 20px;
      .service-p1 {
        font-size: 28px;
        font-weight: bold;
        color: #000;
        line-height: 32px;
      }
      p {
        line-height: 34px;
        color: #636465;
      }
    }
    .box2 {
      .service-p1 {
        font-size: 22px;
        font-weight: bold;
        color: #000;
        line-height: 32px;
        margin-bottom: 20px;
      }
      .box-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 50px;
        img {
          position: relative;
          top: -13px;
        }
      }
    }
  }
  .service-btn{
    width: 153px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    border-radius: 8px;
    margin-top: 20px;
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