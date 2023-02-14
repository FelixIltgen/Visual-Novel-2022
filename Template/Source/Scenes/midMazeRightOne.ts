
namespace myNovel {
    export async function midMazeRightOne(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        await ƒS.Speech.tell(characters.ben, "Okay gerade aus, hoffentlich ist da der Ausgang...");
        await ƒS.Speech.tell(characters.narrator, "Ben folgt weiter dem Weg und kommt wieder an eine Kreuzung.");
        
        
        let choices = {
            left: "Nach links gehen",
            right: "Nach rechts gehen"
        };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.left:
                console.log("Choice left");
                await ƒS.Speech.tell(characters.ben, "Da kommt ja schon wieder eine Sackgasse... ich bin so verloren wie soll ich den Ausgang finden...");
                await ƒS.Speech.tell(characters.ben, "Ben geht zurück zur letzten Kreuzung");
                break;

            case choices.right:
                console.log("Choice right");
                break;     
        }
        await ƒS.Speech.tell(characters.ben, "Ohne eine Karte bin ich doch hier komplett hilflos, was soll ich nur tun...Ich werde den Ausgang nie finden...das war's endgültig");
      }
}