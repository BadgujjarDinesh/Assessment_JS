  
class Employee2 {  
    protected EmpId: number;  
    EmpName: string;  

    constructor(ID: number, Name: string ){

        this.EmpId=ID;
        this.EmpName=Name;

    }
}  

class ITEmployee extends Employee2{
    private Department:string;

    constructor(ID: number, dept:string, Name:string){
        super(ID, Name);
        this.Department=dept;

    }
}
  let emp1 = new ITEmployee(101,"Dinesh","CSE");
  emp1.EmpId=101;// will show compile time error because it can be accessible within same class or its subclass
