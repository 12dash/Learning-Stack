var rect = require('./rectangle');

function solveReact(l,b) {
    console.log("Solving for reactangle with l = "+l+" and b = "+b);
    rect(l,b, (err, rectangle) => {
        if (err){
            console.log("Error encountered : ", err.message);
        }
        else{
            console.log("The area of rectangle : " + rectangle.area())
            console.log("The perimeter of rectangle : " + rectangle.perimeter())
        }
    })
    console.log("The statment is after the console.log");
}

solveReact(2,4);
solveReact(3,5);
solveReact(0,5);
solveReact(-3,5);