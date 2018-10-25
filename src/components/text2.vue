<template>
  <div>
    <top></top>
    <p class="text" v-if="this.$store.state.msg.length == 0">暂无数据</p>
    <ul v-else class="review">
      <li v-for="(item, index) in this.$store.state.msg" :key="index">
        <p>{{item.name}}</p>
        <p>{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import top from "@/components/top";
export default {
  components:{top}
}
</script>

<style scoped>
  .review{
    list-style-type: none;
    width: 400px;
    margin: 50px auto 0;
    border: 1px solid #42b983;
    border-radius: 5px;
  }
  .review li{
    width: 100%;
    border-bottom: 1px solid #42b983;
    font-size: 14px;
    color: #333;
    padding: 10px;
    box-sizing: border-box;
  }
   .review li:last-child{
     border-bottom: none;
   }
   .text{
     text-align: center;
     font-size: 16px;
     color: #333;
     margin-top: 50px;
   }
</style>
