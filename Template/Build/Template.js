"use strict";
var myNovel;
(function (myNovel) {
    myNovel.ƒ = FudgeCore;
    myNovel.ƒS = FudgeStory;
    myNovel.transition = {
        puzzle: {
            duration: 1,
            alpha: "",
            edge: 1
        }
    };
    myNovel.sound = {
    // themes
    // SFX
    };
    myNovel.locations = {
        kidRoom: {
            name: "Kid room",
            background: "Images/Background/kid_room"
        },
        livingRoom: {
            name: "Living room",
            background: "./Images/Background/living_room.png"
        },
        street: {
            name: "Street",
            background: "Images/Background/Street"
        },
        cave: {
            name: "Cave",
            background: "Images/Background/cave"
        },
        caveTwo: {
            name: "Cave Two",
            background: "Images/Background/CaveTwo"
        },
        garage: {
            name: "Garage",
            background: "Images/Background/garage"
        },
        graveyard: {
            name: "Graveyard",
            background: "Images/Background/graveyard"
        },
        mineEntrance: {
            name: "Mine entrance",
            background: "Images/Background/mineEntrance"
        },
        mineShaft: {
            name: "Mine shaft",
            background: "Images/Background/mineShaft"
        },
        mineShaftTwo: {
            name: "Mine shaft two",
            background: "Images/Background/mineShaftTwo"
        },
        newShaft: {
            name: "New Shaft",
            background: "Images/Background/newShaft"
        },
        sinkhole: {
            name: "Sinkhole",
            background: "Images/Background/newShaft"
        },
        sinkholeInside: {
            name: "Sinkhole inside",
            background: "Images/Background/newShaft"
        }
        /*
        Sinkloch
        Im Loch
        Labyrinth
        Schiff
        */
    };
    myNovel.characters = {
        narrator: {
            name: ""
        },
        ben: {
            name: "Ben",
            origin: myNovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                confident: "Images/Background/Ben/Ben_confident",
                moreConfident: "Images/Background/Ben/Ben_more_confident",
                normal: "Images/Background/Ben/Ben_normal",
                ohman: "Images/Background/Ben/Ben_ohman",
                sad: "Images/Background/Ben/Ben_sad",
                thinking: "Images/Background/Ben/Ben_thinking"
            }
        },
        maria: {
            name: "Maria",
            origin: myNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                angry: "Images/Background/Maria/Maria_angry",
                neutral: "Images/Background/Maria/Maria_neutral",
                neutralEyesClosed: "Images/Background/Maria/Maria_neutralEyesClosed",
                pleased: "Images/Background/Maria/Maria_pleased",
                sad: "Images/Background/Maria/Maria_sad",
                shock: "Images/Background/Maria/Maria_shock"
            }
        },
        valentin: {
            name: "Valentin",
            origin: myNovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                solution: "Images/Background/Valentin/Valentin_solution",
                giveUp: "Images/Background/Valentin/Valentin_giveUp",
                mysterious: "Images/Background/Valentin/Valentin_mysterious",
                normal: "Images/Background/Valentin/Valentin_normal",
                sad: "Images/Background/Valentin/Valentin_sad",
                smile: "Images/Background/Valentin/Valentin_smile"
            }
        }
    };
    myNovel.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: myNovel.firstScene, name: "First scene", id: "test" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        myNovel.dataForSave = myNovel.ƒS.Progress.setData(myNovel.dataForSave, uiElement);
        // start the sequence
        myNovel.ƒS.Progress.go(scenes);
    }
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function Scene() {
        console.log("Test");
        await myNovel.ƒS.Location.show(myNovel.locations.livingRoom);
        await myNovel.ƒS.update();
    }
    myNovel.Scene = Scene;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function firstScene() {
        console.log("Start scene One & Chapter one");
        let text = {
            narrator: {
                T0001: "Valentin macht sich auf den Weg zum Bergwerk."
            },
            ben: {
                T001: "Tschüss Papa."
            },
            maria: {
                T0001: "Alles klar, bis später pass auf dich auf, heute ist doch ein wichtiger Tag."
            },
            valentin: {
                T0001: "Okay, ich mache mich fertig und mache mich auf den Weg.",
                T0002: "Natürlich, ich passe immer auf mich auf, gerade bei so einem wichtigen Tag.",
                T0003: "Tschüss, ihr beiden, habt einen schönen Tag."
            }
        };
        myNovel.ƒS.Speech.hide();
        await myNovel.ƒS.Location.show(myNovel.locations.livingRoom);
        await myNovel.ƒS.update();
    }
    myNovel.firstScene = firstScene;
})(myNovel || (myNovel = {}));
//# sourceMappingURL=Template.js.map