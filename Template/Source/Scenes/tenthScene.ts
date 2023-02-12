
namespace myNovel {
    export async function tenthScene(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        let text = {
            narrator: {
                T0001: "Maria verlässt das Zimmer",
                T0002: "Ben bleibt noch einen Augenblick in seinem Bett liegen und über die Geschehnisse des Tages nach.",
                T0003: "Ben öffnet das Tagebuch",
                T0004: "Ben schließt das Tagebuch wieder",
                T0005: "Ben überlegt kurz.",
                T0006: "Ben liegt für einen Moment in seinem Zimmer und versucht das gehörte irgendwie zu verarbeiten und beginnt nachzudenken, nach einiger Zeit fasst er einen Entschluss."
            },
            ben: {
                T0001: "Nein, ich habe keine Lust zu reden.",
                T0002: "Okay gut von mir aus, du kannst rein kommen.",
                T0003: "Okay, was willst du mir erzählen.",
                T0004: "Ja, ich würde es gerne lesen, vielleicht steht ja etwas Interessantes im Tagebuch drin. ",
                T0005: "Nein, ich brauche nichts, danke.",
                T0006: "Okay, genug rumgelegen, schauen wir mal, was im Tagebuch steht.",
                T0007: "Wow, was Papa wohl alles durch machen musste.",
                T0008: "Es kann einfach nicht sein, dass die Polizei die Suche aufgegeben hat.",
                T0009: "Wenn es einen gibt, der so was überlebt, dann Papa.",
                T0010: "Nein, ich kann einfach nicht hier rumsitzen und nichts tun. Ich bin mir sicher Papa ist immer noch da unten und wenn das alles stimmt, was in diesem Buch steht, braucht Papa auf jeden Fall meine Hilfe.",
                T0011: "Alle haben Papa aufgegeben... ich nicht... ich werde ihn finden!",
                T0012: "Aber bevor ich in die Mine gehe, brauche ich noch etwas Ausrüstung, die wird mir bestimmt helfen.",
                T0013: "In der Garage sollte ich eigentlich alles finden, um gut vorbereitet sein.",
                T0014: "Nein, ich möchte nicht mit, kannst du mich jetzt alleine lassen.",
                T0015: "Nein, ich kann es einfach nicht wahrhaben, Papa hat nie aufgegeben... niemals.",
                T0016: "Wenn jemand so etwas überleben kann, dann Papa.",
                T0017: "Ich werde hier nicht herumsitzen und nichts tun, nicht nach solch einem Ereignis.",
                T0018: "Vielleicht hat Papa dafür gesorgt, dass das Loch entsteh, er wollte auf sich aufmerksam machen oder so."

            },
            maria: {
                T0001: "Kann ich hereinkommen, ich will mit dir reden.",
                T0002: "Bitte, ich möchte dir einen Vorschlag machen.",
                T0003: "Ben, ich weiß, du vermisst Papa sehr, aber wir haben alles versucht, was in unserer Macht steht, aber wir können die Situation nicht ändern. Hier, wenn du willst, kannst du das Tagebuch von Papa lesen, wenn es dir dabei hilft, Abschied zu nehmen, ansonsten würde ich es als Andenken zur Gedenkstelle auf dem Friedhof bringen?",
                T0004: "Schön, ich lege es dir hier auf den Nachttisch. ",
                T0005: "Dann lasse ich dich mal wieder alleine...",
                T0006: "Ach, bevor ich es vergesse, ich gehe gleich Einkaufen brauchst du noch irgendetwas aus dem Laden?",
                T0007: "Okay, wie du willst, es ist eigentlich sehr interessant zu lesen.",
                T0008: "Dann bringe ich das Buch zur Gedenkstelle, ich würde in einer viertel Stunde losgehen falls du mit möchtest.",
                T0009: "Gut, dann mache ich mich mal auf den Weg, bis später."
            }
        };
       
        await ƒS.Location.show(locations.kidRoom);
        await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
        await ƒS.Character.show(characters.ben, characters.ben.pose.sad, newPositions.bottomright);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.maria, text.maria.T0001);
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);
        await ƒS.Speech.tell(characters.maria, text.maria.T0002);
        await ƒS.Speech.tell(characters.ben, text.ben.T0002);
        await ƒS.Character.show(characters.maria, characters.maria.pose.neutral, newPositions.bottomleftMaria);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, text.ben.T0003);
        await ƒS.Speech.tell(characters.maria, text.maria.T0002);

        let choices = {
            read:  "Tagebuch lesen",
            noRead:   "Tagebuch nicht lesen"
          };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.read:
                console.log("Choice read book");
               
                await ƒS.Speech.tell(characters.ben, text.ben.T0004);
                await ƒS.Character.hide(characters.maria);
                await ƒS.update(0);
                await ƒS.Character.show(characters.maria, characters.maria.pose.pleased, newPositions.bottomleftMaria);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.maria, text.maria.T0004);
                await ƒS.Speech.tell(characters.maria, text.maria.T0005);
                await ƒS.Speech.tell(characters.maria, text.maria.T0006);
                await ƒS.Speech.tell(characters.ben, text.ben.T0005);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
                await ƒS.Character.hide(characters.maria);
                await ƒS.update(1);
                break;

            case choices.noRead:
                console.log("Choice dont read book");

                await ƒS.Speech.tell(characters.maria, text.maria.T0007);
                await ƒS.Speech.tell(characters.maria, text.maria.T0008);
                await ƒS.Speech.tell(characters.ben, text.ben.T0014);
                await ƒS.Speech.tell(characters.maria, text.maria.T0009);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
                await ƒS.Character.hide(characters.maria);
                await ƒS.update(1);

                await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
                await ƒS.Character.hide(characters.ben);
                await ƒS.update(0);
                await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.ben, text.ben.T0015);
                await ƒS.Speech.tell(characters.ben, text.ben.T0016);
                await ƒS.Speech.tell(characters.ben, text.ben.T0017);
                await ƒS.Speech.tell(characters.ben, text.ben.T0018);

                await ƒS.Speech.tell(characters.ben, text.ben.T0011);
                await ƒS.Speech.tell(characters.ben, text.ben.T0012);
                await ƒS.Speech.tell(characters.ben, text.ben.T0013);
                break;
        }
        await ƒS.Character.hideAll(); 
      }
}