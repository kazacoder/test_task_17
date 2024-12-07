// часть 1
export class Person {
    #birthday = ''
    #birthDate = null

    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthDate = new Date(birthday);
        let m = this.#birthDate.getMonth() + 1;
        let d = this.#birthDate.getDate();
        this.#birthday = `${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}-${this.#birthDate.getFullYear()}`
        if (birthday !== this.#birthday) {
            throw new Error('Wrong date format. Birthdate must be in mm-dd-yyyy format');
        }
    }

    get birthday () {
        return this.#birthday;
    }

    getFullName () {
        return `${this.firstName} ${this.lastName}`;
    }

    getAgeInteger () {
        let now = new Date();
        let birthDateThisYear = new Date(now.getFullYear(), this.#birthDate.getMonth(), this.#birthDate.getDate());
        let age = now.getFullYear() - this.#birthDate.getFullYear();
        if (now < birthDateThisYear) {
            age = age - 1
        }
        return age
    }

    getAge () {
        let age = this.getAgeInteger()
        if (age % 10 === 0 || (age % 10 >= 5 && age % 10 <= 9) || (age % 100 >= 11 && age % 100 <= 15)) {
            return `${age} лет`
        } else if (age % 10 === 1) {
            return `${age} год`
        } else {
            return `${age} года`
        }
    }

    getBirthMonthIndex () {
        return this.#birthDate.getMonth();
    }
}
