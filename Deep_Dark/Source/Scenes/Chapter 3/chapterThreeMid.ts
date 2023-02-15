
namespace myNovel {
    export async function chapterThreeMid(): ƒS.SceneReturn {
        console.log("Start Prolog");

        let text = {
            narrator: {
                T0001: "Ben ist auf dem Weg zur Mine und macht sich schon die ersten Gedanken, wie er vorgehen soll. Da fällt ihm auf einmal etwas ein."
            },
            ben: {
                T0001: "Hmm...vielleicht sollte ich doch noch das Tagebuch mitnehmen, vielleicht steht etwas Hilfreiches drin."
            }
        };
        await ƒS.Location.show(locations.chapterThree);
        await ƒS.update(2);
        await ƒS.Location.show(locations.street);
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);

        let choices = {
            takeBook: "Buch vom Friedhof holen",
            dontTakeBook: "Ohne Buch aufbrechen"
        };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.takeBook:
                console.log("Choice take book");
                await ƒS.Speech.tell(characters.ben, "Ich glaube, es ist besser, wenn ich das Tagebuch mit nehme, Mama hat ja auch gesagt, dass es sehr interessant sein soll.");
                await ƒS.Speech.tell(characters.ben, "Wenn Papa irgendwelche nützlichen Infos in das Tagebuch eingetragen hat, kann mir das sicher helfen.");
                await ƒS.Character.hide(characters.ben);
                await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.narrator, "Ben macht sich auf den weg zum Friedhof ");
                await ƒS.Speech.tell(characters.ben, "So, ich bin fast da, ich könnte die Abkürzung über die Mauer nehmen, dann bin ich schneller, wie wenn ich durch den normalen Eingang gehe.");

                let choicesWall = {
                    overWall: "Über die Mauer klettern",
                    gate: "Durch das Eingangstor gehen"
                };

                let dialogueElement = await ƒS.Menu.getInput(choicesWall, "choicesCSSClass");

                switch (dialogueElement) {
                    case choicesWall.gate:
                        console.log("Choice take book");
                        await ƒS.Speech.tell(characters.ben, "Ne, ich klettere lieber nicht über die Mauer, ich will kein Risiko eingehen. Nicht, dass ich mir etwas breche, weil ich von der Mauer falle.");
                        await ƒS.Speech.tell(characters.ben, "Auf die zwei Minuten länger kommt es auch nicht drauf an.");
                        await ƒS.Speech.tell(characters.narrator, "Ben geht in den Friedhof");
                        await ƒS.Speech.tell(characters.ben, "Okay, auf zur Gedenkstätte. Da drüben ist sie ja schon.");
                        await ƒS.Speech.tell(characters.ben, "So wo hat Mama das Tagebuch hingelegt, es sollte hier ja irgendwo liegen.");
                        await ƒS.Speech.tell(characters.ben, "Ah, da ist es, Mama hat es sogar richtig schön dekoriert mit den Blumen.");
                        await ƒS.Speech.tell(characters.narrator, "Ben nimmt das Buch. ");

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
                        ƒS.Inventory.add(items.tagebuch);

                        ƒS.Inventory.open();

                        await ƒS.Speech.tell(characters.ben, "So, jetzt sollte ich alles Wichtige haben.");
                        await ƒS.Speech.tell(characters.narrator, "Ben packt das Tagebuch in den Rucksack und macht sich auf den Weg. ");

                        await ƒS.Character.hideAll();
                        return "chapterFour";

                    case choicesWall.overWall:
                        console.log("Choice dontTakeBook");
                        if (ƒS.Inventory.getAmount(items.wanderschuhe) == 1) {
                            await ƒS.Speech.tell(characters.ben, "Okay, los geht's dann kann ich ein bisschen Zeit sparen.");
                            await ƒS.Speech.tell(characters.narrator, "Ben klettert über die Mauer.");
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
                            await ƒS.update(0);
                            await ƒS.Speech.tell(characters.ben, "Wooow ganz schön hoch. Zum Glück habe ich meine Wanderschuhe mitgenommen, ohne wäre ich sicher abgerutscht.");
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.confident, newPositions.bottomright);
                            await ƒS.update(0);
                            await ƒS.Speech.tell(characters.ben, "Jetzt muss ich nur wieder runter klettern sollte kein Problem sein.");
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                            await ƒS.update(0);

                            await ƒS.Speech.tell(characters.ben, "Okay, auf zur Gedenkstätte. Da drüben ist sie ja schon.");
                            await ƒS.Speech.tell(characters.ben, "So wo hat Mama das Tagebuch hingelegt, es sollte hier ja irgendwo liegen.");
                            await ƒS.Speech.tell(characters.ben, "Ah, da ist es, Mama hat es sogar richtig schön dekoriert mit den Blumen.");
                            await ƒS.Speech.tell(characters.narrator, "Ben nimmt das Buch. ");

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
                            ƒS.Inventory.add(items.tagebuch);
                            ƒS.Inventory.open();

                            await ƒS.Speech.tell(characters.ben, "So, jetzt sollte ich alles Wichtige haben.");
                            await ƒS.Speech.tell(characters.narrator, "Ben packt das Tagebuch in den Rucksack und macht sich auf den Weg. ");

                            await ƒS.Character.hideAll();
                            return "chapterFour";

                        } else {
                            await ƒS.Character.hideAll();
                            return "chapterThreeBad";
                        }
                }
            case choices.dontTakeBook:
                console.log("Choice dontTakeBook");
                await ƒS.Character.hide(characters.ben);
                await ƒS.Character.show(characters.ben, characters.ben.pose.moreConfident, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.ben, "Ahh was soll schon Wichtiges in dem Tagebuch stehen, ohne das Buch wird es schon funktionieren und außerdem liegt der Friedhof eh nicht auf dem Weg.");
                await ƒS.Character.hideAll();
                return "chapterFour";
        }
    }
}