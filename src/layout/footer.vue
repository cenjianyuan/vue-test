<template>
  <div class="footer head_0">
    <div class="nav-footer">
      <div class="footer-box1">
        <div class="footer-logo">
          <img src="@/assets/logo.png" alt />
          <div>
            <p class="titer">智能饭云科技</p>
            <p>
              Copyright © 2018 fanyun Inc.
              All rights reserved.
            </p>
          </div>
        </div>
        <div class="police-badge">
          <img src="@/assets/jinghui.png" alt />
          <div>
            <p>粤ICP备18070982号-1</p>
            <p>粤公网安备 44040402000090号</p>
          </div>
        </div>
      </div>
      <div class="footer-box2">
        <p>官方商城&#12288;</p>
        <p>官方旗舰店</p>
        <p>自营商城&#12288;</p>
      </div>
      <div class="footer-box2">
        <p>关于我们</p>
        <p>公司简介</p>
        <p>公司动态</p>
        <p>产品服务</p>
        <p>合作案例</p>
      </div>
      <div class="footer-box2">
        <p>联系我们</p>
        <p>工作机会</p>
        <p>媒体合作</p>
        <p>渠道招商</p>
      </div>
      <div class="footer-box2">
        <p>在线咨询</p>
        <p>QQ&#12288;&#12288;</p>
        <p>旺旺&#12288;&#12288;</p>
        <p>微信&#12288;&#12288;</p>
      </div>
      <div class="footer-box2">
        <div class="fangshi">
          <p>联系方式</p>
          <p>400-000-000</p>
          <p>统一外呼电话</p>
          <p>0756-7796149</p>
          <p>market@fanyunai.com</p>
        </div>
        <div class="footer-weibo">
          <img src="@/assets/weixin.png" alt />
          <img src="@/assets/weibo.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped lang="scss">
.footer {
  height: 410px;
  padding-top: 136px;
  min-width: 1300px;
}
.nav-footer {
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  color: #cfe2f5;
  font-size: 15px;

  .footer-box1 {
    width: 266px;
    font-size: 14px;
    .titer {
      color: #01bcd5;
      font-size: 17px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .footer-logo,
    .police-badge {
      display: flex;
      align-items: flex-start;
      color: #aab2bd;
      img {
        margin-right: 8px;
      }
    }
    .police-badge {
      padding-left: 36px;
      margin-top: 18px;
      img {
        position: relative;
        top: 6px;
      }
    }
  }
  .footer-box2 {
    flex: 1;
    text-align: center;
    line-height: 32px;
    p {
      cursor: pointer;
      &:hover {
        color: #000;
      }
    }
  }
  .fangshi {
    background: rgba(255, 255, 255, 0.2);
    line-height: 24px;
    font-size: 14px;
    border-radius: 8px;
    p {
      cursor: default;
      &:hover {
        color: #aab2bd;
      }
    }
  }
  .footer-weibo {
    margin-top: 12px;
    display: flex;
    justify-content: center;
    img {
      margin: 0 15px;
    }
  }
}

.head_0 {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#210b94+0,20e0ff+100,e0e0e0+100 */
  background: rgb(33, 11, 148); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(33, 11, 148, 1) 0%,
    rgba(32, 224, 255, 1) 100%,
    rgba(224, 224, 224, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(33, 11, 148, 1) 0%,
    rgba(32, 224, 255, 1) 100%,
    rgba(224, 224, 224, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(33, 11, 148, 1) 0%,
    rgba(32, 224, 255, 1) 100%,
    rgba(224, 224, 224, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#210b94', endColorstr='#e0e0e0',GradientType=1 ); /* IE6-9 */
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
}
</style>
