
namespace myNovel {
    export async function chapterFiveBad(): ƒS.SceneReturn {
        console.log("Chapter five bad");

        await ƒS.Location.show(locations.mineShaft);
        await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, "Ach, hier wird es schon richtig sein, hoffentlich verlaufe ich mich nicht.");
        await ƒS.Speech.tell(characters.narrator, "Ben entscheidet sich für den weg nach rechts.");
        await ƒS.Speech.tell(characters.ben, "Okay mal schauen was ich hier so finde.");
        await ƒS.Speech.tell(characters.narrator, "Ben folgt dem langen geraden Stollen.");
        await ƒS.Sound.play(sound.fallingRocks, 0.4, false);
        await ƒS.Speech.tell(characters.ben, "Oh nein, der Stollen bricht ein. Schnell weg...");
        await ƒS.Speech.tell(characters.ben, "Hust.... hust....");
        await ƒS.Speech.tell(characters.ben, "Woah das war knapp...");
        await ƒS.Speech.tell(characters.narrator, "Ben schaut nach hinten, hinter ihm ist der gesamte Stollen eingebrochen und der Gang ist verschüttet. ");
        await ƒS.Speech.tell(characters.ben, "Tja, hier komme ich wohl nicht mehr zurück. Dann weiter gerade aus.");

        await ƒS.Speech.tell(characters.narrator, "Nach einer Weile kommt Ben zu einer Hängebrücke.");
        await ƒS.Speech.tell(characters.ben, "Wow die sieht nicht gerade stabil aus, wie tief es wohl da Runter geht...");
        await ƒS.Speech.tell(characters.narrator, "Ben nimmt ein Stein und wirft ihn in die Tiefe.");
        await ƒS.Speech.tell(characters.ben, " 1...2...3... wieso höre ich kein Aufschlag? Naja muss wohl sehr Tief sein");
        await ƒS.Speech.tell(characters.ben, "Okay, was mach ich jetzt mir bleibt nichts anderes übrig, als über die Brücke zu gehen.");

        if (ƒS.Inventory.getAmount(items.seil) == 1) {
            await ƒS.Speech.tell(characters.ben, "Ich kann mich zumindest mit dem Seil absichern, dann stürze ich nicht sofort ab.");
            await ƒS.Speech.tell(characters.narrator, "Ben macht eine Sicherung, damit er sicher über die Brücke gehen kann.");
            await ƒS.Speech.tell(characters.ben, "Woah das ist so wacklig und unsicher, hoffentlich halten die Holzbalken.");
            await ƒS.Sound.play(sound.creakingWood, 0.4, false);
            await ƒS.Speech.tell(characters.ben, "Ohhh das war keine so gute Idee....");
            await ƒS.Sound.play(sound.breakingWood, 0.4, false);
            await ƒS.Speech.tell(characters.ben, "Woah scheiße, die Brücke bricht durch....");
            await ƒS.Speech.tell(characters.narrator, "Die Balken der Brücke haben das Gewicht von Ben nicht ausgehalten und sind durchgebrochen, aber die Sicherung von ihm hält und er stürzt nicht in die Tiefe.");
            await ƒS.Speech.tell(characters.ben, "Ja, zum Glück habe ich das Seil, sonst hätte ich jetzt ein Problem");
            await ƒS.Speech.tell(characters.narrator, "Ben klettert wieder zurück auf die Brücke.");
            await ƒS.Speech.tell(characters.ben, "So, es kann weiter gehen, hoffentlich ohne zwischen Fälle ...");
            await ƒS.Speech.tell(characters.ben, "So geschafft das war aber eigentlich auch wieder genug Adrenalin für die nächsten zehn Wochen.");
            await ƒS.Speech.tell(characters.ben, "So weiter gehts, hoffentlich finde ich irgendwie einen anderen Weg hier raus, ich will nicht noch mal über diese Brücke.");
            await ƒS.Speech.tell(characters.ben, "Sind das Laternen an der Wand?");
            await ƒS.Speech.tell(characters.ben, "Ja... da sind sogar richtig viele... ");

            if (ƒS.Inventory.getAmount(items.feuerzeug) == 1) {
                await ƒS.Speech.tell(characters.ben, "Ich habe doch das Feuerzeug eingepackt, damit kann ich die Fackeln anzünden und meine Taschenlampe etwas schonen.");
                await ƒS.Speech.tell(characters.narrator, "Ben nimmt sein Feuerzeug aus dem Rucksack und zündet die Fackeln an, die er auf dem weiteren Weg findet an.");
                await ƒS.Speech.tell(characters.ben, "Die Fackeln sind echt eine gute Hilfe und als Orientierung helfen sich auch. ");
        
            } else {
                await ƒS.Speech.tell(characters.ben, "Schade hätte ich jetzt ein Feuerzeug, dabei könnte ich die Fackeln anzünden, dann verbrauche ich nicht so viel von meiner Taschenlampe.");
                await ƒS.Speech.tell(characters.narrator, "Ben geht mit seiner Taschenlampe weiter und folgt den Fackeln an der Wand. ");
                
            }
            
        } else {
            return "gameOverChapterFiveTwo"; //Game over Five
        }

        await ƒS.Speech.tell(characters.ben, "Komisch hier hört der Stollen auf.");
        await ƒS.Speech.tell(characters.narrator, "Ben schaut sich um und findet etwas versteckt eine Luke.");
        await ƒS.Speech.tell(characters.ben, "Hmm... wo die wohl hinführt? Ich schau mal nach, alles ist besser wie wieder auf diese Brücke zu gehen.");
        await ƒS.Speech.tell(characters.ben, "Boah, die geht ja richtig schwer auf...");
        await ƒS.Sound.play(sound.creakingWood, 0.4, false);
        await ƒS.Speech.tell(characters.ben, "Hm... ein Schacht mit einer Leiter sieht eng aus...");
        await ƒS.Speech.tell(characters.ben, "Egal runter da..");
        await ƒS.Location.show(locations.caveTwo);
        await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
        await ƒS.Speech.tell(characters.narrator, "Ben geht die Leiter herunter und steht auf einmal vor einem Fluss. ");
        await ƒS.Speech.tell(characters.ben, "Wow okay das muss wohl das Rauschen gewesen sein wo ich die ganze Zeit gehört habe.");
        await ƒS.Speech.tell(characters.narrator, "Ben trinkt aus dem Fluss.");
        await ƒS.Speech.tell(characters.ben, "Perfekt, das habe ich jetzt echt gebraucht. ");
        await ƒS.Sound.play(sound.demonicScream, 0.4, false);
        await ƒS.Speech.tell(characters.ben, "Was war das??");
       
    }
}