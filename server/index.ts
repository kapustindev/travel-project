import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { faker } from '@faker-js/faker';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const accommodations = Array.from({ length: 100 }, () => ({
  _id: faker.string.uuid(),
  country: faker.location.country(),
  city: faker.location.city(),
  image: faker.image.urlLoremFlickr({ category: 'city' }),
  price: faker.number.int({ min: 100, max: 1000 }),
  rating: faker.number.float({ min: 4, max: 5, precision: 0.01 }),
  owner: {
    name: faker.person.firstName(),
    photo: faker.image.urlLoremFlickr({ category: 'face' }),
  },
}));

app.use(cors());

app.get('/', (req, res) => {
  res.json({ data: accommodations });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export default app;
