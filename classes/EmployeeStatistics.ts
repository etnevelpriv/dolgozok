import type { Employee } from "./Employee.ts";

class EmployeeStatistics {
    employee: Employee[];
    constructor(Employee: Employee[]) {
        if (Employee.length == 0) {
            throw new Error("A dolgozók megadása kötelező");
        };
        this.employee = Employee;
    };

    getMaxSalary():number | undefined {
        let maxSalary: number |undefined = this.employee[0]?.salary;
        this.employee.forEach(emp => {
            if (emp.salary > maxSalary) {
                maxSalary = emp.salary;
            };
        });
        return maxSalary;
    };

    getAvaregaAge():number | undefined {
        let summedAges = 0;
        this.employee
    };
};