export interface Employee {
  name: string;
  age: number;
}

export class EmployeeReport {
  private MIN_AGE_TO_WORK_ON_SUNDAYS = 18;

  constructor(private readonly employees: Employee[]) {}

  public listAllowedToWorkOnSundays() {
    return this.employees
      .filter(employee => employee.age >= this.MIN_AGE_TO_WORK_ON_SUNDAYS)
      .sort((a, b) => a.name < b.name ? 1 : -1)
      .map(employee => ({
        ...employee,
        name: employee.name.toUpperCase(),
      }));
  }
}
