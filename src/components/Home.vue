<template>
  <div>
    <the-header/>
    <the-aside/>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from './TheHeader'
import TheAside from './TheAside'
import bus from '../assets/js/bus'

export default {
  name: 'home',
  components: {
    TheHeader,
    TheAside
  },
  data () {
    return {
      collapse: false
    }
  },
  created () {
    // 通过bus，进行组件间的通讯，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
  }
}
</script>

<style scoped>

</style>
