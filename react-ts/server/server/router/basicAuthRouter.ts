import express from 'express';

import {basicAuthMiddleware} from '../middleware/basicAuthMiddleware';

const router = express.Router();

router.get('/', basicAuthMiddleware)

export {router as basicAuthRouter}