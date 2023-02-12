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
        supermarket: {
            name: "Supermarkt",
            background: "./Images/Background/supermarket.png"
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
        },
        blanko: {
            name: "Blanko",
            background: "Images/Background/Chapter/blanko.png"
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
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
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
            { scene: myNovel.tenthScene, name: "Tenth scene" }
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
    async function tenthScene() {
        console.log("Start Prolog");
        let text = {
            narrator: {
                T0001: "Maria verlässt das Zimmer",
                T0002: "Ben bleibt noch einen Augenblick in seinem Bett liegen und über die Geschehnisse des Tages nach.",
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
                T0013: "In der Garage sollte ich eigentlich alles finden, um gut vorbereitet sein.",
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
        await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0002);
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
                await myNovel.ƒS.update(0);
                break;
            case choices.noRead:
                console.log("Choice dont read book");
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0007);
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0008);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0014);
                await myNovel.ƒS.Speech.tell(myNovel.characters.maria, text.maria.T0009);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0001);
                await myNovel.ƒS.Character.hide(myNovel.characters.maria);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.narrator, text.narrator.T0006);
                await myNovel.ƒS.Character.hide(myNovel.characters.ben);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Character.show(myNovel.characters.ben, myNovel.characters.ben.pose.thinking, myNovel.newPositions.bottomright);
                await myNovel.ƒS.update(0);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0015);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0016);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0017);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0018);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0011);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0012);
                await myNovel.ƒS.Speech.tell(myNovel.characters.ben, text.ben.T0013);
                break;
        }
        await myNovel.ƒS.Character.hideAll();
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