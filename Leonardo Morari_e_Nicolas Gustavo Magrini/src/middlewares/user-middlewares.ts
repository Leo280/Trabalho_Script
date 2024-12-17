import { NextFunction, Request, Response } from 'express';

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (!req.session.email) {
    return res.redirect('/users/login');
  }
  next();
}

export function redirectIfAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.session.email) {
    return res.redirect('/home');
  }
  next();
}
