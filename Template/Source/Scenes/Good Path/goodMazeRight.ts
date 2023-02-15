
namespace myNovel {
    export async function goodMazeRight(): ƒS.SceneReturn {
        console.log("Start Prolog");

        await ƒS.Location.show(locations.maze);
        await ƒS.update();
        await ƒS.Character.hide(characters.ben);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, "Das ist zwar nicht die richtige Richtung, wie Papa eingezeichnet hat, aber ich kann ja trotzdem mal schauen, wo es hingeht.");
        await ƒS.Speech.tell(characters.ben, "Okay da ist die nächste Kreuzung wo soll ich hin?");

        let choice = {
            left: "Nach links gehen",
            right: "Nach rechts gehen"
        };

        let dialogueElementTwo = await ƒS.Menu.getInput(choice, "choicesCSSClass");

        switch (dialogueElementTwo) {
            case choice.left:
                console.log("Choice left");
                await ƒS.Speech.tell(characters.ben, "Nach links okay mal schauen, was es hier so gibt?");
                await ƒS.Speech.tell(characters.narrator, "Ben folgt einem langen Gang und kommt an einer Sackgasse raus.");
                await ƒS.Speech.tell(characters.ben, "Hm...hier geht es wohl nicht, dann ist es wohl besser, wenn ich wieder an den Anfang gehe und die richtige Richtung nehme.");
                return "GOODMazeLeft"; //Left Maze

            case choice.right:
                console.log("Choice right");
                await ƒS.Speech.tell(characters.ben, "Nach rechts. Okay mal schauen, was es hier so gibt?");
                await ƒS.Speech.tell(characters.ben, "Hm.. eine weitere Kreuzung...");

                let choicesTwo = {
                    left: "Nach links gehen",
                    right: "Nach rechts gehen"
                };
        
                let dialogueElementTwo = await ƒS.Menu.getInput(choicesTwo, "choicesCSSClass");
        
                switch (dialogueElementTwo) {
                    case choicesTwo.left:
                        console.log("Hmm.... ich sollte echt aufpassen, wenn ich hier zu tief rein gehe, verlaufe ich mich vielleicht noch. Es ist, glaube ich, echt besser, wenn ich wieder zurückgehe und dem Weg von Papa folge.");
                        return "GOODMazeLeft"; //Left Maze
        
                    case choicesTwo.right:
                        console.log("Choice right");
                        
                        await ƒS.Speech.tell(characters.ben, "Ohh hier ist ja direkt eine Sackgasse.");
                        await ƒS.Speech.tell(characters.ben, "Es macht, glaube ich, keinen Sinn. Hier es ist, glaube ich besser, wenn ich den richtigen Weg nehme.");
                        return "GOODMazeLeft"; //left Maze           
                }   
        } 
    }
}