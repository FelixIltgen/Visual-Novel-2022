namespace myNovel {
    export async function lastMid(): ƒS.SceneReturn {
        console.log("Start Prolog");


        //handyklingelt
        await ƒS.Speech.tell(characters.ben, "Was zum.... mein Handy ich habe eine Verbindung....");
        await ƒS.Speech.tell(characters.narrator, "Ben nimmt das Handy und nimmt den Hörer ab.");
        await ƒS.Speech.tell(characters.ben, "Hallo...?");
        await ƒS.Character.show(characters.maria, characters.maria.pose.neutral, newPositions.bottomleftMaria);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.maria, "BEEEN!!?!?! WO bist du...");
        await ƒS.Speech.tell(characters.ben, "Mama, ich bin irgendwo in der Mine oder in einer Höhle, aber ich finde den Weg nicht mehr aus der Höhle.");
        await ƒS.Speech.tell(characters.maria, "OMG was hast du nur gemacht ich rufe die Rettungskräfte wir holen dich da schon raus....");
        await ƒS.Speech.tell(characters.ben, "Okay ich warte hier....");
        await ƒS.Character.hide(characters.maria)
        await ƒS.Speech.tell(characters.ben, "Wie lang werden die wohl brauchen bis sie mich finden...");
        await ƒS.Speech.tell(characters.ben, "Bis sie mich gefunden haben wird es viel zu lange dauern bis dahin bin ich verdurstet oder sie geben die Suche auf wie bei Papa.");
        //Pressluft hammer
        await ƒS.Speech.tell(characters.ben, "Huh...? DA GRÄBT jemand.... HALLLOOO HIER ICH BIN HIERRRR.....HALLOOO.");
        await ƒS.Speech.tell(characters.narrator, "DA drüben ich höre etwas...ja schnell wir haben ihn...");
        
        await ƒS.Character.hideAll();
        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.blanko);
        await ƒS.update(4);
        await ƒS.Speech.show();
        await ƒS.update();
        await ƒS.Speech.tell(characters.valentin, "Ben aufstehen sonst kommst du zu spät zur Schule und dann gibt es wieder Ärger."); 
        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.blanko);
        await ƒS.update(4);

       
    }
}