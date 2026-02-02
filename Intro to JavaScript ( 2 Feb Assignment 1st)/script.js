function simpleInterest() {
    var amount = Number(prompt("Enter principal amount : "));

    var rate = Number(prompt("Enter rate of interest : "));

    var year = Number(prompt("Enter number of year : "));

    if (amount && rate && year) {
        var SI = (amount * rate * year) / 100;

        console.log(`Simple Interest for ${year} years for the amount of ${amount} with rate of interest ${rate} is ${SI}`);

        alert("Simple Interest is : " + SI);
    } else {
        alert("Enter valid input")
    }
}



function checkPalindrome() {
    var str = prompt("Enter a string");


    var newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();


    var revStr = newStr.split("").reverse().join("");

    if (newStr === revStr) {
        console.log("Palindrome string");
        alert("Palindrome string")
    } else {
        console.log("Not a palindrome");
        alert("Not a palindrome")
    }

}



function areaOfCircle() {
    var radius = Number(prompt("Enter radius of Circle : "))
    var area = Math.PI * radius * radius;

    if (radius) {
        alert(`Area of circle is ${area}.`)

        console.log('Area of circle is ${area}.')
    }
}




function copyObjectMethods() {


    console.log(`Question 4 : Copy information of one object to another and log it to console.`)
    console.log("Answer 4 : ")
    var obj = {
        name: "Rajneesh",
        age: 30,
        skills: ["JS", "HTML", "CSS"]
    };

    console.log("Original Object:", obj);

    var spreadCopy = { ...obj };
    console.log(" Spread Operator {...}:", spreadCopy);

    console.log();
    var jsonCopy = JSON.parse(JSON.stringify(obj));
    console.log(" JSON Parse/Stringify:", jsonCopy);


    alert("Open Console to see output");
}


function manageEmployees() {

    console.log(`Question 5 : create a list of objects of Employee with info as follow `);

    console.log(`part a : Name, age, salary ,DOB`)
    console.log(`Answer a : Created list of object in script.js file. `)

    const employees = [
        { name: "Rajneesh Singh", age: 22, salary: 4500, dob: "02-03-2003" },
        { name: "Tanay Singh", age: 23, salary: 6500, dob: "12-06-2001" },
        { name: "Shivang Garg", age: 25, salary: 25000, dob: "01-02-2001" },
        { name: "Sourav Goyal", age: 26, salary: 950, dob: "02-03-1999" },
        { name: "Himanshu", age: 22, salary: 3500, dob: "03-02-2003" },

    ]


    console.log(" part b : Salary greater than 5000 \n");
    console.log(" Answer b : ")
    console.log("The filter function is used to get salary greater than 5k")
    const richEmp = employees.filter(emp => emp.salary > 5000);
    console.log(richEmp);




    console.log("part c : Group by Age \n");
    console.log("Answer c : forEach is used ")

    var groupedByAge = {};

    employees.forEach(emp => {

        if (!groupedByAge[emp.age]) {
            groupedByAge[emp.age] = [];
        }

        groupedByAge[emp.age].push(emp);
    });

    console.log(groupedByAge);


    console.log("part d : Low Salary & Age > 20 (Salary Incremented 5x)");
    console.log("Anser d : filter and map methods are used  ")

    const empWithAppraisel = employees
        .filter(emp => emp.salary < 1000 && emp.age > 20)
        .map(emp => {
            return {
                ...emp,
                salary: emp.salary * 5,
            };
        });

    console.log(empWithAppraisel);

    alert("Open Console to see output");
}