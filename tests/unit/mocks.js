const insertReturn = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 14,
    info: '',
    serverStatus: 2,
    warningStatus: 0
  },
  undefined
]

const returnNewProduct = [[{
  "id": 16,
  "name": "Batmovel"
}]]


const allProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
]

const productId2 = {
  "id": 2,
  "name": "Traje de encolhimento"
}

const messageProductNotFound = {
  "message": "Product not found"
}

const newProduct = {
  name: "Cinto do Batman"
}

module.exports = {
  allProducts,
  productId2,
  messageProductNotFound,
  newProduct,
  insertReturn,
  returnNewProduct
}
