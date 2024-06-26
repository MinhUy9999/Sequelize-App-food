import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
    "BT1","root","1234",{
        host:"localhost",
        port:3306,
        dialect:"mysql"
    })
    try{
       await sequelize.authenticate()
       console.log("kết nối thành công")
    } catch(err){
        console.log(err)
    }
    export default sequelize