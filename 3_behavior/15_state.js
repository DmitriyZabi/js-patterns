class Light {
  constructor(light) {
    this.light = light
  }
}

class RedLight extends Light {
  constructor() {
    super('red')
  }

  sign() {
    return 'СТОП!'
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow')
  }

  sign() {
    return 'ГОТОВЬСЯ'
  }
}

class Greenight extends Light {
  constructor() {
    super('green')
  }

  sign() {
    return 'ЕДЬ!'
  }
}

class TrafficLight {
  constructor() {
    this.states = [new RedLight(), new YellowLight(), new Greenight()]
    this.current = this.states[0]
  }

  change() {
    const total = this.states.length
    let index = this.states.findIndex((light) => light === this.current)
    this.current = total > index + 1 ? this.states[index + 1] : this.states[0]
  }

  sign() {
    return this.current.sign()
  }
}

const traffic = new TrafficLight()
console.log(traffic.sign())
traffic.change()
console.log(traffic.sign())
traffic.change()
console.log(traffic.sign())
traffic.change()
console.log(traffic.sign())
traffic.change()
console.log(traffic.sign())
