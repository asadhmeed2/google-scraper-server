import express from 'express';

const router = express.Router();
 
router.get('/', (request:express.Request, response:express.Response) => {
  response.send('Hello world!');
});

router.get('/search', (request:express.Request, response:express.Response) => {
  
});

export default router;