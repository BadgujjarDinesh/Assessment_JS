

class Person {
   
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
}


let person = new Person('John', 'Doe');
console.log(person.firstName);// it will show error as we can't access private members outside the class.