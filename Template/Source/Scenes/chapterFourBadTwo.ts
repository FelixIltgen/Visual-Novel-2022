
namespace myNovel {
    export async function chapterFourBadTwo(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        await ƒS.Location.show(locations.sinkhole);
        await ƒS.update(0);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, "Ich habe zwar nicht alles dabei was ich brauche aber ich versuche es einfach.");
        await ƒS.Speech.tell(characters.narrator, "Ben beginnt ohne Ausrüstung das Loch hinunter zu klettern.");
        await ƒS.Speech.tell(characters.ben, "Wow, ist das rutschig, aber nicht so schwierig, wie ich dachte, war wohl doch die bessere Idee wie der Aufzug.");
        await ƒS.Speech.tell(characters.narrator, "Ben wird immer leichtsinniger und wird immer unvorsichtiger, er bemerkt nicht, dass er sich an einem lockeren Stein festhält.");
        await ƒS.Character.hide(characters.ben);
        await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, "Ohh nein der ist ja locker.... oh NeEINnnn");
        await ƒS.Speech.tell(characters.ben, "AHHHHhhshsahahhh............... ");
        await ƒS.Location.show(locations.blanko);
        await ƒS.update(2);

      }
}