# Noteable ES6 changes.

The purpose of this is to review basic ES6 syntax.

##Types:

Var: 
    - variables are inferior because they are function scoped.
    - var let you reuse variable names

Let:
    - variables are block scoped. 
    - let does not let you reuse variable names

Const: 
    - Obiouvsly a const, cant update, cannot resign
    - Const does still have block scoped.
    - Const objects are not resign, however the objects properties are reasignable

##Arrow Functions:

    common es6 functions include: .map, .filter

    Explicit Return:
    const updatedIntegers = integers.map((number) => {
        return number + 1;
    });

    Implicit Return: (since we are not specifying it assumes whatever we are doing we are returning)
    const updatedIntegers = integers.map((number) => number + 1);

    If no arguments for arrow function, you must have ():
    const updatedIntegers = integers.map( () => { "bob" });

    If one argument you can do 
    const updatedIntegers = integers.map(number => number + 1);

##Template Strings:
    Using `
    let name = "Bill";
    let age = "20";
    const sentence = `My name is ${name} and I am ${age*2} years old`;

##Prototype Methods:
    Object: collection of properties associated with a variable

    Constructor:
    ```
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    //Prototype methods:
    //when creating a new object of type person it is also 
    //going to inherit the prototype of this constructor
    //this is more ES5
    Person.prototype.speak = function() {
        console.log(`Hi my name ${this.name}`);
    }

    //when invoking creation a new object with a function 
    //constructor you must declare the new operator
    const bill = new Person('Bull', 50);
    bill.speak();
    ```

##Classes:
    Creating an object with es6 constructor
    ```
    class Person {
        constructor(name, age, children) {
            this.name = name;
            this.age = age;
            this.children = children;
        }

        //methods!!
        speak() {
            console.log(`Hi my name ${this.name}`);
        }

        birth(child){
            this.children.push(child);
        }
    }

    const bill = new Person("Bull", 20, ['sean', 'steph']);
    bill.speak();
    bill.birth('jess');
    console.log(bill.children);
    ```


## Spread Operator:
    ```
    const names = ["Jon", "Bill", "Santa"];
    const moreNames = ["William", "Paul", "Mike"];
    console.log(...names);
    console.log(...names, 'Gio', ...moreNames);
    ```
    The crappy way would be to use .concat