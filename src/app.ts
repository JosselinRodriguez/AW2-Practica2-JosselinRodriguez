import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async () => {
   const UsuarioCreated = await prisma.usuario.create({
        data: {

            nombre: "Denise Josselin",
            apellido: "Rodriguez Chancay",
            direccion: "Calle 13 av 20",
            telefono: "0998803075",
            correo: "josselinrodriguez534@gmail.com",
            rol: "Admin"
        }

    });
    console.log(UsuarioCreated);
    const TipoDepagoCreate = await prisma.tipoDePago.create({
        data:{
            tipoPago: "Tarjeta de credito",
            comentarios: "Ninguno",
            fecha: new Date("2023-05-08T00:00:00Z")
        }
    }) 
    console.log(TipoDepagoCreate);

    const PagosCreated = await prisma.pago.create({
        data: {
            monto: 200.69,
            fecha: new Date("2023-05-08T00:00:00Z"),
            usuarioId:UsuarioCreated.idusuario,
            tipoDePagoId:TipoDepagoCreate.idtipopago
        }
    }); 
    console.log(PagosCreated);
};
const queryPagos= async ()=>{
    const Pagox= await prisma.pago.findMany({
        include:{
            usuarios:true
        }
        , where:{
            id:1
        }
    })
    console.log(Pagox);
};

const updatePagos = async ()=>{
    const Pagox = await prisma.pago.update({
        data:{
            monto: 300.20
        },
        where:{
            id: 1
        }
    })
    console.log(Pagox);
};



const deletePagos= async ()=>{
    const Serviad= await prisma.pago.delete({
        where:{
            id:1
        }
    })
};
(async ()=>{
    //await createUser()
    //await queryPagos()
    await updatePagos()
    //await deletePagos()
})()