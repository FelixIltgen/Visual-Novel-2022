namespace myNovel {
    export async function thirdScene(): ƒS.SceneReturn {
        console.log("");
        
        let text = {
            valentin: {
                T0001: "Ahhhh, ich bin schon etwas aufgeregt, wenn wir heute den neuen Stollen freisprengen sollen.",
                T0002: "Hast du nicht den Bericht von der Untersuchung gelesen?",
                T0003: "Die Gesteinsschicht, in die der neue Stollen gesprengt werden soll, ist nicht zu 100% sicher.",
                T0004: "Ja, aber du kennst die Verwaltung, es geht am Ende immer ums Geld und in der Gesteinsschicht soll sich sehr viel Eisen befinden.",
                T0005: "Hoffen wir es mal..."

            },
            andrea: {
                T0001: "Warum den?, es wird schon nichts passieren.",
                T0002: "Nein, warum was steht den so schlimmes drin?",
                T0003: "Ich dachte, die Verwaltung lässt uns nur arbeiten, wenn es zu 100% sicher ist?",
                T0004: "Toll, und dafür müssen wir uns der Gefahr aussetzen. Am Ende bleibt halt immer alles an uns hängen, naja es wird schon nichts passieren."
            }
        };
        await ƒS.Sound.fade(sound.cave, 0.1, 0.4, true);
        await ƒS.Location.show(locations.mineShaftTwo);
        await ƒS.update(transition.leftFade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Character.show(characters.valentin, characters.valentin.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0001);
        await ƒS.Character.show(characters.andrea, characters.andrea.pose.normal, newPositions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0001);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0002);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0002);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0003);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0003);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0004);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0004);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0005);
        await ƒS.Character.hideAll();
      }
}