
namespace myNovel {
    export async function chapterFiveGoodOne(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        let text = {
            narrator: {
                T0001: "Ben macht seine Taschenlampe an und führt sein Abenteuer fort.",
                T0002: "Ben läuft weiter, bis er den nächsten Stützbalken findet.",
                T0003: "",
                T0004: "",
                T0005: ""
            },
            ben: {
                T0001: "Okay, hier ist es ja genau so dunkel wie im anderen Stollen.",
                T0002: "Wo bin ich eigentlich...? Ich habe voll die Orientierung verloren..",
                T0003: "Papa hat doch immer erzählt, dass die Stützbalken Markierungen haben. ",
                T0004: "Da, da oben steht doch irgendetwas.",
                T0005: "B37...",
                T0006: "",
                T0007: ""
            } 
        };
        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.chapterfive);
        await ƒS.update(3);
        await ƒS.Speech.show();
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        await ƒS.Location.show(locations.mineShaftTwo);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, text.ben.T0002);
        await ƒS.Speech.tell(characters.ben, text.ben.T0003);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        await ƒS.Speech.tell(characters.ben, text.ben.T0004);
        await ƒS.Speech.tell(characters.ben, text.ben.T0005);

        if (ƒS.Inventory.getAmount(items.tagebuch) == 1) {
            await ƒS.Speech.tell(characters.ben, "Papa hatte doch irgendetwas ins Tagebuch eingetragen, ich sollte vielleicht noch mal nachlesen.");

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

            await ƒS.Speech.tell(characters.ben, "Genau da ist B37 also müsste ich, wenn ich es richtig sehe, demnächst bei Stollen A38 rein.");
            await ƒS.Speech.tell(characters.narrator, "Ben macht sich auf den Weg und sucht den Stollen mit den Markierungen, die sein Vater ins Tagebuch geschrieben hat.");
            await ƒS.Speech.tell(characters.ben, "Da ist der Stollen...  ");
            await ƒS.Speech.tell(characters.narrator, "Ben geht in den Stollen A38...");
            await ƒS.Character.hideAll();
            
        } else {
            
            return ""; // rüber zu mid
        }

    }
}