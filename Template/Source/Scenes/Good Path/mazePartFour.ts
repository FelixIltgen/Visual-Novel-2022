
namespace myNovel {
    export async function mazePartFour(): ƒS.SceneReturn {
        console.log("Start Prolog");

        await ƒS.Location.show(locations.maze);
        await ƒS.update();
        await ƒS.Character.hide(characters.ben);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update();

        await ƒS.Speech.tell(characters.ben, "Nach Papas plan sollte es gerade aus gehen. Ja, genau hier ist der Ausgang perfekt, zum Glück habe ich mich nicht verlaufen.");
        await ƒS.Character.hideAll();

        await ƒS.Location.show(locations.cave);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, "Ich muss Papa eigentlich auf der Spur sein, also könnte er hier ja schon irgendwo sein?");
        await ƒS.Speech.tell(characters.ben, "Vielleicht hört er mich ja.");
        await ƒS.Speech.tell(characters.ben, "PAPA HALLOOO HÖRST DU MICH");
        await ƒS.Speech.tell(characters.ben, "HALLOOOOOO......");
        await ƒS.Sound.play(sound.demonicScream, 0.4, false);
        await ƒS.Speech.tell(characters.ben, "Ohh nein.... nicht gut, es hat mich gehört oder?");
        await ƒS.Speech.tell(characters.ben, "Ahh es kommt immer näher. ");
        await ƒS.Speech.tell(characters.ben, "Ich höre es hinter mir....");
        await ƒS.Speech.tell(characters.ben, "Bloß weg hier ");
        await ƒS.Speech.tell(characters.narrator, "Ben versucht dem Unbekannten zu entkommen und rennt los.");
        await ƒS.Speech.tell(characters.ben, "Scheiße Sackgasse, aber ich glaube ich habe es abgehängt. ");
        await ƒS.Sound.play(sound.monsterScream, 0.6, false);
        await ƒS.Speech.tell(characters.ben, "Ahhhhhhhhhhhhhh.........NEINNNNNNN");
        await ƒS.Sound.play(sound.pistolShot, 0.4, false);
        await ƒS.Character.hideAll();
    }
}