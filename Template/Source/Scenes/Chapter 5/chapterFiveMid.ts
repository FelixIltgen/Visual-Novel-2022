
namespace myNovel {
    export async function chapterFiveMid(): ƒS.SceneReturn {
        console.log("Chapter Five mid");
        await ƒS.Sound.fade(sound.sunday, 0, 1, true);
        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.chapterfive);
        await ƒS.update(4);
        await ƒS.Speech.show();
        await ƒS.update();

        if (ƒS.Inventory.getAmount(items.taschenlampe) == 1) {
            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.ben, "Zum Glück habe ich meine Taschenlampe dabei. Ohne wäre es viel zu Dunkel.");
            await ƒS.Speech.tell(characters.narrator, "Ben holt seine Taschenlampe aus seinem Rucksack und macht sie an.");
            await ƒS.Location.show(locations.mineShaftTwo);
            await ƒS.Sound.fade(sound.cave, 0.4, 1, true);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.ben, "Perfekt, dann kann es ja losgehen");
            await ƒS.Speech.tell(characters.narrator, "Ben macht sich auf den Weg und geht tiefer in den Stollen.");
            await ƒS.Speech.tell(characters.ben, "Wo bin ich eigentlich...? ich habe voll die Orientierung verloren...");
            await ƒS.Speech.tell(characters.ben, "Papa hat doch immer erzählt, dass die Stützbalken Markierungen haben. ");
            await ƒS.Speech.tell(characters.narrator, "Ben läuft weiter bis er den nächsten Stützbalken findet. ");
            await ƒS.Speech.tell(characters.ben, "Da, da oben steht doch irgendetwas.");
            await ƒS.Speech.tell(characters.ben, "B37...");

            if (ƒS.Inventory.getAmount(items.tagebuch) == 1) {
                await ƒS.Character.hideAll();
                return "chapterFiveGoodOne"; //Good seite
            } else {
                return "chapterFiveMidTwo"; //next part
            }

        } else {
            await ƒS.Character.hideAll();
            return "gameOverChapterFourOne"; //Game over five
        }
    }
}