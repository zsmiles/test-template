<template>
  <div>
    <top></top>
    <input type="text" v-model="name">
    <input type="text" v-model="password">
    <button @click="save()">保存</button>
    <div>
      <p>{{name}}</p>
      <p>{{password}}</p>
    </div>
  </div>
</template>


<script>
import top from "@/components/top"
export default {
  components:{top},
  data (){
    return {
      name:"",
      password:""
    }
  },
  methods:{
    save(){
      this.$store.state.name=this.name
    }
  }
}
</script>

<style>

</style>
