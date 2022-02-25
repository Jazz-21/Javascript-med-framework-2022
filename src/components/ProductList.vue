<script>
  export default {
    created() {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((products) => {
          this.products = products
        })
    },
    data() {
      return {
        products: null,
      }
    },

  }
</script>

<template>
  <ol>
    <li class="list" v-bind:key="product" v-for="product in products">{{ product.title }}</li>
  </ol>
</template>

<style>
.list 
{
  display:flexbox;
  margin: 15px;
  padding: 10px;
  background: rgb(231, 166, 166);
}

</style>