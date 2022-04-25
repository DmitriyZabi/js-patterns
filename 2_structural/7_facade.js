class Complaints {
  constructor() {
    this.complaints = []
  }

  reply(complaint) {}
  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplainRegistry {
  registry(customer, type, details) {
    const id = Date.now()
    let complaint =
      type === 'service' ? new ServiceComplaints() : new ProductComplaints()
    return complaint.add({ id, customer, details })
  }
}

const registry = new ComplainRegistry()
console.log(registry.registry('Dima', 'service', 'Недоступен'))
console.log(registry.registry('Elena', 'product', 'Ошибка 404'))
