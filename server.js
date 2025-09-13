import express from 'express';
import dotenv from 'dotenv'
import garantiasRoutes from './src/routes/garantias.js'
import swaggerRoutes from './src/routes/swagger.js'
import main from './src/db/index.js'
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

//routes
app.use('/v1/api-docs', swaggerRoutes)
app.use('/v1/garantias', garantiasRoutes)

//server 
app.listen(process.env.PORT, ()=>{
    main()
    console.log(`🔥 Server running on http://localhost:${process.env.PORT} 🔥`)
})