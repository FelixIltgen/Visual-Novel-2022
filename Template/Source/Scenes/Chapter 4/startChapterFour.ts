
namespace myNovel {
    export async function startChapterFour(): ƒS.SceneReturn {
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
        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.chapterFour);
        await ƒS.update(3);
        await ƒS.Location.show(locations.street);
        await ƒS.update(3);
        await ƒS.Speech.show();
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);

        let choices = {
            goMine:  "Zum Bergwerk gehe",
            goHole:   "Zum Loch gehen"
          };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.goMine:
                console.log("Choice go mine");
                await ƒS.Speech.tell(characters.ben, text.ben.T0002);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
                return "chapterFourGood";

            case choices.goHole:
                console.log("Choice go hole");
                await ƒS.Speech.tell(characters.ben, text.ben.T0003);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
                return "chapterFourMid";             
        }
    }
}