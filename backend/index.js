import express from 'express' ;

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req,res) => {

res.send({hello:'world'});

})

app.listen(port, () => {
  console.log(`Redo på den externa servern på : ${port}`)
})