
namespace myNovel {
    export async function goodPathTwo(): ƒS.SceneReturn {
        console.log("Start Prolog");


        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.chapterSix);
        await ƒS.update(3);
        await ƒS.Location.show(locations.caveTwo);
        await ƒS.update(3);
        await ƒS.Speech.show();
        await ƒS.update();
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update();

        await ƒS.Speech.tell(characters.ben, "Wow hatte Papa echt recht mit dem Monster aus dem Tagebuch. Ich habe echt gedacht, dass er halluziniert, aber vielleicht liegt es auch an mir.");
        await ƒS.Speech.tell(characters.ben, "Ben folgt dem Flussverlauf.");
        await ƒS.Sound.play(sound.monsterScream, 0.5, false);
        await ƒS.Speech.tell(characters.ben, "Was war das schon wieder....");
        await ƒS.Sound.play(sound.monsterScream2, 0.2, false);
        await ƒS.Sound.fade(sound.emptyCave, 0, 1, true);
        await ƒS.Sound.fade(sound.run, 0.4, 1, true);
        await ƒS.Speech.tell(characters.ben, "Oh mein Gott, Papa hatte einfach Recht. Ich wusste ihm kann man immer vertrauen.");
        await ƒS.Speech.tell(characters.ben, "Ben hört wie dumpfe Schritte auf ihn zu kommen. ");
        await ƒS.Speech.tell(characters.ben, "Oh nein, das ist die gleiche Situation, wie Papa im Tagebuch beschrieben hat... was soll ich tun?");

        let choice = {
            hide: "Verstecken",
            run: "Weg rennen"
        };

        let dialogueElement = await ƒS.Menu.getInput(choice, "choicesCSSClass");

