export interface Employee {
  name: string;
  age: number;
}

export class EmployeeReport {
  constructor(private readonly employees: Employee[]) {

  }

  public listAllowedToWorkOnSundays() {
    return this.employees
      .filter(e => e.age >= 18)
      .sort((a, b) => a.name < b.name ? 1 : -1)
      .map(e => {
        e.name = e.name.toUpperCase();
        return e;
      });
  }
}
