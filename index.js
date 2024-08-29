import  express from 'express'
import userRouters from './src/routes/user.routes.js';
import "dotenv/config";
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouters)



app.listen(3000, () => {console.log(`Server is running on port ${port}`);
});