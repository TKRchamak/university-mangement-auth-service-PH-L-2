import mongoose from 'mongoose';
import app from './app';
import config from './config';
import os from 'os';

const networkInterfaces = os.networkInterfaces();
const wifiServerIP = networkInterfaces['Wi-Fi']?.[1]?.address;

const bootstrap = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('🎉 Database connected successfully');
    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port} open with`);
      console.log(
        `---------------- http://localhost:${config.port}/ -----------------`,
      );
      console.log(
        `---------------- http://127.0.0.1:${config.port}/ -----------------`,
      );
      console.log(
        `---------------- http://${wifiServerIP}:${config.port}/ -----------------`,
      );
    });
  } catch (error) {
    console.log('Getting error in mongoose connection');
  }
};

bootstrap();
