namespace myNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  export let transition = {
    fade: {
      duration: 1,
      alpha: "./Assets/Transition/fade.png",
      edge: 1
    },
    leftFade: {
      duration: 1,
      alpha: "./Assets/Transition/leftFade.jpg",
      edge: 1
    }
  };

  export let sound = {
    // themes
    cave: "./Assets/Music/cave.mp3",
    emptyCave: "./Assets/Music/emptyCave.mp3",
    run: "./Assets/Music/run.mp3",
    sunday: "./Assets/Music/sunday.mp3",
    sundayNoMusic: "./Assets/Music/sundayNoMusic.mp3",
    // SFX
    closingGate: "./Assets/Sounds/doorClosing.mp3",
    breakingWood: "./Assets/Sounds/breakingWood.mp3",
    creakingWood: "./Assets/Sounds/creakingWood.mp3",
    demonicScream: "./Assets/Sounds/demonicScream.mp3",
    droppingRocks: "./Assets/Sounds/droppingRocks.mp3",
    fall: "./Assets/Sounds/fall.mp3",
    fallingRocks: "./Assets/Sounds/fallingRocks.mp3",
    impact: "./Assets/Sounds/impact.mp3",
    jackhammer: "./Assets/Sounds/jackhammer.mp3",
    monsterScream: "./Assets/Sounds/monsterScream.mp3",
    monsterScream2: "./Assets/Sounds/monsterScream2.mp3",
    pistolShot: "./Assets/Sounds/pistolShot.mp3",
    splash: "./Assets/Sounds/splash.mp3",
    vibration: "./Assets/Sounds/vibration.mp3",
    alarm: "./Assets/Sounds/alarm.mp3",
    explosion: "./Assets/Sounds/explosion.mp3"
  };

  export let locations = {
    kidRoom: {
      name: "Kid room",
      background: "./Images/Background/kid_room.png"
    },
    livingRoom: {
      name: "Living room",
      background: "./Images/Background/living_room.png"
    },
    street: {
      name: "Street",
      background: "./Images/Background/Street.png"
    },
    cave: {
      name: "Cave",
      background: "./Images/Background/cave.png"
    },
    caveTwo: {
      name: "Cave Two",
      background: "./Images/Background/CaveTwo.png"
    },
    garage: {
      name: "Garage",
      background: "./Images/Background/garage.png"
    },
    graveyard: {
      name: "Graveyard",
      background: "./Images/Background/graveyard.png"
    },
    mineEntrance: {
      name: "Mine entrance",
      background: "./Images/Background/mineEntrance.png"
    },
    mineShaft: {
      name: "Mine shaft",
      background: "./Images/Background/mineShaft.png"
    },
    mineShaftTwo: {
      name: "Mine shaft two",
      background: "./Images/Background/mineShaftTwo.png"
    },
    newShaft: {
      name: "New Shaft",
      background: "./Images/Background/newShaft.png"
    },
    supermarket: {
      name: "Supermarkt",
      background: "./Images/Background/supermarket.png"
    },
    insideSinkhole: {
      name: "Inside of the sinkhole",
      background: "./Images/Background/insideSinkhole.png"
    },
    maze: {
      name: "Maze",
      background: "./Images/Background/maze.png"
    },
    spaceship: {
      name: "Spaceship",
      background: "./Images/Background/spaceship.png"
    },
    sinkhole: {
      name: "Spaceship",
      background: "./Images/Background/sinkhole.png"
    },

    // Chapter Backgrounds
    begin: {
      name: "Begin",
      background: "./Images/Background/Chapter/begin.png"
    },
    chapterOne: {
      name: "Chapter One",
      background: "Images/Background/Chapter/chapterOne.png"
    },
    chapterTwo: {
      name: "Chapter Two",
      background: "Images/Background/Chapter/chapterTwo.png"
    },
    chapterThree: {
      name: "Chapter Three",
      background: "Images/Background/Chapter/chapterThree.png"
    },
    chapterFour: {
      name: "Chapter Four",
      background: "Images/Background/Chapter/chapterFour.png"
    },
    chapterfive: {
      name: "Chapter five",
      background: "Images/Background/Chapter/chapterfive.png"
    },
    chapterSix: {
      name: "Chapter Six",
      background: "Images/Background/Chapter/chapterSix.png"
    },
    chapterSeven: {
      name: "Chapter Seven",
      background: "Images/Background/Chapter/chapterSeven.png"
    },
    intro: {
      name: "Intro",
      background: "Images/Background/Chapter/intro.png"
    },
    blanko: {
      name: "Blanko",
      background: "Images/Background/Chapter/blanko.png"
    },
    gameOver: {
      name: "Game Over",
      background: "Images/Background/Chapter/gameOver.png"
    }

  };

  export let characters = {
    narrator: {
      name: ""
    },
    ben: {
      name: "Ben",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        confident: "Images/Characters/Ben/Ben_confident.png",
        moreConfident: "Images/Characters/Ben/Ben_more_confident.png",
        normal: "Images/Characters/Ben/Ben_normal.png",
        ohman: "Images/Characters/Ben/Ben_ohman.png",
        sad: "Images/Characters/Ben/Ben_sad.png",
        thinking: "Images/Characters/Ben/Ben_thinking.png"
      }
    },
    maria: {
      name: "Maria",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        angry: "Images/Characters/Maria/Maria_angry.png",
        neutral: "Images/Characters/Maria/Maria_neutral.png",
        happy: "Images/Characters/Maria/Maria_happy.png",
        pleased: "Images/Characters/Maria/Maria_pleased.png",
        sad: "Images/Characters/Maria/Maria_sad.png",
        verySad: "Images/Characters/Maria/Maria_very_sad.png"
      }
    },
    valentin: {
      name: "Valentin",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        solution: "Images/Characters/Valentin/Valentin_solution.png",
        giveUp: "Images/Characters/Valentin/Valentin_giveUp.png",
        mysterious: "Images/Characters/Valentin/Valentin_mysterious.png",
        normal: "Images/Characters/Valentin/Valentin_normal.png",
        sad: "Images/Characters/Valentin/Valentin_sad.png",
        smile: "Images/Characters/Valentin/Valentin_smile.png"
      }
    },
    andrea: {
      name: "Andrea",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        argue: "Images/Characters/Weitere/Andrea_argue.png",
        mad: "Images/Characters/Weitere/Andrea_mad.png",
        normal: "Images/Characters/Weitere/Andrea_normal.png",
        ugh: "Images/Characters/Weitere/Andrea_ugh.png"
      }
    },
    polizistin: {
      name: "Polizeibeamtin",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        eyes_closed: "Images/Characters/Weitere/polizistin_eyes_closed.png",
        sorry: "Images/Characters/Weitere/polizistin_sorry.png",
        normal: "Images/Characters/Weitere/polizistin_normal.png"
      }
    },
    paula: {
      name: "Paula",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        eyes_closed: "Images/Characters/Weitere/paula_eyes_closed.png",
        sorry: "Images/Characters/Weitere/paula_sorry.png",
        normal: "Images/Characters/Weitere/paula_normal.png"
      }
    },
    trabajoEscribo: {
      name: "Trabajo Escribo",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Images/Characters/Weitere/trabajoEscribo.png"
      }
    }
  };

  export let items = {
    feuerzeug: {
      name: "Feuerzeug",
      description: "Gut um etwas an zu zünden.",
      image: "Images/Items/feuerzeug.png",
      inInventory: false,
      static: true
    },
    seil: {
      name: "Seil",
      description: "Perfekt um runter oder hoch zu klettern",
      image: "Images/Items/seil.png",
      inInventory: false,
      static: false
    },
    tagebuch: {
      name: "Tagebuch",
      description: "Perfekt für wichtige Infos",
      image: "Images/Items/tagebuch.png",
      inInventory: false,
      static: true
    },
    taschenlampe: {
      name: "Taschenlampe",
      description: "Sorgt für Licht, wenn es mal dunkel wird.",
      image: "Images/Items/taschenlampe.png",
      inInventory: false,
      static: true
    },
    wanderschuhe: {
      name: "Wanderschuhe",
      description: "Perfekt für ein spannendes Abenteuer",
      image: "Images/Items/wanderSchuh.png",
      inInventory: false,
      static: true
    },
    wasserflasche: {
      name: "Wasserflasche",
      description: "Gut für den Durst zwischend durch",
      image: "Images/Items/wasserflasche.png",
      inInventory: false,
      static: true
    },
    muenzen: {
      name: "Münzen",
      description: "Gut für den Durst zwischend durch",
      image: "Images/Items/muzen.png",
      inInventory: false,
      static: false
    },
    geldSack: {
      name: "Sack voller Münnzen",
      description: "Ist schon fast zu schwer, um zu tragen",
      image: "Images/Items/geldsack.png",
      inInventory: false,
      static: false
    }
  };

  export let newPositions = {
    bottomleftMaria: new FudgeStory.Position(950, -540),
    bottomleft: new FudgeStory.Position(350, -540),
    bottomright: new FudgeStory.Position(-900, -550),
    bottomcenter: new FudgeStory.Position(-50, -540),
    rightout: new FudgeStory.Position(2470, -540),
    leftout: new FudgeStory.Position(-2470, -540)
  };

  export function rightFade(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positions.bottomright, color: ƒS.Color.CSS("", 0)},
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function leftFade(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomright, color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positions.bottomleft, color: ƒS.Color.CSS("", 0) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function show(): ƒS.AnimationDefinition {
    return {
      start: {  color: ƒS.Color.CSS("", 1) },
      end: {  color: ƒS.Color.CSS("", 1) },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }


  export let dataForSave = {
    nameProtagonist: "",
    coinScore: 0,
    itemsOne: "",
    itemsTwo: "",
    itemsThree: "",
    itemsFour: "",
    itemsFive: ""
  };



  //Menü

  function credits(): void {
    ƒS.Text.print("<b>Story:</b> <br>\
    Felix Iltgen <br><br>\
    <b>Charaktere:</b> <br>\
    Itch.io <br>\
    <a href='https://duokhay.itch.io/green-haired-girl-free-character-sprite'>Maria</a> <br>\
    <a href='https://nsaid.itch.io/blonde-guy'>Ben</a><br>\
    <a href='https://nsaid.itch.io/glasses-guy'>Valentin</a><br>\
    <a href='https://nsaid.itch.io/office-lady-3'>Paula</a><br>\
    <a href='https://xiael.itch.io/sprite-oswald'>Pirat</a><br><br>\
    <b>Hintergründe:</b> <br>\
    Felix Iltgen by <a href='https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F'>midjourney</a> <br>\
    <b>Musik & Sounds</b>\
    By <a href='https://github.com/SamuelKasper'>Samuel Kasper</a> & <a href='https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=46195'>Pixabay</a><br><br>\
    <b>Programmierung:</b><br>\
    Felix Iltgen<br>\
    <b>Weitere:</b><br>\
    Items by <a href='https://www.flaticon.com/de/kostenlose-icons'> Freepik - Flaticon</a><br>\
    Book Png vectors by  <a href='https://lovepik.com/images/png-book.html'>Lovepik.com</a>");
  }

  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  };

  let gameMenu: ƒS.Menu; 
  let menuIsOpen: boolean = false;
  
  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.credits:
        credits();
    }
  }
  
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
      case ƒ.KEYBOARD_CODE.I:
        await ƒS.Inventory.open();
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSS");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      
      { scene: firstScene, name: "First scene"},
      { scene: secondScene, name: "Second scene"},
      { scene: thirdScene, name: "Thrid scene"},
      { scene: fourthScene, name: "Fourth scene"},
      { scene: fifthScene, name: "Fifth scene"},
      { scene: sixthScene, name: "Sixth scene"},
      { scene: seventhScene, name: "Seventh scene"},
      { scene: eighthScene, name: "Eighth scene"},
      { scene: ninthScene, name: "Ninth scene"},
      { scene: tenthScene, name: "Tenth scene"},
      
      //Selcet Items
      { id: "withDairy", scene: itemSelcetionDairy, name: "Item selcetion with Dairy option"},
      { id: "noDairy", scene: itemSelcetionNoDairy, name: "Item selcetion without Dairy option"},
      
      //Cotinue normal path
      { id: "afterItemSelection", scene: afterItemSelection, name: "First scene after Item selection"},

      //Start chapter three
      { id: "chapterThree", scene: startChapterThree, name: "Start Chapter three"},

      { id: "chapterThreeGood", scene: chapterThreeGood, name: "Chapter three good path", next: "chapterFour"},
      { id: "chapterThreeMid", scene: chapterThreeMid, name: "Chapter three mid path"},

      //Start chapter four
      { id: "chapterFour", scene: startChapterFour, name: "Start Chapter four"},
      { id: "chapterFourGood", scene: chapterFourGood, name: "Start Chapter four"},
      
      { id: "chapterFourGoodTwo", scene: chapterFourGoodTwo, name: "Start Chapter four"},
      { id: "chapterFourMid", scene: chapterFourMid, name: "Start Chapter four"},
      { id: "chapterFourMidTwo", scene: chapterFourMidTwo, name: "Start Chapter four part two", next: "chapterFiveMid"},
      
      //Start chapter five
      { id: "chapterFiveGoodOne", scene: chapterFiveGoodOne, name: "Start chapter five good path"},
      { id: "chapterFiveGoodTwo", scene: chapterFiveGoodTwo, name: "Next good path in chapter five ", next: "GOODPATH" },

      { id: "chapterFiveMid", scene: chapterFiveMid, name: "Start chapter five mid path"},
      { id: "chapterFiveMidTwo", scene: chapterFiveMidTwo, name: "continue mid path"},
      { id: "chapterFiveMidThree", scene: chapterFiveMidThree, name: "continue mid path", next: "mediumPathOne"},
      
      { id: "chapterFiveBad", scene: chapterFiveBad, name: "Chapter three bad path", next: "badPath"},

      //Medium Path
      { id: "mediumPathOne", scene: mediumPathOne, name: "Start medium Path"},
      { id: "midMazeRight", scene: midMazeRight, name: "maze right path "},
      { scene: midMazeRightOne, name: "maze right path ", next: "lastMid"},

      { id: "midMazeLeft", scene: midMazeLeft, name: "maze left path "},
      { scene: midMazeLeftOne, name: "maze left path "},

      { id: "lastMid", scene: lastMid, name: "Last part in Mid path ", next: "empty"},


      //Good Path
      { id: "GOODPATH", scene: goodPath, name: "Start good path"},
      { id: "GOODPATHTwo", scene: goodPathTwo, name: "continue good path"},

      { id: "GOODMazeRight", scene: goodMazeRight, name: "continue good path"},

      { id: "GOODMazeLeft", scene: goodMazeLeft, name: "continue good path"},
      { scene: mazePartTwo, name: "continue good path"},
      { scene: mazePartThree, name: "continue good path"},
      { scene: mazePartFour, name: "continue good path"},
      
      { scene: afterMazeGood, name: "continue good path" },
      
      { scene: finalGood, name: "Last scene in good path", next: "empty" },

      //Bad Path
      { id: "badPath", scene: badPath, name: "Start bad Path", next: "empty" },


      //bad endings & paths
      { id: "chapterThreeBad", scene: ChapterThreeBad, name: "Chapter three bad path" },
      { id: "afterItemSelectionBad", scene: afterItemSelectionBad, name: "First scene after Item selection", next: "empty"},

      { id: "gameOverChapterFourOne", scene: gameOverChapterFourOne, name: "Game over chapter four", next: "empty" },
      { id: "gameOverChapterFourTwo", scene: gameOverChapterFourTwo, name: "Chapter three bad path", next: "empty" },
      { id: "gameOverChapterFourThree", scene: gameOverChapterFourThree, name: "Chapter three bad path", next: "empty" },

      { id: "gameOverChapterFiveTwo", scene: gameOverChapterFiveTwo, name: "Game over chapter five", next: "empty" },

      //Empty scene
      { id: "empty", scene: empty, name: "The visual novel ends here" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
    ƒS.Speech.hide();
  }
}