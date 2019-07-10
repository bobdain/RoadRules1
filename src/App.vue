<template>
    <div id="app">
        <main>
            <Home msg="Road Rules!" />
        </main>
    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        components: {
            Home
        }
    };
</script>

<style>
    body {
        background: linear-gradient(to bottom, #555, #999);
        background-attachment: fixed;
    }

    main {
        margin: 0 auto;
        padding: 10px 20px;
        background-color: white;
        width: 1010px;
        min-height: 820px;
    }

    .rrCheckbox {
        margin: 0;
        height: 30px;
    }
    .rrButton {
        /*margin-top: 20px;*/
    }
</style>
