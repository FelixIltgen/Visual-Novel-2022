
namespace myNovel {
    export async function chapterFiveMidThree(): ƒS.SceneReturn {
        console.log("continue Mid Five");

        await ƒS.Location.show(locations.mineShaftTwo);
        await ƒS.update(0);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.ben, "Ach egal, ich geh einfach hier weiter gerade aus wird schon irgendwie passen. Hier sieht es ja eigentlich ganz okay aus.");
        await ƒS.Speech.tell(characters.narrator, "Ben geht weiter gerade aus.");
        await ƒS.Speech.tell(characters.ben, "Okay, ich folge jetzt einfach dem Stollen, bis ich irgendwas Interessantes finde.");
        await ƒS.Speech.tell(characters.narrator, "Ben läuft lange Zeit einfach nur gerade aus und will eigentlich schon umdrehen, als er auf einmal etwas entdeckt.");
        await ƒS.Speech.tell(characters.ben, "Wow, echt enttäuschend, ich laufe hier nur gerade aus und nichts Spanendes passiert...");
        await ƒS.Speech.tell(characters.ben, "Moment, was ist das???.. Das ist eine Lore, die hat wohl jemand vergessen.");
        await ƒS.Speech.tell(characters.ben, "Ben geht ein Stück weiter, da kommt ihm eine Idee.");
        await ƒS.Speech.tell(characters.ben, "Hier geht es Berg ab, ich könnte die Lore benutzen, um schneller voran zu kommen und mit ihr ein Stück den Berg herunter fahren oder ich laufe.");

        let choices = {
            foot: "Zu Fuß gehen",
            drive: "Mit der Lohre fahren"
        };

