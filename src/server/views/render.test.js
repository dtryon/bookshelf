import { expect } from 'chai';

import render from './render';

describe('render', () => {

    it('should render html', () => {
        const result = render('some-url', { results: [] });
        expect(result).to.include('<body>');
    });

    it('should render book data', () => {
        const result = render('/', { results: [{ title: 'happy, happy, joy, joy'}] });
        expect(result).to.include('happy, happy, joy, joy');
    });
});

