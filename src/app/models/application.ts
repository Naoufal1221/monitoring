import { Observable } from 'rxjs';
import { Tasks } from './Tasks';
import { User } from './User';
import { Rapport } from './Rapport';
import { Reference } from './Reference';

export class application{
    id: number;
    applicationName: string;
    applicationSystem: string;
    url: string;
    tasks: Tasks[];
    currentUser: User[];
    rapport: Rapport[];
    reference: Reference[];
}