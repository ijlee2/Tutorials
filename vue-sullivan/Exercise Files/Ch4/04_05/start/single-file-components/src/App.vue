<template>
  <product-list :products="theProducts" title="Shop our award-winning product line"></product-list>
</template>

<script>
import ProductList from './ProductList.vue';

export default {
  name: 'app',
  data() {
    return {
      theProducts: []
    };
  },
  components: {
    'product-list': ProductList
  },
  created: function() {
      $.getJSON('https://hplussport.com/api/products')
          .done(data => {this.theProducts = data;});
  }
}
</script>
