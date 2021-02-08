<template>
  <div>
    <div>学习Vue3、Webpack5</div>
    <!-- <p>{{ name }}</p> -->
    <p>获取vuex里面的数据{{ count }}</p>
  </div>
</template>
<script>
  import { defineComponent, computed } from 'vue' //只是为了在使用Vue3时有很好的语法提示
  import { useStore } from 'vuex'
  export default defineComponent({
    name: 'Home',
    setup() {
      const store = useStore()
      const count = computed(() => store.state.count)

      const testFUnction = () => {
        console.log(123)
      }
      //   const name = ref('txm')
      return {
        testFUnction,
        // name,
        count,
      }
    },
  })
</script>
