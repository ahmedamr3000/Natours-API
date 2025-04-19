import { Route, Router } from 'express';
import { account, login, overview, tour } from './template.controller.js';
import { isLogedin, protect } from '../auth/auth.controller.js';

let templateRouter = Router();

templateRouter.use(isLogedin);
templateRouter.get('/', isLogedin, overview);
templateRouter.get('/login', isLogedin, login);
templateRouter.get('/me', protect, account);
templateRouter.get('/:id', isLogedin, tour);

export default templateRouter;
