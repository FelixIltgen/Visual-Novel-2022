declare namespace Template {
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
    let locations: {};
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
            origin: string;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        valentin: {
            name: string;
            origin: string;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function firstScene(): ƒS.SceneReturn;
}
