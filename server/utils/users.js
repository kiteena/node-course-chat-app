[{
    id: '', 
    name: '', 
    room: ''
}]

class Users {
    constructor() {
        this.users = []; 
    }

    addUser(id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user; 
    }
    removeUser(id){
        var removedUser = this.getUser(id);
        if(!removedUser) {
            return removedUser;
        }
        
        this.users = this.users.filter((user)=> {return user.id !== id;});
        return removedUser; 
    }
    getUser(id){
        return this.users.filter((user)=> user.id === id)[0];
    }
    getUserList(room){
        var users = this.users.filter((user)=> {return user.room === room;}); 
        var namesArray = users.map((user)=> user.name);
        return namesArray;
    }
}

module.exports = {Users};
 
// class Person {
//     constructor (name, age) {
//         this.name = name; 
//         this.age = age; 
//     }

//     getUserDescription(){
//         return `${this.name} is ${this.age} year(s) old`;
//     }

// }

// var me = new Person('Kristina', 28);
// var description = me.getUserDescription(); 
// console.log(description);