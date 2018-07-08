const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from  = 'Person';
        var text = 'This is some text';
        var message = generateMessage(from, text);
        // expect(message.from).toBe(person);
        // expect(message.text).toBe(text);
        expect(message).toInclude({from, text});
        expect(typeof message.createdAt).toBe('number');
    }); 

});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from  = 'Person';
        var lat = 92; 
        var long= 25; 
        var url = `https://www.google.com/maps?q=${lat},${long}`;
        var location = generateLocationMessage(from, lat, long);
        expect(location).toInclude({from, url});
        expect(typeof location.createdAt).toBe('number');
    }); 

});