
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
            takeBook:  "Buch vom Friedhof holen",
            dontTakeBook:   "Ohne Buch aufbrechen"
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
                    overWall:  "Über die Mauer klettern",
                    gate:   "Durch das Eingangstor gehen"
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
                        await ƒS.Speech.tell(characters.ben, "Ohh nein, ich hab nicht genügend Platz im Inventar. Ich muss irgendwas zurücklassen, ich kann es ja später auch einfach wieder mitnehmen, wenn ich zurückkomme.");
                        await ƒS.Speech.tell(characters.ben, "Aber was lasse ich zurück? ");
                        ƒS.Inventory.open();
                        
                        await ƒS.Speech.tell(characters.ben, "Okay, das brauche ich wahrscheinlich sowieso nicht.");
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
                            await ƒS.Speech.tell(characters.ben, "Ohh nein, ich hab nicht genügend Platz im Inventar. Ich muss irgendwas zurücklassen, ich kann es ja später auch einfach wieder mitnehmen, wenn ich zurückkomme.");
                            await ƒS.Speech.tell(characters.ben, "Aber was lasse ich zurück? ");
                            ƒS.Inventory.open();
                        
                            await ƒS.Speech.tell(characters.ben, "Okay, das brauche ich wahrscheinlich sowieso nicht.");
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