class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.courses = [];
    }

    static greet() {
        console.log("Hello There");
    }

    login() {
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout() {
        console.log(`${this.name} has logged out`);
        return this;
    }

    getDetails() {
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User {
    constructor(name, age, email, luCoins) {
        super(name, age, email);
    }
    addCoins() {
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    removeCoins() {
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        })
    }

}

class Admin extends Moderator {
    addCourse(user, course) {
        user.courses.push(course);
        console.log("Course Added for " + user);
    }
    deleteCourse(user, course) {
        console.log("Course Deleted for " + user)
        user.courses.pop(course);

    }
}


let user1 = new User('Robin', 44, 'robin@gmail.com')
let user2 = new User('Nisha', 38, 'nisha@gmai.com')
let mod = new Moderator('Shawn', 13, 'shawn@gmail.com', 'Moderator');
let admin = new Admin('Sandra', 8, 'sandra@gmail.com');
let users = [user1, user2, mod, admin];

users.forEach(element => {
    console.log(element);
});

User.greet();

user1.login()
user2.login()

mod.addCoins();
mod.addCoins();
mod.addCoins();
mod.addCoins();
mod.addCoins();
console.log(mod.luCoins);
mod.removeCoins();
mod.removeCoins();
console.log(mod.luCoins);

admin.addCourse(user1, 'Javascript');
admin.addCourse(user2, 'Python');
admin.addCourse(user1, 'Java');
admin.addCourse(user2, 'C++');

users.forEach(element => {
    console.log(element);
});

admin.deleteCourse(user1, 'Java');
admin.deleteCourse(user2, 'C++');
console.log(admin.courses);

users.forEach(element => {
    console.log(element);
});