const jsonserver=require('json-server')

const empServer=jsonserver.create()
const middileware=jsonserver.defaults()
const router=jsonserver.router("db.json")
const PORT=3000 || process.env.PORT

empServer.use(middileware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`EMPLOYEE PORTAL server started at port ${PORT}, and waiting for client request !!!`);
})