
namespace myNovel {
    export async function firstScene(): ƒS.SceneReturn {
        console.log("Start scene One & Chapter one");
        
        let text = {
            narrator: {
                T0001: "Valentin macht sich auf den Weg zum Bergwerk."
            },
            ben: {
                T001: "Tschüss Papa."
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

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.livingRoom);
        await ƒS.update();
      }
}