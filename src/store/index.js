/**
 * 用于任意组件间通信
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    HOST: 'http://localhost:8803',
    isPlay: false, // 是否播放中
    url: '', // 歌曲地址
    id: '' // 歌曲id
  },
  getters: {
    isPlay: state => state.isPlay,
    url: state => state.url,
    id: state => state.id
  },
  mutations: {
    setIsPlay: (state, isPlay) => {
      state.isPlay = isPlay
    },
    setUrl: (state, url) => {
      state.url = url
    },
    setId: (state, id) => {
      state.id = id
    }
  }
})
export default store
