
namespace myNovel {
    export async function ninthScene(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        let text = {
            narrator: {
                T0001: "Ben geht ins Wohnzimmer. Dort sitzt seine Mutter mit einer Frau vom Untersuchungsausschuss der Polizei.",
                T0002: "Die Frau holt ein Buch aus ihrer Tasche",
                T0003: "Ben rennt traurig in sein Zimmer"
            },
            ben: {
                T0001: "Bin wieder daaaa, halloooo???",
                T0002: "Ich weiß es … ich kenne das Buch … Es ist das Tagebuch von Papa, er hat es dir nie erzählt Mama.",
                T0003: "NEINN... wir müssen weiter suchen, wenn er immer noch da unten ist, dürfen wir nicht aufgeben.",
                T0004: "Dass wissen sie nicht, vielleicht lebt er doch noch?",
                T0005: "Mama, was machen wir jetzt?",
                T0006: "Doch wir müssen Papa such…",
                T0007: "Das glaubst auch nur du!!"
            },
            maria: {
                T0001: "Hallo, worüber müssen sie mit mir sprechen.",
                T0002: "Ja, der Einsturz… aber was hat das mit uns zu tun?",
                T0003: "Ja…?",
                T0004: "Wie kann das sein, das ist unmöglich.",
                T0005: "Was haben sie gefunden …",
                T0006: "Nein, um Gotteswillen, was ist das. Um was handelt es sich?",
                T0007: "Nein, das Buch kenne ich nicht!",
                T0008: "Jetzt sagen sie schon … was haben sie herausgefunden?",
                T0009: "Oh mein Gott, was um Himmels willen ist passiert?",
                T0010: "WIE? WAS SAGEN SIE DAA??",
                T0011: "Das heißt, er ist immer noch da unten?",
                T0012: "Nein … Papa ist jetzt sicherlich an einem besseren Ort!",
                T0013: "Danke für diese Informationen.",
                T0014: "Was sollen wir denn tun … wir können morgen das Tagebuch zur Gedenkstelle beim Friedhof bringen, aber viele andere Möglichkeiten haben wir nicht. ",
                T0015: "NEIN … es hat keinen Zweck zu suchen, Papa ist tot.",
            },
            polizistin: {
                T0001: "Ja, Frau Meier, wie sie bestimmt schon erfahren haben, ereignete sich ein Zwischenfall in der Mine.",
                T0002: "Das Loch wurde in der Zwischenzeit untersucht und wir haben die Befürchtung, dass …",
                T0003: "Dass …...",
                T0004: "Wir vermuten, dass ihr Mann verschüttet worden ist.",
                T0005: "Während den Untersuchungen haben die Kollegen etwas gefunden, was in Verbindung mit ihrem Mann steht.",
                T0006: "Dieses Buch wurde am Grunde des Lochs gefunden, erkennen sie dieses Buch Frau Meier, wissen Sie, was das ist?",
                T0007: "Sind sie sicher, sie haben dieses Buch noch nie gesehen?",
                T0008: "Frau Meier, in diesem Buch stehen wichtige Informationen über den Unfall ihres Mannes, wenn man diesen Aufschrieben glauben schenken kann, dann war bereits vor der Sprengung bekannt, dass dieser Bereich, in dem ihr Mann die Sprengung vollzogen hat, gefährdet war. Somit steht die Betreiberfirma im Verdacht, die Arbeiter zur Sprengung genötigt zu haben. Außerdem konnten wir noch weitere Erkenntnisse feststellen…",
                T0009: "Vielleicht wollen sie sich dafür setzen.",
                T0010: "Frau Meier, ihr Mann ist nicht bei dem Einsturz gestorben, er hat überlebt.",
                T0011: "Wir haben Aufzeichnungen gefunden, die nach dem Einsturz aufgeschrieben worden sind, ihr Mann hat die Auswirkungen nach dem Einsturz in das Buch eingetragen.",
                T0012: "Ja, wir haben aber bisher keinerlei Lebenszeichen gefunden und die Suche wird immer schwieriger und gefährlicher. Möglichweiße müssen wir die Suche bald einstellen.",
                T0013: "Tut mir leid junger Mann, mittlerweile ist dein Vater mit großer Wahrscheinlichkeit nicht mehr am Leben.",
                T0014: "Frau Meier, ihr Mann ist vermutlich dort unten psychisch zusammen gebrochen im Buch haben wir Aufschriebe von einer Art Monster oder so ähnlichem gefunden, dass ihren Mann wohl verfolgt haben soll. Wir gehen davon aus, dass ihr Mann aufgrund von Nahrungs- und Sauerstoffmangels halluziniert hat und schlussendlich gestorben ist.",
                T0015: "Gerne, wir überlassen ihnen natürlich das Tagebuch, wir hoffen, wir konnten ihnen mehr Licht in den Unfall von ihrem Mann geben, noch einen schönen Tag."
            }
        };
        await ƒS.Location.show(locations.livingRoom);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);

