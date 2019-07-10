<template>
    <div class="home">
        <div>
            <TitleBanner title="Road Rules Coding Challenge!"
                         intersection="Intersection: First and Main" />

            <div class="flex-container absoluteContainer">
                <TrafficDiagram />
                <RulesForm direction="1" lane="A" />
            </div>
        </div>
    </div>
</template>

<script>
    import TitleBanner from './TitleBanner.vue';
    import TrafficDiagram from './TrafficDiagram/TrafficDiagram.vue';
    import RulesForm from './RulesForm/RulesForm.vue';

    export default {
        name: 'Home',
        props: {
            msg: String
        },
        components: {
            TitleBanner,
            TrafficDiagram,
            RulesForm,
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        display: flex; 
        flex-direction: row;
        position: relative;
    }
    .absoluteContainer {
        position: relative;
    }
</style>
