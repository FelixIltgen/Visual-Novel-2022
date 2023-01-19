namespace myNovel {
    export async function fourthScene(): ƒS.SceneReturn {
        console.log("Start scene One & Chapter one");
        
        let text = {
            valentin: {
                T0001: "Wir müssen erst den restlichen Schutt von gestern beiseite räumen, sonst ist es hier viel zu eng, die andere Schicht hat auch schon fast alle Sprengladungen platziert wir müssen nur die letzte anbringen.",
                T0002: "Okay, klingt gut.",
                T0003: "Okay, ich habe das Dynamit vorbereitet, hast du so weit alles vorbereitet?",
                T0004: "Alles klar...",
                T0005: "...",
                T0006: "Okay, das Dynamit ist platziert, lass uns in Deckung gehen.",
                T0007: "Bist du bereit?",
                T0008: "",
                T0009: "",
                T00010: "",
                T00011: ""
            },
            Andrea: {
                T0001: "Okay, lass uns loslegen.",
                T0002: "Lass mich das Geröll wegräumen, dann kannst du dich um die letzte Sprengladung kümmern und das Dynamit holen.",
                T0003: "Ja, von meiner Seite ist alles bereit, du kannst das Dynamit platzieren.",
                T0004: "Ja, ich bin bereit ... lass es knallen!!",
                T0005: "",
                T0006: "",
                T0007: "",
                T0008: ""
            },
            Narrator: {
                T0001: "Valentin geht zum Lager und holt die letzte Stange Dynamit.",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: ""
            }
        };
        await ƒS.Location.show(locations.mineShaftTwo);
        await ƒS.update(transition.leftFade.duration, transition.leftFade.alpha, transition.leftFade.edge);
      }
}