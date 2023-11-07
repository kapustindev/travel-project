import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ data: 'Express + TypeScript Server' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export default app;
