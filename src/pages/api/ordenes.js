import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
    const prisma = new PrismaClient()

    const ordenes = await prisma.orden.findMany({
        where:{
            estado:false
        }
    })
    res.status(200).json(ordenes)

    if(req.method === "POST"){
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                pedido: req.body.pedido,
                total: req.body.total,
                fecha: req.body.fecha
            }
        })
        res.status(200).json(ordenes)        
    }
}
