
const booksController = app =>{
    app.get('/requests', (req, res)=>{
        res.json({
            "msg": "temos uma rota get"
        })
    })

    app.post('/requests', (req, res)=>{
        res.json({
            "msg": "temos uma rota post"
        })
    })

    app.delete('/requests', (req, res)=>{
        res.json({
            "msg": "temos uma rota delete"
        })
    })

    app.patch('/requests', (req, res)=>{
        res.json({
            "msg": "temos uma rota patch"
        })
    })
}

export default booksController