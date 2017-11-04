<template>
    <li>
        <img :src="product.image">
        <p><strong><router-link :to="`/products/${product.id}`">{{product.name}}</router-link></strong></p>
        <p>{{product.description}} <a @click="requestRemoval">Hide this item</a></p>
    </li>
</template>

<script>
    export default {
        name: 'product-list-item',
        props: ['product'],
        methods: {
            requestRemoval() {
                this.$emit('remove');
            }
        }
    };
</script>

<style scoped>
    img {
        float: left;
        width: 300px;
    }
    li {
        margin-bottom: 40px;
        clear: both;
    }
</style>     

