<template>
    <div class="diagramDiv">

        <img src="../../assets/RoadRulesBackground.png" class="diagram" />
        <img src="../../assets/compass.png" class="compass" />

        <img src="../../assets/Maneuver1A-Right.png" :class="this.showManeuver('1A-Right') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver1A-Straight.png" :class="this.showManeuver('1A-Straight') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver1A-Left.png" :class="this.showManeuver('1A-Left') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver1A-U.png" :class="this.showManeuver('1A-U') ? 'overlay' : 'hidden'" />

        <img src="../../assets/Maneuver1B-Right.png" :class="this.showManeuver('1B-Right') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver1B-Straight.png" :class="this.showManeuver('1B-Straight') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver1B-Left.png" :class="this.showManeuver('1B-Left') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver1B-U.png" :class="this.showManeuver('1B-U') ? 'overlay' : 'hidden'" />

        <img src="../../assets/Maneuver2A-Right.png" :class="this.showManeuver('2A-Right') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver2A-Straight.png" :class="this.showManeuver('2A-Straight') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver2A-Left.png" :class="this.showManeuver('2A-Left') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver2A-U.png" :class="this.showManeuver('2A-U') ? 'overlay' : 'hidden'" />

        <img src="../../assets/Maneuver2B-Right.png" :class="this.showManeuver('2B-Right') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver2B-Straight.png" :class="this.showManeuver('2B-Straight') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver2B-Left.png" :class="this.showManeuver('2B-Left') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver2B-U.png" :class="this.showManeuver('2B-U') ? 'overlay' : 'hidden'" />

        <img src="../../assets/Maneuver3A-Right.png" :class="this.showManeuver('3A-Right') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver3A-Straight.png" :class="this.showManeuver('3A-Straight') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver3A-Left.png" :class="this.showManeuver('3A-Left') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver3A-U.png" :class="this.showManeuver('3A-U') ? 'overlay' : 'hidden'" />

        <img src="../../assets/Maneuver3B-Right.png" :class="this.showManeuver('3B-Right') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver3B-Straight.png" :class="this.showManeuver('3B-Straight') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver3B-Left.png" :class="this.showManeuver('3B-Left') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver3B-U.png" :class="this.showManeuver('3B-U') ? 'overlay' : 'hidden'" />

        <img src="../../assets/Maneuver4A-Right.png" :class="this.showManeuver('4A-Right') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver4A-Straight.png" :class="this.showManeuver('4A-Straight') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver4A-Left.png" :class="this.showManeuver('4A-Left') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver4A-U.png" :class="this.showManeuver('4A-U') ? 'overlay' : 'hidden'" />

        <img src="../../assets/Maneuver4B-Right.png" :class="this.showManeuver('4B-Right') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver4B-Straight.png" :class="this.showManeuver('4B-Straight') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver4B-Left.png" :class="this.showManeuver('4B-Left') ? 'overlay' : 'hidden'" />
        <img src="../../assets/Maneuver4B-U.png" :class="this.showManeuver('4B-U') ? 'overlay' : 'hidden'" />

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

        <button class="carButton button1" v-on:click="selectCar('1A')">
            <img src="../../assets/RoadRulesCarGreen.png"
                 :class="selectedLane == '1A' ? 'selectedCar' : 'unselectedCar'" />
        </button>
        <button class="carButton button2" v-on:click="selectCar('1B')">
            <img src="../../assets/RoadRulesCarGreen.png"
                 :class="selectedLane == '1B' ? 'selectedCar' : 'unselectedCar'" />
        </button>

        <button class="carButton button3" v-on:click="selectCar('2A')">
            <img src="../../assets/RoadRulesCarGreen.png"
                 :class="selectedLane == '2A' ? 'selectedCar' : 'unselectedCar'" />
        </button>
        <button class="carButton button4" v-on:click="selectCar('2B')">
            <img src="../../assets/RoadRulesCarGreen.png"
                 :class="selectedLane == '2B' ? 'selectedCar' : 'unselectedCar'" />
        </button>

        <button class="carButton button5" v-on:click="selectCar('3A')">
            <img src="../../assets/RoadRulesCarGreen.png"
                 :class="selectedLane == '3A' ? 'selectedCar' : 'unselectedCar'" />
        </button>
        <button class="carButton button6" v-on:click="selectCar('3B')">
            <img src="../../assets/RoadRulesCarGreen.png"
                 :class="selectedLane == '3B' ? 'selectedCar' : 'unselectedCar'" />
        </button>

        <button class="carButton button7" v-on:click="selectCar('4A')">
            <img src="../../assets/RoadRulesCarGreen.png"
                 :class="selectedLane == '4A' ? 'selectedCar' : 'unselectedCar'" />
        </button>
        <button class="carButton button8" v-on:click="selectCar('4B')">
            <img src="../../assets/RoadRulesCarGreen.png"
                 :class="selectedLane == '4B' ? 'selectedCar' : 'unselectedCar'" />
        </button>

        <div class="saveButton">
            <v-btn color="blue" class="rrButton">
                Save
            </v-btn>
        </div>

        <button class="arrowButton1A" v-on:click="onArrowButton('1A')">
            <img src="../../assets/Arrow.png"
                 :class="enableArrowsInALanes ? 'arrowDown' : 'arrowDown arrowDisable'" />
        </button>
        <button class="arrowButton1B" v-on:click="onArrowButton('1B')">
            <img src="../../assets/Arrow.png"
                 :class="!enableArrowsInALanes ? 'arrowDown' : 'arrowDown arrowDisable'" />
        </button>

        <button class="arrowButton2A" v-on:click="onArrowButton('2A')">
            <img src="../../assets/Arrow.png"
                 :class="enableArrowsInALanes ? 'arrowRight' : 'arrowRight arrowDisable'" />
        </button>
        <button class="arrowButton2B" v-on:click="onArrowButton('2B')">
            <img src="../../assets/Arrow.png"
                 :class="!enableArrowsInALanes ? 'arrowRight' : 'arrowRight arrowDisable'" />
        </button>

        <button class="arrowButton3A" v-on:click="onArrowButton('3A')">
            <img src="../../assets/Arrow.png"
                 :class="enableArrowsInALanes ? 'arrowUp' : 'arrowUp arrowDisable'" />
        </button>
        <button class="arrowButton3B" v-on:click="onArrowButton('3B')">
            <img src="../../assets/Arrow.png"
                 :class="!enableArrowsInALanes ? 'arrowUp' : 'arrowUp arrowDisable'" />
        </button>

        <button class="arrowButton4A" v-on:click="onArrowButton('4A')">
            <img src="../../assets/Arrow.png"
                 :class="enableArrowsInALanes ? 'arrowLeft' : 'arrowLeft arrowDisable'" />
        </button>
        <button class="arrowButton4B" v-on:click="onArrowButton('4B')">
            <img src="../../assets/Arrow.png"
                 :class="!enableArrowsInALanes ? 'arrowLeft' : 'arrowLeft arrowDisable'" />
        </button>
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
                selectedLane: "1A",
                enableArrowsInALanes: true,
                selectedManeuvers: [],
            }
        },

        methods: {
            selectCar(lane) {
                this.selectedLane = lane;
                this.enableArrowsInALanes = lane.includes("A");
            },

            toggleManeuver(maneuver) {
                let index = this.selectedManeuvers.indexOf(maneuver);

                if (index == -1) {
                    this.selectedManeuvers.push(maneuver);
                }
                else {
                    this.selectedManeuvers.splice(index, 1);
                }
            },

            showManeuver(maneuver) {
                return maneuver.includes(this.selectedLane) &&
                    this.selectedManeuvers.includes(maneuver);
            },

            onArrowButton(targetLane) {
                // disabled arrows do nothing
                if (targetLane.charAt(1) != this.selectedLane.charAt(1)) {
                    return;
                }

                switch (this.selectedLane) {
                    case "1A":
                        switch (targetLane) {
                            case "2A":
                                this.toggleManeuver("1A-Right");
                                break;
                            case "3A":
                                this.toggleManeuver("1A-Straight");
                                break;
                            case "4A":
                                this.toggleManeuver("1A-Left");
                                break;
                            case "1A":
                                this.toggleManeuver("1A-U");
                                break;
                        }
                        break;
                    case "1B":
                        switch (targetLane) {
                            case "2B":
                                this.toggleManeuver("1B-Right");
                                break;
                            case "3B":
                                this.toggleManeuver("1B-Straight");
                                break;
                            case "4B":
                                this.toggleManeuver("1B-Left");
                                break; 
                            case "1B":
                                this.toggleManeuver("1B-U");
                                break; 
                        }
                        break;
                    case "2A":
                        switch (targetLane) {
                            case "3A":
                                this.toggleManeuver("2A-Right");
                                break;
                            case "4A":
                                this.toggleManeuver("2A-Straight");
                                break;
                            case "1A":
                                this.toggleManeuver("2A-Left");
                                break;
                            case "2A":
                                this.toggleManeuver("2A-U");
                                break;
                        }
                        break;
                    case "2B":
                        switch (targetLane) {
                            case "3B":
                                this.toggleManeuver("2B-Right");
                                break;
                            case "4B":
                                this.toggleManeuver("2B-Straight");
                                break;
                            case "1B":
                                this.toggleManeuver("2B-Left");
                                break;
                            case "2B":
                                this.toggleManeuver("2B-U");
                                break;
                        }
                        break;
                    case "3A":
                        switch (targetLane) {
                            case "4A":
                                this.toggleManeuver("3A-Right");
                                break;
                            case "1A":
                                this.toggleManeuver("3A-Straight");
                                break;
                            case "2A":
                                this.toggleManeuver("3A-Left");
                                break;
                            case "3A":
                                this.toggleManeuver("3A-U");
                                break;
                        }
                        break;
                    case "3B":
                        switch (targetLane) {
                            case "4B":
                                this.toggleManeuver("3B-Right");
                                break;
                            case "1B":
                                this.toggleManeuver("3B-Straight");
                                break;
                            case "2B":
                                this.toggleManeuver("3B-Left");
                                break;
                            case "3B":
                                this.toggleManeuver("3B-U");
                                break;
                        }
                        break;
                    case "4A":
                        switch (targetLane) {
                            case "1A":
                                this.toggleManeuver("4A-Right");
                                break;
                            case "2A":
                                this.toggleManeuver("4A-Straight");
                                break;
                            case "3A":
                                this.toggleManeuver("4A-Left");
                                break;
                            case "4A":
                                this.toggleManeuver("4A-U");
                                break;
                        }
                        break;
                    case "4B":
                        switch (targetLane) {
                            case "1B":
                                this.toggleManeuver("4B-Right");
                                break;
                            case "2B":
                                this.toggleManeuver("4B-Straight");
                                break;
                            case "3B":
                                this.toggleManeuver("4B-Left");
                                break;
                            case "4B":
                                this.toggleManeuver("4B-U");
                                break;
                        }
                        break;
                }
            }
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
       height: 70px;
       opacity: 1.0;
    }

    .unselectedCar {
        height: 70px;
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
    .saveButton {
        margin-top: 40px;
        margin-left: 255px;
    }
    .arrowDisable {
        opacity: 0.2;
    }
    .arrowRight {
        height: 35px;
        transform: rotate(180deg);
    }
    .arrowLeft {
        height: 35px;
    }
    .arrowUp {
        height: 35px;
        transform: rotate(90deg);
    }
    .arrowDown {
        height: 35px;
        transform: rotate(-90deg);
    }
    .arrowButton1A {
        position: absolute;
        top: 470px;
        left: 250px;
    }
    .arrowButton1B {
        position: absolute;
        top: 470px;
        left: 192px;
    }
    .arrowButton2A {
        position: absolute;
        top: 315px;
        left: 470px;
    }
    .arrowButton2B {
        position: absolute;
        top: 373px;
        left: 470px;
    }
    .arrowButton3A {
        position: absolute;
        top: 90px;
        left: 317px;
    }
    .arrowButton3B {
        position: absolute;
        top: 90px;
        left: 372px;
    }
    .arrowButton4A {
        position: absolute;
        top: 250px;
        left: 95px;
    }
    .arrowButton4B {
        position: absolute;
        top: 190px;
        left: 95px;
    }
</style>
