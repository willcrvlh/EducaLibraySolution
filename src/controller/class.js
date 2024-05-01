
const booksController = app =>{
    app.get('/class', (req, res)=>{
        res.json({
            "msg": "temos uma rota get"
        })
    })

    app.post('/class', (req, res)=>{
        res.json({
            "msg": "temos uma rota post"
        })
    })

    app.delete('/class', (req, res)=>{
        res.json({
            "msg": "temos uma rota delete"
        })
    })

    app.patch('/class', (req, res)=>{
        res.json({
            "msg": "temos uma rota patch"
        })
    })
}

export default booksController