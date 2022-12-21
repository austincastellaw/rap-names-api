const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'bin abraham joseph',
        'birthLocation': 'London, England'
},

    'chance':{
        'age': 29,
        'birthName': 'chancellor',
        'birthLocation': 'chicago'

    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
} 

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName=request.params.name.toLowerCase()
    if(rappers[rapperName] ){
        response.json(rappers[rapperName])

    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`the server is now running on port ${PORT}! go catch it!`)
})