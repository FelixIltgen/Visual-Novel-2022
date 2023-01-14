declare namespace myNovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {};
    let locations: {
        kidRoom: {
            name: string;
            background: string;
        };
        livingRoom: {
            name: string;
            background: string;
        };
        street: {
            name: string;
            background: string;
        };
        cave: {
            name: string;
            background: string;
        };
        caveTwo: {
            name: string;
            background: string;
        };
        garage: {
            name: string;
            background: string;
        };
        graveyard: {
            name: string;
            background: string;
        };
        mineEntrance: {
            name: string;
            background: string;
        };
        mineShaft: {
            name: string;
            background: string;
        };
        mineShaftTwo: {
            name: string;
            background: string;
        };
        newShaft: {
            name: string;
            background: string;
        };
        sinkhole: {
            name: string;
            background: string;
        };
        sinkholeInside: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        ben: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                confident: string;
                moreConfident: string;
                normal: string;
                ohman: string;
                sad: string;
                thinking: string;
            };
        };
        maria: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                neutral: string;
                neutralEyesClosed: string;
                pleased: string;
                sad: string;
                shock: string;
            };
        };
        valentin: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                solution: string;
                giveUp: string;
                mysterious: string;
                normal: string;
                sad: string;
                smile: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace myNovel {
    function Scene(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function firstScene(): ƒS.SceneReturn;
}
