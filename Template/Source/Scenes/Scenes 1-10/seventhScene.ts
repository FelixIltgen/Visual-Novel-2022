
namespace myNovel {
    export async function seventhScene(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        let text = {
            narrator: {
                T0001: "Die beiden kommen wieder zu Hause an. Ben hat nach der ganzen Arbeit einen riesigen Hunger. ",
                T0002: "Ben beginnt seine Hausaufgaben zu machen und vergisst vollkommen die Zeit nach ein paar Stunden schaut er auf die Uhr. ",
                T0003: "Ben legt sich ins Bett und beginnt zu schlafen. Nach einigen Stunden wacht er mitten in der Nacht wieder auf.",
                T0004: "Ben läuft zum Fenster",
                T0005: "Ben legt sich ins Bett, um zu schlafen. Nach einigen Stunden beginnt er zu träumen und hört in seinem Traum ein komisches Geräusch."
            },
            ben: {
                T0001: "Wow, jetzt hab ich echt mega hunger.",
                T0002: "Cool, danke Mama ",
                T0003: "Danke, Mama ",
                T0004: "Wow, das war echt lecker und sogar richtig scharf",
                T0005: "Ich glaube, ich mache noch schnell meine Hausaufgaben für morgen.",
                T0006: "Ohje, es ist ja schon viel zu spät, ich geh lieber ins Bett, sonst komme ich morgen nicht raus. ",
                T0007: "Oh mein Gott, was ist den jetzt los, warum tut mein Bauch so weh..??",
                T0008: "Ohje, dass ist das Curry... toll, jetzt kann ich nicht mehr schlafen...",
                T0009: "Was war das den?? Hat sich angehört, als würde etwas vom Himmel fallen, ich kann aber nichts erkennen...",
                T0010: "Jetzt muss es wohl aufgekommen sein, na ja, ich kann nichts erkennen, ich lege mich lieber wieder ins Bett, sonst komme ich morgen nicht raus.",
                T0011: "Wow, das war echt lecker, aber jetzt bin ich viel zu voll gefressen, um noch etwas zu erledigen, ich gehe lieber etwas früher ins Bett."
            },
            maria: {
                T0001: "Ja, es ist jetzt auch schon spät. Was willst du essen, auf was hast du Lust?",
                T0002: "Super, auf Curry habe ich auch Lust, wenn du willst, kannst du in dein Zimmer gehen, dann mache ich so weit alles fertig.",
                T0003: "Hey Ben, hier ist dein Essen, lass es dir schmecken.",
                T0004: "Super, auf Bolognese habe ich auch Lust, wenn du willst kannst du in dein Zimmer gehen, dann mache ich soweit alles fertig."
            }
        };
    
        await ƒS.Location.show(locations.livingRoom);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);
        await ƒS.Character.show(characters.maria, characters.maria.pose.sad, newPositions.bottomleftMaria);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.maria, text.maria.T0001);

        let choices = {
            curry:  "Curry",
            bolo:   "Bolognese"
          };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.curry:
                console.log("Choice Curry");
                await ƒS.Character.hide(characters.maria);
                await ƒS.update();
                await ƒS.Character.show(characters.maria, characters.maria.pose.pleased, newPositions.bottomleftMaria);
                await ƒS.update();
                await ƒS.Speech.tell(characters.maria, text.maria.T0002);
                await ƒS.Speech.tell(characters.ben, text.ben.T0002);
                await ƒS.Character.hide(characters.ben);
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.Speech.clear();

                await ƒS.Location.show(locations.kidRoom);
                await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);

                await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                await ƒS.update(1);
                await ƒS.Character.show(characters.maria, characters.maria.pose.sad, newPositions.bottomleftMaria);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.maria, text.maria.T0003);
                await ƒS.Speech.tell(characters.ben, text.ben.T0003);
                await ƒS.Character.hide(characters.maria);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.ben, text.ben.T0004);
                await ƒS.Speech.tell(characters.ben, text.ben.T0005);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
                await ƒS.Speech.tell(characters.ben, text.ben.T0006);
                await ƒS.Character.hide(characters.ben);
                await ƒS.update();
                await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
                await ƒS.Character.hide(characters.ben);
                await ƒS.update();
                await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.ben, text.ben.T0007);
                await ƒS.Speech.tell(characters.ben, text.ben.T0008);
                //Sound absturz
                await ƒS.Character.hide(characters.ben);
                await ƒS.update();
                await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
                await ƒS.Speech.tell(characters.ben, text.ben.T0009);
                //Sound einschlag
                await ƒS.Speech.tell(characters.ben, text.ben.T0010);
                await ƒS.Character.hide(characters.ben);
                await ƒS.update();
                await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
                await ƒS.update(0);
                break;

            case choices.bolo:
                console.log("Choice Bolognese");
                await ƒS.Character.hide(characters.maria);
                await ƒS.update();
                await ƒS.Character.show(characters.maria, characters.maria.pose.pleased, newPositions.bottomleftMaria);
                await ƒS.update();
                await ƒS.Speech.tell(characters.maria, text.maria.T0004);
                await ƒS.Speech.tell(characters.ben, text.ben.T0003);
                await ƒS.Character.hide(characters.ben);
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.Speech.clear();

                await ƒS.Location.show(locations.kidRoom);
                await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);

                await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                await ƒS.update(1);
                await ƒS.Character.show(characters.maria, characters.maria.pose.sad, newPositions.bottomleftMaria);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.maria, text.maria.T0003);
                await ƒS.Speech.tell(characters.ben, text.ben.T0003);
                await ƒS.Character.hide(characters.maria);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.ben, text.ben.T0011);
                await ƒS.Character.hide(characters.ben);
                await ƒS.update();
                await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
                //Sound absturz
                await ƒS.Character.hide(characters.ben);
                await ƒS.update();
                await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                await ƒS.update(0);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
                await ƒS.Speech.tell(characters.ben, text.ben.T0009);
                //Sound einschlag
                await ƒS.Speech.tell(characters.ben, text.ben.T0010);
                await ƒS.Character.hide(characters.ben);
                await ƒS.update();
                await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
                await ƒS.update(0);
                break;
        }
        await ƒS.Character.hideAll();
      }
}