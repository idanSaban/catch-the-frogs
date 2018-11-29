const Game = () => {

    //frogs array that contain the frogs
    const _frogs = [];
    //level conter
    let levelsCount = 4;
    //levelTimeOut=3
    let levelTimeOut = 2;


    let frogsIDCounter = 0
    const randomColor = () => {
        let rgb = `rgb(`
        rgb += `${Math.floor(Math.random() * 255)},`;
        rgb += `${Math.floor(Math.random() * 255)},`;
        rgb += `${Math.floor(Math.random() * 255)})`;
        return rgb
    }
    const randomSize=()=>{
        const size=Math.floor(20+Math.random()*20);
        return size
    }
    const randomPosition = ()=>{
        const position={
            x:Math.floor(Math.random()*600),
            y:Math.floor(Math.random()*600)
        }
        console.log(position)
        return position
    }
    //create new frog
    const newFrog = () => {
        console.log("new frog created")
        frogsIDCounter++;
        const frog = {
            id: frogsIDCounter,
            size: randomSize(),
            position:randomPosition(),
            color: randomColor()
        }
        console.log(frog)
        return frog;
    }
    //newLevel function- push new frog , all counters++
    const newLevel = () => {
        frogsIDCounter=0;
        levelTimeOut++;
        levelsCount++;
        console.log(`wellcome to level ${levelsCount}`);
        for (let i = 0; i < levelsCount; i++) {
            _frogs.push(newFrog());
        }

    }

    //frog clicked
    const removeFrog = (id) => {
        console.log(`remove frog ${id}`)
        for (i in _frogs) {
            if (_frogs[i].id === id) {
                return _frogs.splice(i, 1)
            }
        }
    }

    // //startGame -
    // const startGame=()=>{
    //     newLevel()
    //     let frogsOnField = levelsCount;
    //     setTimeout((levelTimeOut*1000),function(){
    //         if(frogsOnField>0){
    //             alert("game over")
    //             return
    //         }else{
    //             startGame();
    //         }
    //     })
    // }

    // cosnt randomPosition = () =>

    // cosnt randomSize = () =>

    // const randomColor = () =>


    const reset = () => {
        levelsCount = 0;
        levelTimeOut = 2;
        _frogs.splice(0, _frogs.length);
    }



    const getFrogs = () => _frogs;
    return {
        getFrogs: getFrogs,
        removeFrog: removeFrog,
        newLevel: newLevel,
        reset: reset
    }

}

// console.log(frogs.getFrogs())
// frogs.removeFrog(1)
// console.log(frogs.getFrogs())
// frogs.newLevel()
// console.log(frogs.getFrogs())
// frogs.removeFrog(1)
// frogs.removeFrog(2)
// console.log(frogs.getFrogs())
// frogs.newLevel()
// console.log(frogs.getFrogs())
// frogs.removeFrog(1)
// frogs.removeFrog(2)
// frogs.removeFrog(3)
// console.log(frogs.getFrogs())