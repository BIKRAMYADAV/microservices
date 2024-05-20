import express, {Request, Response} from 'express';

const app = express();

const port = process.env.PORT || 3002;

interface Product {
    id: number;
    name:string;
}

const products:Product[] = [
    {id:1, name:'prodA'},
    {id:2, name: 'prodB'}
]

app.get('/products', (req:Request, res:Response) => {
    res.json(products);
})

app.get('/products/:id', (req:Request, res:Response) => {
    const product = products.find(p => p.id === parseInt(req.params.id))
    if(!product) return res.status(404).send('product not found');
    res.json(product);
})

app.listen(port, () => {
    console.log(`The app is listening on port: `,port);
})