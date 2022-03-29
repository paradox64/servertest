const app = require("./app")
app.se

async function main(){
    await app.listen(app.get('port'),()=>(console.log("server on port",app.get('port'))))
}
    

main()