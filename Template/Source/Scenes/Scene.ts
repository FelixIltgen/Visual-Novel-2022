namespace myNovel {
  export async function Scene(): ƒS.SceneReturn {
    console.log("Test");

    await ƒS.Location.show(locations.livingRoom);
    await ƒS.update();


  }
}