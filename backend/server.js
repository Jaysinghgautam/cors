import express from 'express'

const app = express()
app.get('/',(req,res) => {
    res.send('server is ready');
});

// get a list of 5 jokes

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id:1,
            tittle: "a joke",
            content: "This is a joke"
        },
        {
            id:2,
            tittle: "another joke",
            content: 'this is a another joke'
        },
        {
            id:3,
            title:'two joke',
            content:'this is a two joke'

        }
    ];
    res.send(jokes);
 })

 app.get('/',(req,res) => {
    res.send('hello from backend');
 })

const port = process.env.PORT || 3000

app.listen(port,()=> {
    console.log(`Server at http://localhost:${port}`);
})