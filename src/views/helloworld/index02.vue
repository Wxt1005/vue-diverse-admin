<template>
<div>
我是组件2
</div>
</template>

<script setup lang="ts">
import { ref, reactive,onBeforeMount, onMounted,getCurrentInstance } from 'vue'
 import { ElMessage, ElMessageBox } from 'element-plus'
import { Plus, Delete, Search } from '@/element-plus/icons'
 const { proxy } = getCurrentInstance()
 const data = reactive({})
 onBeforeMount(() => {
 console.log('2.组件挂载页面之前执行----onBeforeMount')
 })
 onMounted(() => {
 console.log('3.-组件挂载到页面之后执行-------onMounted')
 })
</script>

<style lang="scss" scoped>

</style>