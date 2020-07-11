<template>
  <div class="join-box">
    <div class="join-content">
      <div class="join-left">
        <div class="titel">职位类别</div>
        <ul>
          <li>技术研发类</li>
          <li>产品设计类（产品、设计）</li>
          <li>销售类（直营、渠道、大…</li>
          <li>技术支持类（直营、渠道…</li>
          <li>营销类</li>
          <li>运营市场类</li>
          <li>客服编辑类</li>
          <li>财务类</li>
          <li>其他</li>
        </ul>
      </div>
      <div class="join-right">
        <div class="search">
          <div>职位搜索</div>
          <div class="search-inp">
            <input type="text" placeholder="请输入职位关键字" />
          </div>
          <div class="search-btn">搜索</div>
        </div>
        <div class="search-list">
          <div class="list-item">
            <p>工作地点：</p>
            <div>
              <ul>
                <li>全国</li>
                <li>北京市</li>
                <li>天津市</li>
                <li>唐山市</li>
                <li>张家口市</li>
                <li>太原市</li>
                <li>沈阳市</li>
                <li>大连市</li>
                <li>黑龙江省</li>
                <li>哈尔滨市</li>
                <li>上海市</li>
                <li>江苏省</li>
                <li>南京市</li>
                <li>无锡市</li>
                <li>苏州市</li>
                <li>杭州市</li>
                <li>宁波市</li>
                <li>合肥市</li>
                <li>福州市</li>
                <li>泉州市</li>
                <li>济南市</li>
                <li>青岛市</li>
                <li>郑州市</li>
                <li>湖北省</li>
                <li>武汉市</li>
                <li>宜昌市</li>
                <li>湖南省</li>
                <li>长沙市</li>
                <li>广州市</li>
                <li>深圳市</li>
                <li>佛山市</li>
                <li>东莞市</li>
                <li>中山市</li>
                <li>三亚市</li>
                <li>重庆市</li>
                <li>四川省</li>
                <li>成都市</li>
                <li>云南省</li>
                <li>昆明市</li>
                <li>西安市</li>
                <li>更多</li>
              </ul>
            </div>
          </div>
          <div class="list-item">
            <p>职位分类：</p>
            <div>
              <ul>
                <li>全部</li>
                <li>技术研发类</li>
                <li>产品设计类（产品、设计）</li>
                <li>销售类（直营、渠道、大客户）</li>
                <li>技术支持类（直营、渠道、大客户）营销类</li>
                <li>运营市场类</li>
                <li>人力行政类</li>
                <li>客服编辑类</li>
                <li>财务类</li>
                <li>其他</li>
              </ul>
            </div>
          </div>
          <div class="list-item">
            <p>发布时间：</p>
            <div>
              <ul>
                <li>全部</li>
                <li>三天内</li>
                <li>一周内</li>
                <li>一个月内</li>
                <li>三个月内</li>
                <li>半年内</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped lang="scss">
.join-box {
  width: 100%;
  padding: 200px 0;
  background: #f7fafc;
  .join-content {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    .join-left {
      width: 297px;
      font-size: 20px;
      line-height: 38px;

      color: #707070;
      .titel {
        font-size: 24px;
        border: 1px solid #707070;
        padding-left: 32px;
        color: #434a54;
      }
      li {
        border-bottom: 1px solid #aab2bd;
        padding-left: 32px;
      }
    }
    .join-right {
      padding-left: 56px;
      flex: 1;
      .search {
        height: 84px;
        background: #fff;
        display: flex;
        padding-left: 38px;
        align-items: center;
        color: #434a54;
        font-size: 16px;
        padding-right: 55px;
        .search-inp {
          flex-grow: 1;
          margin-left: 35px;
          margin-right: 5px;
        }
        input::-webkit-input-placeholder {
          color: #aab2bd;
          font-weight: 400;
        }
        input {
          width: 100%;
          background: #f4f4f4;
          font-size: 16px;
          border-radius: 13px;
          border: none;
          height: 40px;
          padding-left: 10px;

          flex-grow: 1;
        }
        .search-btn {
          width: 133px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-radius: 13px;
          background: #f4f4f4;
          cursor: pointer;
        }
      }
      .search-list {
        background: #fff;
        padding-left: 38px;
        padding-right: 55px;
        font-size: 16px;
        color: #434a54;
        margin-top: 36px;
        padding-top: 46px;
        padding-bottom: 55px;
        .list-item {
          display: flex;
          margin-bottom: 35px;
          p {
            width: 90px;
          }
          div {
            flex: 1;
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            li {
              padding: 0 7px;
              margin-bottom: 15px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>