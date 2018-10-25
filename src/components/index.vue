<template>
  <div class="hello">
    <div class="nav clearfix">
      <span><router-link to="/">LOGO</router-link></span>
      <ul class="nav-list clearfix">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/text1">评论</router-link></li>
        <li><router-link to="/text2">列表</router-link></li>
      </ul>
    </div>
    <div class="img">
      <img src="../assets/logo.png">
    </div>
    <ul class="link-list">
      <li>
        <router-link to="/text1">跳转到评论页</router-link>
      </li>
      <li>
        <router-link to="/text2">跳转到列表页</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
.link-list{
  text-align: center;
}
.link-list li {
  display: inline-block;
  margin: 0 30px;
  width: 200px;
  height: 50px;
  line-height: 50PX;
  text-align: center;
  font-size: 18px;
  background: #42b983;
  color: #fff;
  border-radius: 5PX;
  cursor: pointer;
}
a{
  text-decoration: none;
  color:#fff;
}
.clearfix::after{
  content: "";
  display: block;
  clear: both;
  height: 0;
  line-height: 0;
  visibility: hidden;
}
.nav{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #42b983;
  color: #fff;
  font-size: 18px;
}
.nav span{
  color: #fff;
  font-size: 24px;
  margin-left: 50px;
}
.nav .nav-list{
  float: right;
  margin-right: 50px;
}
.nav .nav-list li{
  float: left;
  margin-left: 10px;
  padding: 0 20px;
  line-height: 60px;
  cursor: pointer;
}
.img{
  text-align: center;
  margin: 80px 0;
}
</style>
