
namespace myNovel {
    export async function chapterFourGoodTwo(): ƒS.SceneReturn {
        console.log("Start Prolog");

        await ƒS.Location.show(locations.blanko);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Speech.tell(characters.ben, "Wow ist ja richtig dunkel hier drin");

        if (ƒS.Inventory.getAmount(items.taschenlampe) == 1) {
            await ƒS.Speech.tell(characters.ben, "Zum Glück habe ich meine Taschenlampe dabei. Ohne wäre es viel zu Dunkel.");
            await ƒS.Speech.tell(characters.narrator, "Ben holt seine Taschenlampe aus seinem Rucksack und macht sie an.");
            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
            await ƒS.Location.show(locations.mineShaft);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.ben, "Okay, dann schauen wir mal, wo dieser Stollen hinführt.");
            await ƒS.Speech.tell(characters.narrator, "Nach einiger Zeit bemerkt Ben weit vor ihm einen schwachen Lichtstrahl.");
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Was ist den da vorne, wieso ist da Licht?");
            await ƒS.Speech.tell(characters.narrator, "Ben geht zu der Lichtquelle und steht auf ein Mal vor einem zugeschütteten Stollen.");
            await ƒS.Speech.tell(characters.ben, "Okay, das Licht muss irgendwie durch den Schuttdurchleuchten. Mal schauen, ob ich den Schutt wegräumen kann.");
            await ƒS.Speech.tell(characters.ben, "Ben beginnt den Schutt aus dem Weg zu tragen, um mehr zu sehen.");
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Okay jetzt sollte ich durch passen.");
            await ƒS.Speech.tell(characters.narrator, "Ben drückt sich durch den restlichen Schutt.  ");

            await ƒS.Character.hideAll();
            await ƒS.Location.show(locations.insideSinkhole);
            await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
            await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Oh mein Gott, das ist der Boden des Lochs, ich stehe mitten drin.");
            await ƒS.Speech.tell(characters.narrator, "Nachdem Ben sich beruhigt hat, überlegt er, was er jetzt tun soll.");
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Okay, ich sollte mich mal umsehen, hier muss es doch mit Sicherheit etwas Interessantes geben.");
            await ƒS.Speech.tell(characters.narrator, "Ben beginnt das komplette Loch abzusuchen.");
            await ƒS.Speech.tell(characters.ben, "Hmm... die Untersuchungen von der Polizei hat bestimmt schon alles Offensichtliche gefunden, ich muss genauer suchen.");
            await ƒS.Speech.tell(characters.narrator, "Ben sucht weiter, nach ein paar Minuten fällt ihm etwas auf.");
            await ƒS.Speech.tell(characters.ben, "Hm... hier liegen auffällig viele Holzbalken, die könnten von einem Stollen sein.");
            await ƒS.Speech.tell(characters.narrator, "Ben sucht weiter und versucht einen der Balken hochzuheben.");
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Ufff ist der schwer, ja da ist doch ein Durchgang.");
            await ƒS.Speech.tell(characters.narrator, "Ben entdeckt zwischen den Balken einen anderen Stollen.");
            await ƒS.Speech.tell(characters.ben, "Okay ich muss da irgendwie rein kommen, ich versuch mal die Balken weg zu bekommen. Dann kann ich mich vielleicht durch Quetschen.");
            await ƒS.Speech.tell(characters.ben, "Mit Mühe schafft es Ben, einige Balken so zu verschieben, dass er sich durchquetschen kann.");
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Okay mal schauen, was ich hier drin finde.");
            await ƒS.Speech.tell(characters.narrator, "Ben quetscht sich durch die Balken und geht in den Stollen.");
            await ƒS.Character.hideAll();
            return "chapterFiveGoodOne";

        } else {
            return "gameOverChapterFourOne";
        }
    }
}