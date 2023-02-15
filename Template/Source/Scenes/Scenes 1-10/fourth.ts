namespace myNovel {
    export async function fourthScene(): ƒS.SceneReturn {
        console.log("");
        
        let text = {
            valentin: {
                T0001: "Wir müssen erst den restlichen Schutt von gestern beiseite räumen, sonst ist es hier viel zu eng, die andere Schicht hat auch schon fast alle Sprengladungen platziert wir müssen nur die letzte anbringen.",
                T0002: "Okay, klingt gut.",
                T0003: "Okay, ich habe das Dynamit vorbereitet, hast du so weit alles vorbereitet?",
                T0004: "Alles klar...",
                T0005: "...",
                T0006: "Okay, das Dynamit ist platziert, lass uns in Deckung gehen.",
                T0007: "Bist du bereit?",
                T0008: "Hey, bist du verrückt, geh wieder in Deckung, bis sich der Staub gelegt hat.",
                T0009: "Wir warten jetzt, bis der Staub sich gelegt hat.",
                T0010: "Sei vorsichtig, das ist alles noch nicht gesichert und kann einstürzen. ",
                T0011: "Ich weiß nicht, ich bin mir doch unsicher ..."
            },
            andrea: {
                T0001: "Okay, lass uns loslegen.",
                T0002: "Lass mich das Geröll wegräumen, dann kannst du dich um die letzte Sprengladung kümmern und das Dynamit holen.",
                T0003: "Ja, von meiner Seite ist alles bereit, du kannst das Dynamit platzieren.",
                T0004: "Ja, ich bin bereit ... lass es knallen!!",
                T0005: "WOOOW!!!!",
                T0006: "Das war laut, ich kann durch den Staub gar nichts sehen.",
                T0007: "Beruhige dich, ich bin ja schon wieder da.",
                T0008: "Los, jetzt haben wir lange genug gewartet, ich will das Ergebnis von der Sprengung sehen.",
                T0009: "Bin ich immer!!",
                T0010: "Was ist los mit dir, alles okay?",
                T0011: "Jetzt drück den Auslöser, da wird schon nichts passieren!",
                T0012: "Boaahh, alles muss man selber machen, gib mir den Auslöser."
            },
            narrator: {
                T0001: "Valentin geht zum Lager und holt die letzte Stange Dynamit.",
                T0002: "3...",
                T0003: "2...",
                T0004: "1...",
                T0005: "Die Luft am Arbeitsplatz wird durch den Staub der Explosion gefüllt. Steine und Geröll fliegen durch die Luft und landen links und rechts von den beiden Arbeitern.",
                T0006: "Die beiden Arbeiter harren aus, um nicht vom Geröll getroffen zu werden. Nach einigen Minuten legt sich auch der Staub und es ist möglich, wieder mehr zu sehen.",
                T0007: "Andrea stürmt voraus zum neu gesprengten Stollen, Valentin hat Mühe, ihm schnell zu folgen.",
                T0008: "Andrea nimmt den Auslöser und betätigt den Auslöser für die Sprengung."
            }
        };

        await ƒS.Location.show(locations.mineShaftTwo);
        await ƒS.update(transition.leftFade.duration, transition.leftFade.alpha, transition.leftFade.edge);

        await ƒS.Character.show(characters.andrea, characters.andrea.pose.normal, newPositions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0001);
        await ƒS.Character.show(characters.valentin, characters.valentin.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0001);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0002);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0002);
        await ƒS.Character.hide(characters.valentin);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        await ƒS.Character.show(characters.valentin, characters.valentin.pose.solution, newPositions.bottomright);
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.valentin, text.valentin.T0003);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0003);
        await ƒS.Character.hide(characters.valentin);
        await ƒS.update();
        await ƒS.Character.show(characters.valentin, characters.valentin.pose.normal, newPositions.bottomright);
        await ƒS.update();
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0004);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0005);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0006);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0007);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0004);

        let choices = {
            pressButton:  "Knopf drücken",
            dontPress:   "Zögern"
          };

        let dialogueElement = await ƒS.Menu.getInput(choices, "choicesCSSClass");

        switch (dialogueElement) {
            case choices.pressButton:
                console.log("Choice press button");
                
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
                await ƒS.Sound.play(sound.explosion, 0.5, false);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0005);
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0006);
                await ƒS.Character.hide(characters.valentin);
                await ƒS.update();
                await ƒS.Character.show(characters.valentin, characters.valentin.pose.mysterious, newPositions.bottomright);
                await ƒS.update();
                await ƒS.Speech.tell(characters.valentin, text.valentin.T0008);
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0007);
                await ƒS.Speech.tell(characters.valentin, text.valentin.T0009);
                await ƒS.Character.hide(characters.valentin);
                await ƒS.update();
                await ƒS.Character.show(characters.valentin, characters.valentin.pose.normal, newPositions.bottomright);
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0008);
                await ƒS.Speech.tell(characters.valentin, text.valentin.T0010);
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0009);
                await ƒS.Character.hide(characters.andrea);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0008);

                break;

            case choices.dontPress:
                console.log("Choice Dont press button");

                await ƒS.Character.hide(characters.valentin);
                await ƒS.update();
                await ƒS.Character.show(characters.valentin, characters.valentin.pose.sad, newPositions.bottomright);
                await ƒS.update();
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0010);
                await ƒS.Speech.tell(characters.valentin, text.valentin.T0011);
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0011);
                await ƒS.Speech.tell(characters.valentin, text.valentin.T0005);
                await ƒS.Character.hide(characters.andrea);
                await ƒS.update();
                await ƒS.Character.show(characters.andrea, characters.andrea.pose.mad, newPositions.bottomleft);
                await ƒS.update();
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0012);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0008);

                await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
                await ƒS.Character.hide(characters.andrea);
                await ƒS.update();
                await ƒS.Character.show(characters.andrea, characters.andrea.pose.normal, newPositions.bottomleft);
                await ƒS.update();
                await ƒS.Character.hide(characters.valentin);
                await ƒS.update();
                await ƒS.Character.show(characters.valentin, characters.valentin.pose.normal, newPositions.bottomright);
                await ƒS.update();
                await ƒS.Sound.play(sound.explosion, 0.5, false);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0005);
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0006);
                await ƒS.Speech.tell(characters.valentin, text.valentin.T0008);
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0007);
                await ƒS.Speech.tell(characters.valentin, text.valentin.T0009);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0008);
                await ƒS.Speech.tell(characters.valentin, text.valentin.T0010);
                await ƒS.Speech.tell(characters.andrea, text.andrea.T0009);
                await ƒS.Character.hide(characters.andrea);
                await ƒS.update(1);

                break;
        }
        await ƒS.Character.hideAll();
      }
}