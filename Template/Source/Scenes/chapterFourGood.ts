
namespace myNovel {
    export async function chapterFourGood(): ƒS.SceneReturn {
        console.log("Chapter Four Good");
        
        
        await ƒS.Location.show(locations.mineEntrance);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, "Da ist der Eingang, war doch noch ein ganzes Stück bis hier hin.");
        await ƒS.Speech.tell(characters.ben, "So wie komme ich jetzt hier rein?");
        await ƒS.Speech.tell(characters.narrator, "Ben sucht einen Weg, um in das Bergwerk zu kommen.");
        await ƒS.Speech.tell(characters.ben, "Mal schauen, ob ich am Stolleneingang rein komme.");
        await ƒS.Speech.tell(characters.ben, "Schade ist abgeschlossen. Wie komme ich hier rein.");
        await ƒS.Speech.tell(characters.ben, "Moment im Taschenbuch von Papa stand doch eine Info.");

        if (ƒS.Inventory.getAmount(items.tagebuch) == 1) {
            await ƒS.Speech.tell(characters.ben, "Irgendwo hatte Papa einen Code ins Tagebuch eingetragen, vielleicht ist das der Code für das Schloss?");
            await ƒS.Speech.tell(characters.ben, "Aber wie ging er noch mal?");
            await ƒS.Speech.tell(characters.ben, "...ich schaue lieber nochmal nach.");

            ƒS.Speech.hide();
    
                //Novel Page
            ƒS.Text.addClass("novelPageDiary");
            await ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Erster Eintrag:</b> <br> <br> Heute müssen ich und Andrea den neuen Stollen sprengen ich bin mir sehr unsicher ob es eine Gute Idee ist.<br> \
                                <br> <b>Zweiter Eintrag: </b> <br> <br> Habe noch mal Rücksprache mit der Minenleitung gehalten. Die wollen echt, dass ich diesen Tunnel sprenge... <br> \
                                <br> <b>Dritter Eintrag:</b> <br> <br> Ich fahre jetzt mit Andrea an die Stelle für die Sprengung und bereite alles vor.</div>  \
                                <div class=rightPage> <b>Vierter Eintrag:</b> <br> <br> Die Sprengung hat gut funktioniert, hoffentlich passiert nichts.  </div> </div>");
                
            await ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>Fünfter Eintrag:</b> <br> <br> Ich habe den Einsturz überlebt, wie durch ein Wunder bin ich nicht \
                                verletzt. Was auch immer mich verfolgt hat es ist weg, vielleicht auch tot? <br> \
                                <br> <b>Sechster Eintrag: </b><br><br> Ich hatte Glück, habe eine alte Taschenlampe gefunden, die noch funktioniert, nun kann ich etwas \
                                 besser sehen, wo ich entlang gehe. Das sind definitiv keine Stollen, es muss eine Höhle oder etwas Ähnlicheres sein. <br> \
                                <br> <b>Siebter Eintrag:</b> <br> <br> Ich habe einen Rucksack mit Konserven gefunden, wie kam der nur hier her? Das kann kein Zufall sein. Egal, Hauptsache, ich habe etwas zu essen.</div>  \
                                <div class=rightPage> <b>Achter Eintrag:</b> <br> <br> Ich habe die Suche nach Andrea aufgegeben, ich kann ihn nirgendwo finden, wahrscheinlich hat sie es nicht geschafft. Was ist das nur gewesen?<br> \
                                <br><b>Neunter Eintrag:</b><br><br> Ich habe in einem Haufen aus Schutt Batterien gefunden, damit hält meine Taschenlampe etwas länger, wie sind die Batterien hier gelandet?<br> \
                                <br><b>Zehnter Eintrag:</b><br><br> Diese Gänge sind etwas irreführend, kommt mir vor wie in einem Labyrinth, wenn ich hier durch komme, sollte ich mir den richtigen Weg aufschreiben. </div></div>");

            await ƒS.Text.print("<div class=novelPageContent> <div class=leftPage><b>WICHTIG UNBEDINGT MERKEN</b> <br><br> <br>⇽ 🠕 ⇾ 🠕 = ✧ <br><br><br> 5536 </div>  \
                                <div class=rightPage></div></div>");

            ƒS.Speech.show();
            
            await ƒS.Speech.tell(characters.ben, "Okay, ich probiere mal den Code aus.");
            //Iput feld eingabe
            await ƒS.Speech.tell(characters.narrator, "Ben gibt den Code in das Schloss ein und die Türe öffnet sich.");
            await ƒS.Speech.tell(characters.ben, "Perfekt zum Glück habe ich das Tagebuch dabei.");
            await ƒS.Speech.tell(characters.ben, "Jetzt kann es Los gehen.");
            await ƒS.Speech.tell(characters.narrator, "Ben geht in den dunklen Stollen.");
            await ƒS.Character.hideAll(); 
            
        } else {
            await ƒS.Speech.tell(characters.ben, "Schade, ich habe das Tagebuch nicht mitgenommen, jetzt hätte ich noch mal nachschauen können.");
            await ƒS.Speech.tell(characters.ben, "Komm Ben, denk nach, was stand noch mal im Buch...");
            await ƒS.Speech.tell(characters.narrator, "Ben versucht sich an die Aufschriebe zu erinnern.");
            await ƒS.Speech.tell(characters.ben, "Gut, ich kann es ja einfach versuchen und wenn nicht, muss ich eine andere Möglichkeit finden, hier rein zu kommen.");
            //Input für Code

        }

      }
}