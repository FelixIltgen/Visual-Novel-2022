
namespace myNovel {
    export async function afterItemSelectionBad(): ƒS.SceneReturn {
        console.log("Start Prolog");

        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, "Schnell ich muss mich verstecken sonst findet sie mich.");
        await ƒS.Speech.tell(characters.maria, "Ben wo bist du ich habe dich doch gehört? Ich muss dir was wichtiges erzählen was mir passiert ist. ");
        await ƒS.Speech.tell(characters.ben, "Nein Hoffentlich sieht sich mich nicht.");
        await ƒS.Speech.tell(characters.maria, "Heyy was machst du unterm Bett, komm raus...");
        await ƒS.Speech.tell(characters.narrator, "Ben krabbelt unter dem Bett hervor.");
        await ƒS.Speech.tell(characters.maria, "Was hast du da gemacht und wieso siehst du aus als würdest du auf eine Expedition aufbrechen? ");
        await ƒS.Speech.tell(characters.ben, "ÄHmmm....nur so, wollte etwas ausprobieren...");
        await ƒS.Speech.tell(characters.maria, "NEINN du wolltest doch nicht etwa Papa suchen gehen??");
        await ƒS.Speech.tell(characters.narrator, "Ben wird rot");
        await ƒS.Speech.tell(characters.ben, "Jetzt reichts hast du eigentlich eine Ahnung wie gefährlich das ist, auf in dein Zimmer und gib mir die Sachen die sind beschlagnahmt damit du erst nicht erneut auf die Idee kommst in die Mine rein zu gehen.");
        
        await ƒS.Sound.fade(sound.sunday, 0, 0.5, true);
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