
namespace myNovel {
    export async function fifthScene(): ƒS.SceneReturn {
        console.log("Start fifthScene");
        
        let text = {
            narrator: {
                T0001: "Die beiden schauen in einen tiefen schwarzen Gang, der noch immer voll aufgewirbeltem Staub ist.",
                T0002: "Beide machen sich auf den Weg und begehen den neuen Stollen. Durch den Staub ist es schwer, viel zu erkennen, Gerade so können die beiden in dem neuen Stollen stehen. Links und rechts liegt sehr viel Schutt. ",
                T0003: "Beide fangen an, Schutt beiseite zu räumen und an den freigeräumten Plätzen Stützbalken zu platzieren.",
                T0004: "Valentin läuft in Richtung der Jubelgeräusche von seinem Kollegen.",
                T0005: "Andrea springt wie von der Tarantel gestochen durch den engen und unwegsamen Stollen. ",
                T0006: "Egal was Valentin auch sagt André lässt sich nicht beruhigen. Plötzlich bricht der Boden unter André durch sein herum springen auf und André stürzt in die Tiefe.",
                T0007: "Mehrere Minuten hört Valentin nichts von seiner Kollegin, er will schon den Vorfall im Hauptquartier melden gehen, damit eine Rettungsaktion gestartet werden kann. Da hört er auf einmal die Stimme von Andrea.",
                T0008: "Valentin, der oben steht, versteht nicht ganz, was er davon halten soll, aber da er seinen Kollegen endlich retten will, holt er noch mehr Seile und den mobilen Kran. Er macht die Seile am Kran fest und wirft sie in das Loch.",
                T0009: "Valentin legt den Schalter um und der Kran beginnt an den Seilen zu ziehen, der Kran schafft es fast nicht, die Last hochzuheben, doch schließlich kommt André und das mystische Gefäß zum Vorschein.",
                T0010: "Andrea kletterte auf das immer noch am Kran hängende Sarg ähnliche Objekt und setzt seine Hacke an, um es zu öffnen. Er holt aus… aber bevor er mit der Hacke zuschlagen kann, bricht das Seil durch die Last und der Kollege fällt samt Sarg wieder zurück in das Loch.",
                T0011: "Valentin rennt Richtung Ausgang des neuen Stollens, er hört, wie er von irgendwelchen stumpfen schnellen Schritten verfolgt wird. Er versucht so schnell wie möglich zu rennen, was sich durch den ganzen Schutt der Sprengung als sehr schwierig herausstellt.",
                T0012: "Die stumpfen Fußstapfen werden immer schneller und lauter. Doch Valentin schafft es und erreicht den Anfang des neuen Stollens. Er dreht sich um und schaut in den dunklen Stollen, die Fußstapfen sind nicht mehr zu hören.",
                T0013: "Er dreht sich weg und hält sich an einer der Stützen des alten Stollens fest. Auf einmal wird er zu Boden gerissen und in den neuen Stollen gezogen. Er versucht sich an einem der neuen Stützen festzuhalten, da diese aber von seinem Kollegen nicht richtig fest gemacht sind, löst sich die Stütze aus der Verankerung und fällt zu Boden. Durch das los lösen der Stelze hat der Vater den halt verloren und wird ins Dunkle gezogen.",
                T0014: "Durch das Lösen der Stütze beginnt ein Teil des neuen Stollens einzubrechen, gerade so hält die letzte Stütze den Eingang des Stollens, sodass der Zusammenbruch nicht auf die alten Stollen übertritt.",
                T0015: "Gut gefestigte Stützen haben eben einen wichtigen Grund."
            },
            andrea: {
                T0001: "Es hat alles funktioniert, schau dir nur den neuen Stollen an!",
                T0002: "Lass uns den Gang inspizieren, wir müssen wissen, wie es in den tieferen Bereichen funktioniert hat.",
                T0003: "Klar, die stehen oben am Eingang vom neuen Stollen.",
                T0004: "Ach was, meine halten auch je mehr es sind, desto stabiler sind sie, wenn wir ein paar mehr platzieren, müssen sie auch nicht so fest sein. ",
                T0005: "AHAHAHAaahh Juhuuuuuu",
                T0006: "Garnichts, ich freue mich einfach nur, dass die Sprengung so gut funktioniert hat.",
                T0007: "Ich kann es einfach nicht glauben, dass es funktioniert hat...",
                T0008: "Was zum...?...AAHHHHHHH ",
                T0009: "ES GEHT MIR GUT SIND NUR EIN PAAR KRATZER, VALENTIN WIR HABEN EINE ENTDECKUNG GEMACHT HIER UNTEN IST EIN RISIEGER RAUM ICH KANN ABER NICHTS ERKENNEN WAS HIER IST.",
                T0010: "MOMENT... ",
                T0011: "HIER IST EIN RISIGES STEINGEFÄS. WIRF MAL MEHR SEILE HERUNTER UND HOL DEN KRAN",
                T0012: "Jetzt zieh mich hoch!",
                T0013: "Schau, was ich hier gefunden habe, da unten ist ein riesiger Raum, irgendwas ist da unten, ich konnte aber nicht mehr Sehen wir müssen oben Bescheid geben, hier muss eine Expedition gestartet werden, wir könnten eine archäologische Entdeckung gemacht haben.",
                T0014: "Schau dir dieses riesige Steinding an, sieht aus wie ein Sarg, schau mal, wie viele Totenköpfe auf dem Sarg eingraviert sind, was die wohl zu bedeuten haben.",
                T0015: "Ach wo, lass es uns aufmachen, was soll schon passieren.",
                T0016: "JAAAA...",
                T0017: "Der Sarg ist aufgebrochen, er ist offen hier in den Trümmern liegt irgendwas.",
                T0018: "Oh mein Gott, es bewegt sich…. AHHHHAHSAH es ist lebendig AHADHHHAHHHHASICN… renn um dein Leben…"
            },
            valentin: {
                T0001: "Wow, besser als erwartet!",
                T0002: "Hm... auf den ersten Blick scheint der Stollen stabil zu sein die Untersuchung ist wohl fehlerhaft gewesen, wir sollten trotzdem Stützen platzieren für alle Fälle, man weiß nie, was noch passieren kann.",
                T0003: "Hast du die neuen Stützbalken schon bereitgestellt?",
                T0004: "Gut, dann sollten wir anfangen, die Stützen zu platzieren, bevor hier noch was einstürzt. ",
                T0005: "Hey, du musst die viel fester in den Boden und die Decke rammen, sonst hallten die nicht richtig, schau die erste hier an, wie stabil sie ist, deine sind viel zu locker.",
                T0006: "So funktioniert das aber nicht... Hey Andrea, bleib hier!!",
                T0007: "Ach egal mache ich eben alleine weiter.",
                T0008: "Hey, was ist den bei dir los?",
                T0009: "Jetzt beruhige dich wieder... was ist den los mit dir.",
                T0010: "ANDREA......HEEYY HALLOO",
                T0011: "ANDREEAAAA.....",
                T0012: "ANDREEAAA warte, ich werfe dir ein Seil runter...",
                T0013: "Andrea?...ANDREAAA??",
                T0014: "Ehhhh...",
                T0015: "Jetzt mach mal halb lang und beruhige dich er...",
                T0016: "Wahrscheinlich nicht Gutes fasse es lieber nicht an, ich will gar nicht wissen, was da drin ist, weil gut kann es mit Sicherheit nicht sein.",
                T0017: "HEYY LEBST DU NOCH??",
                T0018: "ANDREA?? ANDREAAA???",
                T0019: "Da ist der Ausgang zu den anderen Stollen, gleich habe ich es geschafft.",
                T0020: "Was auch immer da war, ich muss es abgehängt haben."
            }
        };
        
        await ƒS.Location.show(locations.newShaft);
        await ƒS.update(transition.fade.duration, transition.fade.alpha, transition.fade.edge);
        await ƒS.Character.show(characters.andrea, characters.andrea.pose.normal, newPositions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0001);
        await ƒS.Character.show(characters.valentin, characters.valentin.pose.normal, newPositions.bottomright);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        await ƒS.Speech.tell(characters.andrea, text.andrea.T0002);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0002);
        await ƒS.Speech.tell(characters.valentin, text.valentin.T0003);
      }
}