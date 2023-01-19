declare namespace myNovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        fade: {
            duration: number;
            alpha: string;
            edge: number;
        };
        leftFade: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        cave: string;
        emptyCave: string;
        run: string;
        sunday: string;
        closingGate: string;
    };
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
        begin: {
            name: string;
            background: string;
        };
        chapterOne: {
            name: string;
            background: string;
        };
        chapterTwo: {
            name: string;
            background: string;
        };
        chapterThree: {
            name: string;
            background: string;
        };
        chapterFour: {
            name: string;
            background: string;
        };
        chapterfive: {
            name: string;
            background: string;
        };
        chapterSix: {
            name: string;
            background: string;
        };
        chapterSeven: {
            name: string;
            background: string;
        };
        intro: {
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
        andrea: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                argue: string;
                mad: string;
                normal: string;
                ugh: string;
            };
        };
    };
    let newPositions: {
        bottomleftMaria: ƒ.Vector2;
        bottomleft: ƒ.Vector2;
        bottomright: ƒ.Vector2;
        bottomcenter: ƒ.Vector2;
        rightout: ƒ.Vector2;
        leftout: ƒ.Vector2;
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
declare namespace myNovel {
    function secondScene(): ƒS.SceneReturn;
}
