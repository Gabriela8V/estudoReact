const cfg = ()=>{
    return{
        jwt_secret:"S#N#cTu@p#",
        salt_br:10,
        jwt_expires:"2d",
        db_path:"mongodb://127.0.0.1:27017/bancodedados"
    }
}
module.exports=cfg();