import Express from "express"
const app = Express()
const port = 3000
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
import { ProductManager } from "../ProductManager.js"
const list = new ProductManager("products.json")
const products = list.getProducts()
/* 
Consigna
Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.
Aspectos a incluir 👍

Se deberá utilizar la clase ProductManager que actualmente utilizamos con persistencia de archivos.  👍
Desarrollar un servidor express que, en su archivo app.js importe al archivo de ProductManager que actualmente tenemos.
Aspectos a incluir 👍
El servidor debe contar con los siguientes endpoints:
ruta ‘/products’, la cual debe leer el archivo de productos y devolverlos dentro de un objeto. Agregar el soporte para recibir por query param el valor ?limit= el cual recibirá un límite de resultados.👍
Si no se recibe query de límite, se devolverán todos los productos 👍
Si se recibe un límite, sólo devolver el número de productos solicitados 👍
ruta ‘/products/:pid’, la cual debe recibir por req.params el pid (product Id), y devolver sólo el producto solicitado, en lugar de todos los productos. 👍
Sugerencias
Tu clase lee archivos con promesas. recuerda usar async/await en tus endpoints
Utiliza un archivo que ya tenga productos, pues el desafío sólo es para gets. 👍
Formato del entregable
Link al repositorio de Github con el proyecto completo, el cual debe incluir:
carpeta src con app.js dentro y tu ProductManager dentro.
package.json con la info del proyecto.
NO INCLUIR LOS node_modules generados.
Testing de este entregable
 */
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.get("/products", (req, res) => {
    const { limit } = req.query
    const productsLimited = products.filter((pro) => pro.id < limit)
    return res.json(Number(limit) ? productsLimited : products)
})
app.get("/products/:pid", (req, res) => {
    const Id = req.params.pid
    res.json(list.getProductById(Id))
})