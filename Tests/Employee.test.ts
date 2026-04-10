import { describe, it, expect } from "vitest";
import type { Employee } from "../classes/Employee.ts";
import { EmployeeStatistics } from "../classes/EmployeeStatistics.ts";

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

// Konstrukktor tesztelese
describe("Konstruktor tesztelese", () => {
    it("A testEmployees_1 employee-kat tartalmaz, nem kene visszadobnia semmit sem", () => {
        expect(() => new EmployeeStatistics(testEmployees_1)).not.toThrow(); // A copilotot kertem segitsegul a '.not.toThrow-hoz'. Hianyoztam az orakrol, most dolgozom vitest-el elosszor
    });
    it("A testEmployees_2 employee-kat tartalmaz, nem kene visszadobnia semmit sem", () => {
        expect(() => new EmployeeStatistics(testEmployees_2)).not.toThrow();
    });
    it("A testEmployees_3 ures, hibat kell visszadobnia", () => {
        expect(() => new EmployeeStatistics(testEmployees_3)).toThrow();
    });
});

// Fuggvenyek tesztelese
// getMaxSalary
describe("Metodusok tesztelese: getMaxSalary", () => {
    it("A testEmployees_1 'getMaxSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).getMaxSalary()).toBe(5600);
    });
    it("A testEmployees_2 'getMaxSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).getMaxSalary()).toBe(8900);
    });
});

// getAvarageAge
describe("Metodusok tesztelese: getAvarageAge", () => {
    it("A testEmployees_2 'getAvarageAge' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).getAvarageAge()).toBe(23);
    });
    it("A testEmployees_2 'getAvarageAge' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).getAvarageAge()).toBe(51);
    });
});

// getHighestPaidEmployee
describe("Metodusok tesztelese: getHighestPaidEmployee", () => {
    it("A testEmployees_2 'getHighestPaidEmployee' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).getHighestPaidEmployee()).toStrictEqual(
            {
                name: 'Roland',
                age: 19,
                salary: 5600
            }
        );
    });
    it("A testEmployees_2 'getHighestPaidEmployee' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).getHighestPaidEmployee()).toStrictEqual(
            {
                name: 'Antal',
                age: 90,
                salary: 8900
            }
        );
    });
});

// countEmployeesOverSalary
describe("Metodusok tesztelese: countEmployeesOverSalary", () => {
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).countEmployeesOverSalary(3000)).toBe(1);
    });
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).countEmployeesOverSalary(2999)).toBe(2);
    });
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).countEmployeesOverSalary(0)).toBe(3);
    });
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).countEmployeesOverSalary(-99999999999999999)).toBe(3);
    });
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).countEmployeesOverSalary(8900)).toBe(0);
    });
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).countEmployeesOverSalary(500)).toBe(2);
    });
});
