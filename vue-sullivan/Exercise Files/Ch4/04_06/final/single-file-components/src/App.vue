<template>
  <router-view :products="theProducts" title="Shop our award-winning product line"></router-view>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      theProducts: []
    };
  },
  created: function() {
      $.getJSON('https://hplussport.com/api/products')
          .done(data => {this.theProducts = data;});
  }
}
</script>
