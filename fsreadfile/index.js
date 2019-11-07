#!/usr/bin/env node
let param=process.argv[2]&&process.argv[2].slice(1)//:\新加卷\练习\读取文件fs\fsreadfile\index
//执行命令 node index -src
const path=require("path")
const fs=require("fs")
//  let url=process.cwd() //D:\新加卷\练习\读取文件fs\fsreadfile

 let url=path.join(process.cwd(),param)
 console.log(url)
if(fs.existsSync(url)){
    if(fs.statSync(url).isDirectory()){
        let dirList=fs.readdirSync(url)
        dirList=dirList.map(item=>{
             let extname=path.extname(item)?path.extname(item).slice(1):""
             //获取文件大小
            let size=fs.statSync(path.join(url,item)).size
            return `${item}-${extname?extname:""}-${size}`
        })
        console.log(dirList)
    }else{
        console.log(param)
    }
}else{
    console.log("此路径不存在")
}