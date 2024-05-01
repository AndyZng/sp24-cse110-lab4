for (let car in stats) {
    if (car.startsWith('r') || stats[car] % 2 == 1){
        console.log(stats[car]);
    }
}