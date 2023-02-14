
namespace myNovel {
    export async function gameOverChapterFiveTwo(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        await ƒS.Speech.tell(characters.ben, "Okay hätte ich jetzt noch ein Seil dann könnte ich es einfach als Sicherung verwenden falls die Brücke nicht hält... schade dann muss ich es ohne probieren.");
        await ƒS.Speech.tell(characters.narrator, "Ben beginnt die Brücke zu betreten.");
        await ƒS.Speech.tell(characters.ben, "Woah das ist so wacklig und unsicher hoffentlich halten die Holzbalken.");
        //Knackendes Holz geräusch
        await ƒS.Speech.tell(characters.ben, "Ohhh das war keine so gute Idee....");
        //Brechendes Holz
        await ƒS.Speech.tell(characters.ben, "Nein oh mein Gott ich falle....");
        await ƒS.Speech.tell(characters.narrator, "Die Balken der Brücke haben das Gewicht von Ben nicht ausgehalten und sind durchgebrochen, Ben hält sich jetzt verzweifelt an den anderen Balken fast, um nicht ab zu stürzen.");
        await ƒS.Speech.tell(characters.ben, "Ohje ohje einfach nur fest halten und nciht los lassen bloß nicht los lassen...");
        await ƒS.Speech.tell(characters.ben, "Scheiße ich rutsche ab nein nein nein.....");
        await ƒS.Speech.tell(characters.ben, "Ahhhhhhh.....................");

        await ƒS.Location.show(locations.blanko);
        await ƒS.update(2);
        await ƒS.Location.show(locations.gameOver);
        await ƒS.update(2);
        await ƒS.update(5);
      }
}