        switch (dialogueElement) {
            case choice.hide:
                console.log("Choice hide");

                await ƒS.Speech.tell(characters.ben, "Okay, ich muss mich irgendwo verstecken, aber nur wo...");
                await ƒS.Speech.tell(characters.narrator, "Ben beginnt Panik zu bekommen.");
                await ƒS.Speech.tell(characters.ben, "Ohh neeinn, ich finde kein versteck...vielleicht da drüben.");
                await ƒS.Speech.tell(characters.narrator, "Ben folgt weiter dem Flussverlauf in der Hoffnung, einen guten Platz zu finden, wo er sich verstecken kann.");
                await ƒS.Speech.tell(characters.ben, "Da ist ein Ruderboot, wenn ich es umdrehe, kann ich mich darunter verstecken.");
                await ƒS.Speech.tell(characters.narrator, "Ben dreht leise das schwere Boot um und versteckt sich darunter. Er hört, wie die Fußstapfen direkt neben dem Boot stehen bleiben");
                await ƒS.Sound.play(sound.monsterScream2, 0.3, false);
                await ƒS.Speech.tell(characters.narrator, "Das unbekannte Ding kommt näher Ben hält sich die Hände vor das Gesicht, damit sein Atem ihn nicht verrät.");
                await ƒS.Speech.tell(characters.ben, "Bitte bitte nicht.....");
                await ƒS.Sound.play(sound.monsterScream, 0.3, false);
                await ƒS.Sound.fade(sound.run, 0, 1, true);
                await ƒS.Sound.fade(sound.emptyCave, 0.4, 1, true);
                await ƒS.Speech.tell(characters.ben, "Ich glaub es geht weg...");
                await ƒS.Speech.tell(characters.ben, "Ja, die Schritte werden leiser... ein Glück... wo bin ich hier rein geraten. Ben klettert unter dem Boot hervor und steht auf okay es kann weiter gehen.");
                await ƒS.Speech.tell(characters.narrator, "Ben folgt weiter dem Flussverlauf, plötzlich fällt ihm etwas auf.");
                await ƒS.Speech.tell(characters.ben, "Moment mal die Wände... die Wände haben eine komplett komische Form.");
                await ƒS.Speech.tell(characters.ben, "Ben kommt auf ein mal ein Geistesblitz...");
                await ƒS.Speech.tell(characters.ben, "Moment Papa hatte doch davon im Tagebuch geschrieben...");

                ƒS.Speech.hide();

                //Novel Page
                ƒS.Text.addClass("novelPageDiary");
                await ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Erster Eintrag:</b> <br> <br> Heute müssen ich und Andrea den neuen Stollen sprengen ich bin mir sehr unsicher ob es eine Gute Idee ist.<br> \
                            <br> <b>Zweiter Eintrag: </b> <br> <br> Habe noch mal Rücksprache mit der Minenleitung gehalten. Die wollen echt, dass ich diesen Tunnel sprenge... <br> \
                            <br> <b>Dritter Eintrag:</b> <br> <br> Ich fahre jetzt mit Andrea an die Stelle für die Sprengung und bereite alles vor.</div>  \
                            <div class=rightPage> <b>Vierter Eintrag:</b> <br> <br> Die Sprengung hat gut funktioniert, hoffentlich passiert nichts.  \
                            <br><br><br><b>Stützbalken</b> <br><br><br> Haben vor ein paar Wochen die Nummern an den Stützbalken erneuert. In B37 sind die Gänge voller Wasser, \
                            ab jetzt sollte man unbedingt Stollen A38</div> </div>");

                await ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Fünfter Eintrag:</b> <br> <br> Ich habe den Einsturz überlebt, wie durch ein Wunder bin ich nicht \
                            verletzt. Was auch immer mich verfolgt hat es ist weg, vielleicht auch tot? <br> \
                            <br> <b>Sechster Eintrag: </b><br><br> Ich hatte Glück, habe eine alte Taschenlampe gefunden, die noch funktioniert, nun kann ich etwas \
                             besser sehen, wo ich entlang gehe. Das sind definitiv keine Stollen, es muss eine Höhle oder etwas Ähnlicheres sein. <br> \
                            <br> <b>Siebter Eintrag:</b> <br> <br> Ich habe einen Rucksack mit Konserven gefunden, wie kam der nur hier her? Das kann kein Zufall sein. Egal, Hauptsache, ich habe etwas zu essen.</div>  \
                            <div class=rightPage> <b>Achter Eintrag:</b> <br> <br> Ich habe die Suche nach Andrea aufgegeben, ich kann ihn nirgendwo finden, wahrscheinlich hat sie es nicht geschafft. Was ist das nur gewesen?<br> \
                            <br><b>Neunter Eintrag:</b><br><br> Ich habe in einem Haufen aus Schutt Batterien gefunden, damit hält meine Taschenlampe etwas länger, wie sind die Batterien hier gelandet?<br> \
                            <br><b>Zehnter Eintrag:</b><br><br> Diese Gänge sind etwas irreführend, kommt mir vor wie in einem Labyrinth, wenn ich hier durch komme, sollte ich mir den richtigen Weg aufschreiben. </div></div>");

                await ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>WICHTIG UNBEDINGT MERKEN</b> <br><br> Habe eine Art Labyrinth gefunden.\
            Habe ewigkeiten gebaraucht bis ich den richtigen Weg gefunden habe. Die Markierunngen werden auf jeden Fall helfen. <br>⇽ 🠕 ⇾ 🠕 = ✧ <br><br>Die Nummer für den Mineneingang \
            ich kann sie mir einfach nicht merken. Jetzt werde ich sie bestimmt nicht vergessen.<br><br> 5536 </div>  \
                            <div class=rightPage></div></div>");

                ƒS.Speech.show();

                await ƒS.Speech.tell(characters.ben, "Genau ich muss durch das Labyrinth und Papa hat den richtigen weg ins Tagebuch eingetragen. Okay dann legen wir mal los wo gehe ich entlang.");

                let choicesTwo = {
                    left: "Nach links gehen",
                    right: "Nach rechts gehen"
                };

                let dialogueElementTwo = await ƒS.Menu.getInput(choicesTwo, "choicesCSSClass");

                switch (dialogueElementTwo) {
                    case choicesTwo.left:
                        console.log("Choice left");
                        await ƒS.Character.hideAll();
                        return "GOODMazeLeft"; //Left Maze

                    case choicesTwo.right:
                        console.log("Choice right");
                        await ƒS.Character.hideAll();
                        return "GOODMazeRight"; //right Maze           
                }

            case choice.run:
                console.log("Choice run");
                await ƒS.Speech.tell(characters.ben, "Bloß weg hier");
                await ƒS.Speech.tell(characters.narrator, "Ben versucht dem Unbekannten etwas zu entkommen und rennt los.");
                await ƒS.Sound.play(sound.demonicScream, 0.4, false);
                await ƒS.Speech.tell(characters.ben, "Scheiße, es hat mich gehört...");
                await ƒS.Speech.tell(characters.narrator, "Ben merkt, wie die dumpfen Schritte näher kommen und lauter werden.");
                await ƒS.Speech.tell(characters.ben, "Nein, nein, es kommt näher, ich muss irgendwas machen....");
                await ƒS.Speech.tell(characters.ben, "Ich muss mich irgendwie verstecken, aber nur wo.");
                await ƒS.Speech.tell(characters.narrator, "Ben rennt verzweifelt weiter.");
                await ƒS.Speech.tell(characters.ben, "Da vorne ist eine Abbiegung schnell, vielleicht komme ich so aus der Sichtweite.");
                await ƒS.Speech.tell(characters.narrator, "Ben folgt der Abbiegung und danach direkt noch eine in einer dunklen Ecke findet er eine kleine Nische, wo er sich rein quetscht und versteckt.");
                await ƒS.Speech.tell(characters.ben, "Hoffentlich findet mich das Ding hier nicht...");
                await ƒS.Sound.play(sound.monsterScream, 0.3, false);
                await ƒS.Speech.tell(characters.narrator, "Das unbekannte Ding kommt näher Ben hält sich die Hände vor das Gesicht, damit sein Atem ihn nicht verrät.");
                await ƒS.Speech.tell(characters.ben, "Bitt bitte nicht.....");
                await ƒS.Sound.play(sound.monsterScream2, 0.3, false);
                await ƒS.Sound.fade(sound.run, 0, 1, true);
                await ƒS.Sound.fade(sound.emptyCave, 0.4, 1, true);
                await ƒS.Speech.tell(characters.ben, "Ich glaube, es geht weg...");
                await ƒS.Speech.tell(characters.ben, "Ja die Schritte werden leiser... ein Glück... wo bin ich hier rein geraten. ");
                await ƒS.Speech.tell(characters.ben, "Ben rafft sich wieder auf und versucht sich zu orientieren.");

                await ƒS.Location.show(locations.maze);
                await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);

