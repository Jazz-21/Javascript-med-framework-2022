<script>
  import ProductList from './components/ProductList.vue'
  import HelloWorld from './components/HelloWorld.vue'
  
  export default {
    components: {
      ProductList,
      HelloWorld
    }
  }
</script>

<template>
  <div>
   <router-view/>
  <HelloWorld />
  <ProductList />
  </div>

</template>
