<template>
    <div class="rulesForm">
        <h2>Lane: {{direction}}{{lane}}</h2>

        <v-tabs color="grey" class="rrTabs">
            <v-tabs-slider color="black" class="rrSlider"></v-tabs-slider>

            <!--TODO: install Font Awesome icons-->
            <v-tab href="#tab-1">
                Left Turn
                <v-icon>fa-arrow-alt-circle-left</v-icon>
            </v-tab>
            <v-tab href="#tab-2">
                Stright On
                <v-icon>fa-arrow-alt-circle-up</v-icon>
            </v-tab>
            <v-tab href="#tab-3">
                Right Turn
                <v-icon>fa-arrow-alt-circle-right</v-icon>
            </v-tab>

            <v-tab-item key="1" value="tab-1">
                <LeftTurnForm direction="1" lane="A"  />
            </v-tab-item>
            <v-tab-item key="2" value="tab-2">
                <StraightForm direction="1" lane="A" />
            </v-tab-item>
            <v-tab-item key="3" value="tab-3">
                <RightTurnForm direction="1" lane="A" />
            </v-tab-item>
        </v-tabs>

        <v-btn color="blue" class="rrButton">Mark this lane Done</v-btn>
        <v-btn color="blue" class="rrButton">Apply to all "{{lane}}" lanes</v-btn>

    </div>
</template>

<script>
    import LeftTurnForm from './LeftTurnForm.vue';
    import StraightForm from './StraightForm.vue';
    import RightTurnForm from './RightTurnForm.vue';

    export default {
        name: 'RulesForm',
        props: {
            direction: String,
            lane: String
        },
        data() {
            return {
                active: null,
                text: '[Sub-forms go here]',
                items: [
                    {
                        title: "First Item",
                        text: "This is the first text",
                        id: 1,
                        form: LeftTurnForm
                    },
                    {
                        title: "Second Item",
                        text: "This is the second text",
                        id: 2,
                        form: StraightForm
                    },
                    {
                        title: "Third Text",
                        text: "This is the third text",
                        id: 3,
                        form: RightTurnForm
                    },
                ]
            }
        },
        methods: {
            next() {
                const active = parseInt(this.active)
                this.active = (active < 2 ? active + 1 : 0)
            }
        },
        components: {
            LeftTurnForm,
            StraightForm,
            RightTurnForm,
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .rulesForm {
        width: 350px;
        position: absolute;
        top: 30px;
        left: 620px;
    }
    .rrSlider {
        height: 5px;
    }
    .rrTabs {
        height: 300px;
    }
</style>
