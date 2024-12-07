// 3.1 В файле index.js импортируйте класс Worker и создайте через конструктор пятерых работников.
import {Worker} from "../modules/worker.js";

let employees = [
    new Worker('Семен', 'Михайлов', '12-12-1989', 'UI/UX'),
    new Worker('Алена', 'Мишина', '01-25-1980', 'Frontend Разработчик'),
    new Worker('Михаил', 'Васильев', '03-08-1995', 'Тимлид'),
    new Worker('Ирина', 'Петрова', '11-23-1987', 'Менеджер'),
    new Worker('Елена', 'Семенова', '07-31-1995', 'Backend разработчик'),
]

// 3.2 Как минимум для троих поменяйте ставку в день.
employees[0].rate = 100
employees[0].rate = 17000
employees[1].rate = 20000
employees[2].rate = 25000
employees[3].rate = 23000
employees[4].rate = 20000

// 3.3 Для каждого из сотрудников по 2-3 раза добавьте через метод addDays рабочие дни (попробуйте разные вариации,
// к примеру, добавить -2 дня или 50 дней)
employees[0].addDays(2)
employees[0].addDays(15)
employees[0].addDays(50)

employees[1].addDays(13)
employees[1].addDays(-22)
employees[1].addDays(12)
employees[1].addDays(6)

employees[2].addDays(5)
employees[2].addDays(10)
employees[2].addDays(8)

employees[3].addDays(7)
employees[3].addDays(2)
employees[3].addDays(6)

employees[4].addDays(8)
employees[4].addDays(10)
employees[4].addDays(1)

// 3.4 Выведите зарплату за текущий месяц для каждого из работников в консоль в формате «Имя Фамилия - N рублей».
// Для вывода имен используйте метод getFullName.
employees.forEach(employee => {
    console.log(`${employee.getFullName()} - ${employee.getSalary()} руб.`);
})
// additional
const salaryTable = document.getElementById('salary')
employees.forEach((employee, index) => {
    const newRow = salaryTable.insertRow()
    newRow.insertCell().innerText = index + 1
    newRow.insertCell().innerText = employee.getFullName()
    newRow.insertCell().innerText = employee.position
    newRow.insertCell().innerText = employee.getSalary().toLocaleString()
    newRow.insertCell().innerText = employee.days
})


// 3.5 Выясните с помощью whoWorkedMore, кто из этих 5 работников отработал больше всех дней за месяц.
// Worker.whoWorkedMore(employees)
const maxDaysTable = document.getElementById('max-days')
Worker.whoWorkedMore(employees).forEach((employee, index) => {
    const newRow = maxDaysTable.insertRow()
    newRow.insertCell().innerText = index + 1
    newRow.insertCell().innerText = employee.getFullName()
    newRow.insertCell().innerText = employee.days
})

// 3.6 Выясните с помощью whoIsYounger, кто из этих 5 работников самый младший.
// Worker.whoIsYounger(employees)
const youngestEmployeesTable = document.getElementById('youngest-employees')
Worker.whoIsYounger(employees).forEach((employee, index) => {
    const newRow = youngestEmployeesTable.insertRow()
    newRow.insertCell().innerText = index + 1
    newRow.insertCell().innerText = employee.getFullName()
    newRow.insertCell().innerText = employee.getAge()
    newRow.insertCell().innerText = employee.birthday
})


// testing getAge() method:
// for (let i = 2024; i > 1900; i--) {
//     let e = new Worker('qw', '22', `01-01-${i}`, '')
//     console.log(e.getAge());
// }
