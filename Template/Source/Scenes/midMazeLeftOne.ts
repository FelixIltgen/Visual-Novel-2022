
namespace myNovel {
    export async function midMazeLeftOne(): ƒS.SceneReturn {
        console.log("Start Prolog");


        await ƒS.Speech.tell(characters.narrator, "Ben folgt dem Weg und kommt direkt an eine weitere Kreuzung.");
        await ƒS.Speech.tell(characters.ben, "Schon wieder eine Kreuzung, ich werde hier für immer drin bleiben...");


        let choices = {
            left: "Nach links gehen",
            right: "Nach rechts gehen"
        };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.left:
                console.log("Choice left");
                await ƒS.Speech.tell(characters.ben, "AHHHH nicht schon wieder eine Sackgasse... ich werde noch verrückt hier drin.");
                break;

            case choices.right:
                console.log("Choice right");
                break;
        }

        await ƒS.Speech.tell(characters.ben, "Wenn ich jetzt hier wieder nur eine Kreuzung finde, gebe ich komplett auf, dann war's dass.");
        await ƒS.Speech.tell(characters.narrator, "Ben folgt dem Weg und kommt wieder an eine Kreuzung.");
        await ƒS.Speech.tell(characters.ben, "Ohh Nein.... das wars Endgültig ich komme hier nicht mehr raus.");
    }
}