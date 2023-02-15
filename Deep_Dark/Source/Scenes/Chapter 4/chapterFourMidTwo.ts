
namespace myNovel {
    export async function chapterFourMidTwo(): ƒS.SceneReturn {
        console.log("Chapter four two");

        await ƒS.Location.show(locations.sinkhole);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Speech.tell(characters.narrator, "Ben ist am Rande des Lochs angekommen.");
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, "Wow hätte nicht erwartet, dass es so Tief ist, wie komme ich jetzt am besten dort hinunter?");
        await ƒS.Speech.tell(characters.ben, "Am besten ist, wenn ich runter klettere, aber nur wo?");
        await ƒS.Speech.tell(characters.narrator, "Ben geht um das Loch herum, da entdeckt er auf einmal einen Artaufzug, mit dem die Ermittler in das Loch gekommen sind.");
        await ƒS.Speech.tell(characters.ben, "Ich könnte natürlich auch das Ding da benutzen, dann hören mich zwar die Wachen, aber sie kommen ja dann nicht runter, wenn ich es benutze oder ich versuche runter zu klettern.");
       
        let choice = {
            elevator: "Den Aufzug benutzen",
            climp: "Runter klettern"
        };

        let dialogueElement = await ƒS.Menu.getInput(choice, "choicesCSSClass");

        switch (dialogueElement) {
            case choice.elevator:
                console.log("Choice wait");

                await ƒS.Speech.tell(characters.ben, "Ich kann ja mal schauen, ob der Aufzug funktioniert.");
                await ƒS.Character.hide(characters.ben);
                await ƒS.Character.show(characters.ben, characters.ben.pose.confident, newPositions.bottomright);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.ben, "Ohh ich glaube, der ist noch an, die ganzen Kontrollleuchten sind noch an. Aber wo starte ich das Ding.");
                await ƒS.Speech.tell(characters.narrator, "Ben beginnt einfach alle Knöpfe zu drücken, plötzlich fängt der Aufzug an sich zu bewegen.");
                await ƒS.Speech.tell(characters.ben, "Ahhh der Knopf wird es wohl gewesen sein. Perfekt einfacher komme ich wohl nicht nach unten.");
                await ƒS.Speech.tell(characters.narrator, "Heyyyy wer bist du den was machst du da das ist gefährlich Stop sofort den Aufzug!!");
                await ƒS.Speech.tell(characters.ben, "Sorry, aber ich bin auf einer Mission");
                await ƒS.Speech.tell(characters.narrator, "STOP, da unten ist es viel zu gefährlich!");
                await ƒS.Speech.tell(characters.narrator, "Ben ignoriert die schreie der Wachen und fährt in das Loch.");
                await ƒS.Speech.tell(characters.narrator, "Unten angekommen überlegt Ben was er nun tun soll ");

                await ƒS.Location.show(locations.insideSinkhole);
                await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
                await ƒS.Speech.tell(characters.ben, "Okay, ich sollte mich mal umsehen, hier muss es doch mit Sicherheit etwas Interessantes geben.");
                await ƒS.Speech.tell(characters.narrator, "Ben beginnt das komplette Loch abzusuchen.");
                await ƒS.Speech.tell(characters.ben, "Hmm... die Untersuchungen von der Polizei hat bestimmt schon alles Offensichtliche gefunden, ich muss genauer suchen.");
                await ƒS.Speech.tell(characters.narrator, "Ben sucht weiter, nach ein paar Minuten fällt ihm etwas auf.");
                await ƒS.Character.hide(characters.ben);
                await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
                await ƒS.update();
                await ƒS.Speech.tell(characters.ben, "Hm... hier liegen auffällig viele Holzbalken, die könnten von einem Stollen sein.");
                await ƒS.Speech.tell(characters.narrator, "Ben sucht weiter und versucht einen der Balken hochzuheben.");
                await ƒS.Speech.tell(characters.ben, "Ufff ist der schwer, ja da ist doch ein Durchgang.");
                await ƒS.Speech.tell(characters.narrator, "Ben entdeckt zwischen den Balken einen anderen Stollen.");
                await ƒS.Speech.tell(characters.ben, "Okay ich muss da irgendwie rein kommen, ich versuch mal die Balken weg zu bekommen. Dann kann ich mich vielleicht durch Quetschen.");
                await ƒS.Speech.tell(characters.ben, "Mit Mühe schafft es Ben, einige Balken so zu verschieben, dass er sich durchquetschen kann.");
                await ƒS.Speech.tell(characters.ben, "Okay mal schauen, was ich hier drin finde.");
                await ƒS.Speech.tell(characters.narrator, "Ben quetscht sich durch die Balken und geht in den Stollen.");
                await ƒS.Character.hideAll();
                return "chapterFiveMid"; //chapter five  

