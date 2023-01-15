namespace myNovel {
    export async function secondScene(): ƒS.SceneReturn {
        console.log("Start scene One & Chapter one");
        
        let text = {
            valentin: {
                T0001: "Guten Morgen Andrea, alles klar?",
                T0002: "Wie immer eigentlich. Wollen wir loslegen?"
            },
            Andrea: {
                T0001: "Klar, wie jeden Morgen eigentlich. Und bei dir, wie siehts bei dir aus?",
                T0002: "Perfekt, lass uns loslegen!"
            }
        };
        
        await ƒS.Location.show(locations.mineEntrance);
        await ƒS.update();
        await ƒS.Character.show(characters.valentin, characters.valentin.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0001);
        await ƒS.Character.show(characters.andrea, characters.andrea.pose.normal, newPositions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.andrea, text.Andrea.T0001);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0002);
        await ƒS.Speech.tell(characters.andrea, text.Andrea.T0002);
      }
}