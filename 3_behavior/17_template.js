class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} выполянет ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} имеет ЗП ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'процесс создания программы'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'процесс тестирования программы'
  }
}

const dev = new Developer('Dima', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Elena', 50000)
console.log(tester.getPaid())
console.log(tester.work())
