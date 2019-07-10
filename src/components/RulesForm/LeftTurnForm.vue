<template>
    <div class="leftTurnForm">
        <v-container fluid px-0>
            <v-checkbox v-model="leftTurnOnly"
                        label="Left turn only"
                        class="rrCheckbox"
                        @change="setLeftTurnOnly" />
            <v-checkbox v-model="leftTurnAllowed"
                        label="Left turn allowed"
                        class="rrCheckbox"
                        :disabled=leftTurnAllowedDisabled />
            <v-checkbox v-model="leftTurnOnGreen"
                        label="Left turn yield on green"
                        class="rrCheckbox"
                        :disabled=leftTurnOnGreenDisabled />
            <v-checkbox v-model="leftTurnOnBY"
                        label="Left turn yield on blinking yellow"
                        class="rrCheckbox"
                        :disabled=leftTurnOnBYDisabled />
            <v-checkbox v-model="uTurnAllowed"
                        label="U-turn allowed"
                        class="rrCheckbox" />
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'LeftTurnForm',
        props: {
            direction: String,
            lane: String
        },
        data() {
            return {
                leftTurnOnly: false,
                leftTurnAllowed: true,
                leftTurnOnBY: false,
                leftTurnOnGreen: false,
                uTurnAllowed: false,
                leftTurnAllowedDisabled: false,
                leftTurnOnBYDisabled: false,
                leftTurnOnGreenDisabled: false,
            }
        },
        methods: {
            setLeftTurnOnly() {
                // eslint-disable-next-line
                console.log('Left turn only:' + this.leftTurnOnly);

                if (this.leftTurnOnly) {
                    this.leftTurnAllowed = true;
                }

                this.leftTurnAllowedDisabled = this.leftTurnOnly;
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .leftTurnForm {
        margin: 20px;
    }
</style>
