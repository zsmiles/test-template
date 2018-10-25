<template>
  <div>
    <top></top>
    <div class="shop">
      <p>用户名：</p>
      <input class="username" type="text" placeholder="请输入用户名" v-model="comment.name">
      <p>评论内容：</p>
      <textarea class="content" name="" id="" cols="30" rows="10" placeholder="请输入评论内容" v-model="comment.content"></textarea>
      <div class="btn" @click="save()">保存</div>
    </div>
    <div class="list">
      <p>{{comment.name}}</p>
      <p>{{comment.content}}</p>
    </div>
    <div ref="mask" v-show="show" class="mask">
      <div class="success">
        <p>√ 保存成功</p>
        <span @click="hidden()">继续评论</span>
        <span><router-link to="/text2">跳转到评论页</router-link></span>
      </div>
    </div>
  </div>
</template>


<script>
import top from "@/components/top"
export default {
  components:{top},
  data (){
    return {
      comment:{
        name:"",
        content:"",
      },
      show:false
    }
  },
  methods:{
    save(){
      if(this.comment.name !=="" && this.comment.content !==""){
        this.$store.state.msg.push({name:this.comment.name,content:this.comment.content})
        this.show=true
      }
      this.comment.name="";
      this.comment.content="";
      console.log(this.comment)
    },
    hidden(){
      this.show=false
    }
  }
}
</script>

<style scoped>
.shop{
  float: left;
  width: 500px;
  font-size: 16px;
  color: #333;
  margin-left: 50px;
}
.shop p{
  margin: 40px 0 10px;
}
.username{
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border:1px solid #42b983;
}
.content{
  display: block;
  width: 100%;
  height: 250px;
  line-height: 20px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border:1px solid #42b983;
}
.list{
  float: right;
  width:300px;
  height: 400px;
  border: 1px solid #42b983;
  border-radius: 5px;
  list-style-type: none;
  margin: 50px 50px 0 0;
  padding: 10px;
  box-sizing: border-box;
}
.btn{
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #42b983;
  color: #fff;
  font-size: 18px;
  margin: 40px auto 0;
  border-radius: 5px;
  cursor: pointer;
}
.mask{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
}
.success{
  width: 300px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  margin: 200px auto;
}
.success p{
  width: 200px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  background: #42b983;
  border-radius: 5px;
  margin: 0 auto 10px;
}
.success span,.success span a{
  display: block;
  text-align: center;
  font-size: 14px;
  color: #333;
  padding: 10px;
}
</style>
