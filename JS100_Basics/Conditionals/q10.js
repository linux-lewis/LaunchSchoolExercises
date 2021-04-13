let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

/*
** The above will log true to the console. In this case isMoving evaluates to true if breaking force is
** less than acceleration (it is), and if either speed or acceleration is > 0, which acceleration is. 