<template>
    <div class="diagramDiv">

        <img src="../../assets/RoadRulesBackground.png" class="diagram" />
        <img src="../../assets/compass.png" class="compass" />

        <img src="../../assets/LaneManeuversSample1.png"
             :class="showManeuvers ? 'overlay' : 'hidden'" />

        <img src="../../assets/Overlay1A.png" :class="showManeuvers1A ? 'overlay' : 'hidden'" />
        <img src="../../assets/Overlay1B.png" :class="showManeuvers1B ? 'overlay' : 'hidden'" />
        <img src="../../assets/Overlay2A.png" :class="showManeuvers2A ? 'overlay' : 'hidden'" />
        <img src="../../assets/Overlay2B.png" :class="showManeuvers2B ? 'overlay' : 'hidden'" />
        <img src="../../assets/Overlay3A.png" :class="showManeuvers3A ? 'overlay' : 'hidden'" />
        <img src="../../assets/Overlay3B.png" :class="showManeuvers3B ? 'overlay' : 'hidden'" />
        <img src="../../assets/Overlay4A.png" :class="showManeuvers4A ? 'overlay' : 'hidden'" />
        <img src="../../assets/Overlay4B.png" :class="showManeuvers4B ? 'overlay' : 'hidden'" />

        <label class="streetName streetName1a">
            {{street1}}
        </label>
        <label class="streetName streetName1b">
            {{street1}}
        </label>

        <label class="streetName streetName2a">
            {{street2}}
        </label>
        <label class="streetName streetName2b">
            {{street2}}
        </label>

        <button class="carButton button1" v-on:click="selectLane1()"
                @mouseover="showManeuvers1A = true" @mouseout="showManeuvers1A = false">
            <img src="../../assets/RoadRulesCarGreen.png" class="car selectedCar" />
        </button>
        <button class="carButton button2" v-on:click="selectLane2()"
                @mouseover="showManeuvers1B = true" @mouseout="showManeuvers1B = false">
            <img src="../../assets/RoadRulesCarRed.png" class="car unselectedCar" />
        </button>

        <button class="carButton button3" v-on:click="selectRightLane1()"
                @mouseover="showManeuvers2A = true" @mouseout="showManeuvers2A = false">
            <img src="../../assets/RoadRulesCarRed.png" class="car unselectedCar" />
        </button>
        <button class="carButton button4" v-on:click="selectRightLane2()"
                @mouseover="showManeuvers2B = true" @mouseout="showManeuvers2B = false">
            <img src="../../assets/RoadRulesCarRed.png" class="car unselectedCar" />
        </button>

        <button class="carButton button5" v-on:click="selectOncomingLane1()"
                @mouseover="showManeuvers3A = true" @mouseout="showManeuvers3A = false">
            <img src="../../assets/RoadRulesCarRed.png" class="car unselectedCar" />
        </button>
        <button class="carButton button6" v-on:click="selectOncomingLane2()"
                @mouseover="showManeuvers3B = true" @mouseout="showManeuvers3B = false">
            <img src="../../assets/RoadRulesCarRed.png" class="car unselectedCar" />
        </button>

        <button class="carButton button7" v-on:click="selectLeftLane1()"
                @mouseover="showManeuvers4A = true" @mouseout="showManeuvers4A = false">
            <img src="../../assets/RoadRulesCarRed.png" class="car unselectedCar" />
        </button>
        <button class="carButton button8" v-on:click="selectLeftLane2()"
                @mouseover="showManeuvers4B = true" @mouseout="showManeuvers4B = false">
            <img src="../../assets/RoadRulesCarRed.png" class="car unselectedCar" />
        </button>

        <div class="showManeuverButtons">
            <v-btn color="blue" class="rrButton" v-on:click="toggleShowManeuvers()">
                Show allowed maneuvers
            </v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TrafficDiagram',

        props: {
        },

        data() {
            return {
                carImage1: "../../assets/RoadRulesCarGreen.png",
                street1: "First",
                street2: "Main",
                showManeuvers: false,
                showManeuvers1A: false,
                showManeuvers1B: false,
                showManeuvers2A: false,
                showManeuvers2B: false,
                showManeuvers3A: false,
                showManeuvers3B: false,
                showManeuvers4A: false,
                showManeuvers4B: false,
            }
        },

        methods: {
            toggleShowManeuvers() {
                this.showManeuvers = !this.showManeuvers;
            },
            selectLane1() {
                // eslint-disable-next-line
                console.log('Lane ONE selected');
            },
            selectLane2() {
                // eslint-disable-next-line
                console.log('Lane TWO selected');
            },
            selectRightLane1() {
                // eslint-disable-next-line
                console.log('RIGHT Lane ONE selected');
            },
            selectRightLane2() {
                // eslint-disable-next-line
                console.log('RIGHT Lane TWO selected');
            },
            selectOncomingLane1() {
                // eslint-disable-next-line
                console.log('ONCOMING Lane ONE selected');
            },
            selectOncomingLane2() {
                // eslint-disable-next-line
                console.log('ONCOMING Lane TWO selected');
            },
            selectLeftLane1() {
                // eslint-disable-next-line
                console.log('LEFT Lane ONE selected');
            },
            selectLeftLane2() {
                // eslint-disable-next-line
                console.log('LEFT Lane TWO selected');
            },
        }
    };
</script>

<style>
    .diagramDiv {
        position: relative;
        width: 600px;
    }

    .diagram {
        width: 600px;
        height: 600px;
    }

    .overlay {
        width: 600px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: Transparent;
    }

    .hidden {
        display: none;
    }

    .compass {
        width: 60px;
        position: absolute;
        top: 50px;
        left: 40px;
    }

    .streetName {
        position: absolute;
        font-size: 30px;
        font-weight: bold;
    }
    .streetName1a {
        top: 520px;
        left: 410px;
        transform: rotate(-90deg);
    }
    .streetName1b {
        top: 50px;
        left: 125px;
        transform: rotate(-90deg);
    }
    .streetName2a {
        top: 430px;
        left: 30px;
    }
    .streetName2b {
        top: 140px;
        left: 500px;
    }

    .car {
        height: 70px;
    }

    .selectedCar {
        opacity: 1.0;
    }

    .unselectedCar {
        opacity: 0.2;
    }

    .carButton {
        position: absolute;
        background-color: Transparent;
        border: none;
    }

    .button1 {
        top: 430px;
        left: 314px;
    }
    .button2 {
        top: 430px;
        left: 372px;
    }

    .button3 {
        top: 229px;
        left: 447px;
        transform: rotate(270deg);
    }
    .button4 {
        top: 171px;
        left: 447px;
        transform: rotate(270deg);
    }

    .button5 {
        top: 95px;
        left: 248px;
        transform: rotate(180deg);
    }
    .button6 {
        top: 95px;
        left: 190px;
        transform: rotate(180deg);
    }

    .button7 {
        top: 295px;
        left: 115px;
        transform: rotate(90deg);
    }
    .button8 {
        top: 354px;
        left: 115px;
        transform: rotate(90deg);
    }
    .showManeuverButtons {
        margin-left: 170px;
    }
</style>
