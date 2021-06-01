import { assertThat, everyItem, greaterThanOrEqualTo, hasProperty } from 'hamjest';

import { Employee, EmployeeReport } from './employeeReport';

describe('Employee report', () => {
  let employeeReport: EmployeeReport;

  beforeEach(() => {
    const employees = [
      { name: 'Max', age: 17 },
      { name: 'Sepp', age: 18 },
      { name: 'Nina', age: 15 },
      { name: 'Mike', age: 51 },
    ];

    employeeReport = new EmployeeReport(employees);
  });

  const isSameName = (e: Employee, name: string) => {
    return e.name.toLowerCase() === name.toLowerCase();
  };

  it('lists all employees who are older than 18 years', async() => {
    // given, when
    const result = employeeReport.listAllowedToWorkOnSundays();

    // then
    expect(result).toHaveLength(2);
    assertThat(result, everyItem(hasProperty('age', greaterThanOrEqualTo(18))));
    expect(result.find(employee => isSameName(employee, 'Sepp'))).toBeTruthy();
    expect(result.find(employee => isSameName(employee, 'Mike'))).toBeTruthy();
  });

  it('lists the employees sorted by their name in a descending order', async() => {
    // given, when
   const result = employeeReport.listAllowedToWorkOnSundays();

   // then
   expect(isSameName(result[0], 'Sepp')).toBeTruthy();
   expect(isSameName(result[1], 'Mike')).toBeTruthy();
  });

  it('lists the employees with capitalized names', async() => {
    // given, when
    const result = employeeReport.listAllowedToWorkOnSundays();

    // then
    result.forEach(employee => {
      const upperCaseMatch = employee.name.match(/[A-Z]+/);

      expect((upperCaseMatch!)[0]).toHaveLength(employee.name.length);
    });
  });
});
