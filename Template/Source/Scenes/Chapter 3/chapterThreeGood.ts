
namespace myNovel {
    export async function chapterThreeGood(): ƒS.SceneReturn {
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
        await ƒS.Location.show(locations.chapterThree);
        await ƒS.update(2);
        await ƒS.Location.show(locations.street);
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);
        await ƒS.Speech.tell(characters.ben, text.ben.T0002);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        await ƒS.Speech.tell(characters.paula, text.paula.T0001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
        await ƒS.Speech.tell(characters.ben, text.ben.T0003);
        await ƒS.Character.show(characters.paula, characters.paula.pose.normal, newPositions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.paula, text.paula.T0002);
        await ƒS.Speech.tell(characters.ben, text.ben.T0004);
        await ƒS.Speech.tell(characters.paula, text.paula.T0003);

        let choices = {
            say:  "Von Abenteuer erzählen",
            dontSay:   "Abenteuer geheim halten"
          };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.say:
                console.log("Choice say");

                await ƒS.Speech.tell(characters.ben, text.ben.T0011);
                await ƒS.Character.hide(characters.paula);
                await ƒS.Character.show(characters.paula, characters.paula.pose.sorry, newPositions.bottomleft);
                await ƒS.update();
                await ƒS.Speech.tell(characters.paula, text.paula.T0009);
                await ƒS.Character.hide(characters.ben);
                await ƒS.Character.show(characters.ben, characters.ben.pose.moreConfident, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.ben, text.ben.T0012);
                await ƒS.Character.hide(characters.paula);
                await ƒS.Character.show(characters.paula, characters.paula.pose.normal, newPositions.bottomleft);
                await ƒS.update();
                await ƒS.Speech.tell(characters.paula, text.paula.T0010);
                await ƒS.Speech.tell(characters.ben, text.ben.T0013);
                await ƒS.Speech.tell(characters.paula, text.paula.T0011);
                await ƒS.Speech.tell(characters.ben, text.ben.T0014);
                await ƒS.Speech.tell(characters.paula, text.paula.T0012);
                await ƒS.Speech.tell(characters.ben, text.ben.T0015);
                await ƒS.Speech.tell(characters.paula, text.paula.T0013);
                await ƒS.Speech.tell(characters.ben, text.ben.T0016);
                await ƒS.Speech.tell(characters.paula, text.paula.T0014);
                await ƒS.Character.hide(characters.ben);
                await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.ben, text.ben.T0017);
                await ƒS.Speech.tell(characters.paula, text.paula.T0015);
                await ƒS.Character.hideAll(); 
                break;

            case choices.dontSay:
                console.log("Choice dontSay");
                await ƒS.Speech.tell(characters.ben, text.ben.T0005);
                await ƒS.Speech.tell(characters.paula, text.paula.T0004);

                let choicesLie = {
                    lie:  "Lügen",
                    dontLie:   "Wahrheit erzählen"
                  };
        
                let dialogueElement = await ƒS.Menu.getInput(choicesLie, "choicesCSSClass");
        
                switch (dialogueElement) {
                    case choicesLie.lie:
                        console.log("Choice lie");

                        await ƒS.Speech.tell(characters.ben, text.ben.T0006);
                        await ƒS.Speech.tell(characters.ben, text.ben.T0007);
                        await ƒS.Speech.tell(characters.paula, text.paula.T0005);
                        await ƒS.Speech.tell(characters.ben, text.ben.T0008);
                        await ƒS.Speech.tell(characters.paula, text.paula.T0006);
                        await ƒS.Speech.tell(characters.ben, text.ben.T0009);
                        await ƒS.Speech.tell(characters.paula, text.paula.T0007);
                        await ƒS.Character.hideAll(); 
                        break;

                    case choicesLie.dontLie:
                        console.log("Choice dontLie");

                        await ƒS.Character.hide(characters.ben);
                        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                        await ƒS.update(0);
                        await ƒS.Speech.tell(characters.ben, text.ben.T0010);
                        await ƒS.Speech.tell(characters.paula, text.paula.T0008);

                        await ƒS.Speech.tell(characters.ben, text.ben.T0011);
                        await ƒS.Character.hide(characters.paula);
                        await ƒS.Character.show(characters.paula, characters.paula.pose.sorry, newPositions.bottomleft);
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.paula, text.paula.T0009);
                        await ƒS.Character.hide(characters.ben);
                        await ƒS.Character.show(characters.ben, characters.ben.pose.moreConfident, newPositions.bottomright);
                        await ƒS.update(0);
                        await ƒS.Speech.tell(characters.ben, text.ben.T0012);
                        await ƒS.Character.hide(characters.paula);
                        await ƒS.Character.show(characters.paula, characters.paula.pose.normal, newPositions.bottomleft);
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.paula, text.paula.T0010);
                        await ƒS.Speech.tell(characters.ben, text.ben.T0013);
                        await ƒS.Speech.tell(characters.paula, text.paula.T0011);
                        await ƒS.Speech.tell(characters.ben, text.ben.T0014);
                        await ƒS.Speech.tell(characters.paula, text.paula.T0012);
                        await ƒS.Speech.tell(characters.ben, text.ben.T0015);
                        await ƒS.Speech.tell(characters.paula, text.paula.T0013);
                        await ƒS.Speech.tell(characters.ben, text.ben.T0016);
                        await ƒS.Speech.tell(characters.paula, text.paula.T0014);
                        await ƒS.Character.hide(characters.ben);
                        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                        await ƒS.update(0);
                        await ƒS.Speech.tell(characters.ben, text.ben.T0017);
                        await ƒS.Speech.tell(characters.paula, text.paula.T0015);
                        await ƒS.Character.hideAll(); 
                        break;  
                }  
        }
      }
}