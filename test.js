import {describe, it, expect, beforeEach} from 'vitest';
import { updateQuestionHistory, questionHistory} from './Magic8Ball';

describe('updateQuestionHistory', () => {
    //set up a DOM before each test
    beforeEach(() => {
        document.body.innerHTML = `<div id="history"></div>`;
        //reset the question history array
        questionHistory.length = 0;
    });

    it('should add a question to the questionHistory array', () => {
        updateQuestionHistory('Is it raining?');
        expect(questionHistory).toEqual(['Is it raining?']);
    });

    it('should add the question to the DOM history display', () => {
        updateQuestionHistory('Will I be rich?');
        const historyDiv = document.getElementById('history');
        expect(historyDiv.innerHTML).toContain('<p>1. Will I be rich?</p>');
    });
});