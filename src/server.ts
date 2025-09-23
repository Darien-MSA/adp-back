import express from 'express'
import productsRouter from './router'
import db from './config/db'

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.info('Conexión exitosa a la db')
    } catch (error) {
        console.warn("Hubo un error al conectar a la BD:")
        console.error(error)
    }
}

connectDB()

const server = express()

server.use('/products', productsRouter)

export default server