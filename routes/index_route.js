const express = require('express')
const index = express.Router()
const fs = require('fs')
const path = require('path')

const dt = (title, meta, image)=>{
    let ck = fs.readFileSync('./public/client/build/index.html', 'utf8')
    return ck.replace('<title>React App</title>' , `
    <title>${title}</title>
    <meta property="og:title" content="${meta}"/>
    <meta property="og:description" content="${meta}"/>
    <meta property="og:image" content="https://picsum.photos/seed/${image}/200"/>
    `)
}

const gantiContent = function(args1, args2, args3){
    fs.writeFileSync(path.join(__dirname, '../public/client/build/main.html'), dt(args1, args2, args3), (err, data)=>{
        if(err){
            console.log(err);
        }
    })
    // console.log(dt('hello'));
}

index.get('/:title/:meta/:img', (req,res)=>{
    gantiContent(req.params.title, req.params.meta, req.params.img)
    res.sendFile(path.join(__dirname , '../public/client/build/main.html'))
})

module.exports = index