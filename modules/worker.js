// часть 2
import {Person} from "./person.js";

export class Worker extends Person{

    #rate = 1000
    #days = 0

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
    }

    get rate () { return this.#rate; }

    set rate (rate) {
        if (rate < 1000) {
            console.log('The rate must be greater than 1000');
        } else {this.#rate = rate;}
    }

    get days () { return this.#days; }

    addDays (days) {
        let now = new Date();
        let daysInCurrentMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
        if (days > 0) {
            if (this.#days + days > daysInCurrentMonth) {
                this.#days = daysInCurrentMonth;
            } else {this.#days += days;}
        }
    }

    getSalary () {
        if (new Date().getMonth() === this.getBirthMonthIndex()) {
            return this.rate * this.#days * 1.1
        } else { return this.rate * this.#days }
    }

    static whoWorkedMore (employees) {
        let maxDays = Math.max(...employees.map(employee => employee.days))
        let maxDaysEmployeesList = employees.filter(employee => employee.days === maxDays );
        let resultString = 'Больше всех отработал';
        (maxDaysEmployeesList.length > 1) ? resultString += 'и:\n' : resultString += ' ';
        maxDaysEmployeesList.forEach(employee => {
            resultString += `${employee.getFullName()}. Количество рабочих дней - ${employee.days}\n`;
        })
        console.log(resultString);
        return maxDaysEmployeesList
    }

    static whoIsYounger (employees) {
        let minAge = Math.min(...employees.map(employee => employee.getAgeInteger()))
        let minAgeEmployeesList = employees.filter(employee => employee.getAgeInteger() === minAge);
        minAgeEmployeesList.forEach(employee => {
            console.log(`${employee.getFullName()} ${employee.getAge()}`);
        })
        return minAgeEmployeesList
    }
}
