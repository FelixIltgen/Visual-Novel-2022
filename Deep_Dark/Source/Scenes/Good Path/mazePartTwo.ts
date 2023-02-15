
namespace myNovel {
    export async function mazePartTwo(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        await ƒS.Location.show(locations.maze);
        await ƒS.update();
        await ƒS.Character.hide(characters.ben);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update();

        await ƒS.Speech.tell(characters.ben, "Genau gerade aus okay, da kommt die nächste Kreuzung, wo muss ich lang?");

        let choices = {
            left: "Nach links gehen",
            right: "Nach rechts gehen"
        };

        let dialogueElementTwo = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElementTwo) {
            case choices.left:
                console.log("Choice left");
                await ƒS.Speech.tell(characters.ben, "Hm ist eine Sackgasse dann wohl doch nach rechts.");
                break;

            case choices.right:
                console.log("Choice right");
                break;         
        }   
      }
}