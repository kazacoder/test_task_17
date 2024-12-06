export class Person {
    #birthday = ''

    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = birthday ;
    }

    get birthday () {
        return this.#birthday;
    }

    getFullName () {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge () {
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let dateParts = this.#birthday.split('-');
        let birthDate = new Date(`${dateParts[2]}-${+dateParts[0]}-${dateParts[1]}`);
        let birthDateThisYear = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        let age = today.getFullYear() - birthDate.getFullYear();
        if (today < birthDateThisYear) {
            age = age - 1
        }
        return age
    }
}

