
namespace myNovel {
    export async function finalGood(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        await ƒS.Location.show(locations.spaceship);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Character.show(characters.trabajoEscribo, characters.trabajoEscribo.pose.normal, newPositions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.trabajoEscribo, "Alle festhalten es geht los...");

        await ƒS.Speech.tell(characters.narrator, "Das Schiff der Piraten beginnt zu vibrieren und hebt vom Boden ab und fliegt los. ");
        await ƒS.Speech.tell(characters.ben, "Hä aber wie kommten wir aus dem Berg...??");
        await ƒS.Speech.tell(characters.valentin, "HAHA das bleibt ein Geheimnis...");
        await ƒS.Speech.tell(characters.ben, "Schade...");
        await ƒS.Speech.tell(characters.valentin, "Ben wenn wir wieder zuhause sind dürfen wir von den Sachen im Berg nichts erzählen sonst denken alle wir sind verrückt");
        await ƒS.Speech.tell(characters.ben, "Stimmt, es bleibt einfach unser großes Geheimnis.");
        await ƒS.Speech.tell(characters.valentin, "Genau so machen wir's. ");
        await ƒS.Sound.fade(sound.emptyCave, 0, 1, true);
        await ƒS.Character.hideAll();
        await ƒS.Speech.hide();
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