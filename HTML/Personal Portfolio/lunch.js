//Randomizer do decide that to DoorDash for lunch

function lunch() {
let x = Math.floor(Math.random() * 5);
    if (x === 0) {
        console.log('McDonalds');
    }
    else if (x === 1){
        console.log('TacoBell');
    }
    else if (x === 2){
        console.log('Subway');
    }
    else if (x === 3){
        console.log('Sonic');
    }
    else if (x === 4){
        console.log('DQ');
    }
    else {
        console.log('Wendys')
    }
}

lunch()

