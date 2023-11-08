// Write a JavaScript program that creates a class called 'Employee' 
// with properties for name and salary. Include a method to
// calculate annual salary. Create a subclass called 'Manager' 
// that inherits from the 'Employee' class and adds an additional
// property for department. Override the annual salary calculation 
// method to include bonuses for managers. Create two instances of 
// the 'Manager' class and calculate their annual salary.

class Employee{
	constructor(name,salary){
		this.name=name;
		this.salary=salary;
	}
	calculate(){
	    return this.salary*12
		
	}
}
let ansalary=new Employee("santhiya",5000,"developer")


class Manager extends Employee{
	constructor(name,salary,department){
		super(name,salary);
		this.department=department;
	}
	bonuses(b){
		let bon=ansalary.calculate()+b;
		console.log(`employee name: ${this.name}, salary:${this.salary}, department: ${this.department}, bonuses: ${bon}`)
	}
}




let res=new Manager("thiya",5000,"manager")
res.bonuses(1000)

