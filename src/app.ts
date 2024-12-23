import * as express from 'express';
import { xss } from 'express-xss-sanitizer';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

app.use(xss());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})