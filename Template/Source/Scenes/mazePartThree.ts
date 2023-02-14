
namespace myNovel {
    export async function mazePartThree(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        await ƒS.Location.show(locations.maze);
        await ƒS.update();
        await ƒS.Character.hide(characters.ben);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update();
       
        await ƒS.Speech.tell(characters.ben, "Okay, hier sollte ich richtig sein und jetzt muss ich erst mal eine Weile gerade aus gehen und dann müsste noch eine Kreuzung kommen...");
        await ƒS.Speech.tell(characters.ben, "Genau, da vorne das ist die letzte Kreuzung.");
        await ƒS.Speech.tell(characters.ben, "So noch mal kurz überlegen");

        let choices = {
            left: "Nach links gehen",
            straight: "Nach rechts gehen"
        };

        let dialogueElementTwo = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElementTwo) {
            case choices.left:
                console.log("Choice left");
                await ƒS.Speech.tell(characters.ben, "Ich glaube, es war links. Ja, genau sollte doch richtig sein.");
                await ƒS.Speech.tell(characters.ben, "Moment, ich sollte doch schon längst am Ende sein");
                await ƒS.Speech.tell(characters.ben, "Oh nein, das ist eine Sackgasse... aber da liegt ja schon wieder ein Beutel mit Gold");
                await ƒS.Speech.tell(characters.ben, "Okay, dann kann ich jetzt wieder alles zurücklaufen.");
                //Gold in Inventaar
                break;

            case choices.straight:
                console.log("Choice right");
                break;
                        
        }   
      }
}