import { Route, Router } from 'express';
import { protect } from '../auth/auth.controller.js';
import { getCheckoutSession } from './booking.controller.js';

let bookingRouter = Router();

bookingRouter.get('/checkout/:id', protect, getCheckoutSession);

export default bookingRouter;
