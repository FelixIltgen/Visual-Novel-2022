
namespace myNovel {
    export async function chapterFiveMidTwo(): ƒS.SceneReturn {
        console.log("Start Prolog");

        await ƒS.Location.show(locations.mineShaftTwo);
        await ƒS.update(0);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, "Hätte ich bloß mein Tagebuch eingepackt, dann könnte ich jetzt irgendwie herausfinden, was für eine Bedeutung diese Zeichen haben.");
        await ƒS.Speech.tell(characters.ben, "Was soll ich jetzt machen...");


        let choice = {
            back: "In Stollen A38 gehen",
            straight: "Gerade aus gehen",
            right: "Nach rechts gehen"
        };

        let dialogueElement = await ƒS.Menu.getInput(choice, "choicesCSSClass");

        switch (dialogueElement) {
            case choice.back:
                console.log("Choice back");
                return "chapterFiveGoodTwo"; //back to good path

            case choice.straight:
                console.log("Choice straight");
                return "chapterFiveMidThree"; //Good Path  

            case choice.right:
                console.log("Choice right");
                return "chapterFiveBad"; //Good Path 
        }

    }
}