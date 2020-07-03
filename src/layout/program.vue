<template>
  <div class="program">
    <div class="line">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="box">
      <div class="lines"></div>
      <div class="box-conter">
        <div class="box-1 box-2">
          <div class="titel">智能餐饮系统</div>
          <div class="lanmu">
            <div class="lanmu-c">
              <img src="@/assets/ico/serve/3.png" />
              <span>智能后厨</span>
            </div>
          </div>
          <div class="lanmu">
            <div class="lanmu-c">
              <img src="@/assets/ico/serve/3.png" />
              <span>智能后厨</span>
            </div>
          </div>
          <div class="lanmu">
            <div class="lanmu-c">
              <img src="@/assets/ico/serve/3.png" />
              <span>智能后厨</span>
            </div>
          </div>
        </div>
        <div class="box-1 box-2">
          <div class="titel">管理后台</div>
          <div class="lanmu">
            <div class="lanmu-c">
              <img src="@/assets/ico/serve/4.png" />
              <span>连锁管理</span>
            </div>
          </div>
          <div class="lanmu">
            <div class="lanmu-c">
              <img src="@/assets/ico/serve/4.png" />
              <span>连锁管理</span>
            </div>
          </div>
          <div class="lanmu">
            <div class="lanmu-c">
              <img src="@/assets/ico/serve/4.png" />
              <span>连锁管理</span>
            </div>
          </div>
        </div>
        <div class="box-1 box-2">
          <div class="titel">管理后台</div>
          <div class="lanmu">
            <div class="lanmu-c">
              <img src="@/assets/ico/serve/10.png" />
              <span>精准营销</span>
            </div>
          </div>
          <div class="lanmu">
            <div class="lanmu-c">
              <img src="@/assets/ico/serve/10.png" />
              <span>电子卡券</span>
            </div>
          </div>
          <div class="lanmu">
            <div class="lanmu-c">
              <img src="@/assets/ico/serve/10.png" />
              <span>电子卡券</span>
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
.program {
  width: 100%;
  position: absolute;
  top: 71px;
  left: 0;
  transition: all 0.35s;
  height: 0px;
  overflow: hidden;
  color: #fff;

  .line {
    width: 1300px;
    margin: 0 auto;
    padding-left: 528px;
    span {
      display: block;
      width: 79px;
      height: 2px;
      background: #9d79ff;
      margin-bottom: 3px;
      &:nth-child(1) {
        height: 5px;
      }
      &:nth-child(2) {
        height: 3px;
      }
    }
  }
  .box {
    .lines {
      width: 100%;
      height: 2px;
      background: #9d79ff;
    }
    width: 100%;
    height: 220px;
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    left: 0;
    top: 18px;
    font-size: 14px;
    overflow: hidden;
    .box-conter {
      width: 1300px;
      padding-left: 395px;
      margin: 0 auto;
      display: flex;
      .box-1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .titel {
          margin-top: 24px;
          margin-bottom: 12px;
          font-weight: bold;
        }
        .lanmu {
          display: flex;
          align-items: center;
          .lanmu-c {
            display: flex;
            align-items: center;
            width: 100px;
            height: 38px;
            justify-content: center;
            background: #5e41ad;
            border-radius: 5px;
            margin-left: 3px;
            margin-bottom: 2px;
            cursor: pointer;
            &:hover{
               background: #9d79fd; 
            }
            span {
              margin-left: 7px;
            }
          }
        }
      }
      .box-2 {
        .lanmu-c {
          width: 185px !important;
        }
      }
    }
  }
}

.ht_1 {
  .line {
    span {
      background: #093b90;
    }
  }
  .box {
    background: rgba(28, 45, 161, 0.8) !important;
    .lines {
      background: #00e5ff !important;
    }
    .lanmu-c {
      background: #184caf !important;
      &:hover {
        background: #093b90 !important;
      }
    }
  }
}
.ht_2 {
  .line {
    span {
      background: #01a7ba ;
    }
  }
  .box {
    background: rgba(0,94,114,0.8) !important;
    .lines {
      background: #00e5ff !important;
    }
    .lanmu-c {
      background: #184caf !important;
      &:hover {
        background: #093b90 !important;
      }
    }
  }
}
.ht_2 {
  .line {
    span {
      background: #9d79ff  ;
    }
  }
  .box {
    background: rgba(0,94,114,0.8) !important;
    .lines {
      background: #00e5ff !important;
    }
    .lanmu-c {
      background: #184caf !important;
      &:hover {
        background: #093b90 !important;
      }
    }
  }
}
.ht_3 {
  .line {
    span {
      background: #01a7ba ;
    }
  }
  .box {
    background: rgba(0,94,114,0.8) !important;
    .lines {
      background: #00e5ff !important;
    }
    .lanmu-c {
      background: #184caf !important;
      &:hover {
        background: #093b90 !important;
      }
    }
  }
}
.ht_4 {
  .line {
    span {
      background: #01a7ba ;
    }
  }
  .box {
    background: rgba(0,94,114,0.8) !important;
    .lines {
      background: #00e5ff !important;
    }
    .lanmu-c {
      background: #184caf !important;
      &:hover {
        background: #093b90 !important;
      }
    }
  }
}
.ht_5 {
  .line {
    span {
      background: #01a7ba ;
    }
  }
  .box {
    background: rgba(0,94,114,0.8) !important;
    .lines {
      background: #00e5ff !important;
    }
    .lanmu-c {
      background: #184caf !important;
      &:hover {
        background: #093b90 !important;
      }
    }
  }
}
.ht_6 {
  .line {
    span {
      background: #01a7ba ;
    }
  }
  .box {
    background: rgba(0,94,114,0.8) !important;
    .lines {
      background: #00e5ff !important;
    }
    .lanmu-c {
      background: #184caf !important;
      &:hover {
        background: #093b90 !important;
      }
    }
  }
}
</style>
