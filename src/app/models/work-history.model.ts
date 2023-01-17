export interface Achievement {
    uniqueKey: string;
    achievement: string;
}

export interface WorkHistory {
    from: string;
    to: string;
    company: string;
    jobTitle: string;
    order: number;
    achievements: Achievement[];
}