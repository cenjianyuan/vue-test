<template>
  <div class="shopping-box">
    <div class="shopping-content">
      <ul>
        <li v-for="item in 23" :key="item">
          <p>小纸票（100卷）58*50</p>
          <p>￥149.0</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>
<style scoped lang="scss">
.shopping-box {
  width: 100%;
  padding: 200px 0;
  background: #f7fafc;
  .shopping-content {
    max-width: 1300px;
    margin: 0 auto;
    background: #fff;
    ul {
      display: flex;
      flex-wrap: wrap;
      border-left: 1px solid #e0e1e2;
      border-top: 1px solid #e0e1e2;
    }
    li {
      height: 395px;
      border-right: 1px solid #e0e1e2;
      border-bottom: 1px solid #e0e1e2;
      width: 25%;
      padding-left: 30px;
      padding-top: 30px;
      font-size: 18px;
      color: #000000;
      font-weight: bold;
      cursor: pointer;
      p:nth-child(2) {
        color: #ff6727;
        margin-top: 20px;
        font-weight: 800;
      }
    }
  }
}
</style>