        await ƒS.Character.show(characters.maria, characters.maria.pose.neutral, newPositions.bottomleftMaria);
        await ƒS.Character.show(characters.polizistin, characters.polizistin.pose.normal, newPositions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.maria, text.maria.T0001);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0001);
        await ƒS.Speech.tell(characters.maria, text.maria.T0002);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0002);
        await ƒS.Speech.tell(characters.maria, text.maria.T0003);
        await ƒS.Character.hide(characters.polizistin);
        await ƒS.update(0);
        await ƒS.Character.show(characters.polizistin, characters.polizistin.pose.sorry, newPositions.bottomcenter);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0003);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0004);

        await ƒS.Character.hide(characters.maria);
        await ƒS.update(0);
        await ƒS.Character.show(characters.maria, characters.maria.pose.sad, newPositions.bottomleftMaria);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.maria, text.maria.T0004);
        await ƒS.Character.hide(characters.polizistin);
        await ƒS.update(0);
        await ƒS.Character.show(characters.polizistin, characters.polizistin.pose.normal, newPositions.bottomcenter);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0005);
        await ƒS.Speech.tell(characters.maria, text.maria.T0005);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0006);
        await ƒS.Speech.tell(characters.maria, text.maria.T0006);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0007);
        await ƒS.Speech.tell(characters.maria, text.maria.T0007);
        await ƒS.Speech.tell(characters.ben, text.ben.T0002);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0008);

        await ƒS.Speech.tell(characters.maria, text.maria.T0008);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0009);
        await ƒS.Character.hide(characters.maria);
        await ƒS.update(0);
        await ƒS.Character.show(characters.maria, characters.maria.pose.sad, newPositions.bottomleftMaria);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.maria, text.maria.T0009);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0010);
        await ƒS.Speech.tell(characters.maria, text.maria.T0010);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0011);
        await ƒS.Speech.tell(characters.maria, text.maria.T0011);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0012);

        await ƒS.Character.hide(characters.ben);
        await ƒS.update(0);
        await ƒS.Character.show(characters.ben, characters.ben.pose.sad, newPositions.bottomright);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.ben, text.ben.T0003);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0013);
        await ƒS.Speech.tell(characters.ben, text.ben.T0004);
        await ƒS.Speech.tell(characters.maria, text.maria.T0012);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0014);

        await ƒS.Character.hide(characters.maria);
        await ƒS.update(0);
        await ƒS.Character.show(characters.maria, characters.maria.pose.verySad, newPositions.bottomleftMaria);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.maria, text.maria.T0013);
        await ƒS.Speech.tell(characters.polizistin, text.polizistin.T0015);
        await ƒS.Character.hide(characters.polizistin);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, text.ben.T0005);
        await ƒS.Speech.tell(characters.maria, text.maria.T0014);
        await ƒS.Speech.tell(characters.ben, text.ben.T0006);

        await ƒS.Character.hide(characters.maria);
        await ƒS.update(0);
        await ƒS.Character.show(characters.maria, characters.maria.pose.angry, newPositions.bottomleftMaria);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.maria, text.maria.T0015);
        await ƒS.Character.hide(characters.ben);
        await ƒS.update(0);
        await ƒS.Character.show(characters.ben, characters.ben.pose.sad, newPositions.bottomright);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.ben, text.ben.T0007);
        await ƒS.Character.hide(characters.ben);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
        await ƒS.Character.hideAll(); 
      }
}