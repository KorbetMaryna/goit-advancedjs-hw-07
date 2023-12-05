//TODO: Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

//TODO: Клас Employee повинен включати:

//TODO: властивість name, яка буде доступна всім.
//TODO: властивість department, яка буде доступна лише всередині класу Employee.
//TODO: salary, яке буде доступне лише всередині класу Employee та його підкласів.

//TODO: Клас Manager повинен бути підклас класу Employee

//TODO: Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.


class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) { }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    department: string,
    salary: number
  ) {
    super(name, department, salary);
    this.salary += 10000;
  }
}


export { Manager };