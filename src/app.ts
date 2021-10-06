import express, { Request } from "express";
import cors from "cors";
import { getUser, login } from "./controller/user";
import { addTodo, archiveTodo, getTodo, saveComplete } from "./controller/todo";


const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors({ origin: true, credentials: true }));
app.use('/api/v1', router);


router.get('/', (req, res) => {
  res.send("welcome")
})

router.get('/user', getUser);
router.post('/login', login);
router.post('/todo', addTodo);
router.get('/todo', getTodo);
router.put('/todo/complete/:id', saveComplete);
router.delete('/todo/:id', archiveTodo);

export default app;
