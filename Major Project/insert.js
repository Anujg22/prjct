const {Client}=require ("pg");
const client=new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'Anujgupta@22091998',
    database:'online_vidya'
})
client.connect();
client.query("INSERT INTO students VALUES(8, 'akash', 9111173404, 'agupta@gmail.com', 'Web development')", (err, result)=>{
    if (!err){
        console.log("Data inserted successfully");
    }
    client.end();
})