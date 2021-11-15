const {Client}=require ("pg")
const client=new Client({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"Anujgupta@22091998",
    database:"online_vidya"
})
client.connect();
client.query("select * from students", (err,result)=>{
    if (!err){
        console.log(result.rows);
    }
    client.end();
})