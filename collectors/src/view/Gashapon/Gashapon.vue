<template>
  <div class="item-list">
    <div class="gashapon-item type-top">
      <div class="gas-panel">
        <div
          class="gas-art"
          style="background-image: url('./static/img/item/gashapon/demo1.png')"
        ></div>
        <div class="step-1"></div>
        <div class="step-2"></div>
        <div class="step-3"></div>
      </div>
    </div>
    <div class="gashapon-item type-mid"></div>
    <div class="gashapon-item type-bot"></div>
  </div>
</template>
<script>
export default {
  name: "Gashapon",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
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
.gas-art {
  position: absolute;
  top: 0;
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
  background-image: url("../../assets/img/gashapon/gas_rotate.png");
}
.step-3 {
  top: 233px;
  right: 67px;
  width: 55px;
  height: 55px;
  background-color: #ff333354;
}
</style>