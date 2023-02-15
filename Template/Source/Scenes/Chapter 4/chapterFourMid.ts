
namespace myNovel {
    export async function chapterFourMid(): ƒS.SceneReturn {
        console.log("Start Prolog");
        
        await ƒS.Location.show(locations.sinkhole);
        await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
        await ƒS.Speech.tell(characters.narrator, "Ben ist am Loch angekommen, dieses ist weiträumig abgesperrt und wird von der Polizei überwacht.");
        await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, "So wie komme ich jetzt am besten zum Loch? ");
        await ƒS.Speech.tell(characters.ben, "Ich muss irgendwie durch die Absperrung kommen und die Wachleute dürfen mich auch nicht sehen.");
        await ƒS.Speech.tell(characters.ben, "Vielleicht finde ich in der Absperrung eine Lücke oder ich könnte warten, bis es dunkel ist und mich dann an den Wachen vorbei schleichen.");
        
        let choices = {
            search:  "Eine lücke suchen",
            wait:   "Warten bis es dunkel ist"
          };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.wait:
                console.log("Choice wait");
                return "gameOverChapterFourTwo";

            case choices.search:
                console.log("Choice search");

                await ƒS.Character.hide(characters.ben);
                await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.ben, "Ich suche lieber eine Lücke in der Absperrung, ich will nicht riskieren, von einer der Wachen erwischt zu werden.");
                await ƒS.Speech.tell(characters.narrator, "Ben beginnt an der Absperrung entlang zu gehen und nach einer passenden Stelle zu suchen, um durch die Absperrung zu kommen.");
                await ƒS.Speech.tell(characters.ben, "Der Baum hier... der eine Ast ragt direkt über die Absperrung, ich könnte versuchen, über den Ast zu klettern oder ich suche weiter?");
                
                let choicesTree = {
                    search:  "Anderen Weg suchen",
                    tree:   "Über den Baum klettern"
                  };
        
                let dialogueElement = await ƒS.Menu.getInput(choicesTree, "choicesCSSClass");
        
                switch (dialogueElement) {
                    case choicesTree.tree:
                        console.log("Choice wait");
                        
                        await ƒS.Speech.tell(characters.ben, "Sollte eigentlich funktionieren und einen besseren Ort werde ich wohl kaum finden. ");
                        await ƒS.Speech.tell(characters.narrator, "Ben macht sich auf und beginnt den Baum hochzuklettern.");

                        if (ƒS.Inventory.getAmount(items.seil) == 1) {

                            await ƒS.Speech.tell(characters.ben, "Moment...ich habe doch ein Seil dabei, damit kann ich mich sichern, dann stürze ich nicht ab, wenn der Ast bricht.");
                            await ƒS.Speech.tell(characters.narrator, "Ben sichert sich mit dem Seil ab und klettert weiter.");
                            //sound ast
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
                            await ƒS.update(1);
                            await ƒS.Speech.tell(characters.ben, "Woooow zum Glück habe ich mich abgesichert, sonst währe ich jetzt abgestürzt.");
                            await ƒS.Speech.tell(characters.narrator, "Ben seilt sich auf die andere Seite der Absperrung ab.");
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.sad, newPositions.bottomright);
                            await ƒS.update(1);
                            await ƒS.Speech.tell(characters.ben, "Schade, das Seil hätte ich gerne nochmal verwendet, aber ich kann es nicht vom Baum lösen.");
                            //Seil entfernen
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                            await ƒS.update(1);
                            await ƒS.Speech.tell(characters.ben, "Egal auf zum Loch");
                            await ƒS.Speech.tell(characters.narrator, "Ben geht Richtung Loch.");
            
                        } else {
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.sad, newPositions.bottomright);
                            await ƒS.update(1);
                            await ƒS.Speech.tell(characters.ben, "Schade hätte ich ein Seil mitgenommen, könnte ich mich jetzt absichern.");
                            await ƒS.Speech.tell(characters.ben, "Jetzt muss ich halt etwas vorsichtiger sein.");
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                            await ƒS.update(1);
                            await ƒS.Speech.tell(characters.narrator, "Ben klettert weiter und beginnt vorsichtig über den Ast, der über die Absperrung ragt, zu gehen.");
                            //ast sound
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.ohman, newPositions.bottomright);
                            await ƒS.update(1);
                            await ƒS.Speech.tell(characters.ben, "Auuu... so eine Scheiße, jetzt ist der Ast durchgebrochen, zum Glück bin ich auf der anderen Seite der Absperrung gelandet.");
                            await ƒS.Speech.tell(characters.ben, "Hoffentlich hat mich keiner gehört. Naja egal jetzt schnell zum Loch.");
                            await ƒS.Character.hide(characters.ben);
                            await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
                            await ƒS.update(1);
                            await ƒS.Speech.tell(characters.narrator, "Ben geht Richtung Loch. ");
                        }
                        
                        await ƒS.Character.hideAll(); 
                        break; //weil direkt danach nächste scene  
        
                    case choicesTree.search:
                        console.log("Choice search");

                        await ƒS.Speech.tell(characters.ben, "Ne ist mir zu gefährlich, ich will nicht vom Baum fallen, irgendwo wird es schon einen Durchgang geben.");
                        await ƒS.Speech.tell(characters.narrator, "Ben sucht weiter nach einer Möglichkeit, die Absperrung zu überwinden.");
                        await ƒS.Speech.tell(characters.ben, "Daaaa...da ist ein Loch im Zaun, ich wusste, irgendwo würde ich einfach durchkommen.");
                        await ƒS.Speech.tell(characters.narrator, "Ben drückt sich durch das Loch der Absperrung");
                        await ƒS.Speech.tell(characters.ben, "So jetzt auf zum Loch, ich habe schon genug Zeit verschwendet.");
                        await ƒS.Speech.tell(characters.ben, "Ben geht Richtung Loch.");
                        await ƒS.Character.hide(characters.ben);
                        await ƒS.update(1);

                        await ƒS.Character.hideAll(); 
                        break; //weil direkt danach nächste scene            
                }            
        }  
    }
}