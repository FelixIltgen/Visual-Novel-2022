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
            background: "Images/Background/kid_room.png"
        },
        livingRoom: {
            name: "Living room",
            background: "./Images/Background/living_room.png"
        },
        street: {
            name: "Street",
            background: "Images/Background/Street.png"
        },
        cave: {
            name: "Cave",
            background: "Images/Background/cave.png"
        },
        caveTwo: {
            name: "Cave Two",
            background: "Images/Background/CaveTwo.png"
        },
        garage: {
            name: "Garage",
            background: "Images/Background/garage.png"
        },
        graveyard: {
            name: "Graveyard",
            background: "Images/Background/graveyard.png"
        },
        mineEntrance: {
            name: "Mine entrance",
            background: "Images/Background/mineEntrance.png"
        },
        mineShaft: {
            name: "Mine shaft",
            background: "Images/Background/mineShaft.png"
        },
        mineShaftTwo: {
            name: "Mine shaft two",
            background: "Images/Background/mineShaftTwo.png"
        },
        newShaft: {
            name: "New Shaft",
            background: "Images/Background/newShaft.png"
        },
        sinkhole: {
            name: "Sinkhole",
            background: "Images/Background/newShaft.png"
        },
        sinkholeInside: {
            name: "Sinkhole inside",
            background: "Images/Background/newShaft.png"
        },
        /*
       Sinkloch
       Im Loch
       Labyrinth
       Schiff
       */
        // Chapter Backgrounds
        begin: {
            name: "Begin",
            background: "./Images/Background/Chapter/begin.png"
        },
        chapterOne: {
            name: "Chapter One",
            background: "Images/Background/Chapter/chapterOne.png"
        },
        chapterTwo: {
            name: "Chapter Two",
            background: "Images/Background/Chapter/chapterTwo.png"
        },
        chapterThree: {
            name: "Chapter Three",
            background: "Images/Background/Chapter/chapterThree.png"
        },
        chapterFour: {
            name: "Chapter Four",
            background: "Images/Background/Chapter/chapterFour.png"
        },
        chapterfive: {
            name: "Chapter five",
            background: "Images/Background/Chapter/chapterfive.png"
        },
        chapterSix: {
            name: "Chapter Six",
            background: "Images/Background/Chapter/chapterSix.png"
        },
        chapterSeven: {
            name: "Chapter Seven",
            background: "Images/Background/Chapter/chapterSeven.png"
        },
        intro: {
            name: "Intro",
            background: "Images/Background/Chapter/intro.png"
        }
    };
    myNovel.characters = {
        narrator: {
            name: ""
        },
        ben: {
            name: "Ben",
            origin: myNovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                confident: "Images/Characters/Ben/Ben_confident",
                moreConfident: "Images/Characters/Ben/Ben_more_confident",
                normal: "Images/Characters/Ben/Ben_normal",
                ohman: "Images/Characters/Ben/Ben_ohman",
                sad: "Images/Characters/Ben/Ben_sad",
                thinking: "Images/Characters/Ben/Ben_thinking"
            }
        },
        maria: {
            name: "Maria",
            origin: myNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                angry: "Images/Characters/Maria/Maria_angry.png",
                neutral: "Images/Characters/Maria/Maria_neutral.png",
                neutralEyesClosed: "Images/Characters/Maria/Maria_neutralEyesClosed.png",
                pleased: "Images/Characters/Maria/Test.png",
                sad: "Images/Characters/Maria/Maria_sad.png",
                shock: "Images/Characters/Maria/Maria_shock.png"
            }
        },
        valentin: {
            name: "Valentin",
            origin: myNovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                solution: "Images/Characters/Valentin/Valentin_solution.png",
                giveUp: "Images/Characters/Valentin/Valentin_giveUp.png",
                mysterious: "Images/Characters/Valentin/Valentin_mysterious.png",
                normal: "Images/Characters/Valentin/Valentin_normal.png",
                sad: "Images/Characters/Valentin/Valentin_sad.png",
                smile: "Images/Characters/Valentin/Valentin_smile.png"
            }
        }
    };
    myNovel.newPositions = {
        bottomleft: new FudgeStory.Position(950, -540),
        bottomright: new FudgeStory.Position(-900, -550),
        bottomcenter: new FudgeStory.Position(0, -540),
        rightout: new FudgeStory.Position(2470, -540),
        leftout: new FudgeStory.Position(-2470, -540)
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
        myNovel.ƒS.Speech.hide();
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
                T0001: "Tschüss Papa."
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
        //FX Sound (Tür)
        await myNovel.ƒS.Location.show(myNovel.locations.begin);
        await myNovel.ƒS.update(2);
        //Musik (Vögel)
        await myNovel.ƒS.Location.show(myNovel.locations.intro);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Location.show(myNovel.locations.livingRoom);
        await myNovel.ƒS.update(20);
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.smile, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.pleased, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
    }
    myNovel.firstScene = firstScene;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function secondScene() {
        console.log("Start scene One & Chapter one");
        let text = {
            narrator: {
                T0001: ""
            },
            ben: {
                T0001: ""
            },
            maria: {
                T0001: ""
            },
            valentin: {
                T0001: "",
                T0002: "",
                T0003: ""
            }
        };
    }
    myNovel.secondScene = secondScene;
})(myNovel || (myNovel = {}));
//# sourceMappingURL=Template.js.map