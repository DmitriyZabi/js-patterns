class Database {
  constructor(data) {
    if (Database.exist) {
      return Database.instance
    }
    Database.instance = this
    Database.exist = true
    this.data = data
  }
  getData = () => this.data
}

const mongo = new Database('MongoDB')
console.log(mongo.getData())
const mysql = new Database('mySQL')
console.log(mysql.getData())
