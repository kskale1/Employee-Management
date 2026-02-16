import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from '../routes/auth.js'
import departmentRouter from '../routes/department.js'
import employeeRouter from '../routes/employee.js'
import salaryRouter from '../routes/salary.js'
import leaveRouter from '../routes/leave.js'
import settingRouter from '../routes/setting.js'
import attendanceRouter from '../routes/attendance.js'
import dashboardRouter from '../routes/dashboard.js'
import connectToDatabase from '../db/db.js'

dotenv.config();

connectToDatabase()
const app = express()
// Manual CORS headers — more reliable than cors() on Vercel serverless
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://employee-management-mu-seven.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Immediately respond to preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use(express.json())
app.use(express.static('public/uploads'))

// Sample route
app.get("/", (req, res) => {
  res.json({ message: "API working" });
});

app.use('/api/auth', authRouter)
app.use('/api/department', departmentRouter)
app.use('/api/employee', employeeRouter)
app.use('/api/salary', salaryRouter)
app.use('/api/leave', leaveRouter)
app.use('/api/setting', settingRouter)
app.use('/api/attendance', attendanceRouter)
app.use('/api/dashboard', dashboardRouter)

// app.listen(process.env.PORT, () => {
//     console.log(`Server is Running on port ${process.env.PORT}`)
// })

export default app
