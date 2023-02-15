
namespace myNovel {
    export async function chapterFiveGoodTwo(): ƒS.SceneReturn {
        console.log("Start Prolog");

        await ƒS.Location.show(locations.newShaft);
        await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, "Okay mal schauen, was ich hier drin so finden werde.");
        await ƒS.Speech.tell(characters.narrator, "Ben beginnt den Stollen zu untersuchen, von dem sein Vater im Tagebuch gesprochen hat.");
        await ƒS.Character.hide(characters.ben);
        await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.ben, "Ich muss irgendwie diese Höhlen finden, in denen Papa nach dem Einsturz gelandet ist, aber wie nur ...");
        await ƒS.Speech.tell(characters.narrator, "Nach ein Paar Minuten steht Ben Plötzlich vor einer Wand.");
        await ƒS.Speech.tell(characters.ben, "Wieso hört der Stollen auf, da kann doch etwas nicht stimmen auf der Karte sollte es doch noch weiter gehen...");
        await ƒS.Character.hide(characters.ben);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, "Ben schaut sich um... links und rechts gibt es kein Durchgang.");
        await ƒS.Speech.tell(characters.ben, "Nicht nach links oder rechts nach oben da geht es weiter.");
        await ƒS.Speech.tell(characters.ben, "Ja, da oben geht es echt weiter, ich muss irgendwie nach oben kommen.");

        if (ƒS.Inventory.getAmount(items.wanderschuhe) == 1) {
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.confident, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Okay, mit meinen Wanderschuhen sollte es ja kein Problem sein.");
            await ƒS.Speech.tell(characters.narrator, "Ben beginnt die Wand nach oben zu klettern. ");
            await ƒS.Speech.tell(characters.ben, "Tadaa, war ja halb so schlimm, so weiter geht's..");
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Also irgendwie fühlt sich der Boden hier komisch an.");
            //steine Geräusch
            await ƒS.Speech.tell(characters.narrator, "Unter Ben bricht plötzlich der Boden ein ");
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "AHHhhhh was passiert den jetzt....der Boden");
            await ƒS.Character.hideAll();

            await ƒS.Location.show(locations.cave);
            await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
            await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.ben, "Au...");
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.ben, "Wo bin ich...wo ist meine Taschenlampe...");
            await ƒS.Speech.tell(characters.ben, "Ahh hier....");
            await ƒS.Speech.tell(characters.ben, "Wow, das muss das Höhlensystem sein, indem Papa gelandet ist. Ich bin also auf dem Richtigen weg.");
            await ƒS.Speech.tell(characters.ben, "Aber zurück komme ich jetzt so bestimmt nicht mehr. ");
            await ƒS.Character.hide(characters.ben);
            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
            await ƒS.update();
            await ƒS.Speech.tell(characters.narrator, "Ben rafft sich nach seinem spektakulären Sturz auf und führt seine Suche fort und führt seine Suche fort.");
            await ƒS.Speech.tell(characters.ben, "Okay, es kann weiter gehen");
            await ƒS.Speech.tell(characters.narrator, "Nach einer weile kommt Ben an eine Gabelung.");
            await ƒS.Speech.tell(characters.ben, "Okay, wo soll ich jetzt entlang gehen das Tagebuch kann mir hier nicht mehr helfen links oder rechts?");
            await ƒS.Speech.tell(characters.ben, "");
            await ƒS.Speech.tell(characters.ben, "");


            let choices = {
                left: "Nach links gehen",
                right: "Nach rechts gehen"
            };

            let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

            switch (dialogueElement) {
                case choices.left:
                    console.log("Choice left");
                    await ƒS.Speech.tell(characters.ben, "Ich glaube, ich gehe nach links, wenn ich nicht weiterkomme, kann ich es immer noch links probieren.");
                    await ƒS.Speech.tell(characters.narrator, "Ben geht nach links weiter, plötzlich steht er vor einem Abgrund.");
                    await ƒS.Speech.tell(characters.ben, "Okay, hier komme ich nicht so einfach weiter, also entweder klettern oder zurück?");
                    

                    let choice = {
                        back: "Zurück gehen",
                        climp: "Nach unten klettern"
                    };

                    let dialogueElement = await ƒS.Menu.getInput(choice, "choicesCSSClass");

                    switch (dialogueElement) {
                        case choice.climp:
                            console.log("Choice left");

                            if (ƒS.Inventory.getAmount(items.seil) == 1) {
                                await ƒS.Character.hide(characters.ben);
                                await ƒS.Character.show(characters.ben, characters.ben.pose.confident, newPositions.bottomright);
                                await ƒS.update();
                                await ƒS.Speech.tell(characters.ben, "Stimmt, ich habe ja noch das Seil, das kann ich benutzen, dann passiert mir nicht so viel, wenn ich abrutsche.");
                                await ƒS.Character.hide(characters.ben);
                                await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
                                await ƒS.update();
                                await ƒS.Speech.tell(characters.ben, "Boah durch das ganze klettern habe ich jetzt richtig Durst.  ");
                                await ƒS.Speech.tell(characters.ben, "");

                            } else {
                                await ƒS.Character.hide(characters.ben);
                                await ƒS.Character.show(characters.ben, characters.ben.pose.sad, newPositions.bottomright);
                                await ƒS.update();
                                await ƒS.Speech.tell(characters.ben, "Schade, wenn ich jetzt ein Seil hätte, würde ich einfacher da hochkommen... naja sollte auch ohne gehen.");
                                await ƒS.Character.hide(characters.ben);
                                await ƒS.Character.show(characters.ben, characters.ben.pose.confident, newPositions.bottomright);
                                await ƒS.update();
                                await ƒS.Speech.tell(characters.ben, "Ich hatte ja schon genug Übungen davor sollte nicht so schwer sein.");
                                await ƒS.Character.hide(characters.ben);
                                await ƒS.Character.show(characters.ben, characters.ben.pose.sad, newPositions.bottomright);
                                await ƒS.update();
                                await ƒS.Speech.tell(characters.ben, "Boah durch das ganze laufen habe ich jetzt richtig Durst. ");
                                await ƒS.Speech.tell(characters.ben, "");
                            }
                            await ƒS.Character.hideAll();
                            return ""; //Good Path

                        case choice.back:
                            console.log("Choice right");
                            await ƒS.Speech.tell(characters.ben, "Ich gehe glaube ich, besser wieder zurück.");
                            await ƒS.Speech.tell(characters.narrator, "Ben geht zurück und nimmt die rechte Gabelung.");
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
                            await ƒS.update();
                            await ƒS.Speech.tell(characters.ben, "Boah durch das ganze laufen habe ich jetzt richtig Durst.");
                            await ƒS.Character.hideAll();
                            return ""; //Good Path           
                    }

                case choices.right:
                    console.log("Choice right");
                    await ƒS.Speech.tell(characters.ben, "Ich glaube, ich gehe nach rechts, wenn ich nicht weiterkomme, kann ich es immer noch links probieren.");
                    await ƒS.Speech.tell(characters.narrator, "Ben geht nach rechts weiter.");
                    await ƒS.Character.hide(characters.ben);
                    await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.ben, "Boah durch das ganze laufen habe ich jetzt richtig Durst.");
                    await ƒS.Character.hideAll();
                    return ""; //Good Path           
            }

        } else {
            await ƒS.Speech.tell(characters.ben, "Ohne meine Wanderschuhe ist es, glaube ich, doch keine so gute Idee, die Steine hier sind sehr glitschig. Ich will nicht abrutschen.");
            await ƒS.Speech.tell(characters.ben, "Ich glaube, ich gehe lieber wieder zurück an die Gabelung und nehme doch lieber einen anderen Weg.");
            await ƒS.Speech.tell(characters.ben, "Okay links oder rechts? ");

            let choice = {
                straight: "Gerade aus gehen",
                right: "Nach rechts gehen"
            };

            let dialogueElement = await ƒS.Menu.getInput(choice, "choicesCSSClass");

            switch (dialogueElement) {
                case choice.straight:
                    console.log("Choice straight");
                    await ƒS.Character.hideAll();
                    return "chapterFiveMidThree"; //Mid path

                case choice.right:
                    console.log("Choice right");
                    await ƒS.Character.hideAll();
                    return "chapterFiveBad"; //Bad Path          
            }
        }
    }
}