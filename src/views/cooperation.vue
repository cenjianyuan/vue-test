<template>
  <div class="cooperation-box">
    <div class="cooperation">
      <div class="cooperation-tab">
        <ul>
          <li style="border-left:none;">全部类型</li>
          <li>中式餐饮</li>
          <li>新式饮品</li>
        </ul>
      </div>
      <div class="liebiao">
        <ul>
          <li v-for="item in 24" :key="item">
            <div class="liebiao-img">
              <img src="@/assets/hezuo-log.png" />
            </div>
            <p class="liebiao-1">卤人甲 Cook For You</p>
            <p class="liebiao-2">小身材，大志向的良心美食品牌</p>
          </li>
        </ul>
      </div>

      <div class="block">
        <el-pagination background="false" layout="prev, pager, next" :total="150"></el-pagination>
      </div>
      <cooperation></cooperation>
    </div>
  </div>
</template>

<script>
import cooperation from "../layout/cooperation-text";
export default {
  components: {
    cooperation
  }
};
</script>
<style scoped lang="scss">
.cooperation-box {
  background: #f7fafc;
}
.cooperation {
  max-width: 1300px;
  padding: 100px 0;
  margin: 0 auto;
  box-sizing: border-box;
  color: #434a54;
  .cooperation-tab {
    border: 1px solid #707070;
    ul {
      display: flex;
    }
    li {
      flex: 1;
      display: inline-block;
      border-left: 1px solid #707070;
      text-align: center;
      height: 67px;
      line-height: 67px;
      color: #322e2f;
      font-size: 38px;
    }
  }
  .liebiao {
    margin-top: 72px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 22%;
        margin-bottom: 20px;
        img {
          width: 100%;
          border: 1px solid #707070;
          margin-bottom: 45px;
        }
        .liebiao-1 {
          font-size: 24px;
        }
        .liebiao-2 {
          font-size: 18px;
          margin: 40px 0px;
        }
      }
    }
  }
}
.el-pagination {
  text-align: center;
  margin-top: 50px;
}
.el-pager li {
  background: #f7fafc !important;
  font-size: 18px !important;
}

.el-pagination .btn-next,
.el-pagination .btn-prev {
  background: #f7fafc !important;
}
</style>