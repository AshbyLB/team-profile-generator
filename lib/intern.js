const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, schoolStats) {
        super(name, id, email)
      this.schoolStats = schoolStats;
    }
    getSchoolStats(){
        this.schoolStats;
    }
    gitRole(){
        'Intern';
    }
  }
  
  module.exports = Intern;