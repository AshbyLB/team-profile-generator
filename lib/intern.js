const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, schoolStats) {
        super(name, id, email)
      this.schoolStats = schoolStats;
    }
    getSchoolStats(){
        return this.schoolStats;
    }
    getRole(){
        return 'Intern';
    }
  }
  
  module.exports = Intern;