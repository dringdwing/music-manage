<template>
  <div class="login-wrap">
    <div class="ms-title">Background management</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" :ref="ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username "></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="password"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitFrom">Login</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mixin} from '../mixins/index'
import {getLoginStatus} from '../api/index'

export default {
  mixins: [mixin],
  data () {
    return {
      ruleForm: {
        username: 'admin',
        password: '123'
      },
      rules: {
        username: [
          {required: true, message: 'Please enter a user name!', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Please enter password!', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    submitFrom () {
      let params = new URLSearchParams()
      params.append('name', this.ruleForm.username)
      params.append('password', this.ruleForm.password)
      getLoginStatus(params)
        .then((res) => {
          if (res.code == 1) {
            // 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制
            localStorage.setItem('username',this.ruleForm.username)
            this.$router.push("/Info")
            this.notify('Login successful!', 'sucess')
          } else {
            this.notify('Login failed!', 'error')
          }
        })
    }
  }
}

</script>

<style scoped>
.login-wrap {
  position: relative;
  background: url("../assets/img/bgc.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #000b1d;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 160px;
  margin: -150px -185px;
  padding: 40px;
  border-radius: 5px;
  background: #1a2222;
  opacity: 0.6;
}

.login-btn {
  text-align: center;

}

.login-btn button {
  width: 100%;
  height: 36px;

}
</style>
