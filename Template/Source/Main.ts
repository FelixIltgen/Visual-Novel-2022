namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template starting");

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
      background: "Images/Background/kid_room"
    },
    livingRoom: {
      name: "Living room",
      background: "Images/Background/living_room"
    },
    street: {
      name: "Street",
      background: "Images/Background/Street"
    },
    cave: {
      name: "Cave",
      background: "Images/Background/cave"
    },
    caveTwo: {
      name: "Cave Two",
      background: "Images/Background/CaveTwo"
    },
    garage: {
      name: "Garage",
      background: "Images/Background/garage"
    },
    graveyard: {
      name: "Graveyard",
      background: "Images/Background/graveyard"
    },
    mineEntrance: {
      name: "Mine entrance",
      background: "Images/Background/mineEntrance"
    },
    mineShaft: {
      name: "Mine shaft",
      background: "Images/Background/mineShaft"
    },
    mineShaftTwo: {
      name: "Mine shaft two",
      background: "Images/Background/mineShaftTwo"
    },
    newShaft: {
      name: "New Shaft",
      background: "Images/Background/newShaft"
    },
    sinkhole: {
      name: "Sinkhole",
      background: "Images/Background/newShaft"
    },
    sinkholeInside: {
      name: "Sinkhole inside",
      background: "Images/Background/newShaft"
    }
    /*
    Sinkloch
    Im Loch
    Labyrinth
    Schiff
    */
  };

  export let characters = {
    narrator: {
      name: ""
    },
    ben: {
      name: "Ben",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        confident: "Images/Background/Ben/Ben_confident",
        moreConfident: "Images/Background/Ben/Ben_more_confident",
        normal: "Images/Background/Ben/Ben_normal",
        ohman: "Images/Background/Ben/Ben_ohman",
        sad: "Images/Background/Ben/Ben_sad",
        thinking: "Images/Background/Ben/Ben_thinking"
      }
    },
    maria: {
      name: "Maria",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        angry: "Images/Background/Maria/Maria_angry",
        neutral: "Images/Background/Maria/Maria_neutral",
        neutralEyesClosed: "Images/Background/Maria/Maria_neutralEyesClosed",
        pleased: "Images/Background/Maria/Maria_pleased",
        sad: "Images/Background/Maria/Maria_sad",
        shock: "Images/Background/Maria/Maria_shock"
      }
    },
    valentin: {
      name: "Valentin",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        solution: "Images/Background/Valentin/Valentin_solution",
        giveUp: "Images/Background/Valentin/Valentin_giveUp",
        mysterious: "Images/Background/Valentin/Valentin_mysterious",
        normal: "Images/Background/Valentin/Valentin_normal",
        sad: "Images/Background/Valentin/Valentin_sad",
        smile: "Images/Background/Valentin/Valentin_smile"
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}