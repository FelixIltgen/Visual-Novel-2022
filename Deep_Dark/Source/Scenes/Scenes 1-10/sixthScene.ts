
namespace myNovel {
    export async function sixthScene(): ƒS.SceneReturn {
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
        
        await ƒS.Sound.fade(sound.run, 0, 1, true);
        await ƒS.Location.show(locations.chapterOne);
        await ƒS.update(2);
        await ƒS.Location.show(locations.supermarket);
        await ƒS.Sound.fade(sound.sunday, 0.5, 1, true);
        await ƒS.update(3);

        await ƒS.Character.show(characters.maria, characters.maria.pose.sad, newPositions.bottomleftMaria);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.maria, text.maria.T0001);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);
        await ƒS.Speech.tell(characters.ben, text.ben.T0002);
        await ƒS.Speech.tell(characters.maria, text.maria.T0002);
        await ƒS.Character.hide(characters.ben);
        await ƒS.update();
        await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, text.ben.T0003);
        await ƒS.Character.hide(characters.maria);
        await ƒS.update();
        await ƒS.Character.show(characters.maria, characters.maria.pose.pleased, newPositions.bottomleftMaria);
        await ƒS.update();
        await ƒS.Speech.tell(characters.maria, text.maria.T0003);
        await ƒS.Character.hide(characters.ben);
        await ƒS.update();
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, text.ben.T0004);
        await ƒS.Speech.tell(characters.maria, text.maria.T0004);
        await ƒS.Speech.tell(characters.maria, text.maria.T0005);
        await ƒS.Speech.tell(characters.ben, text.ben.T0005);
        await ƒS.Character.hideAll();
      }
}