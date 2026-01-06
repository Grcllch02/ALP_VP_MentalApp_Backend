import { prismaClient } from "../utils/database-util";
import {
    CreateFocusSessionRequest,
    CreateFocusTimerRequest,
} from "../models/focus-model";
import { ResponseError } from "../error/response-error";

export class FocusService {
    // ===== FOCUS SESSION =====
    static async createFocusSession(request: CreateFocusSessionRequest) {
        if (request.duration <= 0) {
            throw new ResponseError(400, "Duration must be greater than 0");
        }

        return await prismaClient.focusSession.create({
            data: {
                duration: request.duration,
            },
        });
    }

    static async getAllFocusSessions() {
        return prismaClient.focusSession.findMany({
            orderBy: {
                duration: "asc",
            },
        });
    }

    // ===== FOCUS TIMER =====
    static async createFocusTimer(
        userId: number,
        request: CreateFocusTimerRequest
    ) {
        const focusSession = await prismaClient.focusSession.findUnique({
            where: { id: request.focusSessionId },
        });

        if (!focusSession) {
            throw new ResponseError(404, "Focus session not found");
        }

        return prismaClient.focusTimerSession.create({
            data: {
                duration: request.duration,
                user_id: userId,
                focusSession_id: request.focusSessionId,
            },
        });
    }

    static async getMyFocusTimers(userId: number) {
        return prismaClient.focusTimerSession.findMany({
            where: {
                user_id: userId,
        },
        include: {
            focusSession: true,
        },
        orderBy: {
            id: "desc",
        },
        });
    }
}