                await ƒS.Speech.tell(characters.ben, "Moment mal die Wände... die Wände sehen richtig seltsam aus.");
                await ƒS.Speech.tell(characters.ben, "Ben kommt auf ein Mal ein Geistesblitz...");
                await ƒS.Speech.tell(characters.ben, "Moment Papa hatte doch davon im Tagebuch geschrieben...");

                ƒS.Speech.hide();

                //Novel Page
                ƒS.Text.addClass("novelPageDiary");
                await ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Erster Eintrag:</b> <br> <br> Heute müssen ich und Andrea den neuen Stollen sprengen ich bin mir sehr unsicher ob es eine Gute Idee ist.<br> \
                            <br> <b>Zweiter Eintrag: </b> <br> <br> Habe noch mal Rücksprache mit der Minenleitung gehalten. Die wollen echt, dass ich diesen Tunnel sprenge... <br> \
                            <br> <b>Dritter Eintrag:</b> <br> <br> Ich fahre jetzt mit Andrea an die Stelle für die Sprengung und bereite alles vor.</div>  \
                            <div class=rightPage> <b>Vierter Eintrag:</b> <br> <br> Die Sprengung hat gut funktioniert, hoffentlich passiert nichts.  \
                            <br><br><br><b>Stützbalken</b> <br><br><br> Haben vor ein paar Wochen die Nummern an den Stützbalken erneuert. In B37 sind die Gänge voller Wasser, \
                            ab jetzt sollte man unbedingt Stollen A38</div> </div>");

