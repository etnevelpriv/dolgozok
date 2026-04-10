import { describe, it, expect } from "vitest";
import type { Employee } from "../classes/Employee.ts";
import type { EmployeeStatistics } from "../classes/EmployeeStatistics.ts";

const testEmployees_1: Employee[] = [
    {
        name: 'Levente',
        age: 18,
        salary: 3000
    },
    {
        name: 'Roland',
        age: 19,
        salary: 5600
    },
    {
        name: 'Jozsef',
        age: 32,
        salary: 2999
    },
];
const testEmployees_2: Employee[] = [
    {
        name: 'Antal',
        age: 90,
        salary: 8900
    },
    {
        name: 'Agoston',
        age: 8,
        salary: 500
    },
    {
        name: 'Ferenc',
        age: 54,
        salary: 5454
    },
];

const testEmployees_3: Employee[] = [

];

