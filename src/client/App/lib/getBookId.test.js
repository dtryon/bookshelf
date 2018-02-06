import { expect } from 'chai';

import getBookId from './getBookId';

describe('getBookId', () => {
    it('should create slug of book title', () => {
        const id = getBookId({ title: 'and the winner is...' });
        expect(id).to.equal('and-the-winner-is');
    });
});
