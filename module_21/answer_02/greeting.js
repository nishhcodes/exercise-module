function generateGreeting (name) {
    this.name = name;
    this.greet = function() {
        return `Hello, ${this.name}!`;
    }
}

const user1 = new generateGreeting('Manish');
const user2 = new generateGreeting('Shubam');
const user3 = new generateGreeting('Karma');

console.log(user1.greet());
console.log(user2.greet());
console.log(user3.greet());