namespace myNovel {
    export async function secondScene(): ƒS.SceneReturn {
        console.log("");
        
        let text = {
            valentin: {
                T0001: "Guten Morgen Andrea, alles klar?",
                T0002: "Wie immer eigentlich. Wollen wir loslegen?"
            },
            andrea: {
                T0001: "Klar, wie jeden Morgen eigentlich. Und bei dir, wie siehts bei dir aus?",
                T0002: "Perfekt, lass uns loslegen!"
            }
        };
        
        await ƒS.Location.show(locations.mineEntrance);
        await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
        await ƒS.Character.show(characters.valentin, characters.valentin.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0001);
        await ƒS.Character.show(characters.andrea, characters.andrea.pose.normal, newPositions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0001);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0002);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0002);
        await ƒS.Character.hideAll();
        await ƒS.Sound.fade(sound.sunday, 0 , 1, false);
      }
}