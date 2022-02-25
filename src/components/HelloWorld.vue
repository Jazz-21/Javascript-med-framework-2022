<script>
export default {
 
  props: {
    msg: String,
    message: String,
  },

  data: function () {
    return {
      show: false,
      myStyle: "red",
      categories: ["T-Shirts", "Jackets", "Hats", "Shirts"],
      counter: 0,
    };
  },
};
</script>


<template>
  <div class="nav">
      <div class="links">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/services">Services</router-link>
      <a href="/external.html">External page</a>
      </div>

      <p>{{ msg }}</p>

        <img v-if="show" alt="" src="/assets/jacket.jpeg" />

        <p v-bind:style="{ color: myStyle }">A warm and cozy jacket</p>

        <p v-if="show">Toggle the image and text</p>
        <p v-else>Click the toggle button</p>  
        <button @click="show = !show">Toggle</button>

  <div class="categories">Categories:</div>
      <ul class="ulist">
        <li  v-bind:key="category" v-for="category in categories">{{category }}</li>
      </ul>

  <div id="example-1">
      <button v-on:click="counter += 1"> Click</button>
        <p v-bind:style="{ color: myStyle }">You clicked {{ counter }} times.
      </p>
  </div>
      <input v-model="message" placeholder="Type message here">
      <p>Message is: {{ message }}</p>
</div>

</template>

<style>
p {
  font-weight: bold;
}
img 
{
  width: 250px;
  border-radius: 2px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  transition: width 2s;
}
img:hover 
{
  cursor: pointer;
}
button 
{
  padding: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
}
.ulist
{
  background-color: rgb(225, 231, 231);
  display:inline-flexbox ;
  margin-bottom: 15px;
}
.categories
  {
    font-style:italic;
    margin-top: 10px;
    margin-bottom: 10px;
  }
.links 
  {
    background-color: rgb(163, 143, 143);
    font-weight: 900;
    display: flex;
    padding: 2% 6%;
    justify-content: space-between;
    position: relative;
  }
</style>