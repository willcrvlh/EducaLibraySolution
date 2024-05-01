
const booksController = app =>{
    app.get('/students', (req, res)=>{
        res.json({
            "msg": "temos uma rota get"
        })
    })

    app.post('/students', (req, res)=>{
        res.json({
            "msg": "temos uma rota post"
        })
    })

    app.delete('/students', (req, res)=>{
        res.json({
            "msg": "temos uma rota delete"
        })
    })

    app.patch('/students', (req, res)=>{
        res.json({
            "msg": "temos uma rota patch"
        })
    })
}

export default booksController