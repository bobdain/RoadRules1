<template>
    <div class="rightTurnForm">
        <v-container fluid px-0>
            <v-checkbox v-model="rightTurnOnly"
                        class="rrCheckbox"
                        label="Right turn only"
                        @change="setRightTurnOnly" />
            <v-checkbox v-model="rightTurnAllowed"
                        label="Right turn allowed"
                        class="rrCheckbox"
                        :disabled="rightTurnAllowedDisabled" />
            <v-checkbox v-model="rightTurnOnRed"
                        label="Right turn on red after stop"
                        class="rrCheckbox" />
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'RightTurnForm',
        props: {
            direction: String,
            lane: String
        },
        data() {
            return {
                rightTurnOnly: false,
                rightTurnAllowed: false,
                rightTurnOnRed: false,
                rightTurnAllowedDisabled: false,
            }
        },
        methods: {
            setRightTurnOnly() {
                if (this.rightTurnOnly) {
                    this.rightTurnAllowed = true;
                }

                this.rightTurnAllowedDisabled = this.rightTurnOnly;
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .rightTurnForm {
        margin: 20px;
    }
</style>
