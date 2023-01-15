namespace myNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
   
  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "",
      edge: 1
    }
  };

  export let sound = {
    // themes

    // SFX
    
  };

  export let locations = {
    kidRoom: {
      name: "Kid room",
      background: "Images/Background/kid_room.png"
    },
    livingRoom: {
      name: "Living room",
      background: "./Images/Background/living_room.png"
    },
    street: {
      name: "Street",
      background: "Images/Background/Street.png"
    },
    cave: {
      name: "Cave",
      background: "Images/Background/cave.png"
    },
    caveTwo: {
      name: "Cave Two",
      background: "Images/Background/CaveTwo.png"
    },
    garage: {
      name: "Garage",
      background: "Images/Background/garage.png"
    },
    graveyard: {
      name: "Graveyard",
      background: "Images/Background/graveyard.png"
    },
    mineEntrance: {
      name: "Mine entrance",
      background: "Images/Background/mineEntrance.png"
    },
    mineShaft: {
      name: "Mine shaft",
      background: "Images/Background/mineShaft.png"
    },
    mineShaftTwo: {
      name: "Mine shaft two",
      background: "Images/Background/mineShaftTwo.png"
    },
    newShaft: {
      name: "New Shaft",
      background: "Images/Background/newShaft.png"
    },
    sinkhole: {
      name: "Sinkhole",
      background: "Images/Background/newShaft.png"
    },
    sinkholeInside: {
      name: "Sinkhole inside",
      background: "Images/Background/newShaft.png"
    },
     /*
    Sinkloch
    Im Loch
    Labyrinth
    Schiff
    */
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
        confident: "Images/Characters/Ben/Ben_confident",
        moreConfident: "Images/Characters/Ben/Ben_more_confident",
        normal: "Images/Characters/Ben/Ben_normal",
        ohman: "Images/Characters/Ben/Ben_ohman",
        sad: "Images/Characters/Ben/Ben_sad",
        thinking: "Images/Characters/Ben/Ben_thinking"
      }
    },
    maria: {
      name: "Maria",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        angry: "Images/Characters/Maria/Maria_angry.png",
        neutral: "Images/Characters/Maria/Maria_neutral.png",
        neutralEyesClosed: "Images/Characters/Maria/Maria_neutralEyesClosed.png",
        pleased: "Images/Characters/Maria/Maria_pleased.png",
        sad: "Images/Characters/Maria/Maria_sad.png",
        shock: "Images/Characters/Maria/Maria_shock.png"
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
    }
  };
  export let newPositions = {
    bottomleft: new FudgeStory.Position(950, -540),
    bottomright: new FudgeStory.Position(-900, -550),
    bottomcenter: new FudgeStory.Position(0, -540),
    rightout: new FudgeStory.Position(2470, -540),
    leftout: new FudgeStory.Position(-2470, -540)
  };


  export let dataForSave = {
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: firstScene, name: "First scene", id: "test"}
    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
    ƒS.Speech.hide();
  }
}