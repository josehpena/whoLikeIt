const { whoLikeIt } = require('./../src/index');

describe('whoLikeIt', () => {
    it('Should return "no one likes this" when no names are sended.', () => {
        expect(whoLikeIt([])).toBe("no one likes this");
    });
    
    it('Should return the name of the person when only one name is sent', () => {
        expect(whoLikeIt(["Peter"])).toBe("Peter likes this");
    });

    it('Should return the name of the 2 names who liked', () => {
        expect(whoLikeIt(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
    });

    it('Should return the three names who liked', () => {
        expect(whoLikeIt(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
    });
});