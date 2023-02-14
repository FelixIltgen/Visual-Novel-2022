
namespace myNovel {
    export async function afterMazeGood(): ƒS.SceneReturn {
        console.log("Start Prolog");


        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.chapterSix);
        await ƒS.update(3);
        await ƒS.Location.show(locations.caveTwo);
        await ƒS.update(3);
        await ƒS.Speech.show();
        await ƒS.update();
        await ƒS.Location.show(locations.cave);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, "Was zum.....????");
        await ƒS.Character.show(characters.trabajo_escribo, characters.trabajo_escribo.pose.normal, newPositions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.trabajo_escribo, "JUNGSS wir haben das Ding, endlich haben wir es....");
        await ƒS.Speech.tell(characters.ben, "Was ist den hier los....");
        await ƒS.Speech.tell(characters.trabajo_escribo, "Uhhh wer bist du den kleiner...");
        await ƒS.Speech.tell(characters.ben, "Ja wer seid du... was machst du hier. ");
        await ƒS.Speech.tell(characters.trabajo_escribo, "Ich bin Kapitän Trabajo Escribo ich suche schon Ewigkeiten nach diesem Ding hier, es ist auf unserem Planeten ausgebrochen und hat es sich wohl hier auf diesem Planeten gemütlich gemacht.");
        await ƒS.Speech.tell(characters.ben, "Moment andere Planet was zum Teufel...?");
        await ƒS.Speech.tell(characters.trabajo_escribo, "JA, ich und meine Crew sind Weltraum Piraten...");
        await ƒS.Speech.tell(characters.ben, "Jetzt bin ich verwirrt...");
        await ƒS.Speech.tell(characters.trabajo_escribo, "Ja das sind die meisten die uns das erste Mal sehen. Und was machst du in diesen Höhlen. ");
        await ƒS.Speech.tell(characters.ben, "Ich suche meinen Vater der ist seit ein paar Tagen vermisst und ich glaube er ist hier irgendwo...");
        await ƒS.Speech.tell(characters.trabajo_escribo, "AHH verstehe ich kann dir womöglich bei deiner Suche helfen komm mit. ");
        await ƒS.Speech.tell(characters.ben, "Okay??");

        await ƒS.Character.hideAll();
        await ƒS.Location.show(locations.spaceship);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Character.show(characters.trabajo_escribo, characters.trabajo_escribo.pose.normal, newPositions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.trabajo_escribo, "Willkommen auf der HMV Absturz, das ist unser gutes Schiff, wir sind leider bei unserer Landung abgestürzt und hier unten gelandet...");
        await ƒS.Speech.tell(characters.ben, "Dann habe ich wohl doch nicht geträumt...");
        await ƒS.Character.show(characters.valentin, characters.valentin.pose.normal, newPositions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.valentin, "BEEENNN?!?!?!!");
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, "PAPA????....Ohh mein Gottt du lebst noch.....");
        await ƒS.Speech.tell(characters.valentin, "Ja....ich habe Hilfe von den Piraten bekommen ohne sie hätte ich es nicht geschafft. Was machst du hier?");
        await ƒS.Speech.tell(characters.ben, "Ich habe angefangen dich zu suchen weil alle aufgegeben haben. ");
        await ƒS.Speech.tell(characters.valentin, "Wow, das war mutig von dir... aber deine Maria macht sich bestimmt große Sorgen...");
        await ƒS.Speech.tell(characters.ben, "Ja vielleicht aber wir können ja jetzt nach Hause gehen ich weiß aber nicht wie wir hier Raus kommen.");
        await ƒS.Speech.tell(characters.trabajo_escribo, "HAHA das ist kein Problem wir können euch mit unserm Schiff mitnehmen");
        await ƒS.Speech.tell(characters.trabajo_escribo, "Aber wir müssen erst unseren Schatz wieder einsammeln den wir beim Absturz verloren haben.");
        await ƒS.Speech.tell(characters.ben, "Was habt ihr verloren? ");
        await ƒS.Speech.tell(characters.ben, "Eine menge Goldmünzen... wir haben sie schon gefunden aber noch nicht zum Schiff gebracht.");
        

        if () {
            await ƒS.Speech.tell(characters.ben, "Moment ich habe in einem Labyrinth Goldmünzen gefunden.");
            await ƒS.Speech.tell(characters.narrator, "Ben holt die beiden Säcke mit den Goldmünzen heraus.");
            await ƒS.Speech.tell(characters.trabajo_escribo, "WOW das ist das gesammelte Gold von uns ");
            await ƒS.Speech.tell(characters.ben, "Hier...");
            await ƒS.Speech.tell(characters.ben, "Dankeschön kleiner dann können wir aufbrechen... und euch zwei nehmen wir gleich mit.");
            await ƒS.Speech.tell(characters.ben, "Perfekt.");
           
        
        } else if () {
            await ƒS.Speech.tell(characters.ben, "Hier, ich habe diesen Beutel mit Goldmünzen gefunden gehört er euch.");
            await ƒS.Speech.tell(characters.trabajo_escribo, "Ja genau der ist von uns... aber wir haben noch einen den wir brauchen, ohne den können wir nicht los.");
            await ƒS.Speech.tell(characters.ben, "Wenn ihr wollt kann ich die letzten Goldmünzen für euch holen dann können wir schneller los.");
            await ƒS.Speech.tell(characters.trabajo_escribo, "Ja wenn du das willst, es wäre eine große Hilfe.");
            await ƒS.Speech.tell(characters.ben, "Okay dann mache ich das..");
            await ƒS.Speech.tell(characters.trabajo_escribo, "Okay also der letzte Beutel ist in dem Labyrinth. Hier ist die genauen Position dann musst du nicht suchen.");
            await ƒS.Speech.tell(characters.ben, "Danke ich bin gleich wieder da. ");
            
            await ƒS.Character.hideAll();
            await ƒS.Speech.hide();
            await ƒS.Location.show(locations.blanko);
            await ƒS.update(3);
            await ƒS.Location.show(locations.spaceship);
            await ƒS.update(3);
            await ƒS.Speech.show();
            await ƒS.update();
            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.ben, "Ich bin wieder da.");
            await ƒS.Character.show(characters.trabajo_escribo, characters.trabajo_escribo.pose.normal, newPositions.bottomleft);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.trabajo_escribo, "Hast du die Goldmünzen gefunden?");
            await ƒS.Speech.tell(characters.ben, "Ja habe alle gefunden...");
            await ƒS.Speech.tell(characters.trabajo_escribo, "Perfekt, danke für deine Hilfe du hast uns sehr viel Zeit gespart. ");
            await ƒS.Speech.tell(characters.ben, "Kein Problem");
            await ƒS.Speech.tell(characters.trabajo_escribo, "Dann können wir jetzt aufbrechen.");
            

        } else {
            await ƒS.Speech.tell(characters.ben, "Wenn ihr wollt kann ich die Goldmünzen für euch holen dann können wir schneller los.");
            await ƒS.Speech.tell(characters.trabajo_escribo, "Ja, wenn du das willst, es wäre eine große Hilfe.");
            await ƒS.Speech.tell(characters.ben, "Okay dann mache ich das..");
            await ƒS.Speech.tell(characters.trabajo_escribo, "Okay also wir haben zwei Beutel in einem Labyrinth liegen hier sind die genauen Positionen dann musst du nicht suchen.");
            await ƒS.Speech.tell(characters.ben, "Danke ich bin gleich wieder da. ");

            await ƒS.Character.hideAll();
            await ƒS.Speech.hide();
            await ƒS.Location.show(locations.blanko);
            await ƒS.update(3);
            await ƒS.Location.show(locations.spaceship);
            await ƒS.update(3);
            await ƒS.Speech.show();
            await ƒS.update();
            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.ben, "Ich bin wieder da.");
            await ƒS.Character.show(characters.trabajo_escribo, characters.trabajo_escribo.pose.normal, newPositions.bottomleft);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.trabajo_escribo, "Hast du die Goldmünzen gefunden?");
            await ƒS.Speech.tell(characters.ben, "Ja habe alle gefunden...");
            await ƒS.Speech.tell(characters.trabajo_escribo, "Perfekt, danke für deine Hilfe du hast uns sehr viel Zeit gespart. ");
            await ƒS.Speech.tell(characters.ben, "Kein Problem");
            await ƒS.Speech.tell(characters.trabajo_escribo, "Dann können wir jetzt aufbrechen.");
            
        }
    }
}