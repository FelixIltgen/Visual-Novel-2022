"use strict";
var myNovel;
(function (myNovel) {
    myNovel.ƒ = FudgeCore;
    myNovel.ƒS = FudgeStory;
    myNovel.transition = {
        fade: {
            duration: 1,
            alpha: "./Assets/Transition/fade.png",
            edge: 1
        },
        leftFade: {
            duration: 1,
            alpha: "./Assets/Transition/leftFade.jpg",
            edge: 1
        }
    };
    myNovel.sound = {
        // themes
        cave: "./Assets/Music/cave.mp3",
        emptyCave: "./Assets/Music/emptyCave.mp3",
        run: "./Assets/Music/run.mp3",
        sunday: "./Assets/Music/sunday.mp3",
        // SFX
        closingGate: "./Assets/Sounds/doorClosing.mp3"
    };
    myNovel.locations = {
        kidRoom: {
            name: "Kid room",
            background: "./Images/Background/kid_room.png"
        },
        livingRoom: {
            name: "Living room",
            background: "./Images/Background/living_room.png"
        },
        street: {
            name: "Street",
            background: "./Images/Background/Street.png"
        },
        cave: {
            name: "Cave",
            background: "./Images/Background/cave.png"
        },
        caveTwo: {
            name: "Cave Two",
            background: "./Images/Background/CaveTwo.png"
        },
        garage: {
            name: "Garage",
            background: "./Images/Background/garage.png"
        },
        graveyard: {
            name: "Graveyard",
            background: "./Images/Background/graveyard.png"
        },
        mineEntrance: {
            name: "Mine entrance",
            background: "./Images/Background/mineEntrance.png"
        },
        mineShaft: {
            name: "Mine shaft",
            background: "./Images/Background/mineShaft.png"
        },
        mineShaftTwo: {
            name: "Mine shaft two",
            background: "./Images/Background/mineShaftTwo.png"
        },
        newShaft: {
            name: "New Shaft",
            background: "./Images/Background/newShaft.png"
        },
        supermarket: {
            name: "Supermarkt",
            background: "./Images/Background/supermarket.png"
        },
        insideSinkhole: {
            name: "Inside of the sinkhole",
            background: "./Images/Background/insideSinkhole.png"
        },
        maze: {
            name: "Maze",
            background: "./Images/Background/maze.png"
        },
        spaceship: {
            name: "Spaceship",
            background: "./Images/Background/spaceship.png"
        },
        sinkhole: {
            name: "Spaceship",
            background: "./Images/Background/sinkhole.png"
        },
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
        },
        blanko: {
            name: "Blanko",
            background: "Images/Background/Chapter/blanko.png"
        },
        gameOver: {
            name: "Game Over",
            background: "Images/Background/Chapter/gameOver.png"
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
                confident: "Images/Characters/Ben/Ben_confident.png",
                moreConfident: "Images/Characters/Ben/Ben_more_confident.png",
                normal: "Images/Characters/Ben/Ben_normal.png",
                ohman: "Images/Characters/Ben/Ben_ohman.png",
                sad: "Images/Characters/Ben/Ben_sad.png",
                thinking: "Images/Characters/Ben/Ben_thinking.png"
            }
        },
        maria: {
            name: "Maria",
            origin: myNovel.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                angry: "Images/Characters/Maria/Maria_angry.png",
                neutral: "Images/Characters/Maria/Maria_neutral.png",
                happy: "Images/Characters/Maria/Maria_happy.png",
                pleased: "Images/Characters/Maria/Maria_pleased.png",
                sad: "Images/Characters/Maria/Maria_sad.png",
                verySad: "Images/Characters/Maria/Maria_very_sad.png"
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
        },
        andrea: {
            name: "Andrea",
            origin: myNovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                argue: "Images/Characters/Weitere/Andrea_argue.png",
                mad: "Images/Characters/Weitere/Andrea_mad.png",
                normal: "Images/Characters/Weitere/Andrea_normal.png",
                ugh: "Images/Characters/Weitere/Andrea_ugh.png"
            }
        },
        polizistin: {
            name: "Polizeibeamtin",
            origin: myNovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                eyes_closed: "Images/Characters/Weitere/polizistin_eyes_closed.png",
                sorry: "Images/Characters/Weitere/polizistin_sorry.png",
                normal: "Images/Characters/Weitere/polizistin_normal.png"
            }
        },
        paula: {
            name: "Paula",
            origin: myNovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                eyes_closed: "Images/Characters/Weitere/paula_eyes_closed.png",
                sorry: "Images/Characters/Weitere/paula_sorry.png",
                normal: "Images/Characters/Weitere/paula_normal.png"
            }
        },
        trabajoEscribo: {
            name: "Trabajo Escribo",
            origin: myNovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Characters/Weitere/trabajoEscribo.png"
            }
        }
    };
    myNovel.items = {
        feuerzeug: {
            name: "Feuerzeug",
            description: "Gut um etwas an zu zünden.",
            image: "Images/Items/feuerzeug.png",
            inInventory: false,
            static: true
        },
        seil: {
            name: "Seil",
            description: "Perfekt um runter oder hoch zu klettern",
            image: "Images/Items/seil.png",
            inInventory: false,
            static: false
        },
        tagebuch: {
            name: "Tagebuch",
            description: "Perfekt für wichtige Infos",
            image: "Images/Items/tagebuch.png",
            inInventory: false,
            static: true
        },
        taschenlampe: {
            name: "Taschenlampe",
            description: "Sorgt für Licht, wenn es mal dunkel wird.",
            image: "Images/Items/taschenlampe.png",
            inInventory: false,
            static: true
        },
        wanderschuhe: {
            name: "Wanderschuhe",
            description: "Perfekt für ein spannendes Abenteuer",
            image: "Images/Items/wanderSchuh.png",
            inInventory: false,
            static: true
        },
        wasserflasche: {
            name: "Wasserflasche",
            description: "Gut für den Durst zwischend durch",
            image: "Images/Items/wasserflasche.png",
            inInventory: false,
            static: true
        }
    };
    myNovel.newPositions = {
        bottomleftMaria: new FudgeStory.Position(950, -540),
        bottomleft: new FudgeStory.Position(350, -540),
        bottomright: new FudgeStory.Position(-900, -550),
        bottomcenter: new FudgeStory.Position(-50, -540),
        rightout: new FudgeStory.Position(2470, -540),
        leftout: new FudgeStory.Position(-2470, -540)
    };
    myNovel.dataForSave = {
        nameProtagonist: "",
        coinScore: 0,
        itemsOne: "",
        itemsTwo: "",
        itemsThree: "",
        itemsFour: "",
        itemsFive: ""
    };
    //Menü
    function credits() {
        myNovel.ƒS.Text.print("");
    }
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };
    let gameMenu;
    let menuIsOpen = false;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await myNovel.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await myNovel.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                credits();
        }
    }
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case myNovel.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await myNovel.ƒS.Progress.save();
                break;
            case myNovel.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await myNovel.ƒS.Progress.load();
                break;
            case myNovel.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case myNovel.ƒ.KEYBOARD_CODE.I:
                await myNovel.ƒS.Inventory.open();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = myNovel.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSS");
        buttonFunctionalities("Close");
        let scenes = [
            //{ scene: firstScene, name: "First scene"},
            //{ scene: secondScene, name: "Second scene"},
            //{ scene: thirdScene, name: "Thrid scene"},
            //{ scene: fourthScene, name: "Fourth scene"},
            //{ scene: fifthScene, name: "Fifth scene"},
            //{ scene: sixthScene, name: "Sixth scene"},
            //{ scene: seventhScene, name: "Seventh scene"},
            //{ scene: eighthScene, name: "Eighth scene"},
            //{ scene: ninthScene, name: "Ninth scene"},
            /*
            { scene: tenthScene, name: "Tenth scene"},
      
            //Selcet Items
            { id: "withDairy", scene: itemSelcetionDairy, name: "Item selcetion with Dairy option"},
            { id: "noDairy", scene: itemSelcetionNoDairy, name: "Item selcetion without Dairy option"},
      
            //Cotinue normal path
            { id: "afterItemSelection", scene: afterItemSelection, name: "First scene after Item selection"},
      
            //Start chapter three
            { id: "chapterThree", scene: startChapterThree, name: "Start Chapter three"},
      
            { id: "chapterThreeGood", scene: chapterThreeGood, name: "Chapter three good path", next: "chapterFour"},
            { id: "chapterThreeMid", scene: chapterThreeMid, name: "Chapter three mid path"},
      
            //Start chapter four
            { id: "chapterFour", scene: startChapterFour, name: "Start Chapter four"},
            { id: "chapterFourGood", scene: chapterFourGood, name: "Start Chapter four"},
            { id: "chapterFourGoodTwo", scene: chapterFourGoodTwo, name: "Start Chapter four"},
            { id: "chapterFourMid", scene: chapterFourMid, name: "Start Chapter four"},
            { id: "chapterFourMidTwo", scene: chapterFourMidTwo, name: "Start Chapter four part two", next: "chapterFiveMid"},
            
            //Start chapter five
            { id: "chapterFiveGoodOne", scene: chapterFiveGoodOne, name: "Start chapter five good path"},
            { id: "chapterFiveGoodTwo", scene: chapterFiveGoodTwo, name: "Next good path in chapter five ", next: "GOODPATH" },
      
            { id: "chapterFiveMid", scene: chapterFiveMid, name: "Start chapter five mid path"},
            { id: "chapterFiveMidTwo", scene: chapterFiveMidTwo, name: "continue mid path"},
            { id: "chapterFiveMidThree", scene: chapterFiveMidThree, name: "continue mid path", next: "mediumPathOne"},
            
            { id: "chapterFiveBad", scene: chapterFiveBad, name: "Chapter three bad path", next: "badPath"},
      
            //Medium Path
            { id: "mediumPathOne", scene: mediumPathOne, name: "Start medium Path"},
            { id: "midMazeRight", scene: midMazeRight, name: "maze right path "},
            { scene: midMazeRightOne, name: "maze right path ", next: "lastMid"},
      
            { id: "midMazeLeft", scene: midMazeLeft, name: "maze left path "},
            { scene: midMazeLeftOne, name: "maze left path "},
      
            { id: "lastMid", scene: lastMid, name: "Last part in Mid path ", next: "empty"},
      
      
            //Good Path
            { id: "GOODPATH", scene: goodPath, name: "Start good path"},
            { id: "GOODPATHTwo", scene: goodPathTwo, name: "continue good path"},
      
            { id: "GOODMazeRight", scene: goodMazeRight, name: "continue good path"},
      
            { id: "GOODMazeLeft", scene: goodMazeLeft, name: "continue good path"},
            { scene: mazePartTwo, name: "continue good path"},
            { scene: mazePartThree, name: "continue good path"},
            { scene: mazePartFour, name: "continue good path"},
            */
            { scene: myNovel.afterMazeGood, name: "continue good path" },
            { scene: myNovel.finalGood, name: "Last scene in good path", next: "empty" },
            //Bad Path
            { id: "badPath", scene: myNovel.badPath, name: "Start bad Path", next: "empty" },
            //bad endings & paths
            { id: "chapterThreeBad", scene: myNovel.ChapterThreeBad, name: "Chapter three bad path" },
            { id: "gameOverChapterFourOne", scene: myNovel.gameOverChapterFourOne, name: "Game over chapter four", next: "empty" },
            { id: "gameOverChapterFourTwo", scene: myNovel.gameOverChapterFourTwo, name: "Chapter three bad path", next: "empty" },
            { id: "gameOverChapterFourThree", scene: myNovel.gameOverChapterFourThree, name: "Chapter three bad path", next: "empty" },
            { id: "gameOverChapterFiveTwo", scene: myNovel.gameOverChapterFiveTwo, name: "Game over chapter five", next: "empty" },
            //Empty scene
            { id: "empty", scene: myNovel.empty, name: "The visual novel ends here" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        myNovel.dataForSave = myNovel.ƒS.Progress.setData(myNovel.dataForSave, uiElement);
        // start the sequence
        myNovel.ƒS.Progress.go(scenes);
        myNovel.ƒS.Speech.hide();
        //Credits
        //<a href="https://lovepik.com/images/png-book.html">Book Png vectors by Lovepik.com</a>
        //<a href="https://www.flaticon.com/de/kostenlose-icons/wasser" title="wasser Icons">Wasser Icons erstellt von Freepik - Flaticon</a>
        //<a href="https://www.flaticon.com/de/kostenlose-icons/seil" title="seil Icons">Seil Icons erstellt von Freepik - Flaticon</a>
        //<a href="https://www.flaticon.com/de/kostenlose-icons/feuerzeug" title="feuerzeug Icons">Feuerzeug Icons erstellt von Freepik - Flaticon</a>
        //<a href="https://www.flaticon.com/de/kostenlose-icons/licht" title="licht Icons">Licht Icons erstellt von Freepik - Flaticon</a>
        //<a href="https://www.flaticon.com/de/kostenlose-icons/buch" title="buch Icons">Buch Icons erstellt von Freepik - Flaticon</a>
        //<a href="https://www.flaticon.com/de/kostenlose-icons/wandern" title="wandern Icons">Wandern Icons erstellt von Freepik - Flaticon</a>
        //<a href="https://www.flaticon.com/de/kostenlose-icons/geld" title="geld Icons">Geld Icons erstellt von Smashicons - Flaticon</a>
        //<a href="https://www.flaticon.com/de/kostenlose-icons/munze" title="münze Icons">Münze Icons erstellt von Freepik - Flaticon</a>
    }
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function ChapterThreeBad() {
        console.log("Start Prolog");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, los geht's dann kann ich ein bisschen Zeit sparen.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben klettert über die Mauer. ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wooow ganz schön hoch. Warum habe ich meine Wanderschuhe nicht mitgenommen, hoffentlich rutsche ich nicht ab, hier ist es ziemlich rutschig.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja gleich geschafft nur noch ein kurzes Stückchen, dann bin ich oben.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben versucht sich an einem losen Stein festzuhalten");
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh Nein der ist ja locker, ahhhhhh ich rutsche ab.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "NEiinnnnn.....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Scheiße, ich hab mir, glaube ich, den Fuß gebrochen.");
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.Location.show(myNovel.locations.gameOver);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.update(5);
    }
    myNovel.ChapterThreeBad = ChapterThreeBad;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function afterItemSelection() {
        console.log("Start Prolog");
        let text = {
            narrator: {
                T0001: "Ben geht zurück ins Wohnzimmer.",
                T0002: "Ben öffnet die Haustür und möchte sein Abenteuer beginnen, aber zögert kurz."
            },
            ben: {
                T0001: "Okay, jetzt sollte ich alles haben, dann kann es jetzt ja losgehen. Hoffentlich ist Mama noch nicht zurück.",
                T0002: "Puuhh sie ist noch nicht Zuhause... perfekt.",
                T0003: "Soll ich Mama doch noch eine kurze Nachricht schreiben?",
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.garage);
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
        await myNovel.ƒS.Location.show(myNovel.locations.livingRoom);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
        let choices = {
            write: "Brief schreiben",
            noWrite: "Keinen Brief schreiben"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.noWrite:
                console.log("Choice dont write");
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.confident, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ach, wieso sollte ich einen Brief schreiben, ich bin doch maximal ein paar Stunden oder maximal ein Tag weg, was soll den schon passieren.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben macht sich auf den Weg zur Mine.");
                await myNovel.ƒS.Character.hideAll();
                return "chapterThree";
            case choices.write:
                console.log("Choice write");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, wo habe ich den ein Blatt Papier und einen Stift...?");
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahh hier, okay, was soll ich den schreiben? So lange werde ich ja nicht wegbleiben. Mama wird wahrscheinlich eh komplett sauer sein, wenn sie den Brief liest.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hmm... ich muss überlegen, was ich schreibe, ah, jetzt weiß ich, was!");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt den Brief zu schreiben, auf ein Mal hört er, wie seine Mutter nach Hause kommt.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, "Hallo, ich bin wieder zu Hause!");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh nein, warum ist Mama schon wieder hier, was soll ich tun, wenn sie mich findet wird, dass mit der Suche nichts?");
                let choicesRun = {
                    hide: "Verstecken",
                    jump: "Aus dem Fenster springen"
                };
                let dialogueElement = await myNovel.ƒS.Menu.getInput(choicesRun, "choicesCSSClass");
                switch (dialogueElement) {
                    case choicesRun.hide:
                        console.log(" Choice hide");
                        return "badEnding";
                    case choicesRun.jump:
                        console.log("Choice jump");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Schnell das Fenster, das ist meine einzige Chance, damit Mama mich nicht sieht.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben klettert aus dem Fenster und kommt so aus dem Haus, ohne von seiner Mutter entdeckt zu werden.");
                        await myNovel.ƒS.Character.hideAll();
                        return "chapterThree";
                }
                break;
        }
    }
    myNovel.afterItemSelection = afterItemSelection;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function afterMazeGood() {
        console.log("Start Prolog");
        await myNovel.ƒS.Speech.hide();
        await myNovel.ƒS.Location.show(myNovel.locations.chapterSix);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Location.show(myNovel.locations.caveTwo);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Speech.show();
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was zum.....????");
        await myNovel.ƒS.Character.show(myNovel.characters.trabajoEscribo, myNovel.characters.trabajoEscribo.pose.normal, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "JUNGSS wir haben das Ding, endlich haben wir es....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was ist den hier los....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Uhhh wer bist du den kleiner...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja wer seid du... was machst du hier. ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Ich bin Kapitän Trabajo Escribo ich suche schon Ewigkeiten nach diesem Ding hier, es ist auf unserem Planeten ausgebrochen und hat es sich wohl hier auf diesem Planeten gemütlich gemacht.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment andere Planet was zum Teufel...?");
        await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "JA, ich und meine Crew sind Weltraum Piraten...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Jetzt bin ich verwirrt...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Ja das sind die meisten die uns das erste Mal sehen. Und was machst du in diesen Höhlen. ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich suche meinen Vater der ist seit ein paar Tagen vermisst und ich glaube er ist hier irgendwo...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "AHH verstehe ich kann dir womöglich bei deiner Suche helfen komm mit. ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay??");
        await myNovel.ƒS.Character.hideAll();
        await myNovel.ƒS.Location.show(myNovel.locations.spaceship);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.trabajoEscribo, myNovel.characters.trabajoEscribo.pose.normal, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Willkommen auf der HMV Absturz, das ist unser gutes Schiff, wir sind leider bei unserer Landung abgestürzt und hier unten gelandet...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Dann habe ich wohl doch nicht geträumt...");
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.normal, myNovel.newPositions.bottomcenter);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, "BEEENNN?!?!?!!");
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "PAPA????....Ohh mein Gottt du lebst noch.....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, "Ja....ich habe Hilfe von den Piraten bekommen ohne sie hätte ich es nicht geschafft. Was machst du hier?");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich habe angefangen dich zu suchen weil alle aufgegeben haben. ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, "Wow, das war mutig von dir... aber deine Maria macht sich bestimmt große Sorgen...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja vielleicht aber wir können ja jetzt nach Hause gehen ich weiß aber nicht wie wir hier Raus kommen.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "HAHA das ist kein Problem wir können euch mit unserm Schiff mitnehmen");
        await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Aber wir müssen erst unseren Schatz wieder einsammeln den wir beim Absturz verloren haben.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was habt ihr verloren? ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Eine menge Goldmünzen... wir haben sie schon gefunden aber noch nicht zum Schiff gebracht.");
        if (myNovel.dataForSave.coinScore == 30) {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment ich habe in einem Labyrinth Goldmünzen gefunden.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben holt die beiden Säcke mit den Goldmünzen heraus.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "WOW das ist das gesammelte Gold von uns ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hier...");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Dankeschön kleiner dann können wir aufbrechen... und euch zwei nehmen wir gleich mit.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Perfekt.");
        }
        else if (myNovel.dataForSave.coinScore == 10) {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hier, ich habe diesen Beutel mit Goldmünzen gefunden gehört er euch.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Ja genau der ist von uns... aber wir haben noch einen den wir brauchen, ohne den können wir nicht los.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wenn ihr wollt kann ich die letzten Goldmünzen für euch holen dann können wir schneller los.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Ja wenn du das willst, es wäre eine große Hilfe.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay dann mache ich das..");
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Okay also der letzte Beutel ist in dem Labyrinth. Hier ist die genauen Position dann musst du nicht suchen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Danke ich bin gleich wieder da. ");
            await myNovel.ƒS.Character.hideAll();
            await myNovel.ƒS.Speech.hide();
            await myNovel.ƒS.Location.show(myNovel.locations.blanko);
            await myNovel.ƒS.update(3);
            await myNovel.ƒS.Location.show(myNovel.locations.spaceship);
            await myNovel.ƒS.update(3);
            await myNovel.ƒS.Speech.show();
            await myNovel.ƒS.update();
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update(1);
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich bin wieder da.");
            await myNovel.ƒS.Character.show(myNovel.characters.trabajoEscribo, myNovel.characters.trabajoEscribo.pose.normal, myNovel.newPositions.bottomleft);
            await myNovel.ƒS.update(1);
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Hast du die Goldmünzen gefunden?");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja habe alle gefunden...");
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Perfekt, danke für deine Hilfe du hast uns sehr viel Zeit gespart. ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Kein Problem");
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Dann können wir jetzt aufbrechen.");
        }
        else {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wenn ihr wollt kann ich die Goldmünzen für euch holen dann können wir schneller los.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Ja, wenn du das willst, es wäre eine große Hilfe.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay dann mache ich das..");
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Okay also wir haben zwei Beutel in einem Labyrinth liegen hier sind die genauen Positionen dann musst du nicht suchen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Danke ich bin gleich wieder da. ");
            await myNovel.ƒS.Character.hideAll();
            await myNovel.ƒS.Speech.hide();
            await myNovel.ƒS.Location.show(myNovel.locations.blanko);
            await myNovel.ƒS.update(3);
            await myNovel.ƒS.Location.show(myNovel.locations.spaceship);
            await myNovel.ƒS.update(3);
            await myNovel.ƒS.Speech.show();
            await myNovel.ƒS.update();
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update(1);
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich bin wieder da.");
            await myNovel.ƒS.Character.show(myNovel.characters.trabajoEscribo, myNovel.characters.trabajoEscribo.pose.normal, myNovel.newPositions.bottomleft);
            await myNovel.ƒS.update(1);
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Hast du die Goldmünzen gefunden?");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja habe alle gefunden...");
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Perfekt, danke für deine Hilfe du hast uns sehr viel Zeit gespart. ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Kein Problem");
            await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Dann können wir jetzt aufbrechen.");
        }
    }
    myNovel.afterMazeGood = afterMazeGood;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function badPath() {
        console.log("Start Prolog");
        await myNovel.ƒS.Speech.hide();
        await myNovel.ƒS.Location.show(myNovel.locations.chapterfive);
        await myNovel.ƒS.update(4);
        await myNovel.ƒS.Speech.show();
        await myNovel.ƒS.update();
        await myNovel.ƒS.Location.show(myNovel.locations.caveTwo);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.tagebuch) == 1) {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wow hatte Papa echt recht mit dem Monster aus dem Tagebuch. Ich habe echt gedacht, dass er halluziniert, aber vielleicht liegt es auch an mir.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt dem Fluss verlauf. ");
            //Geräusche
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was war das schon wieder....");
            //Geräusche
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Oh mein Gott Papa hatte einfach Recht ich wusste ihm kann man immer vertrauen. ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahh es kommt immer näher. ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich höre es hinter mir....");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Bloß weg hier");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben versucht dem unbekannten etwas zu entkommen und rennt los.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Scheiße Sackgasse, aber ich glaube ich habe es abgehängt. ");
            //Lauter Schrei
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahhhhhhhhhhhhhh.........");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "");
        }
        else {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Als ob hier unten echt Tiere leben die so laut sind. Hoffentlich ist es kein Bär oder so. Ich glaube es ist besser wenn ich jetzt etwas leiser bin.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt dem Fluss verlauf. ");
            //Lautes Geräusch
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was war das schon wieder....");
            //Lauter Schrei
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Oh mein Gott, was ist das für ein Ding");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahh es kommt immer näher. ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich höre es hinter mir...");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Bloß weg hier ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben versucht dem unbekannten etwas zu entkommen und rennt los.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Scheiße Sackgasse, aber ich glaube ich habe es abgehängt. ");
            //Lauter Schreieeee
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahhhhhhhhhhhhhh.........");
            await myNovel.ƒS.Character.hideAll();
            await myNovel.ƒS.Speech.hide();
            await myNovel.ƒS.Location.show(myNovel.locations.blanko);
            await myNovel.ƒS.update(4);
            await myNovel.ƒS.Speech.show();
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, "Ben aufstehen sonst kommst du zu spät zur Schule und dann gibt es wieder Ärger.");
            await myNovel.ƒS.Speech.hide();
            await myNovel.ƒS.Location.show(myNovel.locations.blanko);
            await myNovel.ƒS.update(4);
        }
    }
    myNovel.badPath = badPath;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterFiveBad() {
        console.log("Chapter five bad");
        await myNovel.ƒS.Location.show(myNovel.locations.mineShaft);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ach, hier wird es schon richtig sein, hoffentlich verlaufe ich mich nicht.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben entscheidet sich für den weg nach rechts.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay mal schauen was ich hier so finde.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt dem langen geraden Stollen.");
        //Stein geräusch
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Oh nein, der Stollen bricht ein. Schnell weg...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hust.... hust....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Woah das war knapp...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben schaut nach hinten, hinter ihm ist der gesamte Stollen eingebrochen und der Gang ist verschüttet. ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Tja, hier komme ich wohl nicht mehr zurück. Dann weiter gerade aus.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Nach einer Weile kommt Ben zu einer Hängebrücke.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wow die sieht nicht gerade stabil aus, wie tief es wohl da Runter geht...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben nimmt ein Stein und wirft ihn in die Tiefe.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, " 1...2...3... wieso höre ich kein Aufschlag? Naja muss wohl sehr Tief sein");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, was mach ich jetzt mir bleibt nichts anderes übrig, als über die Brücke zu gehen.");
        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.seil) == 1) {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich kann mich zumindest mit dem Seil absichern, dann stürze ich nicht sofort ab.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben macht eine Sicherung, damit er sicher über die Brücke gehen kann.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Woah das ist so wacklig und unsicher, hoffentlich halten die Holzbalken.");
            //knackendes Holz geräusch
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohhh das war keine so gute Idee....");
            //Brechendes Holz
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Woah scheiße, die Brücke bricht durch....");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Die Balken der Brücke haben das Gewicht von Ben nicht ausgehalten und sind durchgebrochen, aber die Sicherung von ihm hält und er stürzt nicht in die Tiefe.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja, zum Glück habe ich das Seil, sonst hätte ich jetzt ein Problem");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben klettert wieder zurück auf die Brücke.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So, es kann weiter gehen, hoffentlich ohne zwischen Fälle ...");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So geschafft das war aber eigentlich auch wieder genug Adrenalin für die nächsten zehn Wochen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So weiter gehts, hoffentlich finde ich irgendwie einen anderen Weg hier raus, ich will nicht noch mal über diese Brücke.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Sind das Laternen an der Wand?");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja... da sind sogar richtig viele... ");
            if (myNovel.ƒS.Inventory.getAmount(myNovel.items.feuerzeug) == 1) {
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich habe doch das Feuerzeug eingepackt, damit kann ich die Fackeln anzünden und meine Taschenlampe etwas schonen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben nimmt sein Feuerzeug aus dem Rucksack und zündet die Fackeln an, die er auf dem weiteren Weg findet an.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Die Fackeln sind echt eine gute Hilfe und als Orientierung helfen sich auch. ");
            }
            else {
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Schade hätte ich jetzt ein Feuerzeug, dabei könnte ich die Fackeln anzünden, dann verbrauche ich nicht so viel von meiner Taschenlampe.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht mit seiner Taschenlampe weiter und folgt den Fackeln an der Wand. ");
            }
        }
        else {
            return "gameOverChapterFiveTwo"; //Game over Five
        }
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Komisch hier hört der Stollen auf.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben schaut sich um und findet etwas versteckt eine Luke.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hmm... wo die wohl hinführt? Ich schau mal nach, alles ist besser wie wieder auf diese Brücke zu gehen.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Boah, die geht ja richtig schwer auf...");
        //Tür geräusch
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hm... ein Schacht mit einer Leiter sieht eng aus...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Egal runter da..");
        await myNovel.ƒS.Location.show(myNovel.locations.caveTwo);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht die Leiter herunter und steht auf einmal vor einem Fluss. ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wow okay das muss wohl das Rauschen gewesen sein wo ich die ganze Zeit gehört habe.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben trinkt aus dem Fluss.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Perfekt, das habe ich jetzt echt gebraucht. ");
        //Lauter Schrei
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was war das??");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "");
    }
    myNovel.chapterFiveBad = chapterFiveBad;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterFiveGoodOne() {
        console.log("Start Prolog");
        let text = {
            narrator: {
                T0001: "Ben macht seine Taschenlampe an und führt sein Abenteuer fort.",
                T0002: "Ben läuft weiter, bis er den nächsten Stützbalken findet.",
                T0003: "",
                T0004: "",
                T0005: ""
            },
            ben: {
                T0001: "Okay, hier ist es ja genau so dunkel wie im anderen Stollen.",
                T0002: "Wo bin ich eigentlich...? Ich habe voll die Orientierung verloren..",
                T0003: "Papa hat doch immer erzählt, dass die Stützbalken Markierungen haben. ",
                T0004: "Da, da oben steht doch irgendetwas.",
                T0005: "B37...",
                T0006: "",
                T0007: ""
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
        await myNovel.ƒS.Location.show(myNovel.locations.mineShaftTwo);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0005);
        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.tagebuch) == 1) {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Papa hatte doch irgendetwas ins Tagebuch eingetragen, ich sollte vielleicht noch mal nachlesen.");
            myNovel.ƒS.Speech.hide();
            //Novel Page
            myNovel.ƒS.Text.addClass("novelPageDiary");
            await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Erster Eintrag:</b> <br> <br> Heute müssen ich und Andrea den neuen Stollen sprengen ich bin mir sehr unsicher ob es eine Gute Idee ist.<br> \
                                <br> <b>Zweiter Eintrag: </b> <br> <br> Habe noch mal Rücksprache mit der Minenleitung gehalten. Die wollen echt, dass ich diesen Tunnel sprenge... <br> \
                                <br> <b>Dritter Eintrag:</b> <br> <br> Ich fahre jetzt mit Andrea an die Stelle für die Sprengung und bereite alles vor.</div>  \
                                <div class=rightPage> <b>Vierter Eintrag:</b> <br> <br> Die Sprengung hat gut funktioniert, hoffentlich passiert nichts.  </div> </div>");
            await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Fünfter Eintrag:</b> <br> <br> Ich habe den Einsturz überlebt, wie durch ein Wunder bin ich nicht \
                                verletzt. Was auch immer mich verfolgt hat es ist weg, vielleicht auch tot? <br> \
                                <br> <b>Sechster Eintrag: </b><br><br> Ich hatte Glück, habe eine alte Taschenlampe gefunden, die noch funktioniert, nun kann ich etwas \
                                 besser sehen, wo ich entlang gehe. Das sind definitiv keine Stollen, es muss eine Höhle oder etwas Ähnlicheres sein. <br> \
                                <br> <b>Siebter Eintrag:</b> <br> <br> Ich habe einen Rucksack mit Konserven gefunden, wie kam der nur hier her? Das kann kein Zufall sein. Egal, Hauptsache, ich habe etwas zu essen.</div>  \
                                <div class=rightPage> <b>Achter Eintrag:</b> <br> <br> Ich habe die Suche nach Andrea aufgegeben, ich kann ihn nirgendwo finden, wahrscheinlich hat sie es nicht geschafft. Was ist das nur gewesen?<br> \
                                <br><b>Neunter Eintrag:</b><br><br> Ich habe in einem Haufen aus Schutt Batterien gefunden, damit hält meine Taschenlampe etwas länger, wie sind die Batterien hier gelandet?<br> \
                                <br><b>Zehnter Eintrag:</b><br><br> Diese Gänge sind etwas irreführend, kommt mir vor wie in einem Labyrinth, wenn ich hier durch komme, sollte ich mir den richtigen Weg aufschreiben. </div></div>");
            await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>WICHTIG UNBEDINGT MERKEN</b> <br><br> <br>⇽ 🠕 ⇾ 🠕 = ✧ <br><br><br> 5536 </div>  \
                                <div class=rightPage></div></div>");
            myNovel.ƒS.Speech.show();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Genau da ist B37 also müsste ich, wenn ich es richtig sehe, demnächst bei Stollen A38 rein.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben macht sich auf den Weg und sucht den Stollen mit den Markierungen, die sein Vater ins Tagebuch geschrieben hat.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da ist der Stollen...  ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht in den Stollen A38...");
            await myNovel.ƒS.Character.hideAll();
        }
        else {
            return ""; // rüber zu mid
        }
    }
    myNovel.chapterFiveGoodOne = chapterFiveGoodOne;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterFiveGoodTwo() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.newShaft);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay mal schauen, was ich hier drin so finden werde.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt den Stollen zu untersuchen, von dem sein Vater im Tagebuch gesprochen hat.");
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich muss irgendwie diese Höhlen finden, in denen Papa nach dem Einsturz gelandet ist, aber wie nur ...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Nach ein Paar Minuten steht Ben Plötzlich vor einer Wand.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wieso hört der Stollen auf, da kann doch etwas nicht stimmen auf der Karte sollte es doch noch weiter gehen...");
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben schaut sich um... links und rechts gibt es kein Durchgang.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Nicht nach links oder rechts nach oben da geht es weiter.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja, da oben geht es echt weiter, ich muss irgendwie nach oben kommen.");
        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.wanderschuhe) == 1) {
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.confident, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, mit meinen Wanderschuhen sollte es ja kein Problem sein.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt die Wand nach oben zu klettern. ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Tadaa, war ja halb so schlimm, so weiter geht's..");
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Also irgendwie fühlt sich der Boden hier komisch an.");
            //steine Geräusch
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Unter Ben bricht plötzlich der Boden ein ");
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "AHHhhhh was passiert den jetzt....der Boden");
            await myNovel.ƒS.Character.hideAll();
            await myNovel.ƒS.Location.show(myNovel.locations.cave);
            await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update(1);
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Au...");
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wo bin ich...wo ist meine Taschenlampe...");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahh hier....");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wow, das muss das Höhlensystem sein, indem Papa gelandet ist. Ich bin also auf dem Richtigen weg.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Aber zurück komme ich jetzt so bestimmt nicht mehr. ");
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben rafft sich nach seinem spektakulären Sturz auf und führt seine Suche fort und führt seine Suche fort.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, es kann weiter gehen");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Nach einer weile kommt Ben an eine Gabelung.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, wo soll ich jetzt entlang gehen das Tagebuch kann mir hier nicht mehr helfen links oder rechts?");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "");
            let choices = {
                left: "Nach links gehen",
                right: "Nach rechts gehen"
            };
            let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
            switch (dialogueElement) {
                case choices.left:
                    console.log("Choice left");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich glaube, ich gehe nach links, wenn ich nicht weiterkomme, kann ich es immer noch links probieren.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht nach links weiter, plötzlich steht er vor einem Abgrund.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, hier komme ich nicht so einfach weiter, also entweder klettern oder zurück?");
                    let choice = {
                        back: "Zurück gehen",
                        climp: "Nach unten klettern"
                    };
                    let dialogueElement = await myNovel.ƒS.Menu.getInput(choice, "choicesCSSClass");
                    switch (dialogueElement) {
                        case choice.climp:
                            console.log("Choice left");
                            if (myNovel.ƒS.Inventory.getAmount(myNovel.items.seil) == 1) {
                                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.confident, myNovel.newPositions.bottomright);
                                await myNovel.ƒS.update();
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Stimmt, ich habe ja noch das Seil, das kann ich benutzen, dann passiert mir nicht so viel, wenn ich abrutsche.");
                                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
                                await myNovel.ƒS.update();
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Boah durch das ganze klettern habe ich jetzt richtig Durst.  ");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "");
                            }
                            else {
                                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.sad, myNovel.newPositions.bottomright);
                                await myNovel.ƒS.update();
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Schade, wenn ich jetzt ein Seil hätte, würde ich einfacher da hochkommen... naja sollte auch ohne gehen.");
                                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.confident, myNovel.newPositions.bottomright);
                                await myNovel.ƒS.update();
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich hatte ja schon genug Übungen davor sollte nicht so schwer sein.");
                                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.sad, myNovel.newPositions.bottomright);
                                await myNovel.ƒS.update();
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Boah durch das ganze laufen habe ich jetzt richtig Durst. ");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "");
                            }
                            await myNovel.ƒS.Character.hideAll();
                            return ""; //Good Path
                        case choice.back:
                            console.log("Choice right");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich gehe glaube ich, besser wieder zurück.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht zurück und nimmt die rechte Gabelung.");
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update();
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Boah durch das ganze laufen habe ich jetzt richtig Durst.");
                            await myNovel.ƒS.Character.hideAll();
                            return ""; //Good Path           
                    }
                case choices.right:
                    console.log("Choice right");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich glaube, ich gehe nach rechts, wenn ich nicht weiterkomme, kann ich es immer noch links probieren.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht nach rechts weiter.");
                    await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                    await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
                    await myNovel.ƒS.update();
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Boah durch das ganze laufen habe ich jetzt richtig Durst.");
                    await myNovel.ƒS.Character.hideAll();
                    return ""; //Good Path           
            }
        }
        else {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohne meine Wanderschuhe ist es, glaube ich, doch keine so gute Idee, die Steine hier sind sehr glitschig. Ich will nicht abrutschen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich glaube, ich gehe lieber wieder zurück an die Gabelung und nehme doch lieber einen anderen Weg.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay links oder rechts? ");
            let choice = {
                straight: "Gerade aus gehen",
                right: "Nach rechts gehen"
            };
            let dialogueElement = await myNovel.ƒS.Menu.getInput(choice, "choicesCSSClass");
            switch (dialogueElement) {
                case choice.straight:
                    console.log("Choice straight");
                    await myNovel.ƒS.Character.hideAll();
                    return "chapterFiveMidThree"; //Mid path
                case choice.right:
                    console.log("Choice right");
                    await myNovel.ƒS.Character.hideAll();
                    return "chapterFiveBad"; //Bad Path          
            }
        }
    }
    myNovel.chapterFiveGoodTwo = chapterFiveGoodTwo;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterFiveMid() {
        console.log("Chapter Five mid");
        await myNovel.ƒS.Speech.hide();
        await myNovel.ƒS.Location.show(myNovel.locations.chapterfive);
        await myNovel.ƒS.update(4);
        await myNovel.ƒS.Speech.show();
        await myNovel.ƒS.update();
        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.taschenlampe) == 1) {
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update(1);
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Zum Glück habe ich meine Taschenlampe dabei. Ohne wäre es viel zu Dunkel.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben holt seine Taschenlampe aus seinem Rucksack und macht sie an.");
            await myNovel.ƒS.Location.show(myNovel.locations.mineShaftTwo);
            await myNovel.ƒS.update(1);
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Perfekt, dann kann es ja losgehen");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben macht sich auf den Weg und geht tiefer in den Stollen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wo bin ich eigentlich...? ich habe voll die Orientierung verloren...");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Papa hat doch immer erzählt, dass die Stützbalken Markierungen haben. ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben läuft weiter bis er den nächsten Stützbalken findet. ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da, da oben steht doch irgendetwas.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "B37...");
            if (myNovel.ƒS.Inventory.getAmount(myNovel.items.tagebuch) == 1) {
                await myNovel.ƒS.Character.hideAll();
                return "chapterFiveGoodOne"; //Good seite
            }
            else {
                return "chapterFiveMidTwo"; //next part
            }
        }
        else {
            await myNovel.ƒS.Character.hideAll();
            return "gameOverChapterFourOne"; //Game over five
        }
    }
    myNovel.chapterFiveMid = chapterFiveMid;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterFiveMidThree() {
        console.log("continue Mid Five");
        await myNovel.ƒS.Location.show(myNovel.locations.mineShaftTwo);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ach egal, ich geh einfach hier weiter gerade aus wird schon irgendwie passen. Hier sieht es ja eigentlich ganz okay aus.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht weiter gerade aus.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, ich folge jetzt einfach dem Stollen, bis ich irgendwas Interessantes finde.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben läuft lange Zeit einfach nur gerade aus und will eigentlich schon umdrehen, als er auf einmal etwas entdeckt.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wow, echt enttäuschend, ich laufe hier nur gerade aus und nichts Spanendes passiert...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment, was ist das???.. Das ist eine Lore, die hat wohl jemand vergessen.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben geht ein Stück weiter, da kommt ihm eine Idee.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hier geht es Berg ab, ich könnte die Lore benutzen, um schneller voran zu kommen und mit ihr ein Stück den Berg herunter fahren oder ich laufe.");
        let choices = {
            foot: "Zu Fuß gehen",
            drive: "Mit der Lohre fahren"
        };
        let dialogueElementTwo = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElementTwo) {
            case choices.drive:
                console.log("Choice drive");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohhh jaa das wird bestimmt lustig mit dem Teil den Berg herunter zu fahren.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ein bisschen Aktion muss ja auch sein, es ist eh schon viel zu langweilig hier.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben schiebt die Lore an und springt hinein.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Oaky lossss gehtsssss...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Die Lore beginnt den Berg herunter zu fahren.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wouhhhhhhh das macht mehr Spaß wie gedacht...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Die Lohre wird immer schneller und schneller");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh jetzt wird es langsam ein bisschen zu schnell...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wie bremse ich in dem Ding...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh nein, es wird nicht langsamer, was mache ich jetzt");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich muss abspringen bevor eine Kurve kommt oder die Schienen aufhören. ");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Aber wo nur... soll ich lieber gleich abspringen");
                let choice = {
                    jump: "Abspringen",
                    wait: "Warten"
                };
                let dialogueElementTwo = await myNovel.ƒS.Menu.getInput(choice, "choicesCSSClass");
                switch (dialogueElementTwo) {
                    case choice.jump:
                        console.log("Choice jump");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahh das wird jetzt bestimmt unangenehm, aber ich muss hier raus.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben springt aus der Lore und versucht sich auf dem Boden abzurollen.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ah, mein Rücken...das war ne richtige Scheiß Idee mit der Lore zu fahren.");
                        //Lauter knall der Lore
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Woahh das war dann wohl die Lore zum Glück bin ich raus gesprungen, das wäre für mich nicht so gut ausgegangen.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohhh nee, ich habe meinen Rucksack nicht aus der Lore genommen. Bitte sind meine Sachen nicht weg.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben folgt den Schienen, um seine Sachen wieder zu bekommen.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da vorne liegt die Lore, die hat es ja komplett zerlegt, zum Glück bin ich raus gesprungen. Aber wo sind meine Sachen....");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht seine Sachen, kann sie aber erst nicht finden.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Oh nein, bitte sind die Sachen jetzt nicht weg... ach da liegen sie ein Glück, dann kann es jetzt wieder weiter gehen.");
                        break;
                    case choice.wait:
                        console.log("Choice wait");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, jetzt habe ich aber echt nicht mehr so viel Zeit, ich muss schnell eine Lösung finden.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da da kommt doch so ein kleiner Fluss, das ist meine letzte Möglichkeit");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "3,2,1...");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben springt ab und versucht in dem nahegelegenen Fluss zu landen.");
                        //Wassersound
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Boah, ist das kalt schnell raus hier...");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben schwimmt zum Ufer und klettert zurück ins trockene.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich muss irgendwie an trockene Sachen kommen, aber wie, hier unten werde ich im Leben nicht finden, was soll ich jetzt tun...");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Das war alles eine riesen Fehlaktion, wieso habe ich mich dazu entschlossen, das zu machen...");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Und wie komme ich hier wieder raus, ich werde nie einen Weg finden, heile hier raus zu kommen....");
                        //Lauter Schrei
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was war das??");
                        return "chapterFiveBad";
                }
            case choices.foot:
                console.log("Choice foot");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ne ne mit dem Ding zu fahren ist viel zu gefährlich, ich weiß ja gar nicht, wo die Schienen hinführen, am Ende entgleist das Ding und ich muss abspringen....");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich laufe lieber, dann bin ich auf der sicheren Seite.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben lässt die Lore stehen und geht weiter zu Fuß und folgt den Schienen.");
                break;
        }
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So wo soll ich jetzt entlang gehen, hier gibt es keinen richtigen Weg mehr.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben hört in der ferne etwas.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ist das Wasser?");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt dem Geräusch. ");
        await myNovel.ƒS.Location.show(myNovel.locations.caveTwo);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da ein Fluss, hier muss wohl so eine unterirdische Quelle sein.  ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben trinkt aus dem Fluss.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Perfekt das habe ich jetzt echt gebraucht. ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was war das??");
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.chapterFiveMidThree = chapterFiveMidThree;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterFiveMidTwo() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.mineShaftTwo);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hätte ich bloß mein Tagebuch eingepackt, dann könnte ich jetzt irgendwie herausfinden, was für eine Bedeutung diese Zeichen haben.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was soll ich jetzt machen...");
        let choice = {
            back: "In Stollen A38 gehen",
            straight: "Gerade aus gehen",
            right: "Nach rechts gehen"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choice, "choicesCSSClass");
        switch (dialogueElement) {
            case choice.back:
                console.log("Choice back");
                return "chapterFiveGoodTwo"; //back to good path
            case choice.straight:
                console.log("Choice straight");
                return "chapterFiveMidThree"; //Good Path  
            case choice.right:
                console.log("Choice right");
                return "chapterFiveBad"; //Good Path 
        }
    }
    myNovel.chapterFiveMidTwo = chapterFiveMidTwo;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function gameOverChapterFourTwo() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.sinkhole);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich glaube, es ist besser, wenn ich warte und mich im Dunkeln an den Wachen vorbei schleiche.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Die Wahrscheinlichkeit, eine Lücke zu finden, ist sicher gering, die Absperrung ist ja noch neu.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben wartet darauf, dass es dunkler wird ");
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Mittlerweile ist es dunkel geworden Ben wartet immer noch auf einen guten Moment, sich an den Wachleuten vorbei zu schleichen.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Jetzt kann ich es versuchen, es ist dunkel genug und die Wachleute sind nicht mehr so wachsam.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben beginnt sich an den Wachen vorbei zu schleichen und durch den einzigen Eingang in der Absperrung zu gehen.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, läuft ja ganz gut, ich bin fast am Tor...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben kriecht weiter Richtung Tor, plötzlich kommt ein Wachmann auf ihn zu.");
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Scheiße, ich muss mich verstecken....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh nein, hier kann ich mich nirgends verstecken, das war's er wird mich sehen...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Heyyy, was machst du den da?!!!");
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.Location.show(myNovel.locations.gameOver);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.update(5);
    }
    myNovel.gameOverChapterFourTwo = gameOverChapterFourTwo;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function gameOverChapterFourThree() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.sinkhole);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich habe zwar nicht alles dabei was ich brauche aber ich versuche es einfach.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt ohne Ausrüstung das Loch hinunter zu klettern.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wow, ist das rutschig, aber nicht so schwierig, wie ich dachte, war wohl doch die bessere Idee wie der Aufzug.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben wird immer leichtsinniger und wird immer unvorsichtiger, er bemerkt nicht, dass er sich an einem lockeren Stein festhält.");
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh nein der ist ja locker.... oh NeEINnnn");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "AHHHHhhshsahahhh............... ");
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.Location.show(myNovel.locations.gameOver);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.update(5);
    }
    myNovel.gameOverChapterFourThree = gameOverChapterFourThree;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterFourGood() {
        console.log("Chapter Four Good");
        await myNovel.ƒS.Location.show(myNovel.locations.mineEntrance);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da ist der Eingang, war doch noch ein ganzes Stück bis hier hin.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So wie komme ich jetzt hier rein?");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht einen Weg, um in das Bergwerk zu kommen.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Mal schauen, ob ich am Stolleneingang rein komme.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Schade ist abgeschlossen. Wie komme ich hier rein.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment im Taschenbuch von Papa stand doch eine Info.");
        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.tagebuch) == 1) {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Irgendwo hatte Papa einen Code ins Tagebuch eingetragen, vielleicht ist das der Code für das Schloss?");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Aber wie ging er noch mal?");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "...ich schaue lieber nochmal nach.");
            myNovel.ƒS.Speech.hide();
            //Novel Page
            myNovel.ƒS.Text.addClass("novelPageDiary");
            await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Erster Eintrag:</b> <br> <br> Heute müssen ich und Andrea den neuen Stollen sprengen ich bin mir sehr unsicher ob es eine Gute Idee ist.<br> \
                                <br> <b>Zweiter Eintrag: </b> <br> <br> Habe noch mal Rücksprache mit der Minenleitung gehalten. Die wollen echt, dass ich diesen Tunnel sprenge... <br> \
                                <br> <b>Dritter Eintrag:</b> <br> <br> Ich fahre jetzt mit Andrea an die Stelle für die Sprengung und bereite alles vor.</div>  \
                                <div class=rightPage> <b>Vierter Eintrag:</b> <br> <br> Die Sprengung hat gut funktioniert, hoffentlich passiert nichts.  </div> </div>");
            await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Fünfter Eintrag:</b> <br> <br> Ich habe den Einsturz überlebt, wie durch ein Wunder bin ich nicht \
                                verletzt. Was auch immer mich verfolgt hat es ist weg, vielleicht auch tot? <br> \
                                <br> <b>Sechster Eintrag: </b><br><br> Ich hatte Glück, habe eine alte Taschenlampe gefunden, die noch funktioniert, nun kann ich etwas \
                                 besser sehen, wo ich entlang gehe. Das sind definitiv keine Stollen, es muss eine Höhle oder etwas Ähnlicheres sein. <br> \
                                <br> <b>Siebter Eintrag:</b> <br> <br> Ich habe einen Rucksack mit Konserven gefunden, wie kam der nur hier her? Das kann kein Zufall sein. Egal, Hauptsache, ich habe etwas zu essen.</div>  \
                                <div class=rightPage> <b>Achter Eintrag:</b> <br> <br> Ich habe die Suche nach Andrea aufgegeben, ich kann ihn nirgendwo finden, wahrscheinlich hat sie es nicht geschafft. Was ist das nur gewesen?<br> \
                                <br><b>Neunter Eintrag:</b><br><br> Ich habe in einem Haufen aus Schutt Batterien gefunden, damit hält meine Taschenlampe etwas länger, wie sind die Batterien hier gelandet?<br> \
                                <br><b>Zehnter Eintrag:</b><br><br> Diese Gänge sind etwas irreführend, kommt mir vor wie in einem Labyrinth, wenn ich hier durch komme, sollte ich mir den richtigen Weg aufschreiben. </div></div>");
            await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>WICHTIG UNBEDINGT MERKEN</b> <br><br> <br>⇽ 🠕 ⇾ 🠕 = ✧ <br><br><br> 5536 </div>  \
                                <div class=rightPage></div></div>");
            myNovel.ƒS.Speech.show();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, ich probiere mal den Code aus.");
            myNovel.ƒS.Text.addClass("speechInput");
            let answer = await myNovel.ƒS.Speech.getInput();
            if (answer == "5536") {
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Perfekt zum Glück habe ich das Tagebuch dabei.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Jetzt kann es Los gehen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht in den dunklen Stollen.");
                await myNovel.ƒS.Character.hideAll();
                return "chapterFourGoodTwo";
            }
            else {
                // Code false
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hmm... okay, das bringt wohl nichts, ich muss einen anderen Weg suchen, um in das Bergwerk zu kommen. Aber nur wie?");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt um den Eingang herum nach einer Möglichkeit zu Suchen, um in das Bergwerk zu kommen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da oben ist eine Art Lüftungsschacht, da kann ich es mal versuchen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja, die Gitter sind auch schon verrostet, die kann ich einfach weg drücken.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben drückt sich durch die Gitter des Lüftungsschachts. Plötzlich verliert er das Gleichgewicht und rutscht in den Lüftungsschacht hinein, nach ein paar Metern landet er unsanft in einem dunklen Raum.");
                return "chapterFourGoodTwo";
            }
        }
        else {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Schade, ich habe das Tagebuch nicht mitgenommen, jetzt hätte ich noch mal nachschauen können.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Komm Ben, denk nach, was stand noch mal im Buch...");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben versucht sich an die Aufschriebe zu erinnern.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Gut, ich kann es ja einfach versuchen und wenn nicht, muss ich eine andere Möglichkeit finden, hier rein zu kommen.");
            myNovel.ƒS.Text.addClass("speechInput");
            let answer = await myNovel.ƒS.Speech.getInput();
            if (answer == "5536") {
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Cool, da hatte ich wohl Glück.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Jetzt kann es losgehen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben geht in den dunklen Stollen.");
                return "chapterFourGoodTwo";
            }
            else {
                // Code false
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hmm... okay, das bringt wohl nichts, ich muss einen anderen Weg suchen, um in das Bergwerk zu kommen. Aber nur wie?");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt um den Eingang herum nach einer Möglichkeit zu Suchen, um in das Bergwerk zu kommen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da oben ist eine Art Lüftungsschacht, da kann ich es mal versuchen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja, die Gitter sind auch schon verrostet, die kann ich einfach weg drücken.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben drückt sich durch die Gitter des Lüftungsschachts. Plötzlich verliert er das Gleichgewicht und rutscht in den Lüftungsschacht hinein, nach ein paar Metern landet er unsanft in einem dunklen Raum.");
                return "chapterFourGoodTwo";
            }
        }
    }
    myNovel.chapterFourGood = chapterFourGood;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterFourGoodTwo() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wow ist ja richtig dunkel hier drin");
        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.taschenlampe) == 1) {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Zum Glück habe ich meine Taschenlampe dabei. Ohne wäre es viel zu Dunkel.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben holt seine Taschenlampe aus seinem Rucksack und macht sie an.");
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
            await myNovel.ƒS.Location.show(myNovel.locations.mineShaft);
            await myNovel.ƒS.update(1);
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, dann schauen wir mal, wo dieser Stollen hinführt.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Nach einiger Zeit bemerkt Ben weit vor ihm einen schwachen Lichtstrahl.");
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was ist den da vorne, wieso ist da Licht?");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht zu der Lichtquelle und steht auf ein Mal vor einem zugeschütteten Stollen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, das Licht muss irgendwie durch den Schuttdurchleuchten. Mal schauen, ob ich den Schutt wegräumen kann.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben beginnt den Schutt aus dem Weg zu tragen, um mehr zu sehen.");
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay jetzt sollte ich durch passen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben drückt sich durch den restlichen Schutt.  ");
            await myNovel.ƒS.Character.hideAll();
            await myNovel.ƒS.Location.show(myNovel.locations.insideSinkhole);
            await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Oh mein Gott, das ist der Boden des Lochs, ich stehe mitten drin.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Nachdem Ben sich beruhigt hat, überlegt er, was er jetzt tun soll.");
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, ich sollte mich mal umsehen, hier muss es doch mit Sicherheit etwas Interessantes geben.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt das komplette Loch abzusuchen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hmm... die Untersuchungen von der Polizei hat bestimmt schon alles Offensichtliche gefunden, ich muss genauer suchen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht weiter, nach ein paar Minuten fällt ihm etwas auf.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hm... hier liegen auffällig viele Holzbalken, die könnten von einem Stollen sein.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht weiter und versucht einen der Balken hochzuheben.");
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ufff ist der schwer, ja da ist doch ein Durchgang.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben entdeckt zwischen den Balken einen anderen Stollen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay ich muss da irgendwie rein kommen, ich versuch mal die Balken weg zu bekommen. Dann kann ich mich vielleicht durch Quetschen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Mit Mühe schafft es Ben, einige Balken so zu verschieben, dass er sich durchquetschen kann.");
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay mal schauen, was ich hier drin finde.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben quetscht sich durch die Balken und geht in den Stollen.");
            await myNovel.ƒS.Character.hideAll();
            return "chapterFiveGoodOne";
        }
        else {
            return "gameOverChapterFourOne";
        }
    }
    myNovel.chapterFourGoodTwo = chapterFourGoodTwo;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterFourMid() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.sinkhole);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben ist am Loch angekommen, dieses ist weiträumig abgesperrt und wird von der Polizei überwacht.");
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So wie komme ich jetzt am besten zum Loch? ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich muss irgendwie durch die Absperrung kommen und die Wachleute dürfen mich auch nicht sehen.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Vielleicht finde ich in der Absperrung eine Lücke oder ich könnte warten, bis es dunkel ist und mich dann an den Wachen vorbei schleichen.");
        let choices = {
            search: "Eine lücke suchen",
            wait: "Warten bis es dunkel ist"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.wait:
                console.log("Choice wait");
                return "gameOverChapterFourTwo";
            case choices.search:
                console.log("Choice search");
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich suche lieber eine Lücke in der Absperrung, ich will nicht riskieren, von einer der Wachen erwischt zu werden.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt an der Absperrung entlang zu gehen und nach einer passenden Stelle zu suchen, um durch die Absperrung zu kommen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Der Baum hier... der eine Ast ragt direkt über die Absperrung, ich könnte versuchen, über den Ast zu klettern oder ich suche weiter?");
                let choicesTree = {
                    search: "Anderen Weg suchen",
                    tree: "Über den Baum klettern"
                };
                let dialogueElement = await myNovel.ƒS.Menu.getInput(choicesTree, "choicesCSSClass");
                switch (dialogueElement) {
                    case choicesTree.tree:
                        console.log("Choice wait");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Sollte eigentlich funktionieren und einen besseren Ort werde ich wohl kaum finden. ");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben macht sich auf und beginnt den Baum hochzuklettern.");
                        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.seil) == 1) {
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment...ich habe doch ein Seil dabei, damit kann ich mich sichern, dann stürze ich nicht ab, wenn der Ast bricht.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sichert sich mit dem Seil ab und klettert weiter.");
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update(1);
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Woooow zum Glück habe ich mich abgesichert, sonst währe ich jetzt abgestürzt.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben seilt sich auf die andere Seite der Absperrung ab.");
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.sad, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update(1);
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Schade, das Seil hätte ich gerne nochmal verwendet, aber ich kann es nicht vom Baum lösen.");
                            //Seil entfernen
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update(1);
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Egal auf zum Loch");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht Richtung Loch.");
                        }
                        else {
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.sad, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update(1);
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Schade hätte ich ein Seil mitgenommen, könnte ich mich jetzt absichern.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Jetzt muss ich halt etwas vorsichtiger sein.");
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update(1);
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben klettert weiter und beginnt vorsichtig über den Ast, der über die Absperrung ragt, zu gehen.");
                            //ast sound
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update(1);
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Auuu... so eine Scheiße, jetzt ist der Ast durchgebrochen, zum Glück bin ich auf der anderen Seite der Absperrung gelandet.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hoffentlich hat mich keiner gehört. Naja egal jetzt schnell zum Loch.");
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update(1);
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht Richtung Loch. ");
                        }
                        await myNovel.ƒS.Character.hideAll();
                        break; //weil direkt danach nächste scene  
                    case choicesTree.search:
                        console.log("Choice search");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ne ist mir zu gefährlich, ich will nicht vom Baum fallen, irgendwo wird es schon einen Durchgang geben.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht weiter nach einer Möglichkeit, die Absperrung zu überwinden.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Daaaa...da ist ein Loch im Zaun, ich wusste, irgendwo würde ich einfach durchkommen.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben drückt sich durch das Loch der Absperrung");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So jetzt auf zum Loch, ich habe schon genug Zeit verschwendet.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben geht Richtung Loch.");
                        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                        await myNovel.ƒS.update(1);
                        await myNovel.ƒS.Character.hideAll();
                        break; //weil direkt danach nächste scene            
                }
        }
    }
    myNovel.chapterFourMid = chapterFourMid;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterFourMidTwo() {
        console.log("Chapter four two");
        await myNovel.ƒS.Location.show(myNovel.locations.sinkhole);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben ist am Rande des Lochs angekommen.");
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wow hätte nicht erwartet, dass es so Tief ist, wie komme ich jetzt am besten dort hinunter?");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Am besten ist, wenn ich runter klettere, aber nur wo?");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht um das Loch herum, da entdeckt er auf einmal einen Artaufzug, mit dem die Ermittler in das Loch gekommen sind.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich könnte natürlich auch das Ding da benutzen, dann hören mich zwar die Wachen, aber sie kommen ja dann nicht runter, wenn ich es benutze oder ich versuche runter zu klettern.");
        let choice = {
            elevator: "Den Aufzug benutzen",
            climp: "Runter klettern"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choice, "choicesCSSClass");
        switch (dialogueElement) {
            case choice.elevator:
                console.log("Choice wait");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich kann ja mal schauen, ob der Aufzug funktioniert.");
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.confident, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh ich glaube, der ist noch an, die ganzen Kontrollleuchten sind noch an. Aber wo starte ich das Ding.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt einfach alle Knöpfe zu drücken, plötzlich fängt der Aufzug an sich zu bewegen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahhh der Knopf wird es wohl gewesen sein. Perfekt einfacher komme ich wohl nicht nach unten.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Heyyyy wer bist du den was machst du da das ist gefährlich Stop sofort den Aufzug!!");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Sorry, aber ich bin auf einer Mission");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "STOP, da unten ist es viel zu gefährlich!");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben ignoriert die schreie der Wachen und fährt in das Loch.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Unten angekommen überlegt Ben was er nun tun soll ");
                await myNovel.ƒS.Location.show(myNovel.locations.insideSinkhole);
                await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, ich sollte mich mal umsehen, hier muss es doch mit Sicherheit etwas Interessantes geben.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt das komplette Loch abzusuchen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hmm... die Untersuchungen von der Polizei hat bestimmt schon alles Offensichtliche gefunden, ich muss genauer suchen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht weiter, nach ein paar Minuten fällt ihm etwas auf.");
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hm... hier liegen auffällig viele Holzbalken, die könnten von einem Stollen sein.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht weiter und versucht einen der Balken hochzuheben.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ufff ist der schwer, ja da ist doch ein Durchgang.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben entdeckt zwischen den Balken einen anderen Stollen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay ich muss da irgendwie rein kommen, ich versuch mal die Balken weg zu bekommen. Dann kann ich mich vielleicht durch Quetschen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Mit Mühe schafft es Ben, einige Balken so zu verschieben, dass er sich durchquetschen kann.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay mal schauen, was ich hier drin finde.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben quetscht sich durch die Balken und geht in den Stollen.");
                await myNovel.ƒS.Character.hideAll();
                return "chapterFiveMid"; //chapter five  
            case choice.climp:
                console.log("Choice climp");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ne, ich nehme lieber nicht den Aufzug, ich will so wenig wie möglich auffallen. Dann bleibt wohl nichts anderes übrig, wie klettern.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht nach einer Möglichkeit, in das Loch zu klettern.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da drüben sollte es funktionieren. ");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment habe ich überhaupt Sachen dabei mit denen ich mich absichern kann und besser klettern kann?");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben überlegt, ob es wirklich eine gute Idee ist zu klettern.");
                myNovel.ƒS.Inventory.open();
                let choicesDiff = {
                    searchDiff: "Anderen Weg suchen",
                    climp: "Trotz allem klettern"
                };
                let dialogueElement = await myNovel.ƒS.Menu.getInput(choicesDiff, "choicesCSSClass");
                switch (dialogueElement) {
                    case choicesDiff.searchDiff:
                        console.log("Choice wait");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay was soll ich tun ich könnte doch den Aufzug nehmen. ");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Die andere Möglichkeit ist, dass ich wieder zurückgehen und zum Eingang der Mine gehen.");
                        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                        await myNovel.ƒS.update();
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hmm.... ");
                        let choices = {
                            elevator: "Den Aufzug benutzen",
                            back: "Zurück zum Bergwerk gehen"
                        };
                        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
                        switch (dialogueElement) {
                            case choices.back:
                                console.log("Choice back");
                                return "chapterFourGood"; //zurück zum Bergwerk
                            case choices.elevator:
                                console.log("Choice elevator");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich kann ja mal schauen, ob der Aufzug funktioniert.");
                                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.confident, myNovel.newPositions.bottomright);
                                await myNovel.ƒS.update(1);
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh ich glaube, der ist noch an, die ganzen Kontrollleuchten sind noch an. Aber wo starte ich das Ding.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt einfach alle Knöpfe zu drücken, plötzlich fängt der Aufzug an sich zu bewegen.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahhh der Knopf wird es wohl gewesen sein. Perfekt einfacher komme ich wohl nicht nach unten.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Heyyyy wer bist du den was machst du da das ist gefährlich Stop sofort den Aufzug!!");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Sorry, aber ich bin auf einer Mission");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "STOP, da unten ist es viel zu gefährlich!");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben ignoriert die schreie der Wachen und fährt in das Loch.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Unten angekommen überlegt Ben was er nun tun soll ");
                                await myNovel.ƒS.Location.show(myNovel.locations.insideSinkhole);
                                await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, ich sollte mich mal umsehen, hier muss es doch mit Sicherheit etwas Interessantes geben.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt das komplette Loch abzusuchen.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hmm... die Untersuchungen von der Polizei hat bestimmt schon alles Offensichtliche gefunden, ich muss genauer suchen.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht weiter, nach ein paar Minuten fällt ihm etwas auf.");
                                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                                await myNovel.ƒS.update();
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hm... hier liegen auffällig viele Holzbalken, die könnten von einem Stollen sein.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht weiter und versucht einen der Balken hochzuheben.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ufff ist der schwer, ja da ist doch ein Durchgang.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben entdeckt zwischen den Balken einen anderen Stollen.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay ich muss da irgendwie rein kommen, ich versuch mal die Balken weg zu bekommen. Dann kann ich mich vielleicht durch Quetschen.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Mit Mühe schafft es Ben, einige Balken so zu verschieben, dass er sich durchquetschen kann.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay mal schauen, was ich hier drin finde.");
                                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben quetscht sich durch die Balken und geht in den Stollen.");
                                await myNovel.ƒS.Character.hideAll();
                                return "chapterFiveMid"; //Chapter five           
                        }
                    case choicesDiff.climp:
                        console.log("Choice climp");
                        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.wanderschuhe) == 1 && myNovel.ƒS.Inventory.getAmount(myNovel.items.seil) == 1) {
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, ich sollet eigentlich alles dabei haben, hier, ich habe ein Seil und meine Wanderschuhe, damit sollte es auf jeden Fall funktionieren.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sichert sich mit dem Seil ab und beginnt nach unten zu klettern.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Unten angekommen überlegt Ben, was er nun tun soll");
                            await myNovel.ƒS.Location.show(myNovel.locations.insideSinkhole);
                            await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, ich sollte mich mal umsehen, hier muss es doch mit Sicherheit etwas Interessantes geben.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt das komplette Loch abzusuchen.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hmm... die Untersuchungen von der Polizei hat bestimmt schon alles Offensichtliche gefunden, ich muss genauer suchen.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht weiter, nach ein paar Minuten fällt ihm etwas auf.");
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update();
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hm... hier liegen auffällig viele Holzbalken, die könnten von einem Stollen sein.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben sucht weiter und versucht einen der Balken hochzuheben.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ufff ist der schwer, ja da ist doch ein Durchgang.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben entdeckt zwischen den Balken einen anderen Stollen.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay ich muss da irgendwie rein kommen, ich versuch mal die Balken weg zu bekommen. Dann kann ich mich vielleicht durch Quetschen.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Mit Mühe schafft es Ben, einige Balken so zu verschieben, dass er sich durchquetschen kann.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay mal schauen, was ich hier drin finde.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben quetscht sich durch die Balken und geht in den Stollen.");
                            await myNovel.ƒS.Character.hideAll();
                            return "chapterFiveMid"; //Chapter five
                        }
                        else {
                            return "gameOverChapterFourThree";
                        }
                }
        }
    }
    myNovel.chapterFourMidTwo = chapterFourMidTwo;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterThreeGood() {
        console.log("Chapter three good");
        let text = {
            narrator: {
                T0001: "Ben läuft durch die Stadt Richtung Mine.",
                T0002: "Auf einmal hört man einen lauten Ruf.",
                T0003: "Ben dreht sich um.",
                T0004: "Es ist eine Kollegin aus der Schule."
            },
            ben: {
                T0001: "Eigentlich hätte ich auch mein Fahrrad nehmen können, dann wäre ich viel schneller.",
                T0002: "Egal, es ist eh viel zu auffällig gewesen, wenn ich das Fahrrad genommen hätte.",
                T0003: "Ah... Hi Paula, wie geht's?",
                T0004: "Ja, den Umständen entsprechend...",
                T0005: "Ah, nichts besonderes bin auf dem Weg zum einkaufen.",
                T0006: "Nein, meine Mutter ist nur schnell ein paar Lebensmittel einkaufen.",
                T0007: "Ich will nur kurz in den Media Markt.",
                T0008: "Genau.",
                T0009: "Alles klar, man sieht sich.",
                T0010: "Ja okay, hast mich erwischt. Eigentlich habe ich was anderes vor.",
                T0011: "Klingt vielleicht etwas verrückt, aber ich habe beschlossen, meinen Vater selbst zu suchen, die Polizei hat es ja aufgegeben.",
                T0012: "Ich weiß, aber ich kann meinen Vater nicht im Stich lassen, außerdem bin ich gut vorbereitet. ",
                T0013: "Ja klar....",
                T0014: "Ne alles gut, ich gehe lieber alleine, am Ende passiert uns beiden noch etwas.",
                T0015: "Mir passiert schon nichts, keine sorge.",
                T0016: "Alles klar, bis dann. Wir sehen uns. ",
                T0017: "Hey, und erzähl meiner Mutter nicht, wo ich bin, die macht sich sonst Sorgen.",
            },
            paula: {
                T0001: "Ben....!!!!",
                T0002: "Danke gut uns selbst? Habe mit bekommen, was in der Mine passiert ist.",
                T0003: "Cool, cool, was machst du gerade, wohin geht's?",
                T0004: "Ähhh, ich habe gerade eben deine Mutter beim einkaufen gesehen geht ihr getrennt Einkaufen oder wie?",
                T0005: "Achsooo, neu Technik besorgen?",
                T0006: "Ja gut, dann will ich dich nicht weiter aufhalten.",
                T0007: "Jouu, bis dann.",
                T0008: "Wo gehst du den hin, was so geheim sein muss?",
                T0009: "Bist du verrückt, das ist doch total gefährlich.",
                T0010: "Wow, du meinst es echt ernst, was?",
                T0011: "Okay, okay, dann brauchst du aber bestimmt noch Hilfe oder?",
                T0012: "Hahaha... aber was ist mit dir? Was machst du, wenn dir etwas passiert?",
                T0013: "Wenn du das sagst, na gut, ich muss aber auch schon weiter.",
                T0014: "Okay bis dann...",
                T0015: "Alles klar."
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.chapterThree);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.Location.show(myNovel.locations.street);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
        await myNovel.ƒS.Character.show(myNovel.characters.paula, myNovel.characters.paula.pose.normal, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0003);
        let choices = {
            say: "Von Abenteuer erzählen",
            dontSay: "Abenteuer geheim halten"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.say:
                console.log("Choice say");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0011);
                await myNovel.ƒS.Character.hide(myNovel.characters.paula);
                await myNovel.ƒS.Character.show(myNovel.characters.paula, myNovel.characters.paula.pose.sorry, myNovel.newPositions.bottomleft);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0009);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.moreConfident, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0012);
                await myNovel.ƒS.Character.hide(myNovel.characters.paula);
                await myNovel.ƒS.Character.show(myNovel.characters.paula, myNovel.characters.paula.pose.normal, myNovel.newPositions.bottomleft);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0010);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0013);
                await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0011);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0014);
                await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0012);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0015);
                await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0013);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0016);
                await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0014);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0017);
                await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0015);
                await myNovel.ƒS.Character.hideAll();
                break;
            case choices.dontSay:
                console.log("Choice dontSay");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0005);
                await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0004);
                let choicesLie = {
                    lie: "Lügen",
                    dontLie: "Wahrheit erzählen"
                };
                let dialogueElement = await myNovel.ƒS.Menu.getInput(choicesLie, "choicesCSSClass");
                switch (dialogueElement) {
                    case choicesLie.lie:
                        console.log("Choice lie");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0006);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0007);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0005);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0008);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0006);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0009);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0007);
                        await myNovel.ƒS.Character.hideAll();
                        break;
                    case choicesLie.dontLie:
                        console.log("Choice dontLie");
                        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                        await myNovel.ƒS.update(0);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0010);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0008);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0011);
                        await myNovel.ƒS.Character.hide(myNovel.characters.paula);
                        await myNovel.ƒS.Character.show(myNovel.characters.paula, myNovel.characters.paula.pose.sorry, myNovel.newPositions.bottomleft);
                        await myNovel.ƒS.update();
                        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0009);
                        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.moreConfident, myNovel.newPositions.bottomright);
                        await myNovel.ƒS.update(0);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0012);
                        await myNovel.ƒS.Character.hide(myNovel.characters.paula);
                        await myNovel.ƒS.Character.show(myNovel.characters.paula, myNovel.characters.paula.pose.normal, myNovel.newPositions.bottomleft);
                        await myNovel.ƒS.update();
                        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0010);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0013);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0011);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0014);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0012);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0015);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0013);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0016);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0014);
                        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                        await myNovel.ƒS.update(0);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0017);
                        await myNovel.ƒS.Speech.tell(myNovel.characters.paula, text.paula.T0015);
                        await myNovel.ƒS.Character.hideAll();
                        break;
                }
        }
    }
    myNovel.chapterThreeGood = chapterThreeGood;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function chapterThreeMid() {
        console.log("Start Prolog");
        let text = {
            narrator: {
                T0001: "Ben ist auf dem Weg zur Mine und macht sich schon die ersten Gedanken, wie er vorgehen soll. Da fällt ihm auf einmal etwas ein."
            },
            ben: {
                T0001: "Hmm...vielleicht sollte ich doch noch das Tagebuch mitnehmen, vielleicht steht etwas Hilfreiches drin."
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.chapterThree);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.Location.show(myNovel.locations.street);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        let choices = {
            takeBook: "Buch vom Friedhof holen",
            dontTakeBook: "Ohne Buch aufbrechen"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.takeBook:
                console.log("Choice take book");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich glaube, es ist besser, wenn ich das Tagebuch mit nehme, Mama hat ja auch gesagt, dass es sehr interessant sein soll.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wenn Papa irgendwelche nützlichen Infos in das Tagebuch eingetragen hat, kann mir das sicher helfen.");
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben macht sich auf den weg zum Friedhof ");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So, ich bin fast da, ich könnte die Abkürzung über die Mauer nehmen, dann bin ich schneller, wie wenn ich durch den normalen Eingang gehe.");
                let choicesWall = {
                    overWall: "Über die Mauer klettern",
                    gate: "Durch das Eingangstor gehen"
                };
                let dialogueElement = await myNovel.ƒS.Menu.getInput(choicesWall, "choicesCSSClass");
                switch (dialogueElement) {
                    case choicesWall.gate:
                        console.log("Choice take book");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ne, ich klettere lieber nicht über die Mauer, ich will kein Risiko eingehen. Nicht, dass ich mir etwas breche, weil ich von der Mauer falle.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Auf die zwei Minuten länger kommt es auch nicht drauf an.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht in den Friedhof");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, auf zur Gedenkstätte. Da drüben ist sie ja schon.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So wo hat Mama das Tagebuch hingelegt, es sollte hier ja irgendwo liegen.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ah, da ist es, Mama hat es sogar richtig schön dekoriert mit den Blumen.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben nimmt das Buch. ");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh nein, ich hab nicht genügend Platz im Inventar. Ich muss irgendwas zurücklassen, ich kann es ja später auch einfach wieder mitnehmen, wenn ich zurückkomme.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Aber was lasse ich zurück? ");
                        myNovel.ƒS.Inventory.open();
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, das brauche ich wahrscheinlich sowieso nicht.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So, jetzt sollte ich alles Wichtige haben.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben packt das Tagebuch in den Rucksack und macht sich auf den Weg. ");
                        await myNovel.ƒS.Character.hideAll();
                        return "chapterFour";
                    case choicesWall.overWall:
                        console.log("Choice dontTakeBook");
                        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.wanderschuhe) == 1) {
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, los geht's dann kann ich ein bisschen Zeit sparen.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben klettert über die Mauer.");
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update(0);
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wooow ganz schön hoch. Zum Glück habe ich meine Wanderschuhe mitgenommen, ohne wäre ich sicher abgerutscht.");
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.confident, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update(0);
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Jetzt muss ich nur wieder runter klettern sollte kein Problem sein.");
                            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                            await myNovel.ƒS.update(0);
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, auf zur Gedenkstätte. Da drüben ist sie ja schon.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So wo hat Mama das Tagebuch hingelegt, es sollte hier ja irgendwo liegen.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ah, da ist es, Mama hat es sogar richtig schön dekoriert mit den Blumen.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben nimmt das Buch. ");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh nein, ich hab nicht genügend Platz im Inventar. Ich muss irgendwas zurücklassen, ich kann es ja später auch einfach wieder mitnehmen, wenn ich zurückkomme.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Aber was lasse ich zurück? ");
                            myNovel.ƒS.Inventory.open();
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, das brauche ich wahrscheinlich sowieso nicht.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So, jetzt sollte ich alles Wichtige haben.");
                            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben packt das Tagebuch in den Rucksack und macht sich auf den Weg. ");
                            await myNovel.ƒS.Character.hideAll();
                            return "chapterFour";
                        }
                        else {
                            await myNovel.ƒS.Character.hideAll();
                            return "chapterThreeBad";
                        }
                }
            case choices.dontTakeBook:
                console.log("Choice dontTakeBook");
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.moreConfident, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahh was soll schon Wichtiges in dem Tagebuch stehen, ohne das Buch wird es schon funktionieren und außerdem liegt der Friedhof eh nicht auf dem Weg.");
                await myNovel.ƒS.Character.hideAll();
                return "chapterFour";
        }
    }
    myNovel.chapterThreeMid = chapterThreeMid;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function eighthScene() {
        console.log("Start Prolog");
        let text = {
            narrator: {
                T0001: "Ben macht sich für die Schule fertig und geht ins Wohnzimmer, wo er seine sehr aufgebrachte Mutter findet.",
                T0002: "Maria zeigt aufgeregt auf den Fernseher.",
                T0003: "Ben macht den Fernseher lauter und hört dem Kommentator zu....",
                T0004: "Großes Loch im Berg von Herbolzheim vermutlich ist ein Stollen eingestürzt. Die Ermittler vermuten einen Stollen Einbruch. Derzeit ist es noch unklar, ob Arbeiter verschüttet worden sind. Die Polizei und die Bergbaufirmen abreiten eng zusammen, um den Umfang des Unglücks zu untersuchen. Derzeit besteht rund um das Loch hohe Einsturzgefahr, das Betreten des Geländes ist strengstens untersagt.",
                T0005: "Maria fährt Ben zur Schule."
            },
            ben: {
                T0001: "Wow, es ist schon fast viel zu spät, ich sollte mich für die Schule fertigmachen, mal schauen, ob Mama schon wach ist.",
                T0002: "Was ist passiert...??",
                T0003: "Was ist zusammengebrochen, was ist passiert?",
                T0004: "Wie, Wo, Was... zeig her...",
                T0005: "Ich muss los und schauen, ob es Papa gut geht!!!!"
            },
            maria: {
                T0001: "Er ist zusammengebrochen...",
                T0002: "Der Schacht... der Schacht, wo Papa...",
                T0003: "NEIN... du gehst da nicht hin, das ist gefährlich … versprich mir, dass du da nicht hingehst.",
                T0004: "Außerdem musst du zur Schule. Los, mach dich fertig, ich fahre dich ausnahmsweise hin und schaue danach, was da los ist."
            }
        };
        //wecker sound
        await myNovel.ƒS.Location.show(myNovel.locations.chapterTwo);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.Location.show(myNovel.locations.kidRoom);
        await myNovel.ƒS.update(3);
        //musik sound
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
        await myNovel.ƒS.Character.hideAll();
        await myNovel.ƒS.Speech.clear();
        await myNovel.ƒS.Location.show(myNovel.locations.livingRoom);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.verySad, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0004);
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0005);
        await myNovel.ƒS.Character.hide(myNovel.characters.maria);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.angry, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0005);
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.eighthScene = eighthScene;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function empty() {
        console.log("THE VISUAL NOVEL ENDS HERE");
    }
    myNovel.empty = empty;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function fifthScene() {
        console.log("Start fifthScene");
        let text = {
            narrator: {
                T0001: "Die beiden schauen in einen tiefen schwarzen Gang, der noch immer voll aufgewirbeltem Staub ist.",
                T0002: "Beide machen sich auf den Weg und begehen den neuen Stollen. Durch den Staub ist es schwer, viel zu erkennen, Gerade so können die beiden in dem neuen Stollen stehen. Links und rechts liegt sehr viel Schutt. ",
                T0003: "Beide fangen an, Schutt beiseite zu räumen und an den freigeräumten Plätzen Stützbalken zu platzieren.",
                T0004: "Valentin läuft in Richtung der Jubelgeräusche von seiner Kollegin.",
                T0005: "Andrea springt wie von der Tarantel gestochen durch den engen und unwegsamen Stollen. ",
                T0006: "Egal was Valentin auch sagt Andrea lässt sich nicht beruhigen. Plötzlich bricht der Boden unter Andrea durch ihr herum springen auf und sie stürzt in die Tiefe.",
                T0007: "Mehrere Minuten hört Valentin nichts von seiner Kollegin, er will schon den Vorfall im Hauptquartier melden gehen, damit eine Rettungsaktion gestartet werden kann. Da hört er auf einmal die Stimme von Andrea.",
                T0008: "Valentin, der oben steht, versteht nicht ganz, was er davon halten soll, aber da er seinen Kollegen endlich retten will, holt er noch mehr Seile und den mobilen Kran. Er macht die Seile am Kran fest und wirft sie in das Loch.",
                T0009: "Valentin legt den Schalter um und der Kran beginnt an den Seilen zu ziehen, der Kran schafft es fast nicht, die Last hochzuheben, doch schließlich kommt Andrea und das mystische Gefäß zum Vorschein.",
                T0010: "Andrea kletterte auf das immer noch am Kran hängende Sarg ähnliche Objekt und setzt ihre Hacke an, um es zu öffnen. Sie holt aus… aber bevor sie mit der Hacke zuschlagen kann, bricht das Seil durch die Last und Andrea fällt samt Sarg wieder zurück in das Loch.",
                T0011: "Valentin rennt Richtung Ausgang des neuen Stollens, er hört, wie er von irgendwelchen stumpfen schnellen Schritten verfolgt wird. Er versucht so schnell wie möglich zu rennen, was sich durch den ganzen Schutt der Sprengung als sehr schwierig herausstellt.",
                T0012: "Die stumpfen Fußstapfen werden immer schneller und lauter. Doch Valentin schafft es und erreicht den Anfang des neuen Stollens. Er dreht sich um und schaut in den dunklen Stollen, die Fußstapfen sind nicht mehr zu hören.",
                T0013: "Er dreht sich weg und hält sich an einer der Stützen des alten Stollens fest. Auf einmal wird er zu Boden gerissen und in den neuen Stollen gezogen. Er versucht sich an einem der neuen Stützen festzuhalten, da diese aber von seinem Kollegen nicht richtig fest gemacht sind, löst sich die Stütze aus der Verankerung und fällt zu Boden. Durch das los lösen der Stelze hat der Vater den halt verloren und wird ins Dunkle gezogen.",
                T0014: "Durch das Lösen der Stütze beginnt ein Teil des neuen Stollens einzubrechen, gerade so hält die letzte Stütze den Eingang des Stollens, sodass der Zusammenbruch nicht auf die alten Stollen übertritt.",
                T0015: "Gut gefestigte Stützen haben eben einen wichtigen Grund."
            },
            andrea: {
                T0001: "Es hat alles funktioniert, schau dir nur den neuen Stollen an!",
                T0002: "Lass uns den Gang inspizieren, wir müssen wissen, wie es in den tieferen Bereichen funktioniert hat.",
                T0003: "Klar, die stehen oben am Eingang vom neuen Stollen.",
                T0004: "Ach was, meine halten auch je mehr es sind, desto stabiler sind sie, wenn wir ein paar mehr platzieren, müssen sie auch nicht so fest sein. ",
                T0005: "AHAHAHAaahh Juhuuuuuu",
                T0006: "Garnichts, ich freue mich einfach nur, dass die Sprengung so gut funktioniert hat.",
                T0007: "Ich kann es einfach nicht glauben, dass es funktioniert hat...",
                T0008: "Was zum...?...AAHHHHHHH ",
                T0009: "ES GEHT MIR GUT SIND NUR EIN PAAR KRATZER, VALENTIN WIR HABEN EINE ENTDECKUNG GEMACHT HIER UNTEN IST EIN RISIEGER RAUM ICH KANN ABER NICHTS ERKENNEN WAS HIER IST.",
                T0010: "MOMENT... ",
                T0011: "HIER IST EIN RISIGES STEINGEFÄS. WIRF MAL MEHR SEILE HERUNTER UND HOL DEN KRAN",
                T0012: "Jetzt zieh mich hoch!",
                T0013: "Schau, was ich hier gefunden habe, da unten ist ein riesiger Raum, irgendwas ist da unten, ich konnte aber nicht mehr Sehen wir müssen oben Bescheid geben, hier muss eine Expedition gestartet werden, wir könnten eine archäologische Entdeckung gemacht haben.",
                T0014: "Schau dir dieses riesige Steinding an, sieht aus wie ein Sarg, schau mal, wie viele Totenköpfe auf dem Sarg eingraviert sind, was die wohl zu bedeuten haben.",
                T0015: "Ach wo, lass es uns aufmachen, was soll schon passieren.",
                T0016: "JAAAA...",
                T0017: "Der Sarg ist aufgebrochen, er ist offen hier in den Trümmern liegt irgendwas.",
                T0018: "Oh mein Gott, es bewegt sich…. AHHHHAHSAH es ist lebendig AHADHHHAHHHHASICN… renn um dein Leben…"
            },
            valentin: {
                T0001: "Wow, besser als erwartet!",
                T0002: "Hm... auf den ersten Blick scheint der Stollen stabil zu sein die Untersuchung ist wohl fehlerhaft gewesen, wir sollten trotzdem Stützen platzieren für alle Fälle, man weiß nie, was noch passieren kann.",
                T0003: "Hast du die neuen Stützbalken schon bereitgestellt?",
                T0004: "Gut, dann sollten wir anfangen, die Stützen zu platzieren, bevor hier noch was einstürzt. ",
                T0005: "Hey, du musst die viel fester in den Boden und die Decke rammen, sonst halten die nicht richtig, schau die erste hier an, wie stabil sie ist, deine sind viel zu locker.",
                T0006: "So funktioniert das aber nicht... Hey Andrea, bleib hier!!",
                T0007: "Ach egal mache ich eben alleine weiter.",
                T0008: "Hey, was ist den bei dir los?",
                T0009: "Jetzt beruhige dich wieder... was ist den los mit dir.",
                T0010: "ANDREA......HEEYY HALLOO",
                T0011: "ANDREEAAAA.....",
                T0012: "ANDREEAAA warte, ich werfe dir ein Seil runter...",
                T0013: "Andrea?...ANDREAAA??",
                T0014: "Ehhhh...",
                T0015: "Jetzt mach mal halb lang und beruhige dich wieder...",
                T0016: "Wahrscheinlich nicht Gutes fasse es lieber nicht an, ich will gar nicht wissen, was da drin ist, weil gut kann es mit Sicherheit nicht sein.",
                T0017: "HEYY LEBST DU NOCH??",
                T0018: "ANDREA?? ANDREAAA???",
                T0019: "Da ist der Ausgang zu den anderen Stollen, gleich habe ich es geschafft.",
                T0020: "Was auch immer da war, ich muss es abgehängt haben."
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.newShaft);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.andrea, myNovel.characters.andrea.pose.normal, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0005);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0004);
        await myNovel.ƒS.Character.hide(myNovel.characters.andrea);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Character.hide(myNovel.characters.valentin);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.mysterious, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0006);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0007);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0005);
        await myNovel.ƒS.Character.hide(myNovel.characters.valentin);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0004);
        await myNovel.ƒS.Character.hide(myNovel.characters.valentin);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.smile, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0008);
        await myNovel.ƒS.Character.show(myNovel.characters.andrea, myNovel.characters.andrea.pose.normal, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0006);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0005);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0007);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0009);
        await myNovel.ƒS.Character.hide(myNovel.characters.valentin);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.mysterious, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0010);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0006);
        //Sound brechender boden
        await myNovel.ƒS.Character.hide(myNovel.characters.andrea);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.andrea, myNovel.characters.andrea.pose.ugh, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0008);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0011);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0012);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0013);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0007);
        await myNovel.ƒS.Character.hide(myNovel.characters.valentin);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0009);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0010);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0011);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0014);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0008);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0012);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0009);
        await myNovel.ƒS.Character.hide(myNovel.characters.andrea);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.andrea, myNovel.characters.andrea.pose.normal, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0013);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0015);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0014);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0016);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0015);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0010);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0017);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0016);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0017);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0018);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0018);
        //Schrei Sound
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0011);
        //gefährliche musik
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0019);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0012);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0013);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0014);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0014);
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.fifthScene = fifthScene;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function finalGood() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.spaceship);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.trabajoEscribo, myNovel.characters.trabajoEscribo.pose.normal, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.trabajoEscribo, "Alle festhalten es geht los...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Das Schiff der Piraten beginnt zu vibrieren und hebt vom Boden ab und fliegt los. ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hä aber wie kommten wir aus dem Berg...??");
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, "HAHA das bleibt ein Geheimnis...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Schade...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, "Ben wenn wir wieder zuhause sind dürfen wir von den Sachen im Berg nichts erzählen sonst denken alle wir sind verrückt");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Stimmt, es bleibt einfach unser großes Geheimnis.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, "Genau so machen wir's. ");
        await myNovel.ƒS.Character.hideAll();
        await myNovel.ƒS.Speech.hide();
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update(4);
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update(4);
        await myNovel.ƒS.Speech.show();
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, "Ben aufstehen sonst kommst du zu spät zur Schule und dann gibt es wieder Ärger.");
        await myNovel.ƒS.Speech.hide();
    }
    myNovel.finalGood = finalGood;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function firstScene() {
        console.log("Start Prolog");
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
        await myNovel.ƒS.Sound.play(myNovel.sound.closingGate, 0.5, false);
        await myNovel.ƒS.Location.show(myNovel.locations.begin);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Sound.play(myNovel.sound.sunday, 0.5, true);
        await myNovel.ƒS.Location.show(myNovel.locations.intro);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Location.show(myNovel.locations.livingRoom);
        await myNovel.ƒS.update(20);
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.smile, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.sad, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.firstScene = firstScene;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function fourthScene() {
        console.log("");
        let text = {
            valentin: {
                T0001: "Wir müssen erst den restlichen Schutt von gestern beiseite räumen, sonst ist es hier viel zu eng, die andere Schicht hat auch schon fast alle Sprengladungen platziert wir müssen nur die letzte anbringen.",
                T0002: "Okay, klingt gut.",
                T0003: "Okay, ich habe das Dynamit vorbereitet, hast du so weit alles vorbereitet?",
                T0004: "Alles klar...",
                T0005: "...",
                T0006: "Okay, das Dynamit ist platziert, lass uns in Deckung gehen.",
                T0007: "Bist du bereit?",
                T0008: "Hey, bist du verrückt, geh wieder in Deckung, bis sich der Staub gelegt hat.",
                T0009: "Wir warten jetzt, bis der Staub sich gelegt hat.",
                T0010: "Sei vorsichtig, das ist alles noch nicht gesichert und kann einstürzen. ",
                T0011: "Ich weiß nicht, ich bin mir doch unsicher ..."
            },
            andrea: {
                T0001: "Okay, lass uns loslegen.",
                T0002: "Lass mich das Geröll wegräumen, dann kannst du dich um die letzte Sprengladung kümmern und das Dynamit holen.",
                T0003: "Ja, von meiner Seite ist alles bereit, du kannst das Dynamit platzieren.",
                T0004: "Ja, ich bin bereit ... lass es knallen!!",
                T0005: "WOOOW!!!!",
                T0006: "Das war laut, ich kann durch den Staub gar nichts sehen.",
                T0007: "Beruhige dich, ich bin ja schon wieder da.",
                T0008: "Los, jetzt haben wir lange genug gewartet, ich will das Ergebnis von der Sprengung sehen.",
                T0009: "Bin ich immer!!",
                T0010: "Was ist los mit dir, alles okay?",
                T0011: "Jetzt drück den Auslöser, da wird schon nichts passieren!",
                T0012: "Boaahh, alles muss man selber machen, gib mir den Auslöser."
            },
            narrator: {
                T0001: "Valentin geht zum Lager und holt die letzte Stange Dynamit.",
                T0002: "3...",
                T0003: "2...",
                T0004: "1...",
                T0005: "Die Luft am Arbeitsplatz wird durch den Staub der Explosion gefüllt. Steine und Geröll fliegen durch die Luft und landen links und rechts von den beiden Arbeitern.",
                T0006: "Die beiden Arbeiter harren aus, um nicht vom Geröll getroffen zu werden. Nach einigen Minuten legt sich auch der Staub und es ist möglich, wieder mehr zu sehen.",
                T0007: "Andrea stürmt voraus zum neu gesprengten Stollen, Valentin hat Mühe, ihm schnell zu folgen.",
                T0008: "Andrea nimmt den Auslöser und betätigt den Auslöser für die Sprengung."
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.mineShaftTwo);
        await myNovel.ƒS.update(myNovel.transition.leftFade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.andrea, myNovel.characters.andrea.pose.normal, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0002);
        await myNovel.ƒS.Character.hide(myNovel.characters.valentin);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.solution, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0003);
        await myNovel.ƒS.Character.hide(myNovel.characters.valentin);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0005);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0006);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0007);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0004);
        let choices = {
            pressButton: "Knopf drücken",
            dontPress: "Zögern"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.pressButton:
                console.log("Choice press button");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0002);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0003);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0004);
                //Explosions sound
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0005);
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0005);
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0006);
                await myNovel.ƒS.Character.hide(myNovel.characters.valentin);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.mysterious, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0008);
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0007);
                await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0009);
                await myNovel.ƒS.Character.hide(myNovel.characters.valentin);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.normal, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0006);
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0008);
                await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0010);
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0009);
                await myNovel.ƒS.Character.hide(myNovel.characters.andrea);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0008);
                break;
            case choices.dontPress:
                console.log("Choice Dont press button");
                await myNovel.ƒS.Character.hide(myNovel.characters.valentin);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.sad, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0010);
                await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0011);
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0011);
                await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0005);
                await myNovel.ƒS.Character.hide(myNovel.characters.andrea);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.andrea, myNovel.characters.andrea.pose.mad, myNovel.newPositions.bottomleft);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0012);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0008);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0002);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0003);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0004);
                await myNovel.ƒS.Character.hide(myNovel.characters.andrea);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.andrea, myNovel.characters.andrea.pose.normal, myNovel.newPositions.bottomleft);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.hide(myNovel.characters.valentin);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.normal, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update();
                //Explosions sound
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0005);
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0005);
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0006);
                await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0008);
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0007);
                await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0009);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0006);
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0008);
                await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0010);
                await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0009);
                await myNovel.ƒS.Character.hide(myNovel.characters.andrea);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0008);
                break;
        }
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.fourthScene = fourthScene;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function gameOverChapterFiveTwo() {
        console.log("Start Prolog");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay hätte ich jetzt noch ein Seil dann könnte ich es einfach als Sicherung verwenden falls die Brücke nicht hält... schade dann muss ich es ohne probieren.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt die Brücke zu betreten.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Woah das ist so wacklig und unsicher hoffentlich halten die Holzbalken.");
        //Knackendes Holz geräusch
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohhh das war keine so gute Idee....");
        //Brechendes Holz
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Nein oh mein Gott ich falle....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Die Balken der Brücke haben das Gewicht von Ben nicht ausgehalten und sind durchgebrochen, Ben hält sich jetzt verzweifelt an den anderen Balken fast, um nicht ab zu stürzen.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohje ohje einfach nur fest halten und nciht los lassen bloß nicht los lassen...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Scheiße ich rutsche ab nein nein nein.....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahhhhhhh.....................");
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.Location.show(myNovel.locations.gameOver);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.update(5);
    }
    myNovel.gameOverChapterFiveTwo = gameOverChapterFiveTwo;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function gameOverChapterFourOne() {
        console.log("Game over chapter four one");
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wow ist ja richtig dunkel hier drin");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Scheiße, ich habe meinen Taschenlampe nicht eingepackt, was soll ich den jetzt tun? Ich sehe absolut nichts.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben versucht ein paar Schritte durch die Dunkelheit zu gehen. Bis er über irgendetwas stolpert, dass ihm im Weg liegt, weil er nichts sehen kann.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, das reicht das ist ja reiner Selbstmord hier ohne Taschenlampe rein zu gehen. ");
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.Location.show(myNovel.locations.gameOver);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.update(5);
    }
    myNovel.gameOverChapterFourOne = gameOverChapterFourOne;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function goodMazeRight() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.maze);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Das ist zwar nicht die richtige Richtung, wie Papa eingezeichnet hat, aber ich kann ja trotzdem mal schauen, wo es hingeht.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay da ist die nächste Kreuzung wo soll ich hin?");
        let choice = {
            left: "Nach links gehen",
            right: "Nach rechts gehen"
        };
        let dialogueElementTwo = await myNovel.ƒS.Menu.getInput(choice, "choicesCSSClass");
        switch (dialogueElementTwo) {
            case choice.left:
                console.log("Choice left");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Nach links okay mal schauen, was es hier so gibt?");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt einem langen Gang und kommt an einer Sackgasse raus.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hm...hier geht es wohl nicht, dann ist es wohl besser, wenn ich wieder an den Anfang gehe und die richtige Richtung nehme.");
                return "GOODMazeLeft"; //Left Maze
            case choice.right:
                console.log("Choice right");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Nach rechts. Okay mal schauen, was es hier so gibt?");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hm.. eine weitere Kreuzung...");
                let choicesTwo = {
                    left: "Nach links gehen",
                    right: "Nach rechts gehen"
                };
                let dialogueElementTwo = await myNovel.ƒS.Menu.getInput(choicesTwo, "choicesCSSClass");
                switch (dialogueElementTwo) {
                    case choicesTwo.left:
                        console.log("Hmm.... ich sollte echt aufpassen, wenn ich hier zu tief rein gehe, verlaufe ich mich vielleicht noch. Es ist, glaube ich, echt besser, wenn ich wieder zurückgehe und dem Weg von Papa folge.");
                        return "GOODMazeLeft"; //Left Maze
                    case choicesTwo.right:
                        console.log("Choice right");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh hier ist ja direkt eine Sackgasse.");
                        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Es macht, glaube ich, keinen Sinn. Hier es ist, glaube ich besser, wenn ich den richtigen Weg nehme.");
                        return "GOODMazeLeft"; //left Maze           
                }
        }
    }
    myNovel.goodMazeRight = goodMazeRight;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function goodMazeLeft() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.maze);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, wie Papa geschrieben hat die erste Abbiegung nach links und dann...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment, was ist das");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Auf dem Boden des Labyrinths liegt irgendwas glänzendes.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ist das eine Goldmünze...ja wow, soll ich sie mit nehmen?");
        let choiceCoin = {
            take: "Münnze nehmen",
            dontTake: "Münze liegenn lassen"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choiceCoin, "choicesCSSClass");
        switch (dialogueElement) {
            case choiceCoin.take:
                console.log("Choice take");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja, warum den nicht, sieht toll aus.");
                myNovel.dataForSave.coinScore += 10;
                break;
            case choiceCoin.dontTake:
                console.log("Choice dont Take");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Nee, was soll ich den damit anfangen?");
                break;
        }
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, wie geht es weiter...?");
        let choicesTwo = {
            straight: "Gerade aus gehen",
            right: "Nach rechts gehen"
        };
        let dialogueElementTwo = await myNovel.ƒS.Menu.getInput(choicesTwo, "choicesCSSClass");
        switch (dialogueElementTwo) {
            case choicesTwo.straight:
                break;
            case choicesTwo.right:
                console.log("Choice right");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ist zwar nicht der richtige Weg, ich kann aber ja trotzdem mal schauen, was es hier gibt.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hm.. Sackgasse... Moment was liegt da? ");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ein Beutel?... Wow der ist ja voller Goldmünzen");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Warum sind hier so viele Goldmünzen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben packt den Beutel ein und geht wieder zurück ");
                break;
        }
    }
    myNovel.goodMazeLeft = goodMazeLeft;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function goodPath() {
        console.log("Start Prolog");
        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.wasserflasche) == 1) {
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.confident, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich habe aber ja meine Wasserflasche dabei, aber da ist echt nicht mehr viel drin ich vielleicht finde ich irgendwie eine Möglichkeit, die Flasche wieder auf zu füllen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Für jetzt sollte es aber noch reichen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Eine Weile später");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Schade, das war der letzte Rest Wasser, ich sollte echt in der nächsten Zeit Wasser finden.");
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment, da fließt doch irgendwo Wasser.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Das muss von da drüben kommen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben folgt dem Wasser Geräusch.");
            await myNovel.ƒS.Character.hideAll();
        }
        else {
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.sad, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hätte ich lieber mal noch meine Wasserflasche mitgenommen, dann hätte ich jetzt etwas zu trinken...");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Aber hier unten gibt es doch bestimmt irgendwie eine Möglichkeit, an Wasser zu kommen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht weiter und hofft, eine Möglichkeit für Wasser zu finden.");
            await myNovel.ƒS.Character.hide(myNovel.characters.ben);
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment, da fließt doch irgendwo Wasser.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Das muss von da drüben kommen.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben folgt dem Wasser Geräusch.");
            await myNovel.ƒS.Character.hideAll();
        }
        await myNovel.ƒS.Location.show(myNovel.locations.caveTwo);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da drüben... das ist ja ein kleiner Fluss, perfekt.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Endliche habe ich wieder etwas zu trinken, ich bin fast verdurstet.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben trinkt aus dem.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Perfekt, das habe ich jetzt echt gebraucht.");
        //scream audio
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was war das??");
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.goodPath = goodPath;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function goodPathTwo() {
        console.log("Start Prolog");
        await myNovel.ƒS.Speech.hide();
        await myNovel.ƒS.Location.show(myNovel.locations.chapterSix);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Location.show(myNovel.locations.caveTwo);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Speech.show();
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wow hatte Papa echt recht mit dem Monster aus dem Tagebuch. Ich habe echt gedacht, dass er halluziniert, aber vielleicht liegt es auch an mir.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben folgt dem Flussverlauf.");
        //Monster geräusche
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was war das schon wieder....");
        //Monnter schrei
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Oh mein Gott, Papa hatte einfach Recht. Ich wusste ihm kann man immer vertrauen.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben hört wie dumpfe Schritte auf ihn zu kommen. ");
        //spanende Musik
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Oh nein, das ist die gleiche Situation, wie Papa im Tagebuch beschrieben hat... was soll ich tun?");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "");
        let choice = {
            hide: "Verstecken",
            run: "Weg rennen"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choice, "choicesCSSClass");
        switch (dialogueElement) {
            case choice.hide:
                console.log("Choice hide");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, ich muss mich irgendwo verstecken, aber nur wo...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben beginnt Panik zu bekommen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh neeinn, ich finde kein versteck...vielleicht da drüben.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt weiter dem Flussverlauf in der Hoffnung, einen guten Platz zu finden, wo er sich verstecken kann.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da ist ein Ruderboot, wenn ich es umdrehe, kann ich mich darunter verstecken.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben dreht leise das schwere Boot um und versteckt sich darunter. Er hört, wie die Fußstapfen direkt neben dem Boot stehen bleiben");
                //Moster geräusche
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Das unbekannte Ding kommt näher Ben hält sich die Hände vor das Gesicht, damit sein Atem ihn nicht verrät.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Bitte bitte nicht.....");
                //Geräusche
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich glaub es geht weg...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja, die Schritte werden leiser... ein Glück... wo bin ich hier rein geraten. Ben klettert unter dem Boot hervor und steht auf okay es kann weiter gehen.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt weiter dem Flussverlauf, plötzlich fällt ihm etwas auf.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment mal die Wände... die Wände haben eine komplett komische Form.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben kommt auf ein mal ein Geistesblitz...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment Papa hatte doch davon im Tagebuch geschrieben...");
                myNovel.ƒS.Speech.hide();
                //Novel Page
                myNovel.ƒS.Text.addClass("novelPageDiary");
                await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Erster Eintrag:</b> <br> <br> Heute müssen ich und Andrea den neuen Stollen sprengen ich bin mir sehr unsicher ob es eine Gute Idee ist.<br> \
                                    <br> <b>Zweiter Eintrag: </b> <br> <br> Habe noch mal Rücksprache mit der Minenleitung gehalten. Die wollen echt, dass ich diesen Tunnel sprenge... <br> \
                                    <br> <b>Dritter Eintrag:</b> <br> <br> Ich fahre jetzt mit Andrea an die Stelle für die Sprengung und bereite alles vor.</div>  \
                                    <div class=rightPage> <b>Vierter Eintrag:</b> <br> <br> Die Sprengung hat gut funktioniert, hoffentlich passiert nichts.  </div> </div>");
                await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Fünfter Eintrag:</b> <br> <br> Ich habe den Einsturz überlebt, wie durch ein Wunder bin ich nicht \
                                    verletzt. Was auch immer mich verfolgt hat es ist weg, vielleicht auch tot? <br> \
                                    <br> <b>Sechster Eintrag: </b><br><br> Ich hatte Glück, habe eine alte Taschenlampe gefunden, die noch funktioniert, nun kann ich etwas \
                                     besser sehen, wo ich entlang gehe. Das sind definitiv keine Stollen, es muss eine Höhle oder etwas Ähnlicheres sein. <br> \
                                    <br> <b>Siebter Eintrag:</b> <br> <br> Ich habe einen Rucksack mit Konserven gefunden, wie kam der nur hier her? Das kann kein Zufall sein. Egal, Hauptsache, ich habe etwas zu essen.</div>  \
                                    <div class=rightPage> <b>Achter Eintrag:</b> <br> <br> Ich habe die Suche nach Andrea aufgegeben, ich kann ihn nirgendwo finden, wahrscheinlich hat sie es nicht geschafft. Was ist das nur gewesen?<br> \
                                    <br><b>Neunter Eintrag:</b><br><br> Ich habe in einem Haufen aus Schutt Batterien gefunden, damit hält meine Taschenlampe etwas länger, wie sind die Batterien hier gelandet?<br> \
                                    <br><b>Zehnter Eintrag:</b><br><br> Diese Gänge sind etwas irreführend, kommt mir vor wie in einem Labyrinth, wenn ich hier durch komme, sollte ich mir den richtigen Weg aufschreiben. </div></div>");
                await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>WICHTIG UNBEDINGT MERKEN</b> <br><br> <br>⇽ 🠕 ⇾ 🠕 = ✧ <br><br><br> 5536 </div>  \
                                    <div class=rightPage></div></div>");
                myNovel.ƒS.Speech.show();
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Genau ich muss durch das Labyrinth und Papa hat den richtigen weg ins Tagebuch eingetragen. Okay dann legen wir mal los wo gehe ich entlang.");
                let choicesTwo = {
                    left: "Nach links gehen",
                    right: "Nach rechts gehen"
                };
                let dialogueElementTwo = await myNovel.ƒS.Menu.getInput(choicesTwo, "choicesCSSClass");
                switch (dialogueElementTwo) {
                    case choicesTwo.left:
                        console.log("Choice left");
                        await myNovel.ƒS.Character.hideAll();
                        return "GOODMazeLeft"; //Left Maze
                    case choicesTwo.right:
                        console.log("Choice right");
                        await myNovel.ƒS.Character.hideAll();
                        return "GOODMazeRight"; //right Maze           
                }
            case choice.run:
                console.log("Choice run");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Bloß weg hier");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben versucht dem Unbekannten etwas zu entkommen und rennt los.");
                //Schrei
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Scheiße, es hat mich gehört...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben merkt, wie die dumpfen Schritte näher kommen und lauter werden.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Nein, nein, es kommt näher, ich muss irgendwas machen....");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich muss mich irgendwie verstecken, aber nur wo.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben rennt verzweifelt weiter.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da vorne ist eine Abbiegung schnell, vielleicht komme ich so aus der Sichtweite.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt der Abbiegung und danach direkt noch eine in einer dunklen Ecke findet er eine kleine Nische, wo er sich rein quetscht und versteckt.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hoffentlich findet mich das Ding hier nicht...");
                //Geräusche
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Das unbekannte Ding kommt näher Ben hält sich die Hände vor das Gesicht, damit sein Atem ihn nicht verrät.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Bitt bitte nicht.....");
                //Geräusche
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich glaube, es geht weg...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja die Schritte werden leiser... ein Glück... wo bin ich hier rein geraten. ");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben rafft sich wieder auf und versucht sich zu orientieren.");
                await myNovel.ƒS.Location.show(myNovel.locations.maze);
                await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment mal die Wände... die Wände sehen richtig seltsam aus.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben kommt auf ein Mal ein Geistesblitz...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment Papa hatte doch davon im Tagebuch geschrieben...");
                myNovel.ƒS.Speech.hide();
                //Novel Page
                myNovel.ƒS.Text.addClass("novelPageDiary");
                await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Erster Eintrag:</b> <br> <br> Heute müssen ich und Andrea den neuen Stollen sprengen ich bin mir sehr unsicher ob es eine Gute Idee ist.<br> \
                                    <br> <b>Zweiter Eintrag: </b> <br> <br> Habe noch mal Rücksprache mit der Minenleitung gehalten. Die wollen echt, dass ich diesen Tunnel sprenge... <br> \
                                    <br> <b>Dritter Eintrag:</b> <br> <br> Ich fahre jetzt mit Andrea an die Stelle für die Sprengung und bereite alles vor.</div>  \
                                    <div class=rightPage> <b>Vierter Eintrag:</b> <br> <br> Die Sprengung hat gut funktioniert, hoffentlich passiert nichts.  </div> </div>");
                await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Fünfter Eintrag:</b> <br> <br> Ich habe den Einsturz überlebt, wie durch ein Wunder bin ich nicht \
                                    verletzt. Was auch immer mich verfolgt hat es ist weg, vielleicht auch tot? <br> \
                                    <br> <b>Sechster Eintrag: </b><br><br> Ich hatte Glück, habe eine alte Taschenlampe gefunden, die noch funktioniert, nun kann ich etwas \
                                     besser sehen, wo ich entlang gehe. Das sind definitiv keine Stollen, es muss eine Höhle oder etwas Ähnlicheres sein. <br> \
                                    <br> <b>Siebter Eintrag:</b> <br> <br> Ich habe einen Rucksack mit Konserven gefunden, wie kam der nur hier her? Das kann kein Zufall sein. Egal, Hauptsache, ich habe etwas zu essen.</div>  \
                                    <div class=rightPage> <b>Achter Eintrag:</b> <br> <br> Ich habe die Suche nach Andrea aufgegeben, ich kann ihn nirgendwo finden, wahrscheinlich hat sie es nicht geschafft. Was ist das nur gewesen?<br> \
                                    <br><b>Neunter Eintrag:</b><br><br> Ich habe in einem Haufen aus Schutt Batterien gefunden, damit hält meine Taschenlampe etwas länger, wie sind die Batterien hier gelandet?<br> \
                                    <br><b>Zehnter Eintrag:</b><br><br> Diese Gänge sind etwas irreführend, kommt mir vor wie in einem Labyrinth, wenn ich hier durch komme, sollte ich mir den richtigen Weg aufschreiben. </div></div>");
                await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>WICHTIG UNBEDINGT MERKEN</b> <br><br> <br>⇽ 🠕 ⇾ 🠕 = ✧ <br><br><br> 5536 </div>  \
                                    <div class=rightPage></div></div>");
                myNovel.ƒS.Speech.show();
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja, genau, ich bin mitten in einem Labyrinth Papa hat den richtigen Weg im Tagebuch reingeschrieben. Aber ich bin ja schon mitten drin... ich muss wieder zum Anfang...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht das kleine Stück im Labyrinth zurück, was er in der Verfolgung unbewusst genommen hat.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So hier müsste es losgehen, ja hier beginnt das Gestein so seltsame Formen zu haben... dann los.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben geht in das Labyrinth und kommt an die erste Kreuzung.");
                let choices = {
                    left: "Nach links gehen",
                    right: "Nach rechts gehen"
                };
                let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
                switch (dialogueElement) {
                    case choices.left:
                        console.log("Choice left");
                        await myNovel.ƒS.Character.hideAll();
                        return "GOODMazeLeft"; //Left Maze
                    case choices.right:
                        console.log("Choice right");
                        await myNovel.ƒS.Character.hideAll();
                        return "GOODMazeRight"; //right Maze           
                }
        }
    }
    myNovel.goodPathTwo = goodPathTwo;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function itemSelcetionDairy() {
        console.log("Start Item Selection with Dairy");
        let text = {
            narrator: {
                T0001: ""
            },
            ben: {
                T0001: "So wo sind den meine Wandersachen und mein Rucksack?",
                T0002: "GENAU!! Jetzt fällt es mir wieder ein...",
                T0003: "...hier hinten müssten noch die alten Sachen von Papa sein",
                T0004: "Hier sind sie wow richtig verstaubt, aber sie sollte eigentlich immer noch gut funktionieren.",
                T0005: "Aber was soll ich mitnehmen, ich kann definitiv nicht alles mitnehmen. Ich muss mich entscheiden.",
                T0006: "Ich habe Platz für 5 Gegenstände!"
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.garage);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0004);
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0005);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0006);
        let itemInInventory = 1;
        let choices = {
            feuerzeug: "Feuerzeug",
            seil: "Seil",
            tagebuch: "Tagebuch",
            taschenlampe: "Taschenlampe",
            wanderschuhe: "Wanderschuhe",
            wasserflasche: "Wasserflasche"
        };
        while (itemInInventory <= 5) {
            let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
            switch (dialogueElement) {
                case choices.feuerzeug:
                    console.log("Choice Fuerzeug");
                    myNovel.ƒS.Inventory.add(myNovel.items.feuerzeug);
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ein Feuerzeug könnte hilfreich sein, wenn ich irgendetwas anzünden muss.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, kann ich noch etwas mitnehmen?");
                    itemInInventory++;
                    delete choices.feuerzeug;
                    break;
                case choices.seil:
                    console.log("Choice Seil");
                    myNovel.ƒS.Inventory.add(myNovel.items.seil);
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ein Seil könnte auch hilfreich sein, falls ich irgendwo herunter klettern muss.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, was könnte ich noch gebrauchen. ");
                    itemInInventory++;
                    delete choices.seil;
                    break;
                case choices.tagebuch:
                    console.log("Choice Tagebuch");
                    myNovel.ƒS.Inventory.add(myNovel.items.tagebuch);
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja, das Tagebuch ist sehr wichtig, das sollte ich auf jeden Fall mitnehmen.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Dann kann ich noch mal etwas nachlesen, falls ich unterwegs etwas vergessen habe.");
                    itemInInventory++;
                    delete choices.tagebuch;
                    break;
                case choices.taschenlampe:
                    console.log("Choice Taschenlampe");
                    myNovel.ƒS.Inventory.add(myNovel.items.taschenlampe);
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Boah... eine Taschenlampe ist sehr wichtig, ohne werde ich mit Sicherheit nichts sehen.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, was könnte ich noch gebrauchen? ");
                    itemInInventory++;
                    delete choices.taschenlampe;
                    break;
                case choices.wanderschuhe:
                    console.log("Choice Wanderschuhe");
                    delete (choices.wanderschuhe);
                    myNovel.ƒS.Inventory.add(myNovel.items.wanderschuhe);
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Vielleicht sollte ich nicht mit Sportschuhen in die Mine gehen, am Ende rutsche ich ab.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Mit Wanderschuhen passiert mir das nicht.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, was kann ich noch mitnehmen.");
                    itemInInventory++;
                    delete choices.wanderschuhe;
                    break;
                case choices.wasserflasche:
                    delete (choices.wasserflasche);
                    console.log("Choice Wasserflasche");
                    myNovel.ƒS.Inventory.add(myNovel.items.wasserflasche);
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, was kann ich noch mitnehmen.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Falls ich länger in der Mine bin, brauche ich auf jeden Fall etwas zu trinken. Mit der Flasche könnte ich Wasser mitnehmen und möglicherweise auffüllen.  ");
                    delete (choices.wasserflasche);
                    itemInInventory++;
                    break;
            }
        }
        myNovel.ƒS.Inventory.open();
        await myNovel.ƒS.Character.hideAll();
        return "afterItemSelection";
    }
    myNovel.itemSelcetionDairy = itemSelcetionDairy;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function itemSelcetionNoDairy() {
        console.log("Start Item Selection without Dairy");
        let text = {
            narrator: {
                T0001: ""
            },
            ben: {
                T0001: "So wo sind den meine Wandersachen und mein Rucksack?",
                T0002: "GENAU!! Jetzt fällt es mir wieder ein...",
                T0003: "...hier hinten müssten noch die alten Sachen von Papa sein",
                T0004: "Hier sind sie wow richtig verstaubt, aber sie sollte eigentlich immer noch gut funktionieren.",
                T0005: "Aber was soll ich mitnehmen, ich kann definitiv nicht alles mitnehmen. Ich muss mich entscheiden.",
                T0006: "Ich habe Platz für 4 Gegenstände!"
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.garage);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0004);
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0005);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0006);
        let itemInInventory = 1;
        let choices = {
            feuerzeug: "Feuerzeug",
            seil: "Seil",
            taschenlampe: "Taschenlampe",
            wanderschuhe: "Wanderschuhe",
            wasserflasche: "Wasserflasche"
        };
        while (itemInInventory <= 4) {
            let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
            switch (dialogueElement) {
                case choices.feuerzeug:
                    console.log("Choice Fuerzeug");
                    myNovel.ƒS.Inventory.add(myNovel.items.feuerzeug);
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ein Feuerzeug könnte hilfreich sein, wenn ich irgendetwas anzünden muss.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, kann ich noch etwas mitnehmen?");
                    itemInInventory++;
                    delete choices.feuerzeug;
                    break;
                case choices.seil:
                    console.log("Choice Seil");
                    myNovel.ƒS.Inventory.add(myNovel.items.seil);
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ein Seil könnte auch hilfreich sein, falls ich irgendwo herunter klettern muss.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, was könnte ich noch gebrauchen. ");
                    itemInInventory++;
                    delete choices.seil;
                    break;
                case choices.taschenlampe:
                    console.log("Choice Taschenlampe");
                    myNovel.ƒS.Inventory.add(myNovel.items.taschenlampe);
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Boah... eine Taschenlampe ist sehr wichtig, ohne werde ich mit Sicherheit nichts sehen.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, was könnte ich noch gebrauchen? ");
                    itemInInventory++;
                    delete choices.taschenlampe;
                    break;
                case choices.wanderschuhe:
                    console.log("Choice Wanderschuhe");
                    delete (choices.wanderschuhe);
                    myNovel.ƒS.Inventory.add(myNovel.items.wanderschuhe);
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Vielleicht sollte ich nicht mit Sportschuhen in die Mine gehen, am Ende rutsche ich ab.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Mit Wanderschuhen passiert mir das nicht.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, was kann ich noch mitnehmen.");
                    itemInInventory++;
                    delete choices.wanderschuhe;
                    break;
                case choices.wasserflasche:
                    delete (choices.wasserflasche);
                    console.log("Choice Wasserflasche");
                    myNovel.ƒS.Inventory.add(myNovel.items.wasserflasche);
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, was kann ich noch mitnehmen.");
                    await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Falls ich länger in der Mine bin, brauche ich auf jeden Fall etwas zu trinken. Mit der Flasche könnte ich Wasser mitnehmen und möglicherweise auffüllen.  ");
                    delete (choices.wasserflasche);
                    itemInInventory++;
                    break;
            }
        }
        myNovel.ƒS.Inventory.open();
        await myNovel.ƒS.Character.hideAll();
        return "afterItemSelection";
    }
    myNovel.itemSelcetionNoDairy = itemSelcetionNoDairy;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function lastMid() {
        console.log("Start Prolog");
        //handyklingelt
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was zum.... mein Handy ich habe eine Verbindung....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben nimmt das Handy und nimmt den Hörer ab.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hallo...?");
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.neutral, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, "BEEEN!!?!?! WO bist du...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Mama, ich bin irgendwo in der Mine oder in einer Höhle, aber ich finde den Weg nicht mehr aus der Höhle.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, "OMG was hast du nur gemacht ich rufe die Rettungskräfte wir holen dich da schon raus....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay ich warte hier....");
        await myNovel.ƒS.Character.hide(myNovel.characters.maria);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wie lang werden die wohl brauchen bis sie mich finden...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Bis sie mich gefunden haben wird es viel zu lange dauern bis dahin bin ich verdurstet oder sie geben die Suche auf wie bei Papa.");
        //Pressluft hammer
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Huh...? DA GRÄBT jemand.... HALLLOOO HIER ICH BIN HIERRRR.....HALLOOO.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "DA drüben ich höre etwas...ja schnell wir haben ihn...");
        await myNovel.ƒS.Character.hideAll();
        await myNovel.ƒS.Speech.hide();
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update(4);
        await myNovel.ƒS.Speech.show();
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, "Ben aufstehen sonst kommst du zu spät zur Schule und dann gibt es wieder Ärger.");
        await myNovel.ƒS.Speech.hide();
        await myNovel.ƒS.Location.show(myNovel.locations.blanko);
        await myNovel.ƒS.update(4);
    }
    myNovel.lastMid = lastMid;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function mazePartFour() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.maze);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Nach Papas plan sollte es gerade aus gehen. Ja, genau hier ist der Ausgang perfekt, zum Glück habe ich mich nicht verlaufen.");
        await myNovel.ƒS.Character.hideAll();
        await myNovel.ƒS.Location.show(myNovel.locations.cave);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich muss Papa eigentlich auf der Spur sein, also könnte er hier ja schon irgendwo sein?");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Vielleicht hört er mich ja.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "PAPA HALLOOO HÖRST DU MICH");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "HALLOOOOOO......");
        //Schrei
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh nein.... nicht gut, es hat mich gehört oder?");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahh es kommt immer näher. ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich höre es hinter mir....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Bloß weg hier ");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben versucht dem Unbekannten zu entkommen und rennt los.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Scheiße Sackgasse, aber ich glaube ich habe es abgehängt. ");
        //Lauter Schrei
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahhhhhhhhhhhhhh.........NEINNNNNNN");
        //Schuss
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.mazePartFour = mazePartFour;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function mazePartThree() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.maze);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, hier sollte ich richtig sein und jetzt muss ich erst mal eine Weile gerade aus gehen und dann müsste noch eine Kreuzung kommen...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Genau, da vorne das ist die letzte Kreuzung.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "So noch mal kurz überlegen");
        let choices = {
            left: "Nach links gehen",
            straight: "Nach rechts gehen"
        };
        let dialogueElementTwo = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElementTwo) {
            case choices.left:
                console.log("Choice left");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich glaube, es war links. Ja, genau sollte doch richtig sein.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment, ich sollte doch schon längst am Ende sein");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Oh nein, das ist eine Sackgasse... aber da liegt ja schon wieder ein Beutel mit Gold");
                myNovel.dataForSave.coinScore += 20;
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, dann kann ich jetzt wieder alles zurücklaufen.");
                //Gold in Inventaar
                break;
            case choices.straight:
                console.log("Choice right");
                break;
        }
    }
    myNovel.mazePartThree = mazePartThree;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function mazePartTwo() {
        console.log("Start Prolog");
        await myNovel.ƒS.Location.show(myNovel.locations.maze);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Genau gerade aus okay, da kommt die nächste Kreuzung, wo muss ich lang?");
        let choices = {
            left: "Nach links gehen",
            right: "Nach rechts gehen"
        };
        let dialogueElementTwo = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElementTwo) {
            case choices.left:
                console.log("Choice left");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hm ist eine Sackgasse dann wohl doch nach rechts.");
                break;
            case choices.right:
                console.log("Choice right");
                break;
        }
    }
    myNovel.mazePartTwo = mazePartTwo;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function mediumPathOne() {
        console.log("medium Path");
        await myNovel.ƒS.Speech.hide();
        await myNovel.ƒS.Location.show(myNovel.locations.chapterSix);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Location.show(myNovel.locations.caveTwo);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Speech.show();
        await myNovel.ƒS.update();
        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.tagebuch) == 1) {
            await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
            await myNovel.ƒS.update();
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wow hatte Papa echt recht mit dem Monster aus dem Tagebuch. Ich habe echt gedacht, dass er halluziniert, aber vielleicht liegt es auch an mir.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt dem Fluss verlauf.");
            //Monster geräusche
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was war das schon wieder....");
            //Lauter schrei
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Oh mein Gott Papa hatte einfach Recht ich wusste ihm kann man immer vertrauen. ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahh es kommt immer näher.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich höre es hinter mir....");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Bloß weg hier ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben versucht dem unbekannten etwas zu entkommen und rennt los");
        }
        else {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Als ob hier unten echt Tiere leben, die so laut sind. Hoffentlich ist es kein Bär oder so. Ich glaube, es ist besser, wenn ich jetzt etwas Leiser bin.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt dem Fluss verlauf. ");
            //Lautes Geräusch
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was war das schon wieder....");
            //Schrei
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Oh mein Gott was ist das für ein Ding");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahh es kommt immer näher.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich höre es hinter mir....");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Bloß weg hier ");
            await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben versucht dem unbekannten etwas zu entkommen und rennt los.");
        }
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Was mach ich jetzt... ich muss diesem Ding irgendwie entkommen, aber wie nur...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ahhh... es kommt immer näher...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben rennt immer weiter und folgt dem Fluss. Da kommt ihm plötzlich eine Idee.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Vielleicht kann ich es ablenken, indem ich mein Rucksack wegwerfe... ein Versuch ist es wert.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben zieht im lauf seinen Rucksack aus und wirft ihn zur Seite.");
        //Inventar weg
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ja, es hat funktioniert, aber ich brauche immer noch ein Versteck, so lange wird der Rucksack das Ding nicht aufhalten.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ja, es hat funktioniert, aber ich brauche immer noch ein Versteck, so lange wird der Rucksack das Ding nicht aufhalten.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da könnte ich mich verstecken");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben quetscht sich in die Felsspalte und versucht so leise wie möglich zu sein. ");
        //Schrei
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Es ist relativ weit Weg....");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohhh ne, es kommt doch in meine Richtung.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben merkt, wie die dumpfen Schritte immer näher kommen.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Hoffentlich sieht es mich nicht...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben hält den Atem an... das unbekannte etwas ist ganz in der Nähe.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohhh ich glaube es entfernt sich wieder... ein Glück.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben wartet noch etwas bevor er wieder aus seinem Versteck heraus kommt.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, jetzt ist es, glaube ich wieder sicher.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben klettert aus der Felsspalte.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay, das reicht jetzt endgültig, ich will hier raus, ich werde Papa wahrscheinlich nicht wieder finden und von diesem Unbekannten etwas will ich auch nicht gefressen werden. Aber wie komme ich hier raus... ist wohl besser, wenn ich einfach mal weiter gehe...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt weiter dem Flussverlauf, plötzlich fällt ihm etwas auf.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment mal die Wände... die Wände sehen komplett anders aus");
        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.tagebuch) == 1) {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Papa hatte doch davon im Tagebuch geschrieben ... wenn ich es jetzt nur dabei hätte, könnte ich noch mal nachschauen...");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Es ging doch irgendwie um ein Labyrinth oder... ich kann mich nicht mehr richtig daran erinnern... egal mir bleibt nichts anderes übrig.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben folgt dem Weg weiter.");
        }
        else {
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wie kann das den sein, muss wohl von dem unterschiedlichen Gestein kommen... sieht echt schön aus.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Naja egal hilft mir jetzt auch nicht weiter.");
            await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben folgt weiter dem Weg.");
        }
        await myNovel.ƒS.Location.show(myNovel.locations.maze);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
        await myNovel.ƒS.Character.hideAll();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay hier ist eine Kreuzung wo soll ich entlang gehen?");
        let choices = {
            left: "Nach links gehen",
            right: "Nach rechts gehen"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.left:
                console.log("Choice left");
                return "midMazeLeft"; //left path
            case choices.right:
                console.log("Choice right");
                return "midMazeRight"; //right path      
        }
    }
    myNovel.mediumPathOne = mediumPathOne;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function midMazeLeft() {
        console.log("Start Prolog");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Links wird schon passen, mal schauen, ob ich hier ein Weg nach draußen finde.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt dem Weg und kommt direkt an eine weitere Kreuzung.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment ich bin, glaube ich echt in einem Labyrinth... Oh nein ich werde nie ein Weg raus finden...");
        let choices = {
            left: "Nach links gehen",
            straight: "Nach rechts gehen"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.left:
                console.log("Choice left");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh Sackgasse... hier geht es nicht weiter, dann gehe ich lieber zurück.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich werde hier nie heraus kommen... ");
                break;
            case choices.straight:
                console.log("Choice right");
                break;
        }
    }
    myNovel.midMazeLeft = midMazeLeft;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function midMazeLeftOne() {
        console.log("Start Prolog");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt dem Weg und kommt direkt an eine weitere Kreuzung.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Schon wieder eine Kreuzung, ich werde hier für immer drin bleiben...");
        let choices = {
            left: "Nach links gehen",
            right: "Nach rechts gehen"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.left:
                console.log("Choice left");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "AHHHH nicht schon wieder eine Sackgasse... ich werde noch verrückt hier drin.");
                break;
            case choices.right:
                console.log("Choice right");
                break;
        }
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Wenn ich jetzt hier wieder nur eine Kreuzung finde, gebe ich komplett auf, dann war's dass.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt dem Weg und kommt wieder an eine Kreuzung.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh Nein.... das wars Endgültig ich komme hier nicht mehr raus.");
    }
    myNovel.midMazeLeftOne = midMazeLeftOne;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function midMazeRight() {
        console.log("Start Prolog");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Rechts wird schon passen, mal schauen ob ich hier ein Weg nach draußen finde.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt dem Weg und kommt direkt an eine weitere Kreuzung.");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Moment ich bin glaube ich echt in einem Labyrinth...oh nein ich werde nie ein Weg raus finden...");
        let choices = {
            left: "Nach links gehen",
            right: "Nach rechts gehen"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.left:
                console.log("Choice left");
                break;
            case choices.right:
                console.log("Choice right");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohh Sackgasse... hier geht es nicht weiter, dann gehe ich lieber zurück.");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ich werde hier nie heraus kommen...");
                break;
        }
    }
    myNovel.midMazeRight = midMazeRight;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function midMazeRightOne() {
        console.log("Start Prolog");
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Okay gerade aus, hoffentlich ist da der Ausgang...");
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, "Ben folgt weiter dem Weg und kommt wieder an eine Kreuzung.");
        let choices = {
            left: "Nach links gehen",
            right: "Nach rechts gehen"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.left:
                console.log("Choice left");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Da kommt ja schon wieder eine Sackgasse... ich bin so verloren wie soll ich den Ausgang finden...");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ben geht zurück zur letzten Kreuzung");
                break;
            case choices.right:
                console.log("Choice right");
                break;
        }
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, "Ohne eine Karte bin ich doch hier komplett hilflos, was soll ich nur tun...Ich werde den Ausgang nie finden...das war's endgültig");
    }
    myNovel.midMazeRightOne = midMazeRightOne;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function ninthScene() {
        console.log("Start Prolog");
        let text = {
            narrator: {
                T0001: "Ben geht ins Wohnzimmer. Dort sitzt seine Mutter mit einer Frau vom Untersuchungsausschuss der Polizei.",
                T0002: "Die Frau holt ein Buch aus ihrer Tasche",
                T0003: "Ben rennt traurig in sein Zimmer"
            },
            ben: {
                T0001: "Bin wieder daaaa, halloooo???",
                T0002: "Ich weiß es … ich kenne das Buch … Es ist das Tagebuch von Papa, er hat es dir nie erzählt Mama.",
                T0003: "NEINN... wir müssen weiter suchen, wenn er immer noch da unten ist, dürfen wir nicht aufgeben.",
                T0004: "Dass wissen sie nicht, vielleicht lebt er doch noch?",
                T0005: "Mama, was machen wir jetzt?",
                T0006: "Doch wir müssen Papa such…",
                T0007: "Das glaubst auch nur du!!"
            },
            maria: {
                T0001: "Hallo, worüber müssen sie mit mir sprechen.",
                T0002: "Ja, der Einsturz… aber was hat das mit uns zu tun?",
                T0003: "Ja…?",
                T0004: "Wie kann das sein, das ist unmöglich.",
                T0005: "Was haben sie gefunden …",
                T0006: "Nein, um Gotteswillen, was ist das. Um was handelt es sich?",
                T0007: "Nein, das Buch kenne ich nicht!",
                T0008: "Jetzt sagen sie schon … was haben sie herausgefunden?",
                T0009: "Oh mein Gott, was um Himmels willen ist passiert?",
                T0010: "WIE? WAS SAGEN SIE DAA??",
                T0011: "Das heißt, er ist immer noch da unten?",
                T0012: "Nein … Papa ist jetzt sicherlich an einem besseren Ort!",
                T0013: "Danke für diese Informationen.",
                T0014: "Was sollen wir denn tun … wir können morgen das Tagebuch zur Gedenkstelle beim Friedhof bringen, aber viele andere Möglichkeiten haben wir nicht. ",
                T0015: "NEIN … es hat keinen Zweck zu suchen, Papa ist tot.",
            },
            polizistin: {
                T0001: "Ja, Frau Meier, wie sie bestimmt schon erfahren haben, ereignete sich ein Zwischenfall in der Mine.",
                T0002: "Das Loch wurde in der Zwischenzeit untersucht und wir haben die Befürchtung, dass …",
                T0003: "Dass …...",
                T0004: "Wir vermuten, dass ihr Mann verschüttet worden ist.",
                T0005: "Während den Untersuchungen haben die Kollegen etwas gefunden, was in Verbindung mit ihrem Mann steht.",
                T0006: "Dieses Buch wurde am Grunde des Lochs gefunden, erkennen sie dieses Buch Frau Meier, wissen Sie, was das ist?",
                T0007: "Sind sie sicher, sie haben dieses Buch noch nie gesehen?",
                T0008: "Frau Meier, in diesem Buch stehen wichtige Informationen über den Unfall ihres Mannes, wenn man diesen Aufschrieben glauben schenken kann, dann war bereits vor der Sprengung bekannt, dass dieser Bereich, in dem ihr Mann die Sprengung vollzogen hat, gefährdet war. Somit steht die Betreiberfirma im Verdacht, die Arbeiter zur Sprengung genötigt zu haben. Außerdem konnten wir noch weitere Erkenntnisse feststellen…",
                T0009: "Vielleicht wollen sie sich dafür setzen.",
                T0010: "Frau Meier, ihr Mann ist nicht bei dem Einsturz gestorben, er hat überlebt.",
                T0011: "Wir haben Aufzeichnungen gefunden, die nach dem Einsturz aufgeschrieben worden sind, ihr Mann hat die Auswirkungen nach dem Einsturz in das Buch eingetragen.",
                T0012: "Ja, wir haben aber bisher keinerlei Lebenszeichen gefunden und die Suche wird immer schwieriger und gefährlicher. Möglichweiße müssen wir die Suche bald einstellen.",
                T0013: "Tut mir leid junger Mann, mittlerweile ist dein Vater mit großer Wahrscheinlichkeit nicht mehr am Leben.",
                T0014: "Frau Meier, ihr Mann ist vermutlich dort unten psychisch zusammen gebrochen im Buch haben wir Aufschriebe von einer Art Monster oder so ähnlichem gefunden, dass ihren Mann wohl verfolgt haben soll. Wir gehen davon aus, dass ihr Mann aufgrund von Nahrungs- und Sauerstoffmangels halluziniert hat und schlussendlich gestorben ist.",
                T0015: "Gerne, wir überlassen ihnen natürlich das Tagebuch, wir hoffen, wir konnten ihnen mehr Licht in den Unfall von ihrem Mann geben, noch einen schönen Tag."
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.livingRoom);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.neutral, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.Character.show(myNovel.characters.polizistin, myNovel.characters.polizistin.pose.normal, myNovel.newPositions.bottomcenter);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0003);
        await myNovel.ƒS.Character.hide(myNovel.characters.polizistin);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.polizistin, myNovel.characters.polizistin.pose.sorry, myNovel.newPositions.bottomcenter);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0004);
        await myNovel.ƒS.Character.hide(myNovel.characters.maria);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.sad, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0004);
        await myNovel.ƒS.Character.hide(myNovel.characters.polizistin);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.polizistin, myNovel.characters.polizistin.pose.normal, myNovel.newPositions.bottomcenter);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0005);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0005);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0006);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0006);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0007);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0007);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0008);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0008);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0009);
        await myNovel.ƒS.Character.hide(myNovel.characters.maria);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.sad, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0009);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0010);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0010);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0011);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0011);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0012);
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.sad, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0013);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0012);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0014);
        await myNovel.ƒS.Character.hide(myNovel.characters.maria);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.verySad, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0013);
        await myNovel.ƒS.Speech.tell(myNovel.characters.polizistin, text.polizistin.T0015);
        await myNovel.ƒS.Character.hide(myNovel.characters.polizistin);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0005);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0014);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0006);
        await myNovel.ƒS.Character.hide(myNovel.characters.maria);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.angry, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0015);
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.sad, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0007);
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0003);
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.ninthScene = ninthScene;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function secondScene() {
        console.log("");
        let text = {
            valentin: {
                T0001: "Guten Morgen Andrea, alles klar?",
                T0002: "Wie immer eigentlich. Wollen wir loslegen?"
            },
            andrea: {
                T0001: "Klar, wie jeden Morgen eigentlich. Und bei dir, wie siehts bei dir aus?",
                T0002: "Perfekt, lass uns loslegen!"
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.mineEntrance);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.andrea, myNovel.characters.andrea.pose.normal, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0002);
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.secondScene = secondScene;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function seventhScene() {
        console.log("Start Prolog");
        let text = {
            narrator: {
                T0001: "Die beiden kommen wieder zu Hause an. Ben hat nach der ganzen Arbeit einen riesigen Hunger. ",
                T0002: "Ben beginnt seine Hausaufgaben zu machen und vergisst vollkommen die Zeit nach ein paar Stunden schaut er auf die Uhr. ",
                T0003: "Ben legt sich ins Bett und beginnt zu schlafen. Nach einigen Stunden wacht er mitten in der Nacht wieder auf.",
                T0004: "Ben läuft zum Fenster",
                T0005: "Ben legt sich ins Bett, um zu schlafen. Nach einigen Stunden beginnt er zu träumen und hört in seinem Traum ein komisches Geräusch."
            },
            ben: {
                T0001: "Wow, jetzt hab ich echt mega hunger.",
                T0002: "Cool, danke Mama ",
                T0003: "Danke, Mama ",
                T0004: "Wow, das war echt lecker und sogar richtig scharf",
                T0005: "Ich glaube, ich mache noch schnell meine Hausaufgaben für morgen.",
                T0006: "Ohje, es ist ja schon viel zu spät, ich geh lieber ins Bett, sonst komme ich morgen nicht raus. ",
                T0007: "Oh mein Gott, was ist den jetzt los, warum tut mein Bauch so weh..??",
                T0008: "Ohje, dass ist das Curry... toll, jetzt kann ich nicht mehr schlafen...",
                T0009: "Was war das den?? Hat sich angehört, als würde etwas vom Himmel fallen, ich kann aber nichts erkennen...",
                T0010: "Jetzt muss es wohl aufgekommen sein, na ja, ich kann nichts erkennen, ich lege mich lieber wieder ins Bett, sonst komme ich morgen nicht raus.",
                T0011: "Wow, das war echt lecker, aber jetzt bin ich viel zu voll gefressen, um noch etwas zu erledigen, ich gehe lieber etwas früher ins Bett."
            },
            maria: {
                T0001: "Ja, es ist jetzt auch schon spät. Was willst du essen, auf was hast du Lust?",
                T0002: "Super, auf Curry habe ich auch Lust, wenn du willst, kannst du in dein Zimmer gehen, dann mache ich so weit alles fertig.",
                T0003: "Hey Ben, hier ist dein Essen, lass es dir schmecken.",
                T0004: "Super, auf Bolognese habe ich auch Lust, wenn du willst kannst du in dein Zimmer gehen, dann mache ich soweit alles fertig."
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.livingRoom);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.sad, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0001);
        let choices = {
            curry: "Curry",
            bolo: "Bolognese"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.curry:
                console.log("Choice Curry");
                await myNovel.ƒS.Character.hide(myNovel.characters.maria);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.pleased, myNovel.newPositions.bottomleftMaria);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0002);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0002);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.hideAll();
                await myNovel.ƒS.Speech.clear();
                await myNovel.ƒS.Location.show(myNovel.locations.kidRoom);
                await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.sad, myNovel.newPositions.bottomleftMaria);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0003);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
                await myNovel.ƒS.Character.hide(myNovel.characters.maria);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0004);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0005);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0002);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0006);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0003);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0007);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0008);
                //Sound absturz
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0004);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0009);
                //Sound einschlag
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0010);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                break;
            case choices.bolo:
                console.log("Choice Bolognese");
                await myNovel.ƒS.Character.hide(myNovel.characters.maria);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.pleased, myNovel.newPositions.bottomleftMaria);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0004);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.hideAll();
                await myNovel.ƒS.Speech.clear();
                await myNovel.ƒS.Location.show(myNovel.locations.kidRoom);
                await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.sad, myNovel.newPositions.bottomleftMaria);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0003);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
                await myNovel.ƒS.Character.hide(myNovel.characters.maria);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0011);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0005);
                //Sound absturz
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0004);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0009);
                //Sound einschlag
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0010);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update();
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                break;
        }
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.seventhScene = seventhScene;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function sixthScene() {
        console.log("Start Sixth Scene");
        console.log("Start Chapter One");
        let text = {
            ben: {
                T0001: "Ja, ich komme ja schon...",
                T0002: "Warum muss ich eigentlich immer mit einkaufen gehen?",
                T0003: "Toll, eigentlich brauchst du nur jemand, der dir die Sachen ins Auto packt... dass kann auch jeder andere. ",
                T0004: "Ja wie auch immer, Hauptsache, wir sind schnell fertig. ",
                T0005: "Zum Glück... "
            },
            maria: {
                T0001: "Komm Ben, wir müssen noch etwas Fleisch für das Wochenende kaufen.",
                T0002: "Weil, wenn Papa nicht mit einkaufen geht ich jemand brauche, der mir tragen hilft",
                T0003: "Nein, ich möchte aber, dass du mir hilfst. Außerdem kommst du so auch mal unter Leute. ",
                T0004: "Ja, wir haben es ja gleich geschafft.",
                T0005: "So, sind schon fertig. Ab nach Hause."
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.chapterOne);
        await myNovel.ƒS.update(2);
        await myNovel.ƒS.Location.show(myNovel.locations.supermarket);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.sad, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0002);
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.ohman, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
        await myNovel.ƒS.Character.hide(myNovel.characters.maria);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.pleased, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0003);
        await myNovel.ƒS.Character.hide(myNovel.characters.ben);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0005);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0005);
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.sixthScene = sixthScene;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function startChapterFour() {
        console.log("Start Prolog");
        let text = {
            narrator: {
                T0001: "Ben ist jetzt schon eine ganze Weile unterwegs und hat es auch nicht mehr weit bis zum Eingang der Mine. Da kommt ihm auf einmal eine Idee.",
                T0002: "Ben macht sich weiter auf den Weg Richtung Bergwerk.",
                T0003: "Ben macht sich auf den Weg zum Loch, um nach Hinweisen zu suchen."
            },
            ben: {
                T0001: "Sekunde, vielleicht ist es besser, zuerst das Loch zu untersuchen, bevor ich ins Bergwerk gehe. Vielleicht ist ja ein wichtiger Hinweis im Loch.",
                T0002: "Ne, ich geh lieber gleich ins Bergwerk zum Loch kann ich auch immer noch später gehen. ",
                T0003: "Es ist wahrscheinlich besser wenn ich zuerst zum Loch gehe und nach etwas hilfreichem suche bevor ich zur Mine gehe."
            }
        };
        await myNovel.ƒS.Speech.hide();
        await myNovel.ƒS.Location.show(myNovel.locations.chapterFour);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Location.show(myNovel.locations.street);
        await myNovel.ƒS.update(3);
        await myNovel.ƒS.Speech.show();
        await myNovel.ƒS.update();
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        let choices = {
            goMine: "Zum Bergwerk gehe",
            goHole: "Zum Loch gehen"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.goMine:
                console.log("Choice go mine");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0002);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0002);
                return "chapterFourGood";
            case choices.goHole:
                console.log("Choice go hole");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0003);
                return "chapterFourMid";
        }
    }
    myNovel.startChapterFour = startChapterFour;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function startChapterThree() {
        console.log("Desicion Chapter three");
        if (myNovel.ƒS.Inventory.getAmount(myNovel.items.tagebuch) == 1) {
            await myNovel.ƒS.Location.show(myNovel.locations.street);
            await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
            return "chapterThreeGood";
        }
        else {
            return "chapterThreeMid";
        }
    }
    myNovel.startChapterThree = startChapterThree;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function tenthScene() {
        console.log("Start Prolog");
        let text = {
            narrator: {
                T0001: "Maria verlässt das Zimmer",
                T0002: "Ben bleibt noch einen Augenblick in seinem Bett liegen und denkt über die Geschehnisse des Tages nach.",
                T0003: "Ben öffnet das Tagebuch",
                T0004: "Ben schließt das Tagebuch wieder",
                T0005: "Ben überlegt kurz.",
                T0006: "Ben liegt für einen Moment in seinem Zimmer und versucht das gehörte irgendwie zu verarbeiten und beginnt nachzudenken, nach einiger Zeit fasst er einen Entschluss."
            },
            ben: {
                T0001: "Nein, ich habe keine Lust zu reden.",
                T0002: "Okay gut von mir aus, du kannst rein kommen.",
                T0003: "Okay, was willst du mir erzählen.",
                T0004: "Ja, ich würde es gerne lesen, vielleicht steht ja etwas Interessantes im Tagebuch drin. ",
                T0005: "Nein, ich brauche nichts, danke.",
                T0006: "Okay, genug rumgelegen, schauen wir mal, was im Tagebuch steht.",
                T0007: "Wow, was Papa wohl alles durch machen musste.",
                T0008: "Es kann einfach nicht sein, dass die Polizei die Suche aufgegeben hat.",
                T0009: "Wenn es einen gibt, der so was überlebt, dann Papa.",
                T0010: "Nein, ich kann einfach nicht hier rumsitzen und nichts tun. Ich bin mir sicher Papa ist immer noch da unten und wenn das alles stimmt, was in diesem Buch steht, braucht Papa auf jeden Fall meine Hilfe.",
                T0011: "Alle haben Papa aufgegeben... ich nicht... ich werde ihn finden!",
                T0012: "Aber bevor ich in die Mine gehe, brauche ich noch etwas Ausrüstung, die wird mir bestimmt helfen.",
                T0013: "In der Garage sollte ich eigentlich alles finden, um gut vorbereitet zu sein.",
                T0014: "Nein, ich möchte nicht mit, kannst du mich jetzt alleine lassen.",
                T0015: "Nein, ich kann es einfach nicht wahrhaben, Papa hat nie aufgegeben... niemals.",
                T0016: "Wenn jemand so etwas überleben kann, dann Papa.",
                T0017: "Ich werde hier nicht herumsitzen und nichts tun, nicht nach solch einem Ereignis.",
                T0018: "Vielleicht hat Papa dafür gesorgt, dass das Loch entsteh, er wollte auf sich aufmerksam machen oder so."
            },
            maria: {
                T0001: "Kann ich hereinkommen, ich will mit dir reden.",
                T0002: "Bitte, ich möchte dir einen Vorschlag machen.",
                T0003: "Ben, ich weiß, du vermisst Papa sehr, aber wir haben alles versucht, was in unserer Macht steht, aber wir können die Situation nicht ändern. Hier, wenn du willst, kannst du das Tagebuch von Papa lesen, wenn es dir dabei hilft, Abschied zu nehmen, ansonsten würde ich es als Andenken zur Gedenkstelle auf dem Friedhof bringen?",
                T0004: "Schön, ich lege es dir hier auf den Nachttisch. ",
                T0005: "Dann lasse ich dich mal wieder alleine...",
                T0006: "Ach, bevor ich es vergesse, ich gehe gleich Einkaufen brauchst du noch irgendetwas aus dem Laden?",
                T0007: "Okay, wie du willst, es ist eigentlich sehr interessant zu lesen.",
                T0008: "Dann bringe ich das Buch zur Gedenkstelle, ich würde in einer viertel Stunde losgehen falls du mit möchtest.",
                T0009: "Gut, dann mache ich mich mal auf den Weg, bis später."
            }
        };
        await myNovel.ƒS.Location.show(myNovel.locations.kidRoom);
        await myNovel.ƒS.update(myNovel.transition.fade.duration, myNovel.transition.fade.alpha, myNovel.transition.fade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.sad, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(0);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0002);
        await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.neutral, myNovel.newPositions.bottomleftMaria);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0003);
        let choices = {
            read: "Tagebuch lesen",
            noRead: "Tagebuch nicht lesen"
        };
        let dialogueElement = await myNovel.ƒS.Menu.getInput(choices, "choicesCSSClass");
        switch (dialogueElement) {
            case choices.read:
                console.log("Choice read book");
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0004);
                await myNovel.ƒS.Character.hide(myNovel.characters.maria);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Character.show(myNovel.characters.maria, myNovel.characters.maria.pose.pleased, myNovel.newPositions.bottomleftMaria);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0004);
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0005);
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0006);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0005);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
                await myNovel.ƒS.Character.hide(myNovel.characters.maria);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0002);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0006);
                myNovel.ƒS.Speech.hide();
                //Novel Page
                myNovel.ƒS.Text.addClass("novelPageDiary");
                await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Erster Eintrag:</b> <br> <br> Heute müssen ich und Andrea den neuen Stollen sprengen ich bin mir sehr unsicher ob es eine Gute Idee ist.<br> \
                                <br> <b>Zweiter Eintrag: </b> <br> <br> Habe noch mal Rücksprache mit der Minenleitung gehalten. Die wollen echt, dass ich diesen Tunnel sprenge... <br> \
                                <br> <b>Dritter Eintrag:</b> <br> <br> Ich fahre jetzt mit Andrea an die Stelle für die Sprengung und bereite alles vor.</div>  \
                                <div class=rightPage> <b>Vierter Eintrag:</b> <br> <br> Die Sprengung hat gut funktioniert, hoffentlich passiert nichts.  </div> </div>");
                await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Fünfter Eintrag:</b> <br> <br> Ich habe den Einsturz überlebt, wie durch ein Wunder bin ich nicht \
                                verletzt. Was auch immer mich verfolgt hat es ist weg, vielleicht auch tot? <br> \
                                <br> <b>Sechster Eintrag: </b><br><br> Ich hatte Glück, habe eine alte Taschenlampe gefunden, die noch funktioniert, nun kann ich etwas \
                                 besser sehen, wo ich entlang gehe. Das sind definitiv keine Stollen, es muss eine Höhle oder etwas Ähnlicheres sein. <br> \
                                <br> <b>Siebter Eintrag:</b> <br> <br> Ich habe einen Rucksack mit Konserven gefunden, wie kam der nur hier her? Das kann kein Zufall sein. Egal, Hauptsache, ich habe etwas zu essen.</div>  \
                                <div class=rightPage> <b>Achter Eintrag:</b> <br> <br> Ich habe die Suche nach Andrea aufgegeben, ich kann ihn nirgendwo finden, wahrscheinlich hat sie es nicht geschafft. Was ist das nur gewesen?<br> \
                                <br><b>Neunter Eintrag:</b><br><br> Ich habe in einem Haufen aus Schutt Batterien gefunden, damit hält meine Taschenlampe etwas länger, wie sind die Batterien hier gelandet?<br> \
                                <br><b>Zehnter Eintrag:</b><br><br> Diese Gänge sind etwas irreführend, kommt mir vor wie in einem Labyrinth, wenn ich hier durch komme, sollte ich mir den richtigen Weg aufschreiben. </div></div>");
                await myNovel.ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>WICHTIG UNBEDINGT MERKEN</b> <br><br> <br>⇽ 🠕 ⇾ 🠕 = ✧ <br><br><br> 5536 </div>  \
                                <div class=rightPage></div></div>");
                myNovel.ƒS.Speech.show();
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0007);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0008);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0009);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0010);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.confident, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0011);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0012);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0013);
                await myNovel.ƒS.Character.hideAll();
                return "withDairy";
                break;
            case choices.noRead:
                console.log("Choice dont read book");
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0007);
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0008);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0014);
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0009);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
                await myNovel.ƒS.Character.hide(myNovel.characters.maria);
                await myNovel.ƒS.update(1);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0006);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0015);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0016);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0017);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0018);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.confident, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0011);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0012);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0013);
                await myNovel.ƒS.Character.hideAll();
                return "noDairy";
                break;
        }
    }
    myNovel.tenthScene = tenthScene;
})(myNovel || (myNovel = {}));
var myNovel;
(function (myNovel) {
    async function thirdScene() {
        console.log("");
        let text = {
            valentin: {
                T0001: "Ahhhh, ich bin schon etwas aufgeregt, wenn wir heute den neuen Stollen freisprengen sollen.",
                T0002: "Hast du nicht den Bericht von der Untersuchung gelesen?",
                T0003: "Die Gesteinsschicht, in die der neue Stollen gesprengt werden soll, ist nicht zu 100% sicher.",
                T0004: "Ja, aber du kennst die Verwaltung, es geht am Ende immer ums Geld und in der Gesteinsschicht soll sich sehr viel Eisen befinden.",
                T0005: "Hoffen wir es mal..."
            },
            andrea: {
                T0001: "Warum den?, es wird schon nichts passieren.",
                T0002: "Nein, warum was steht den so schlimmes drin?",
                T0003: "Ich dachte, die Verwaltung lässt uns nur arbeiten, wenn es zu 100% sicher ist?",
                T0004: "Toll, und dafür müssen wir uns der Gefahr aussetzen. Am Ende bleibt halt immer alles an uns hängen, naja es wird schon nichts passieren."
            }
        };
        await myNovel.ƒS.Sound.play(myNovel.sound.sunday, 0, true);
        await myNovel.ƒS.Sound.play(myNovel.sound.cave, 0.1, true);
        await myNovel.ƒS.Location.show(myNovel.locations.mineShaftTwo);
        await myNovel.ƒS.update(myNovel.transition.leftFade.duration, myNovel.transition.leftFade.alpha, myNovel.transition.leftFade.edge);
        await myNovel.ƒS.Character.show(myNovel.characters.valentin, myNovel.characters.valentin.pose.normal, myNovel.newPositions.bottomright);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0001);
        await myNovel.ƒS.Character.show(myNovel.characters.andrea, myNovel.characters.andrea.pose.normal, myNovel.newPositions.bottomleft);
        await myNovel.ƒS.update(1);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0001);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0002);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0003);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0004);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0005);
        await myNovel.ƒS.Character.hideAll();
    }
    myNovel.thirdScene = thirdScene;
})(myNovel || (myNovel = {}));
//# sourceMappingURL=Template.js.map