import { Response, NextFunction, Request } from "express";
// import { FocusService } from "../services/focus-service";
import { UserRequest } from "../models/user-request";
import {
    CreateFocusSessionRequest,
    CreateFocusTimerRequest,
} from "../models/focus-model";
import { FocusService } from "../services/focus-service";

export class FocusController {
    // ===== FOCUS SESSION =====
    static async createFocusSession(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const request = req.body as CreateFocusSessionRequest;
            const result = await FocusService.createFocusSession(request);

            res.status(201).json({ data: result });
        } catch (error) {
            next(error);
        }
    }

    static async getAllFocusSessions(
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      try {
        const result = await FocusService.getAllFocusSessions();
        res.status(200).json({ data: result });
      } catch (error) {
        next(error);
      }
    }

    // ===== FOCUS TIMER (USER) =====
    static async createFocusTimer(
      req: UserRequest,
      res: Response,
      next: NextFunction
    ) {
      try {
        const userId = req.user!.id;
        const request = req.body as CreateFocusTimerRequest;
      
        const result = await FocusService.createFocusTimer(userId, request);
      
        res.status(201).json({ data: result });
      } catch (error) {
        next(error);
      }
    }

  static async getMyFocusTimers(
    req: UserRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = req.user!.id;
      const result = await FocusService.getMyFocusTimers(userId);

      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}
