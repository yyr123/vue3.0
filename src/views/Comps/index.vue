<template>
  <div class="home">
    Comp1
    <span>{{text}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'com', // 组件的名字
  data() {
    return {
      text: '当前页面的数据',
    }
  },

  // 组件挂载渲染dom完成之后
  setup() {
    console.log('页面开始加载代替初始化的created')
  },
  // 这里是方法
  methods: {

  },
  // 计算属性
  computed: {

  },

  // 监听方法
  watch: {

  }

})

</script>