            case choice.climp:
                console.log("Choice climp");

                await ƒS.Speech.tell(characters.ben, "Ne, ich nehme lieber nicht den Aufzug, ich will so wenig wie möglich auffallen. Dann bleibt wohl nichts anderes übrig, wie klettern.");
                await ƒS.Speech.tell(characters.narrator, "Ben sucht nach einer Möglichkeit, in das Loch zu klettern.");
                await ƒS.Speech.tell(characters.ben, "Da drüben sollte es funktionieren. ");
                await ƒS.Speech.tell(characters.ben, "Moment habe ich überhaupt Sachen dabei mit denen ich mich absichern kann und besser klettern kann?");
                await ƒS.Speech.tell(characters.ben, "Ben überlegt, ob es wirklich eine gute Idee ist zu klettern.");
                ƒS.Inventory.open();

                let choicesDiff = {
                    searchDiff: "Anderen Weg suchen",
                    climp: "Trotz allem klettern"
                };

                let dialogueElement = await ƒS.Menu.getInput(choicesDiff, "choicesCSSClass");

                switch (dialogueElement) {
                    case choicesDiff.searchDiff:
                        console.log("Choice wait");

                        await ƒS.Speech.tell(characters.ben, "Okay was soll ich tun ich könnte doch den Aufzug nehmen. ");
                        await ƒS.Speech.tell(characters.ben, "Die andere Möglichkeit ist, dass ich wieder zurückgehen und zum Eingang der Mine gehen.");
                        await ƒS.Character.hide(characters.ben);
                        await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.ben, "Hmm.... ");

                        let choices = {
                            elevator: "Den Aufzug benutzen",
                            back: "Zurück zum Bergwerk gehen"
                        };

                        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

                        switch (dialogueElement) {
                            case choices.back:
                                console.log("Choice back");
                                return "chapterFourGood"; //zurück zum Bergwerk

                            case choices.elevator:
                                console.log("Choice elevator");

                                await ƒS.Speech.tell(characters.ben, "Ich kann ja mal schauen, ob der Aufzug funktioniert.");
                                await ƒS.Character.hide(characters.ben);
                                await ƒS.Character.show(characters.ben, characters.ben.pose.confident, newPositions.bottomright);
                                await ƒS.update(1);
                                await ƒS.Speech.tell(characters.ben, "Ohh ich glaube, der ist noch an, die ganzen Kontrollleuchten sind noch an. Aber wo starte ich das Ding.");
                                await ƒS.Speech.tell(characters.narrator, "Ben beginnt einfach alle Knöpfe zu drücken, plötzlich fängt der Aufzug an sich zu bewegen.");
                                await ƒS.Speech.tell(characters.ben, "Ahhh der Knopf wird es wohl gewesen sein. Perfekt einfacher komme ich wohl nicht nach unten.");
                                await ƒS.Speech.tell(characters.narrator, "Heyyyy wer bist du den was machst du da das ist gefährlich Stop sofort den Aufzug!!");
                                await ƒS.Speech.tell(characters.ben, "Sorry, aber ich bin auf einer Mission");
                                await ƒS.Speech.tell(characters.narrator, "STOP, da unten ist es viel zu gefährlich!");
                                await ƒS.Speech.tell(characters.narrator, "Ben ignoriert die schreie der Wachen und fährt in das Loch.");
                                await ƒS.Speech.tell(characters.narrator, "Unten angekommen überlegt Ben was er nun tun soll ");

                                await ƒS.Location.show(locations.insideSinkhole);
                                await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
                                await ƒS.Speech.tell(characters.ben, "Okay, ich sollte mich mal umsehen, hier muss es doch mit Sicherheit etwas Interessantes geben.");
                                await ƒS.Speech.tell(characters.narrator, "Ben beginnt das komplette Loch abzusuchen.");
                                await ƒS.Speech.tell(characters.ben, "Hmm... die Untersuchungen von der Polizei hat bestimmt schon alles Offensichtliche gefunden, ich muss genauer suchen.");
                                await ƒS.Speech.tell(characters.narrator, "Ben sucht weiter, nach ein paar Minuten fällt ihm etwas auf.");
                                await ƒS.Character.hide(characters.ben);
                                await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
                                await ƒS.update();
                                await ƒS.Speech.tell(characters.ben, "Hm... hier liegen auffällig viele Holzbalken, die könnten von einem Stollen sein.");
                                await ƒS.Speech.tell(characters.narrator, "Ben sucht weiter und versucht einen der Balken hochzuheben.");
                                await ƒS.Speech.tell(characters.ben, "Ufff ist der schwer, ja da ist doch ein Durchgang.");
                                await ƒS.Speech.tell(characters.narrator, "Ben entdeckt zwischen den Balken einen anderen Stollen.");
                                await ƒS.Speech.tell(characters.ben, "Okay ich muss da irgendwie rein kommen, ich versuch mal die Balken weg zu bekommen. Dann kann ich mich vielleicht durch Quetschen.");
                                await ƒS.Speech.tell(characters.ben, "Mit Mühe schafft es Ben, einige Balken so zu verschieben, dass er sich durchquetschen kann.");
                                await ƒS.Speech.tell(characters.ben, "Okay mal schauen, was ich hier drin finde.");
                                await ƒS.Speech.tell(characters.narrator, "Ben quetscht sich durch die Balken und geht in den Stollen.");
                                await ƒS.Character.hideAll();
                                return "chapterFiveMid"; //Chapter five           
                        }

