
namespace myNovel {
    export async function ChapterThreeBad(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        await ƒS.Speech.tell(characters.ben, "Okay, los geht's dann kann ich ein bisschen Zeit sparen.");
        await ƒS.Speech.tell(characters.narrator, "Ben klettert über die Mauer. ");
        await ƒS.Speech.tell(characters.ben, "Wooow ganz schön hoch. Warum habe ich meine Wanderschuhe nicht mitgenommen, hoffentlich rutsche ich nicht ab, hier ist es ziemlich rutschig.");
        await ƒS.Speech.tell(characters.ben, "Ja gleich geschafft nur noch ein kurzes Stückchen, dann bin ich oben.");
        await ƒS.Speech.tell(characters.ben, "Ben versucht sich an einem losen Stein festzuhalten");
        await ƒS.Character.hide(characters.ben);
        await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, "Ohh Nein der ist ja locker, ahhhhhh ich rutsche ab.");
        await ƒS.Speech.tell(characters.ben, "NEiinnnnn.....");
        await ƒS.Speech.tell(characters.ben, "Scheiße, ich hab mir, glaube ich, den Fuß gebrochen.");

        await ƒS.Location.show(locations.blanko);
        await ƒS.update(2);
        await ƒS.Location.show(locations.gameOver);
        await ƒS.update(2);
        await ƒS.update(5);
      }
}