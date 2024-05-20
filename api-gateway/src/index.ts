import express, {Request, Response} from 'express';

import axios from 'axios';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', async (req:Request, res:Response) => {
    try{
        const response = await axios.get('http://localhost:3001/users');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error communicating with user service');
    }
});

app.get('/users/:id', async (req:Request, res:Response) => {
   try{ const response = await axios.get(`http://localhost:3001/users/${req.params.id}`);
    res.json(response.data);}
    catch (error) {
        res.status(500).send('Error communicating with user service');
    }
})

app.get('/products', async (req: Request, res: Response) => {
    try {
      const response = await axios.get('http://localhost:3002/products');
      res.json(response.data);
    } catch (error) {
      res.status(500).send('Error communicating with Product Service');
    }
  });

  app.get('/products/:id', async (req: Request, res: Response) => {
    try {
      const response = await axios.get(`http://localhost:3002/products/${req.params.id}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).send('Error communicating with Product Service');
    }
  });

  app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
  });

