import  express from 'express';
import router from './router/searchRouter' 
import config from 'config'

const port = config.get<number>('port');

const app = express();
 
app.use(express.json());
app.use("./",router)

 
app.listen(port,()=>{
    console.log("App is running on port " + port);
});

