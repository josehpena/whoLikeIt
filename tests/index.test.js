const { whoLikeIt } = require('./../src/index');

describe('whoLikeIt', () => {
    it('Should return "no one likes this" when no names are sended.', () => {
        expect(whoLikeIt([])).toBe("no one likes this");
    });
    
    it('Should return the name of the person when only one name is sent', () => {
        expect(whoLikeIt(["Peter"])).toBe("Peter likes this");
    });
});