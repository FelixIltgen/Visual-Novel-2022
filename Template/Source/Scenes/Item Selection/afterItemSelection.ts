
namespace myNovel {
    export async function afterItemSelection(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        let text = {
            narrator: {
                T0001: "Ben geht zurück ins Wohnzimmer.",
                T0002: "Ben öffnet die Haustür und möchte sein Abenteuer beginnen, aber zögert kurz."
            },
            ben: {
                T0001: "Okay, jetzt sollte ich alles haben, dann kann es jetzt ja losgehen. Hoffentlich ist Mama noch nicht zurück.",
                T0002: "Puuhh sie ist noch nicht Zuhause... perfekt.",
                T0003: "Soll ich Mama doch noch eine kurze Nachricht schreiben?",
            }
        };

        await ƒS.Location.show(locations.garage);
        await ƒS.Character.hide(characters.ben);
        await ƒS.update(0);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);

        await ƒS.Location.show(locations.livingRoom);
        await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.ben, text.ben.T0002);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        await ƒS.Speech.tell(characters.ben, text.ben.T0003);

        let choices = {
            write:  "Brief schreiben",
            noWrite:   "Keinen Brief schreiben"
          };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.noWrite:
                console.log("Choice dont write");
                await ƒS.Character.hide(characters.ben);
                await ƒS.Character.show(characters.ben, characters.ben.pose.confident, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.ben, "Ach, wieso sollte ich einen Brief schreiben, ich bin doch maximal ein paar Stunden oder maximal ein Tag weg, was soll den schon passieren.");
                await ƒS.Speech.tell(characters.narrator, "Ben macht sich auf den Weg zur Mine.");
                await ƒS.Character.hideAll(); 
                return "chapterThree";
            
            case choices.write:
                console.log("Choice write");
                await ƒS.Speech.tell(characters.ben, "Okay, wo habe ich den ein Blatt Papier und einen Stift...?");
                await ƒS.Character.hide(characters.ben);
                await ƒS.update(0);
                await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.ben, "Ahh hier, okay, was soll ich den schreiben? So lange werde ich ja nicht wegbleiben. Mama wird wahrscheinlich eh komplett sauer sein, wenn sie den Brief liest.");
                await ƒS.Speech.tell(characters.ben, "Hmm... ich muss überlegen, was ich schreibe, ah, jetzt weiß ich, was!");
                await ƒS.Speech.tell(characters.narrator, "Ben beginnt den Brief zu schreiben, auf ein Mal hört er, wie seine Mutter nach Hause kommt.");
                await ƒS.Speech.tell(characters.maria, "Hallo, ich bin wieder zu Hause!");
                await ƒS.Speech.tell(characters.ben, "Ohh nein, warum ist Mama schon wieder hier, was soll ich tun, wenn sie mich findet wird, dass mit der Suche nichts?");
                
                let choicesRun = {
                    hide:  "Verstecken",
                    jump:   "Aus dem Fenster springen"
                  };
                  
                let dialogueElement = await ƒS.Menu.getInput(choicesRun, "choicesCSSClass");

                switch (dialogueElement) {

                    case choicesRun.hide:
                        console.log(" Choice hide");
                        return "afterItemSelectionBad";
        
                    case choicesRun.jump:
                        console.log("Choice jump");
                        await ƒS.Speech.tell(characters.ben, "Schnell das Fenster, das ist meine einzige Chance, damit Mama mich nicht sieht.");
                        await ƒS.Speech.tell(characters.narrator, "Ben klettert aus dem Fenster und kommt so aus dem Haus, ohne von seiner Mutter entdeckt zu werden.");
                        await ƒS.Character.hideAll(); 
                        return "chapterThree";        
                }
                break;   
        }
      }
}