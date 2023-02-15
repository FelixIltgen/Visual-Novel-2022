
namespace myNovel {
    export async function goodMazeLeft(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        await ƒS.Location.show(locations.maze);
        await ƒS.update();
        await ƒS.Character.hide(characters.ben);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update();

        await ƒS.Speech.tell(characters.ben, "Okay, wie Papa geschrieben hat die erste Abbiegung nach links und dann...");
        await ƒS.Speech.tell(characters.ben, "Moment, was ist das");
        await ƒS.Speech.tell(characters.narrator, "Auf dem Boden des Labyrinths liegt irgendwas glänzendes.");
        await ƒS.Speech.tell(characters.ben, "Ist das eine Goldmünze...ja wow, soll ich sie mit nehmen?");

        let choiceCoin = {
            take: "Münnze nehmen",
            dontTake: "Münze liegenn lassen"
        };

        let dialogueElement = await ƒS.Menu.getInput(choiceCoin, "choicesCSSClass");

        switch (dialogueElement) {
            case choiceCoin.take:
                console.log("Choice take");
                await ƒS.Speech.tell(characters.ben, "Ja, warum den nicht, sieht toll aus.");
                dataForSave.coinScore += 10;
                ƒS.Inventory.add(items.muenzen);
                break;

            case choiceCoin.dontTake:
                console.log("Choice dont Take");
                await ƒS.Speech.tell(characters.ben, "Nee, was soll ich den damit anfangen?");
                break;          
        }

        await ƒS.Speech.tell(characters.ben, "Okay, wie geht es weiter...?");

        let choicesTwo = {
            straight: "Gerade aus gehen",
            right: "Nach rechts gehen"
        };

        let dialogueElementTwo = await ƒS.Menu.getInput(choicesTwo, "choicesCSSClass");

        switch (dialogueElementTwo) {
            case choicesTwo.straight:
                break;

            case choicesTwo.right:
                console.log("Choice right");
                await ƒS.Speech.tell(characters.ben, "Ist zwar nicht der richtige Weg, ich kann aber ja trotzdem mal schauen, was es hier gibt.");
                await ƒS.Speech.tell(characters.ben, "Hm.. Sackgasse... Moment was liegt da? ");
                await ƒS.Speech.tell(characters.ben, "Ein Beutel?... Wow der ist ja voller Goldmünzen");
                await ƒS.Speech.tell(characters.ben, "Warum sind hier so viele Goldmünzen.");
                await ƒS.Speech.tell(characters.narrator, "Ben packt den Beutel ein und geht wieder zurück ");
                break;             
        }
      }
}