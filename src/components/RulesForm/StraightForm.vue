<template>
    <div class="straightForm">
        <v-container fluid px-0>
            <v-checkbox v-model="straightOnly"
                        class="rrCheckbox"
                        label="Straight only"
                        @change="setStraightOnly"  />
            <v-checkbox v-model="straightAllowed"
                        label="Straight allowed"
                        class="rrCheckbox"
                        :disabled="straightAllowedDisabled"/>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'StraightForm',
        props: {
            direction: String,
            lane: String
        },
        data() {
            return {
                straightOnly: false,
                straightAllowed: true,
                straightAllowedDisabled: false,
            }
        },
        methods: {
            setStraightOnly() {
                if (this.straightOnly) {
                    this.straightAllowed = true;
                }

                this.straightAllowedDisabled = this.straightOnly;
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .straightForm {
        margin: 20px;
    }
</style>
