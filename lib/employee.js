class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }
  getName = () =>{
    return this.name;
  }
  getId = () =>{
    return this.id;
  }
  getRole = () =>{
    return this.role;
  }
  getEmail = () =>{
    return this.email;
  }
}

nodule.exports = Employee;