                await ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Fünfter Eintrag:</b> <br> <br> Ich habe den Einsturz überlebt, wie durch ein Wunder bin ich nicht \
                            verletzt. Was auch immer mich verfolgt hat es ist weg, vielleicht auch tot? <br> \
                            <br> <b>Sechster Eintrag: </b><br><br> Ich hatte Glück, habe eine alte Taschenlampe gefunden, die noch funktioniert, nun kann ich etwas \
                             besser sehen, wo ich entlang gehe. Das sind definitiv keine Stollen, es muss eine Höhle oder etwas Ähnlicheres sein. <br> \
                            <br> <b>Siebter Eintrag:</b> <br> <br> Ich habe einen Rucksack mit Konserven gefunden, wie kam der nur hier her? Das kann kein Zufall sein. Egal, Hauptsache, ich habe etwas zu essen.</div>  \
                            <div class=rightPage> <b>Achter Eintrag:</b> <br> <br> Ich habe die Suche nach Andrea aufgegeben, ich kann ihn nirgendwo finden, wahrscheinlich hat sie es nicht geschafft. Was ist das nur gewesen?<br> \
                            <br><b>Neunter Eintrag:</b><br><br> Ich habe in einem Haufen aus Schutt Batterien gefunden, damit hält meine Taschenlampe etwas länger, wie sind die Batterien hier gelandet?<br> \
                            <br><b>Zehnter Eintrag:</b><br><br> Diese Gänge sind etwas irreführend, kommt mir vor wie in einem Labyrinth, wenn ich hier durch komme, sollte ich mir den richtigen Weg aufschreiben. </div></div>");

                await ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>WICHTIG UNBEDINGT MERKEN</b> <br><br> Habe eine Art Labyrinth gefunden.\
            Habe ewigkeiten gebaraucht bis ich den richtigen Weg gefunden habe. Die Markierunngen werden auf jeden Fall helfen. <br>⇽ 🠕 ⇾ 🠕 = ✧ <br><br>Die Nummer für den Mineneingang \
            ich kann sie mir einfach nicht merken. Jetzt werde ich sie bestimmt nicht vergessen.<br><br> 5536 </div>  \
                            <div class=rightPage></div></div>");

                ƒS.Speech.show();

                await ƒS.Speech.tell(characters.ben, "Ja, genau, ich bin mitten in einem Labyrinth Papa hat den richtigen Weg im Tagebuch reingeschrieben. Aber ich bin ja schon mitten drin... ich muss wieder zum Anfang...");
                await ƒS.Speech.tell(characters.narrator, "Ben geht das kleine Stück im Labyrinth zurück, was er in der Verfolgung unbewusst genommen hat.");
                await ƒS.Speech.tell(characters.ben, "So hier müsste es losgehen, ja hier beginnt das Gestein so seltsame Formen zu haben... dann los.");
                await ƒS.Speech.tell(characters.narrator, "Ben geht in das Labyrinth und kommt an die erste Kreuzung.");

                let choices = {
                    left: "Nach links gehen",
                    right: "Nach rechts gehen"
                };

                let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

                switch (dialogueElement) {
                    case choices.left:
                        console.log("Choice left");
                        await ƒS.Character.hideAll();
                        return "GOODMazeLeft"; //Left Maze

                    case choices.right:
                        console.log("Choice right");
                        await ƒS.Character.hideAll();
                        return "GOODMazeRight"; //right Maze           
                }
        }
    }
}