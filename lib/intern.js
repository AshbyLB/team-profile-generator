const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, schoolStats) {
        super(name, id, email)
      this.schoolStats = schoolStats;
      this.role = 'Intern';
    }
    getSchool(){
        return this.schoolStats;
    }
    getRole(){
        return 'Intern';
    }
  }
  
  module.exports = Intern;