
namespace myNovel {
    export async function mediumPathOne(): ƒS.SceneReturn {
        console.log("medium Path");

        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.chapterSix);
        await ƒS.update(3);
        await ƒS.Location.show(locations.caveTwo);
        await ƒS.update(3);
        await ƒS.Speech.show();
        await ƒS.update();

        if (ƒS.Inventory.getAmount(items.tagebuch) == 1) {
            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Wow hatte Papa echt recht mit dem Monster aus dem Tagebuch. Ich habe echt gedacht, dass er halluziniert, aber vielleicht liegt es auch an mir.");
            await ƒS.Speech.tell(characters.narrator, "Ben folgt dem Fluss verlauf.");
            //Monster geräusche
            await ƒS.Speech.tell(characters.ben, "Was war das schon wieder....");
            //Lauter schrei
            await ƒS.Speech.tell(characters.ben, "Oh mein Gott Papa hatte einfach Recht ich wusste ihm kann man immer vertrauen. ");
            await ƒS.Speech.tell(characters.ben, "Ahh es kommt immer näher.");
            await ƒS.Speech.tell(characters.ben, "Ich höre es hinter mir....");
            await ƒS.Speech.tell(characters.ben, "Bloß weg hier ");
            await ƒS.Speech.tell(characters.ben, "Ben versucht dem unbekannten etwas zu entkommen und rennt los");

        } else {
            await ƒS.Speech.tell(characters.ben, "Als ob hier unten echt Tiere leben, die so laut sind. Hoffentlich ist es kein Bär oder so. Ich glaube, es ist besser, wenn ich jetzt etwas Leiser bin.");
            await ƒS.Speech.tell(characters.narrator, "Ben folgt dem Fluss verlauf. ");
            //Lautes Geräusch
            await ƒS.Speech.tell(characters.ben, "Was war das schon wieder....");
            //Schrei
            await ƒS.Speech.tell(characters.ben, "Oh mein Gott was ist das für ein Ding");
            await ƒS.Speech.tell(characters.ben, "Ahh es kommt immer näher.");
            await ƒS.Speech.tell(characters.ben, "Ich höre es hinter mir....");
            await ƒS.Speech.tell(characters.ben, "Bloß weg hier ");
            await ƒS.Speech.tell(characters.narrator, "Ben versucht dem unbekannten etwas zu entkommen und rennt los.");
        }

        await ƒS.Speech.tell(characters.ben, "Was mach ich jetzt... ich muss diesem Ding irgendwie entkommen, aber wie nur...");
        await ƒS.Speech.tell(characters.ben, "Ahhh... es kommt immer näher...");
        await ƒS.Speech.tell(characters.narrator, "Ben rennt immer weiter und folgt dem Fluss. Da kommt ihm plötzlich eine Idee.");
        await ƒS.Speech.tell(characters.ben, "Vielleicht kann ich es ablenken, indem ich mein Rucksack wegwerfe... ein Versuch ist es wert.");
        await ƒS.Speech.tell(characters.narrator, "Ben zieht im lauf seinen Rucksack aus und wirft ihn zur Seite.");
        //Inventar weg
        await ƒS.Speech.tell(characters.ben, "Ja, es hat funktioniert, aber ich brauche immer noch ein Versteck, so lange wird der Rucksack das Ding nicht aufhalten.");
        await ƒS.Speech.tell(characters.narrator, "Ja, es hat funktioniert, aber ich brauche immer noch ein Versteck, so lange wird der Rucksack das Ding nicht aufhalten.");
        await ƒS.Speech.tell(characters.ben, "Da könnte ich mich verstecken");
        await ƒS.Speech.tell(characters.narrator, "Ben quetscht sich in die Felsspalte und versucht so leise wie möglich zu sein. ");
        //Schrei
        await ƒS.Speech.tell(characters.ben, "Es ist relativ weit Weg....");
        await ƒS.Speech.tell(characters.ben, "Ohhh ne, es kommt doch in meine Richtung.");
        await ƒS.Speech.tell(characters.narrator, "Ben merkt, wie die dumpfen Schritte immer näher kommen.");
        await ƒS.Speech.tell(characters.ben, "Hoffentlich sieht es mich nicht...");
        await ƒS.Speech.tell(characters.narrator, "Ben hält den Atem an... das unbekannte etwas ist ganz in der Nähe.");
        await ƒS.Speech.tell(characters.ben, "Ohhh ich glaube es entfernt sich wieder... ein Glück.");
        await ƒS.Speech.tell(characters.narrator, "Ben wartet noch etwas bevor er wieder aus seinem Versteck heraus kommt.");
        await ƒS.Speech.tell(characters.ben, "Okay, jetzt ist es, glaube ich wieder sicher.");
        await ƒS.Speech.tell(characters.narrator, "Ben klettert aus der Felsspalte.");
        await ƒS.Speech.tell(characters.ben, "Okay, das reicht jetzt endgültig, ich will hier raus, ich werde Papa wahrscheinlich nicht wieder finden und von diesem Unbekannten etwas will ich auch nicht gefressen werden. Aber wie komme ich hier raus... ist wohl besser, wenn ich einfach mal weiter gehe...");
        await ƒS.Speech.tell(characters.narrator, "Ben folgt weiter dem Flussverlauf, plötzlich fällt ihm etwas auf.");
        await ƒS.Speech.tell(characters.ben, "Moment mal die Wände... die Wände sehen komplett anders aus");

        if (ƒS.Inventory.getAmount(items.tagebuch) == 1) {
            await ƒS.Speech.tell(characters.ben, "Papa hatte doch davon im Tagebuch geschrieben ... wenn ich es jetzt nur dabei hätte, könnte ich noch mal nachschauen...");
            await ƒS.Speech.tell(characters.ben, "Es ging doch irgendwie um ein Labyrinth oder... ich kann mich nicht mehr richtig daran erinnern... egal mir bleibt nichts anderes übrig.");
            await ƒS.Speech.tell(characters.ben, "Ben folgt dem Weg weiter.");
            

        } else {
            await ƒS.Speech.tell(characters.ben, "Wie kann das den sein, muss wohl von dem unterschiedlichen Gestein kommen... sieht echt schön aus.");
            await ƒS.Speech.tell(characters.ben, "Naja egal hilft mir jetzt auch nicht weiter.");
            await ƒS.Speech.tell(characters.ben, "Ben folgt weiter dem Weg.");
            
        }

        await ƒS.Location.show(locations.maze);
        await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
        await ƒS.Character.hideAll();
        await ƒS.Speech.tell(characters.ben, "Okay hier ist eine Kreuzung wo soll ich entlang gehen?");
        
        let choices = {
            left: "Nach links gehen",
            right: "Nach rechts gehen"
        };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.left:
                console.log("Choice left");
                return "midMazeLeft"; //left path

            case choices.right:
                console.log("Choice right");
                return "midMazeRight"; //right path      
        }





    }
}