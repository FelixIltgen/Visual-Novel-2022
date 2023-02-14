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
        supermarket: {
            name: string;
            background: string;
        };
        insideSinkhole: {
            name: string;
            background: string;
        };
        maze: {
            name: string;
            background: string;
        };
        spaceship: {
            name: string;
            background: string;
        };
        sinkhole: {
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
        blanko: {
            name: string;
            background: string;
        };
        gameOver: {
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
                happy: string;
                pleased: string;
                sad: string;
                verySad: string;
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
        polizistin: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                eyes_closed: string;
                sorry: string;
                normal: string;
            };
        };
        paula: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                eyes_closed: string;
                sorry: string;
                normal: string;
            };
        };
        trabajoEscribo: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    let items: {
        feuerzeug: {
            name: string;
            description: string;
            image: string;
            inInventory: boolean;
            static: boolean;
        };
        seil: {
            name: string;
            description: string;
            image: string;
            inInventory: boolean;
            static: boolean;
        };
        tagebuch: {
            name: string;
            description: string;
            image: string;
            inInventory: boolean;
            static: boolean;
        };
        taschenlampe: {
            name: string;
            description: string;
            image: string;
            inInventory: boolean;
            static: boolean;
        };
        wanderschuhe: {
            name: string;
            description: string;
            image: string;
            inInventory: boolean;
            static: boolean;
        };
        wasserflasche: {
            name: string;
            description: string;
            image: string;
            inInventory: boolean;
            static: boolean;
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
    function ChapterThreeBad(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function afterItemSelection(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function afterMazeGood(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function badPath(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterFiveBad(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterFiveGoodOne(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterFiveGoodTwo(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterFiveMid(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterFiveMidThree(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterFiveMidTwo(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function gameOverChapterFourTwo(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function gameOverChapterFourThree(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterFourGood(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterFourGoodTwo(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterFourMid(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterFourMidTwo(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterThreeGood(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function chapterThreeMid(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function eighthScene(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function fifthScene(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function finalGood(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function firstScene(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function fourthScene(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function gameOverChapterFiveTwo(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function gameOverChapterFourOne(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function goodMazeRight(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function goodMazeLeft(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function goodPath(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function goodPathTwo(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function itemSelcetionDairy(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function itemSelcetionNoDairy(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function lastMid(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function mazePartFour(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function mazePartThree(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function mazePartTwo(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function mediumPathOne(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function midMazeLeft(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function midMazeLeftOne(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function midMazeRight(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function midMazeRightOne(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function ninthScene(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function secondScene(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function seventhScene(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function sixthScene(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function startChapterFour(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function startChapterThree(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function tenthScene(): ƒS.SceneReturn;
}
declare namespace myNovel {
    function thirdScene(): ƒS.SceneReturn;
}
