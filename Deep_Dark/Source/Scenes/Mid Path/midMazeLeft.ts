
namespace myNovel {
    export async function midMazeLeft(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        await ƒS.Speech.tell(characters.ben, "Links wird schon passen, mal schauen, ob ich hier ein Weg nach draußen finde.");
        await ƒS.Speech.tell(characters.narrator, "Ben folgt dem Weg und kommt direkt an eine weitere Kreuzung.");
        await ƒS.Speech.tell(characters.ben, "Moment ich bin, glaube ich echt in einem Labyrinth... Oh nein ich werde nie ein Weg raus finden...");
      
        let choices = {
            left: "Nach links gehen",
            straight: "Nach rechts gehen"
        };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.left:
                console.log("Choice left");
                await ƒS.Speech.tell(characters.ben, "Ohh Sackgasse... hier geht es nicht weiter, dann gehe ich lieber zurück.");
                await ƒS.Speech.tell(characters.ben, "Ich werde hier nie heraus kommen... ");
                break;

            case choices.straight:
                console.log("Choice right");
                break;     
        }
      }
}