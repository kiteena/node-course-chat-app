const expect = require('expect'); 
const {isRealString} = require('./validation'); 

describe('isRealString', () => {
    it('should reject non-string values', ()=>{
        var test_string = 123;
        var result = isRealString(test_string);
        expect(result).toBe(false);
    }); 

    it('should reject strings with only spaces', ()=>{
        var test_string = '   ';
        var result = isRealString(test_string);
        expect(result).toBe(false);
    }); 

    it('should allow strings with any non-space characters', ()=>{
        var test_string = ' Kristina 28';
        var result = isRealString(test_string);
        expect(result).toBe(true);
    }); 
})