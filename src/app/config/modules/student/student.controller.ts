import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const ceateStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // will call service func to  sent  this data

    const result = await StudentServices.createStudentIntoDB(studentData);
    // sent response
    res.status(200).json({
      success: true,
      message: 'student is create successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'student are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSignleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    console.log(studentId);
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'get single stundent',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const studentController = {
  ceateStudent,
  getAllStudent,
  getSignleStudent,
};