        let dialogueElementTwo = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElementTwo) {
            case choices.drive:
                console.log("Choice drive");
                await ƒS.Speech.tell(characters.ben, "Ohhh jaa das wird bestimmt lustig mit dem Teil den Berg herunter zu fahren.");
                await ƒS.Speech.tell(characters.ben, "Ein bisschen Aktion muss ja auch sein, es ist eh schon viel zu langweilig hier.");
                await ƒS.Speech.tell(characters.narrator, "Ben schiebt die Lore an und springt hinein.");
                await ƒS.Speech.tell(characters.ben, "Oaky lossss gehtsssss...");
                await ƒS.Speech.tell(characters.narrator, "Die Lore beginnt den Berg herunter zu fahren.");
                await ƒS.Speech.tell(characters.ben, "Wouhhhhhhh das macht mehr Spaß wie gedacht...");
                await ƒS.Speech.tell(characters.narrator, "Die Lohre wird immer schneller und schneller");
                await ƒS.Speech.tell(characters.ben, "Ohh jetzt wird es langsam ein bisschen zu schnell...");
                await ƒS.Speech.tell(characters.ben, "Wie bremse ich in dem Ding...");
                await ƒS.Speech.tell(characters.ben, "Ohh nein, es wird nicht langsamer, was mache ich jetzt");
                await ƒS.Speech.tell(characters.ben, "Ich muss abspringen bevor eine Kurve kommt oder die Schienen aufhören. ");
                await ƒS.Speech.tell(characters.ben, "Aber wo nur... soll ich lieber gleich abspringen");

                let choice = {
                    jump: "Abspringen",
                    wait: "Warten"
                };
        
                let dialogueElementTwo = await ƒS.Menu.getInput(choice, "choicesCSSClass");
        
                switch (dialogueElementTwo) {
                    case choice.jump:
                        console.log("Choice jump");
                        await ƒS.Speech.tell(characters.ben, "Ahh das wird jetzt bestimmt unangenehm, aber ich muss hier raus.");
                        await ƒS.Speech.tell(characters.narrator, "Ben springt aus der Lore und versucht sich auf dem Boden abzurollen.");
                        await ƒS.Speech.tell(characters.ben, "Ah, mein Rücken...das war ne richtige Scheiß Idee mit der Lore zu fahren.");
                        //Lauter knall der Lore
                        await ƒS.Speech.tell(characters.ben, "Woahh das war dann wohl die Lore zum Glück bin ich raus gesprungen, das wäre für mich nicht so gut ausgegangen.");
                        await ƒS.Speech.tell(characters.ben, "Ohhh nee, ich habe meinen Rucksack nicht aus der Lore genommen. Bitte sind meine Sachen nicht weg.");
                        await ƒS.Speech.tell(characters.ben, "Ben folgt den Schienen, um seine Sachen wieder zu bekommen.");
                        await ƒS.Speech.tell(characters.ben, "Da vorne liegt die Lore, die hat es ja komplett zerlegt, zum Glück bin ich raus gesprungen. Aber wo sind meine Sachen....");
                        await ƒS.Speech.tell(characters.narrator, "Ben sucht seine Sachen, kann sie aber erst nicht finden.");
                        await ƒS.Speech.tell(characters.ben, "Oh nein, bitte sind die Sachen jetzt nicht weg... ach da liegen sie ein Glück, dann kann es jetzt wieder weiter gehen.");                        
                        break;
        
                    case choice.wait:
                        console.log("Choice wait");
                        await ƒS.Speech.tell(characters.ben, "Okay, jetzt habe ich aber echt nicht mehr so viel Zeit, ich muss schnell eine Lösung finden.");
                        await ƒS.Speech.tell(characters.ben, "Da da kommt doch so ein kleiner Fluss, das ist meine letzte Möglichkeit");
                        await ƒS.Speech.tell(characters.ben, "3,2,1...");
                        await ƒS.Speech.tell(characters.narrator, "Ben springt ab und versucht in dem nahegelegenen Fluss zu landen.");
                        //Wassersound
                        await ƒS.Speech.tell(characters.ben, "Boah, ist das kalt schnell raus hier...");
                        await ƒS.Speech.tell(characters.narrator, "Ben schwimmt zum Ufer und klettert zurück ins trockene.");
                        await ƒS.Speech.tell(characters.ben, "Ich muss irgendwie an trockene Sachen kommen, aber wie, hier unten werde ich im Leben nicht finden, was soll ich jetzt tun...");
                        await ƒS.Speech.tell(characters.ben, "Das war alles eine riesen Fehlaktion, wieso habe ich mich dazu entschlossen, das zu machen...");
                        await ƒS.Speech.tell(characters.ben, "Und wie komme ich hier wieder raus, ich werde nie einen Weg finden, heile hier raus zu kommen....");
                        //Lauter Schrei
                        await ƒS.Speech.tell(characters.ben, "Was war das??");
                        return "chapterFiveBad";
                }
                
            case choices.foot:
                console.log("Choice foot");
                await ƒS.Speech.tell(characters.ben, "Ne ne mit dem Ding zu fahren ist viel zu gefährlich, ich weiß ja gar nicht, wo die Schienen hinführen, am Ende entgleist das Ding und ich muss abspringen....");
                await ƒS.Speech.tell(characters.ben, "Ich laufe lieber, dann bin ich auf der sicheren Seite.");
                await ƒS.Speech.tell(characters.narrator, "Ben lässt die Lore stehen und geht weiter zu Fuß und folgt den Schienen.");
                break;
        }

        await ƒS.Speech.tell(characters.ben, "So wo soll ich jetzt entlang gehen, hier gibt es keinen richtigen Weg mehr.");
        await ƒS.Speech.tell(characters.narrator, "Ben hört in der ferne etwas.");
        await ƒS.Speech.tell(characters.ben, "Ist das Wasser?");
        await ƒS.Speech.tell(characters.narrator, "Ben folgt dem Geräusch. ");
        await ƒS.Location.show(locations.caveTwo);
        await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
        await ƒS.Speech.tell(characters.ben, "Da ein Fluss, hier muss wohl so eine unterirdische Quelle sein.  ");
        await ƒS.Speech.tell(characters.narrator, "Ben trinkt aus dem Fluss.");
        await ƒS.Speech.tell(characters.ben, "Perfekt das habe ich jetzt echt gebraucht. ");
        await ƒS.Speech.tell(characters.ben, "Was war das??");
        await ƒS.Character.hideAll();
    }
}