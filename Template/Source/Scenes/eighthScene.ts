
namespace myNovel {
    export async function eighthScene(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        let text = {
            narrator: {
                T0001: "Ben macht sich für die Schule fertig und geht ins Wohnzimmer, wo er seine sehr aufgebrachte Mutter findet.",
                T0002: "Maria zeigt aufgeregt auf den Fernseher.",
                T0003: "Ben macht den Fernseher lauter und hört dem Kommentator zu....",
                T0004: "Großes Loch im Berg von Herbolzheim vermutlich ist ein Stollen eingestürzt. Die Ermittler vermuten einen Stollen Einbruch. Derzeit ist es noch unklar, ob Arbeiter verschüttet worden sind. Die Polizei und die Bergbaufirmen abreiten eng zusammen, um den Umfang des Unglücks zu untersuchen. Derzeit besteht rund um das Loch hohe Einsturzgefahr, das Betreten des Geländes ist strengstens untersagt.",
                T0005: "Maria fährt Ben zur Schule."
            },
            ben: {
                T0001: "Wow, es ist schon fast viel zu spät, ich sollte mich für die Schule fertigmachen, mal schauen, ob Mama schon wach ist.",
                T0002: "Was ist passiert...??",
                T0003: "Was ist zusammengebrochen, was ist passiert?",
                T0004: "Wie, Wo, Was... zeig her...",
                T0005: "Ich muss los und schauen, ob es Papa gut geht!!!!"
            },
            maria: {
                T0001: "Er ist zusammengebrochen...",
                T0002: "Der Schacht... der Schacht, wo Papa...",
                T0003: "NEIN... du gehst da nicht hin, das ist gefährlich … versprich mir, dass du da nicht hingehst.",
                T0004: "Außerdem musst du zur Schule. Los, mach dich fertig, ich fahre dich ausnahmsweise hin und schaue danach, was da los ist."
            }
        };
        
        //wecker sound
        await ƒS.Location.show(locations.chapterTwo);
        await ƒS.update(2);
        await ƒS.Location.show(locations.kidRoom);
        await ƒS.update(3);
        //musik sound

        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);

        await ƒS.Character.hideAll();
        await ƒS.Speech.clear();

        await ƒS.Location.show(locations.livingRoom);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Character.show(characters.maria, characters.maria.pose.verySad, newPositions.bottomleftMaria);
        await ƒS.update();
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, text.ben.T0002);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        await ƒS.Speech.tell(characters.maria, text.maria.T0001);
        await ƒS.Speech.tell(characters.ben, text.ben.T0003);
        await ƒS.Speech.tell(characters.maria, text.maria.T0002);
        await ƒS.Speech.tell(characters.ben, text.ben.T0004);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
        await ƒS.Character.hide(characters.ben);
        await ƒS.update();
        await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, text.ben.T0005);

        await ƒS.Character.hide(characters.maria);
        await ƒS.update();
        await ƒS.Character.show(characters.maria, characters.maria.pose.angry, newPositions.bottomleftMaria);
        await ƒS.update();
        await ƒS.Speech.tell(characters.maria, text.maria.T0003);
        await ƒS.Speech.tell(characters.maria, text.maria.T0004);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
        await ƒS.Character.hideAll(); 
      }
}