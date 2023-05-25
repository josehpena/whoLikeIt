const { whoLikeIt } = require('./../src/index');

describe('whoLikeIt', () => {
    it('Should return "no one likes this" when no names are sended.', () => {
        expect(whoLikeIt([])).toBe("no one likes this");
    });
});