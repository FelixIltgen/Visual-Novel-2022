
namespace myNovel {
    export async function goodPath(): ƒS.SceneReturn {
        console.log("Start Prolog");

        if (ƒS.Inventory.getAmount(items.wasserflasche) == 1) {
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.confident, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Ich habe aber ja meine Wasserflasche dabei, aber da ist echt nicht mehr viel drin ich vielleicht finde ich irgendwie eine Möglichkeit, die Flasche wieder auf zu füllen.");
            await ƒS.Speech.tell(characters.ben, "Für jetzt sollte es aber noch reichen.");
            await ƒS.Speech.tell(characters.narrator, "Eine Weile später");
            await ƒS.Speech.tell(characters.ben, "Schade, das war der letzte Rest Wasser, ich sollte echt in der nächsten Zeit Wasser finden.");
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Moment, da fließt doch irgendwo Wasser.");
            await ƒS.Speech.tell(characters.ben, "Das muss von da drüben kommen.");
            await ƒS.Speech.tell(characters.ben, "Ben folgt dem Wasser Geräusch.");
            await ƒS.Character.hideAll();

        } else {
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.sad, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Hätte ich lieber mal noch meine Wasserflasche mitgenommen, dann hätte ich jetzt etwas zu trinken...");
            await ƒS.Speech.tell(characters.ben, "Aber hier unten gibt es doch bestimmt irgendwie eine Möglichkeit, an Wasser zu kommen.");
            await ƒS.Speech.tell(characters.narrator, "Ben geht weiter und hofft, eine Möglichkeit für Wasser zu finden.");
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Moment, da fließt doch irgendwo Wasser.");
            await ƒS.Speech.tell(characters.ben, "Das muss von da drüben kommen.");
            await ƒS.Speech.tell(characters.ben, "Ben folgt dem Wasser Geräusch.");
            await ƒS.Character.hideAll();
        }

        await ƒS.Location.show(locations.caveTwo);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Speech.tell(characters.ben, "Da drüben... das ist ja ein kleiner Fluss, perfekt.");
        await ƒS.Speech.tell(characters.ben, "Endliche habe ich wieder etwas zu trinken, ich bin fast verdurstet.");
        await ƒS.Speech.tell(characters.narrator, "Ben trinkt aus dem Fluss.");
        await ƒS.Speech.tell(characters.ben, "Perfekt, das habe ich jetzt echt gebraucht.");
        await ƒS.Sound.play(sound.demonicScream, 0.5, false);
        await ƒS.Speech.tell(characters.ben, "Was war das??");
        await ƒS.Character.hideAll();
    }
}