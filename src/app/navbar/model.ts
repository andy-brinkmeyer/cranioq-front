export interface NotificationsResponse200 {
    id: number;
    patient_id: string;
    gp_id: number;
    access_id: string;
    email: string;
    completed_gp: boolean;
    completed_guardian: boolean;
    created: string;
    review: string[];
}