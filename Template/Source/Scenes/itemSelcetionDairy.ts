
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
                T0006: "",
                T0007: "",
                T0008: "",
                T0009: "",
                T0010: "",
                T0011: ""
            }
        };
        await ƒS.Location.show(locations.garage);
        await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
      }
      
}