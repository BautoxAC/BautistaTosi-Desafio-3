import Express from "express"
const app = Express()
const port = 8080
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
import { ProductManager } from "../ProductManager.js"
const list = new ProductManager("products.json")
const products = list.getProducts()
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.get("/products", (req, res) => {
    const { limit } = req.query
    const productsLimited = products.filter((pro) => Number(pro.id) < limit)
    return res.json(Number(limit) ? productsLimited : products)
})
app.get("/products/:pid", (req, res) => {
    const Id = req.params.pid
    res.json(list.getProductById(Id))
})