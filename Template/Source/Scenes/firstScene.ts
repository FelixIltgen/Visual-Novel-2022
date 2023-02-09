
namespace myNovel {
    export async function firstScene(): ƒS.SceneReturn {
        console.log("Start scene One & Chapter one");
        
        let text = {
            narrator: {
                T0001: "Valentin macht sich auf den Weg zum Bergwerk."
            },
            ben: {
                T0001: "Tschüss Papa."
            },
            maria: {
                T0001: "Alles klar, bis später pass auf dich auf, heute ist doch ein wichtiger Tag."
            },
            valentin: {
                T0001: "Okay, ich mache mich fertig und mache mich auf den Weg.",
                T0002: "Natürlich, ich passe immer auf mich auf, gerade bei so einem wichtigen Tag.",
                T0003: "Tschüss, ihr beiden, habt einen schönen Tag."
            }
        };
        //FX Sound (Tür)
        await ƒS.Sound.play(sound.closingGate, 0.5, false);
        await ƒS.Location.show(locations.begin);
        await ƒS.update(2);
        await ƒS.update(3);
        await ƒS.Sound.play(sound.sunday, 0.5, true);
        await ƒS.Location.show(locations.intro);
        await ƒS.update(1);
        await ƒS.Location.show(locations.livingRoom);
        await ƒS.update(20);
        await ƒS.Character.show(characters.valentin, characters.valentin.pose.smile, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0001);
        await ƒS.Character.show(characters.maria, characters.maria.pose.sad, newPositions.bottomleftMaria);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.maria, text.maria.T0001);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0002);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0003);
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        await ƒS.Character.hideAll();
      }
}