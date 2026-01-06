export interface CreateFocusSessionRequest {
    duration: number;
}

export interface CreateFocusTimerRequest {
    duration: number;
    focusSessionId: number;
}
