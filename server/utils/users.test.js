const expect = require('expect'); 
const {Users} = require('./users');

describe('Users', ()=> {
    var newUsers; 
    beforeEach(()=> {
        newUsers = new Users();
        newUsers.users =[{
            id: 1, 
            name: 'Tioga',
            room: 'Yosemite'
        },{
            id: 2, 
            name: 'Nevada falls',
            room: 'Yosemite'
        },{
            id: 11, 
            name: 'Upper falls',
            room: 'Top of the World'
        }]; 
    });

    it ('should add new users', ()=>{
        var newUsers = new Users(); 
        var user = { 
            id: 123, 
            name: 'Kristina', 
            room: 'Node.js class'
        };
        var result = newUsers.addUser(user.id, user.name, user.room);
        expect(newUsers.users).toEqual([user]);
    });

    it ('should return names for Yosemite group', ()=>{
        var room = 'Yosemite';
        var userList = newUsers.getUserList(room);
        expect(userList).toEqual(['Tioga', 'Nevada falls']);
    });

    it ('should return names for Top of the World group', ()=>{
        var room = "Top of the World";
        var userList = newUsers.getUserList(room);
        expect(userList).toEqual(['Upper falls']);
    });

    it ('should return user by id', ()=>{
        var id = 1;
        var user = newUsers.getUser(id);
        expect(user).toEqual({
            id: 1, 
            name: 'Tioga',
            room: 'Yosemite'
        });
    });

    it ('should not return user', ()=>{
        var id = 17;
        var user = newUsers.getUser(id);
        expect(user).toNotExist();
    });

    it ('should remove a user by id', ()=>{
        var id = 1;
        var removedUser = newUsers.removeUser(id);
        var missingUser = newUsers.users.filter((user)=> {return user.id === id});
        expect(missingUser).toEqual([]);
        expect(newUsers.users.length).toBe(2);
    });

    it ('should not remove user', ()=>{
        var id = 14;
        var nonexistentUser = newUsers.removeUser(id);
        var sameUsers = newUsers.users.filter((user)=> {return user.id !== id});
        expect(sameUsers).toEqual(newUsers.users);
    });
}); 
