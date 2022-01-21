const express=require('express');
const app=express();
const cluster=require('cluster');
const noOfCpu=require('os').cpus().length;
const PORT=5000;

app.get('/',(req,res)=>{
    res.status(200).send(`alive and sent by pid ${process.pid}`)
    console.log(`Killing the worker ${process.pid}`)
    cluster.worker.kill();
})

if(cluster.isMaster){
    for(let i=0;i<noOfCpu;i++){
        cluster.fork();
    }
    cluster.on('exit',(worker,code, signal)=>{
        cluster.fork();
    })
}else{
    app.listen(PORT,()=>console.log(` Created Thread/PID no. ${process.pid} Listening on port ${PORT}`));
}
