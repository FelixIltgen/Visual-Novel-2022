
namespace myNovel {
    export async function chapterFourBad(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        await ƒS.Location.show(locations.sinkhole);
        await ƒS.update(0);
        await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, "Ich glaube, es ist besser, wenn ich warte und mich im Dunkeln an den Wachen vorbei schleiche.");
        await ƒS.Speech.tell(characters.ben, "Die Wahrscheinlichkeit, eine Lücke zu finden, ist sicher gering, die Absperrung ist ja noch neu.");
        await ƒS.Speech.tell(characters.narrator, "Ben wartet darauf, dass es dunkler wird ");

        await ƒS.Character.hide(characters.ben);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, "Mittlerweile ist es dunkel geworden Ben wartet immer noch auf einen guten Moment, sich an den Wachleuten vorbei zu schleichen.");
        await ƒS.Speech.tell(characters.ben, "Jetzt kann ich es versuchen, es ist dunkel genug und die Wachleute sind nicht mehr so wachsam.");
        await ƒS.Speech.tell(characters.ben, "Ben beginnt sich an den Wachen vorbei zu schleichen und durch den einzigen Eingang in der Absperrung zu gehen.");
        await ƒS.Speech.tell(characters.ben, "Okay, läuft ja ganz gut, ich bin fast am Tor...");
        await ƒS.Speech.tell(characters.narrator, "Ben kriecht weiter Richtung Tor, plötzlich kommt ein Wachmann auf ihn zu.");
        await ƒS.Character.hide(characters.ben);
        await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, "Scheiße, ich muss mich verstecken....");
        await ƒS.Speech.tell(characters.ben, "Ohh nein, hier kann ich mich nirgends verstecken, das war's er wird mich sehen...");
        await ƒS.Speech.tell(characters.narrator, "Heyyy, was machst du den da?!!!");
        await ƒS.Location.show(locations.blanko);
        await ƒS.update(2);
      }
}