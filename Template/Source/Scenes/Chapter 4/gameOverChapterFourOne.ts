
namespace myNovel {
    export async function gameOverChapterFourOne(): ƒS.SceneReturn {
        console.log("Game over chapter four one");
        
        await ƒS.Location.show(locations.blanko);
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, "Wow ist ja richtig dunkel hier drin");
        await ƒS.Speech.tell(characters.ben, "Scheiße, ich habe meinen Taschenlampe nicht eingepackt, was soll ich den jetzt tun? Ich sehe absolut nichts.");
        await ƒS.Speech.tell(characters.narrator, "Ben versucht ein paar Schritte durch die Dunkelheit zu gehen. Bis er über irgendetwas stolpert, dass ihm im Weg liegt, weil er nichts sehen kann.");
        await ƒS.Speech.tell(characters.ben, "Okay, das reicht das ist ja reiner Selbstmord hier ohne Taschenlampe rein zu gehen. ");
        await ƒS.Location.show(locations.blanko);
        await ƒS.update(2);
        await ƒS.Location.show(locations.gameOver);
        await ƒS.update(2);
        await ƒS.update(5);
      }
}