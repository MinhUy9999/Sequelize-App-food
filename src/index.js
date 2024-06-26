import express from 'express'
import cors from 'cors'
import likeRoutes from './routes/likeRoutes.js';
import rateRoutes from './routes/rateRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import userRoutes from './routes/userRoutes.js';
import sequelize from './models/connect.js';

const app = express()
app.use(cors({
    origin: "*" // tất cả domain truy cập
}))
app.use(express.json())

app.use('/api', userRoutes);
app.use('/api', likeRoutes);
app.use('/api', rateRoutes);
app.use('/api', orderRoutes);

import swaggerUi  from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';



const options = {
    definition: {
      openapi: '3.0.0',
        info: {
            title: "api",
            version: "1.0.0"
        }
    },
    apis: ["src/swagger/swagger.js"]
}

const specs = swaggerJsDoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});