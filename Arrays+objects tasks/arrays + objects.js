/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) �
*/ 

/*
let tip;

function calcTip(bill) {
    if (bill >= 50 && bill <=300){
        tip = bill * 0.15;
    }else{
        tip = bill * 0.2
    }
    return tip;
}


const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const arrTotal = [(tips[0] + bills[0]), (tips[1] + bills[1]), (tips[2] + bills[2])];

console.log(bills,tips,arrTotal);
*/

///// Challenge //////
// Jonas has 3 friends, and his best friend is called  Michael.


/*
const Jonas = {
    firstName : 'jonas',
    lastName : 'Schmedtmann',
    age : 37 ,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven']
};

console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is called ${Jonas.friends[0]}`);
*/

////////// Challenge ////////
// Jonas is a 46 - year old teacher and he has a driver license
/*
const Jonas = {
    firstName : 'jonas',
    lastName : 'Schmedtmann',
    birthYear : 1991,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven'],
    hasdriverLisence : true,

    calcAge : function(){
        this.age = 2037 - (this.birthYear);
        return this.age
    },
    getSummary : function(){
        return `${this.firstName} is a ${this.calcAge()}- years old ${this.job} and he has ${ this.hasdriverLisence ? 'a' : 'no'} driver license`

    },

};

console.log(Jonas.getSummary());
*/

/////////////////////// challnege /////////////
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
*/

const mark = {
    fullName : 'Mark Miller', 
    markMass : 78,
    markHeight: 1.69,
    calcBMI: function (){
       this.bmi =  this.markMass / (this.markHeight ** 2);
       return this.bmi;
    }
}

const john = {
    fullName : 'John Smith', 
    johnMass : 92,
    johnHeight: 1.95,
    calcBMI: function (){
       this.bmi =  this.johnMass / (this.johnHeight ** 2);
       return this.bmi;
    }

}
    if(john.bmi > mark.bmi){
        console.log(`John's BMI ${this.johnBmi} is higher than Mark's ${this.markBmi}!`);
    }else if(mark.bmi > john.bmi){
        console.log(`Mark's BMI ${mark.bmi} is higher than Johs's ${john.bmi}!`);
    }else{
        console.log("Their bmi is equal");
    }