                    case choicesDiff.climp:
                        console.log("Choice climp");

                        if (ƒS.Inventory.getAmount(items.wanderschuhe) == 1 && ƒS.Inventory.getAmount(items.seil) == 1) {
                            await ƒS.Speech.tell(characters.ben, "Okay, ich sollet eigentlich alles dabei haben, hier, ich habe ein Seil und meine Wanderschuhe, damit sollte es auf jeden Fall funktionieren.");
                            await ƒS.Speech.tell(characters.narrator, "Ben sichert sich mit dem Seil ab und beginnt nach unten zu klettern.");
                            await ƒS.Speech.tell(characters.narrator, "Unten angekommen überlegt Ben, was er nun tun soll");


                            await ƒS.Location.show(locations.insideSinkhole);
                            await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
                            await ƒS.Speech.tell(characters.ben, "Okay, ich sollte mich mal umsehen, hier muss es doch mit Sicherheit etwas Interessantes geben.");
                            await ƒS.Speech.tell(characters.narrator, "Ben beginnt das komplette Loch abzusuchen.");
                            await ƒS.Speech.tell(characters.ben, "Hmm... die Untersuchungen von der Polizei hat bestimmt schon alles Offensichtliche gefunden, ich muss genauer suchen.");
                            await ƒS.Speech.tell(characters.narrator, "Ben sucht weiter, nach ein paar Minuten fällt ihm etwas auf.");
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
                            await ƒS.update();
                            await ƒS.Speech.tell(characters.ben, "Hm... hier liegen auffällig viele Holzbalken, die könnten von einem Stollen sein.");
                            await ƒS.Speech.tell(characters.narrator, "Ben sucht weiter und versucht einen der Balken hochzuheben.");
                            await ƒS.Speech.tell(characters.ben, "Ufff ist der schwer, ja da ist doch ein Durchgang.");
                            await ƒS.Speech.tell(characters.narrator, "Ben entdeckt zwischen den Balken einen anderen Stollen.");
                            await ƒS.Speech.tell(characters.ben, "Okay ich muss da irgendwie rein kommen, ich versuch mal die Balken weg zu bekommen. Dann kann ich mich vielleicht durch Quetschen.");
                            await ƒS.Speech.tell(characters.ben, "Mit Mühe schafft es Ben, einige Balken so zu verschieben, dass er sich durchquetschen kann.");
                            await ƒS.Speech.tell(characters.ben, "Okay mal schauen, was ich hier drin finde.");
                            await ƒS.Speech.tell(characters.narrator, "Ben quetscht sich durch die Balken und geht in den Stollen.");
                            await ƒS.Character.hideAll();
                            return "chapterFiveMid"; //Chapter five

                        } else {
                            return "gameOverChapterFourThree";
                        }          
                }           
            }

    }
}