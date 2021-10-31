import { Request, Response, NextFunction } from 'express';

import jwt from "jsonwebtoken";

export const jwtHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  const token =  req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
 
  jwt.verify(token, "123123123",(error,decoded)=>{
    if(error){
      return res.status(403).send("A token is required for authentication");
    }
    res.locals.jwt = decoded;
    next();

  });
   
};


