// const express = require('express')
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/config/modules/student/student.route';
const app: Application = express();
// const port = 3000;

// parser
app.use(express.json());
app.use(cors());
app.use('/api/v1/students', studentRoute);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});
export default app;

// console.log(process.cwd());
