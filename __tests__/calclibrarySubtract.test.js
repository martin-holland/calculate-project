'use strict';

const { subtract } = require('../calclibrary');

describe('test subtract with integers', ()=>{
    const testValues=[
        [1, 1, 0],
        [2, 3, -1],
        [-2, -4, 2],
        [0, 0, 0],
        [3, 0, 3],
        [0, 3, -3]
    ];
    test.each(testValues)('subtract(%s,%s)=%s', (a,b,expected)=>{
        expect(subtract(a,b)).toBe(expected);
    });
});

describe('test subtract with floats', ()=>{
    const testValues=[
        [10, 11.5, -1.5],
        [-2.5, 3, -5.5],
        [2.5, 2.5, 0],
        [2.4, -2.5, 4.9]
    ];

    test.each(testValues)('subtract(%s,%s)=%s',(a,b,expected)=>{
        expect(subtract(a,b)).toBeCloseTo(expected);
    });
});
