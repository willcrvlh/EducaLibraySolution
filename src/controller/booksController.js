
const booksController = app =>{
    app.get('/books', (req, res)=>{
        res.json({
            "msg": "temos uma rota get"
        })
    })

    app.post('/books', (req, res)=>{
        res.json({
            "msg": "temos uma rota post"
        })
    })

    app.delete('/books', (req, res)=>{
        res.json({
            "msg": "temos uma rota delete"
        })
    })

    app.patch('/books', (req, res)=>{
        res.json({
            "msg": "temos uma rota patch"
        })
    })
}

export default booksController