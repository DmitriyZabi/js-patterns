class MyIteranor {
  constructor(data) {
    this.index = 0
    this.data = data
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          }
        }
        this.index = 0
        return {
          value: this.data[this.index++],
          done: true,
        }
      },
    }
  }
}

const iterator = new MyIteranor(['This', 'is', 'iterator'])

for (const val of iterator) {
  console.log(val)
}

// или

function* generator(collection) {
  let index = 0
  while (index < collection.length) {
    yield collection[index++]
  }
}

const gen = generator(['This', 'is', 'iterator'])
for (const val of gen) {
  console.log(val)
}
