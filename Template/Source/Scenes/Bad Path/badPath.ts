
namespace myNovel {
    export async function badPath(): ƒS.SceneReturn {
        console.log("Start Prolog");

        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.chapterfive);
        await ƒS.update(4);
        await ƒS.Speech.show();
        await ƒS.update();

        await ƒS.Location.show(locations.caveTwo);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);

        if (ƒS.Inventory.getAmount(items.tagebuch) == 1) {
            await ƒS.Speech.tell(characters.ben, "Wow hatte Papa echt recht mit dem Monster aus dem Tagebuch. Ich habe echt gedacht, dass er halluziniert, aber vielleicht liegt es auch an mir.");
            await ƒS.Speech.tell(characters.narrator, "Ben folgt dem Fluss verlauf. ");
            await ƒS.Sound.play(sound.monsterScream, 0.4, false);
            await ƒS.Speech.tell(characters.ben, "Was war das schon wieder....");
            await ƒS.Sound.play(sound.monsterScream2, 0.4, false);
            await ƒS.Sound.fade(sound.emptyCave, 0, 0.5, true);
            await ƒS.Sound.fade(sound.run, 0.4, 0.5, true);
            await ƒS.Speech.tell(characters.ben, "Oh mein Gott Papa hatte einfach Recht ich wusste ihm kann man immer vertrauen. ");
            await ƒS.Speech.tell(characters.ben, "Ahh es kommt immer näher. ");
            await ƒS.Speech.tell(characters.ben, "Ich höre es hinter mir....");
            await ƒS.Speech.tell(characters.ben, "Bloß weg hier");
            await ƒS.Speech.tell(characters.narrator, "Ben versucht dem unbekannten etwas zu entkommen und rennt los.");
            await ƒS.Speech.tell(characters.ben, "Scheiße Sackgasse, aber ich glaube ich habe es abgehängt. ");
            await ƒS.Sound.play(sound.demonicScream, 0.6, false);
            await ƒS.Speech.tell(characters.ben, "Ahhhhhhhhhhhhhh.........");

        } else {
            await ƒS.Speech.tell(characters.ben, "Als ob hier unten echt Tiere leben die so laut sind. Hoffentlich ist es kein Bär oder so. Ich glaube es ist besser wenn ich jetzt etwas leiser bin.");
            await ƒS.Speech.tell(characters.narrator, "Ben folgt dem Fluss verlauf. ");
            await ƒS.Sound.play(sound.monsterScream, 0.4, false);
            await ƒS.Speech.tell(characters.ben, "Was war das schon wieder....");
            await ƒS.Sound.play(sound.monsterScream2, 0.4, false);
            await ƒS.Sound.fade(sound.emptyCave, 0, 0.5, true);
            await ƒS.Sound.fade(sound.run, 0.4, 0.5, true);
            await ƒS.Speech.tell(characters.ben, "Oh mein Gott, was ist das für ein Ding");
            await ƒS.Speech.tell(characters.ben, "Ahh es kommt immer näher. ");
            await ƒS.Speech.tell(characters.ben, "Ich höre es hinter mir...");
            await ƒS.Speech.tell(characters.ben, "Bloß weg hier ");
            await ƒS.Speech.tell(characters.narrator, "Ben versucht dem unbekannten etwas zu entkommen und rennt los.");
            await ƒS.Speech.tell(characters.ben, "Scheiße Sackgasse, aber ich glaube ich habe es abgehängt. ");
            await ƒS.Sound.play(sound.demonicScream, 0.8, false);
            await ƒS.Speech.tell(characters.ben, "Ahhhhhhhhhhhhhh.........");

            await ƒS.Character.hideAll();
            await ƒS.Speech.hide();
            await ƒS.Sound.fade(sound.run, 0, 1, true);
            await ƒS.Location.show(locations.blanko);
            await ƒS.update(4);
            await ƒS.Location.show(locations.blanko);
            await ƒS.Sound.play(sound.sundayNoMusic, 0.5, false);
            await ƒS.update(4);
            await ƒS.Speech.show();
            await ƒS.update();
            await ƒS.Speech.tell(characters.valentin, "Ben aufstehen sonst kommst du zu spät zur Schule und dann gibt es wieder Ärger.");
            await ƒS.Speech.hide();


        }

    }
}