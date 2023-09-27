//question 1
round=(...args)=>{ 
    arr=[] 
    args.forEach((element,index)=>{
    arr[index]=Math.round(element); 
    })
    return arr;
    
   }
   console.log(round(1.2, 4.3, 7.7))

   
// question 2
   floor=(...args)=>{ 
    arr=[] 
    args.forEach((element,index)=>{ 
    arr[index]=Math.floor(element); 
    })
    return arr;}
genericOpertaions=(operation,...args)=>{ 
 if(operation==='round'){ 
 return round(...args); 
 }
 else if(operation==='abs'){ 
 return abs(...args) }
 else if(operation==='ceil'){
 return ceil(...args) }
 else if(operation==='floor'){
 return floor(...args) }
 else{ 
 return "Invalid Operation" 
}
}
console.log(genericOpertaions('floor',1.3,2.4,3.6,4.2,5.5));

//task 1
// Person class
function person(fname,lname,id)  {
    this.fname=fname;
    this.lname=lname;
    this.id=id;
     
}
function student(fname,lname,id,course){
    person.call(this,fname,lname,id);
    this.course=course;
  }  
function Employees(fname,lname,id,salary){
    person.call(this,fname,lname,id);
    this.salary=salary;
}
function Teacher(fname,lname,id,salary,designation){
    Employees.call(this,fname,lname,id,salary);
    this.designation = designation;  
}
function Staff(fname,lname,id,salary,responsibilities){
    Employees.call(this),fname,lname,id,salary;
    this.responsibilities=responsibilities;

}

function Courses(courseName = "N/A") {
    this.courseName = courseName;
    this.students = []; 
    this.teachers = []; 
}

Courses.prototype.addStudent = function (student) {
    
    this.students.push(student);
};

Courses.prototype.addTeacher = function (teacher) {
    this.teachers.push(teacher);
};

const SECourse = new Courses("Mobile app development");
  console.log("Printing information about the course");
  const s1=new student("aghna","rasool","003","Mad");
  const s2=new student("ravia","iqbal","025","web");
  const t1=new Teacher("kamran","ali","003",200000);
  const t2=new Teacher("umer","ali","003",40000);
  const st1=new Staff("sana","ali","003",200000,"HR");
  const st2=new Staff("humza","ali","003",200000,"HR");
  SECourse.addStudent(s1);
  SECourse.addStudent(s2);
  SECourse.addTeacher(st1);
  SECourse.addTeacher(st2);
  console.log(s1);
  console.log(s2);
  console.log(t1);
  console.log(t2);
  console.log(st1);
  console.log(st2);

  //task 2
  
class Employe {
    constructor(name = "", dept = "general") {
      this.name = name;
      this.dept = dept;
    }
  }
  
  
  class Manager extends Employe {
    constructor(name = "", dept = "general", reports = []) {
      super(name, dept);
      this.reports = reports;
    }
  }
  
  
  class WorkerBee extends Employe {
    constructor(name = "", dept = "general", projects = []) {
      super(name, dept);
      this.projects = projects;
    }
  }
  
  
  class SalesPerson extends WorkerBee {
    constructor(name = "", dept = "sales", projects = [], quota = 100) {
      super(name, dept, projects);
      this.quota = quota;
    }
  }
  
  
  class Engineer extends WorkerBee {
    constructor(name = "", dept = "engineering", projects = [], machine = "") {
      super(name, dept, projects);
      this.machine = machine;
    }
  }
  
   const manager1 = new Manager("kinza", "general", []);
  const salesPerson1 = new SalesPerson("aliyana", "sales", [], 150);
  const engineer1 = new Engineer("kiran", "engineering", [], "MachineX");
  
  console.log("Manager 1:", manager1);
  console.log("SalesPerson 1:", salesPerson1);
  console.log("Engineer 1:", engineer1);
  