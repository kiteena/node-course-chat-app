const expect = require('expect');
const {generateMessage} = require('./message');

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