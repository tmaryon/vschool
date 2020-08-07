// Function to instantiate
function Employee (name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

// prototype function for printEmployeeForm
Employee.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
}
var tobyR  = new Employee("Toby Rogerson", "Engineer", 75000, "Full-Time");
var SallyS = new Employee("Sally Sims", "System Admin", 80000, "Full-Time");
var GusG   = new Employee("Gus Grimley", "Mail Room", 25000, "Part-Time");

// create and push new employees to array
var employees = [];
employees.push(tobyR, SallyS, GusG);

// overwrite status of Gus G
GusG.status = "Contractor";

// Call printEmployeeForm 
tobyR.printEmployeeForm();
SallyS.printEmployeeForm();
GusG.printEmployeeForm();
