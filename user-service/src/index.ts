import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

app.get('/users/:id', (req: Request, res: Response) => {
  const user = users.find(u => u.id === parseInt(req.params.id));// req.params.id gives a string, gets converted to int using parseInt
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`User Service is running on port ${PORT}`);
});
