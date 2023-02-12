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
        sinkhole: {
            name: "Sinkhole",
            background: "./Images/Background/newShaft.png"
        },
        sinkholeInside: {
            name: "Sinkhole inside",
            background: "./Images/Background/newShaft.png"
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
                happy: "Images/Characters/Maria/Maria_happy.png",
                pleased: "Images/Characters/Maria/pleased.png",
                sad: "Images/Characters/Maria/Maria_sad.png"
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
        }
    };
    myNovel.newPositions = {
        bottomleftMaria: new FudgeStory.Position(950, -540),
        bottomleft: new FudgeStory.Position(350, -540),
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
            //{ scene: firstScene, name: "First scene"},
            //{ scene: secondScene, name: "Second scene"},
            //{ scene: thirdScene, name: "Thrid scene"},
            //{ scene: fourthScene, name: "Fourth scene"},
            { scene: myNovel.fifthScene, name: "Fifth scene" }
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
    async function fifthScene() {
        console.log("Start fifthScene");
        let text = {
            narrator: {
                T0001: "Die beiden schauen in einen tiefen schwarzen Gang, der noch immer voll aufgewirbeltem Staub ist.",
                T0002: "Beide machen sich auf den Weg und begehen den neuen Stollen. Durch den Staub ist es schwer, viel zu erkennen, Gerade so können die beiden in dem neuen Stollen stehen. Links und rechts liegt sehr viel Schutt. ",
                T0003: "Beide fangen an, Schutt beiseite zu räumen und an den freigeräumten Plätzen Stützbalken zu platzieren.",
                T0004: "Valentin läuft in Richtung der Jubelgeräusche von seinem Kollegen.",
                T0005: "Andrea springt wie von der Tarantel gestochen durch den engen und unwegsamen Stollen. ",
                T0006: "Egal was Valentin auch sagt André lässt sich nicht beruhigen. Plötzlich bricht der Boden unter André durch sein herum springen auf und André stürzt in die Tiefe.",
                T0007: "Mehrere Minuten hört Valentin nichts von seiner Kollegin, er will schon den Vorfall im Hauptquartier melden gehen, damit eine Rettungsaktion gestartet werden kann. Da hört er auf einmal die Stimme von Andrea.",
                T0008: "Valentin, der oben steht, versteht nicht ganz, was er davon halten soll, aber da er seinen Kollegen endlich retten will, holt er noch mehr Seile und den mobilen Kran. Er macht die Seile am Kran fest und wirft sie in das Loch.",
                T0009: "Valentin legt den Schalter um und der Kran beginnt an den Seilen zu ziehen, der Kran schafft es fast nicht, die Last hochzuheben, doch schließlich kommt André und das mystische Gefäß zum Vorschein.",
                T0010: "Andrea kletterte auf das immer noch am Kran hängende Sarg ähnliche Objekt und setzt seine Hacke an, um es zu öffnen. Er holt aus… aber bevor er mit der Hacke zuschlagen kann, bricht das Seil durch die Last und der Kollege fällt samt Sarg wieder zurück in das Loch.",
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
                T0005: "Hey, du musst die viel fester in den Boden und die Decke rammen, sonst hallten die nicht richtig, schau die erste hier an, wie stabil sie ist, deine sind viel zu locker.",
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
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0009);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0010);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0011);
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0014);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0008);
        await myNovel.ƒS.Speech.tell(myNovel.characters.andrea, text.andrea.T0012);
        await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0009);
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
        await myNovel.ƒS.Speech.tell(myNovel.characters.valentin, text.valentin.T0018);
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