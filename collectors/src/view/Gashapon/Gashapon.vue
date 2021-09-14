<template>
  <div class="item-list">
    <div class="group-item" v-for="(group, index) in gashapons" :key="index">
      <div
        class="gashapon-item"
        v-for="gas in group"
        :key="gas.id"
        :class="'type-' + gas.type"
      >
        <div class="gas-panel">
          <div
            class="gas-art"
            :style="
              'background-image: url(./static/img/item/gashapon/' +
                eggData[gas.series].art +
                ')'
            "
          ></div>
          <div class="step-1" @click="actionByClick(gas, 1)"></div>
          <div
            class="step-2"
            @click="actionByClick(gas, 2)"
            :class="'rotate-' + gas.rotate"
          ></div>
          <div class="step-3">
            <div
              class="ball"
              @click="actionByClick(gas, 3)"
              :class="gas.export ? 'show' : ''"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gashapon",
  components: {},
  data() {
    return {
      gashapons: [
        [
          {
            id: "GAS-1", //扭蛋机ID
            type: "top", //扭蛋机类型top mid bot
            series: "TLJGP01", //扭蛋系列
            step: 1, //当前步骤 1投币 2扭动机器 3出货待取
            needCoin: 3, //扭一次需要的总币数
            coin: 0, //当前投币
            coinTotal: 0, //累计投币
            rotate: 0, //步骤2进程 0未扭动 1扭动一半 2扭动完成
            export: false, //出口数量 false没东西 true有
            stock: [0, 1, 2, 3, 4, 5, 6, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6] //扭蛋内容
          },
          {
            id: "GAS-2",
            type: "mid",
            series: "TLJGP01",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            stock: [0, 1, 2, 4, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 1, 2, 2, 4, 5, 6]
          },
          {
            id: "GAS-3",
            type: "bot",
            series: "TLJGP01",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            stock: [0, 1, 2, 3, 4, 5, 5, 0, 1, 1, 3, 4, 5, 6, 1, 2, 3, 4, 4, 6]
          }
        ]
      ],
      eggData: {
        TLJGP01: {
          art: "demo1.png",
          data: [
            {
              name: "宇宙恐龙 杰顿二世",
              color: "",
              price: 0
            },
            {
              name: "宇宙恐龙 杰顿"
            },
            {
              name: "蛤蜊怪兽 加玛库基拉"
            },
            {
              name: "特空机1号 赛文加"
            },
            {
              name: "特空机3号 金古桥军械库定制"
            },
            {
              name: "超古代怪兽 哥尔赞"
            },
            {
              name: "邪恶迪迦"
            }
          ]
        }
      }
    };
  },
  methods: {
    actionByClick(gas, step) {
      if (gas.step == 1 && step == 1) {
        //投币阶段，点击一下投一个币，满需总币数即可进入下一阶段
        gas.coin = gas.coin + 1;
        console.log(gas.coin);
        if (gas.coin == gas.needCoin) {
          gas.step = 2;
          console.log("已投" + gas.coin + "币，请扭动");
        }
      } else if (gas.step == 2 && step == 2) {
        //扭蛋阶段，点击一下扭一半，总共180°，扭半圈即可进入下一阶段
        gas.rotate = gas.rotate + 1;
        if (gas.rotate == 2) {
          console.log("扭蛋已出，请取货~");
          setTimeout(() => {
            gas.step = 3;
            gas.export = true;
          }, 800);
        }
      } else if (gas.step == 3 && step == 3) {
        let num = Math.floor(Math.random() * gas.stock.length); //随机数
        let it = gas.stock[num]; //取值
        gas.stock.splice(num, 1); //删除取到的这个
        console.log("扭到 " + this.eggData[gas.series].data[it].name);
        //取货阶段，初始化所有参数
        gas.step = 1;
        gas.coinTotal = gas.coinTotal + gas.coin;
        gas.coin = 0;
        gas.rotate = 0;
        gas.export = false;
      }
    }
  }
};
</script>

<style scoped>
@-webkit-keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.group-item {
  float: left;
  width: 160px;
}
.gashapon-item {
  width: 160px;
  height: 415px;
  position: relative;
}
.gashapon-item.type-top {
  height: 361px;
  background-image: url("../../assets/img/gashapon/gas_top.png");
}
.gashapon-item.type-mid {
  height: 310px;
  background-image: url("../../assets/img/gashapon/gas_mid.png");
}
.gashapon-item.type-bot {
  height: 364px;
  background-image: url("../../assets/img/gashapon/gas_bot.png");
}
.gas-panel {
  position: absolute;
  top: 50px;
  left: 18px;
  /* background-color: #ffeb3b8c; */
  width: 125px;
  height: 300px;
}
.gashapon-item.type-mid .gas-panel,
.gashapon-item.type-bot .gas-panel {
  top: 0;
}
.gas-art {
  position: absolute;
  top: 2px;
  left: 0;
  width: 125px;
  height: 135px;
  background-size: cover;
}
.step-1,
.step-2,
.step-3 {
  border-radius: 50px;
  position: absolute;
  cursor: pointer;
}
.step-1 {
  top: 150px;
  right: 18px;
  width: 20px;
  height: 20px;
  background-color: #ff333354;
}
.step-2 {
  top: 174px;
  right: 40px;
  width: 45px;
  height: 45px;
  /* background-color: #ff333354; */
  transform: rotate(0deg);
  transition: all 1s;
  background-image: url("../../assets/img/gashapon/gas_rotate.png");
}
.step-2.rotate-1 {
  transform: rotate(90deg);
}
.step-2.rotate-2 {
  transform: rotate(180deg);
}
.step-3 {
  top: 233px;
  right: 67px;
  width: 55px;
  height: 55px;
  /* background-color: #ff333354; */
  overflow: hidden;
}
.ball {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: red;
  position: absolute;
  top: -50px;
  left: 8px;
}
.ball.show {
  top: 14px;
  animation: bounceInDown 1s;
}
</style>
