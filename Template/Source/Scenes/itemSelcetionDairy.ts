
namespace myNovel {
    export async function itemSelcetionDairy(): ƒS.SceneReturn {
        console.log("Start Item Selection with Dairy");
        
        let text = {
            narrator: {
                T0001: ""
            },
            ben: {
                T0001: "So wo sind den meine Wandersachen und mein Rucksack?",
                T0002: "GENAU!! Jetzt fällt es mir wieder ein...",
                T0003: "...hier hinten müssten noch die alten Sachen von Papa sein",
                T0004: "Hier sind sie wow richtig verstaubt, aber sie sollte eigentlich immer noch gut funktionieren.",
                T0005: "Aber was soll ich mitnehmen, ich kann definitiv nicht alles mitnehmen. Ich muss mich entscheiden.",
                T0006: "Ich habe Platz für 5 Gegenstände!"
            }
        };
        await ƒS.Location.show(locations.garage);
        await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
        await ƒS.Character.show(characters.ben, characters.ben.pose.normal, newPositions.bottomright);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.ben, text.ben.T0001);
        await ƒS.Speech.tell(characters.ben, text.ben.T0002);
        await ƒS.Speech.tell(characters.ben, text.ben.T0003);
        await ƒS.Speech.tell(characters.ben, text.ben.T0004);
        await ƒS.Character.hide(characters.ben);
        await ƒS.update(0);
        await ƒS.Character.show(characters.ben, characters.ben.pose.thinking, newPositions.bottomright);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.ben, text.ben.T0005);
        await ƒS.Speech.tell(characters.ben, text.ben.T0006);

        
        let itemInInventory = 1;
        let choices = {
            feuerzeug:  "Feuerzeug",
            seil:   "Seil",
            tagebuch:   "Tagebuch",
            taschenlampe:   "Taschenlampe",
            wanderschuhe:   "Wanderschuhe",
            wasserflasche:   "Wasserflasche"
          };

        while (itemInInventory <= 5) {
            
    
            let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");
            switch (dialogueElement) {
                case choices.feuerzeug:
                    console.log("Choice Fuerzeug");
                    ƒS.Inventory.add(items.feuerzeug);
                    await ƒS.Speech.tell(characters.ben, "Ein Feuerzeug könnte hilfreich sein, wenn ich irgendetwas anzünden muss.");
                    await ƒS.Speech.tell(characters.ben, "Okay, kann ich noch etwas mitnehmen?");
                    itemInInventory ++;
                    delete choices.feuerzeug;
                    break;

                case choices.seil:
                    console.log("Choice Seil");
                    ƒS.Inventory.add(items.seil);
                    await ƒS.Speech.tell(characters.ben, "Ein Seil könnte auch hilfreich sein, falls ich irgendwo herunter klettern muss.");
                    await ƒS.Speech.tell(characters.ben, "Okay, was könnte ich noch gebrauchen. ");
                    itemInInventory ++;
                    delete choices.seil;
                    break;

                case choices.tagebuch:
                    console.log("Choice Tagebuch");
                    ƒS.Inventory.add(items.tagebuch);
                    await ƒS.Speech.tell(characters.ben, "Ja, das Tagebuch ist sehr wichtig, das sollte ich auf jeden Fall mitnehmen.");
                    await ƒS.Speech.tell(characters.ben, "Dann kann ich noch mal etwas nachlesen, falls ich unterwegs etwas vergessen habe.");
                    itemInInventory ++;
                    delete choices.tagebuch;
                    break;

                case choices.taschenlampe:
                    console.log("Choice Taschenlampe");
                    ƒS.Inventory.add(items.taschenlampe);
                    await ƒS.Speech.tell(characters.ben, "Boah... eine Taschenlampe ist sehr wichtig, ohne werde ich mit Sicherheit nichts sehen."); 
                    await ƒS.Speech.tell(characters.ben, "Okay, was könnte ich noch gebrauchen? "); 
                    itemInInventory ++;
                    delete choices.taschenlampe;
                    break;

                case choices.wanderschuhe:
                    console.log("Choice Wanderschuhe");
                    delete(choices.wanderschuhe);
                    ƒS.Inventory.add(items.wanderschuhe);
                    await ƒS.Speech.tell(characters.ben, "Vielleicht sollte ich nicht mit Sportschuhen in die Mine gehen, am Ende rutsche ich ab."); 
                    await ƒS.Speech.tell(characters.ben, "Mit Wanderschuhen passiert mir das nicht."); 
                    await ƒS.Speech.tell(characters.ben, "Okay, was kann ich noch mitnehmen."); 
                    itemInInventory ++;
                    delete choices.wanderschuhe;
                    break;

                case choices.wasserflasche:
                    delete(choices.wasserflasche);
                    console.log("Choice Wasserflasche");
                    ƒS.Inventory.add(items.wasserflasche);
                    await ƒS.Speech.tell(characters.ben, "Okay, was kann ich noch mitnehmen.");
                    await ƒS.Speech.tell(characters.ben, "Falls ich länger in der Mine bin, brauche ich auf jeden Fall etwas zu trinken. Mit der Flasche könnte ich Wasser mitnehmen und möglicherweise auffüllen.  ");  
                    delete(choices.wasserflasche);
                    itemInInventory ++;
                    break;
            }   
        }
        ƒS.Inventory.open();
        await ƒS.Character.hideAll();
        return "afterItemSelection";
      }
    }