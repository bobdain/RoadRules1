<template>
    <div class="titleBanner">
        <h3>{{ title }}</h3>
        <h1>{{ intersection }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'TitleBanner',
        props: {
            title: String,
            intersection: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .titleBanner {
        margin: 10px 20px;
    }
</style>
