import { Review } from './center';
export interface User {
    userId?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    centersVisited: number;
    reviews: Review[];
}
