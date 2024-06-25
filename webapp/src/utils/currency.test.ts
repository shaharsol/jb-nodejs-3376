import { Request } from "express";
import { formatCurrency } from "./currency"
import { v4 } from "uuid";

describe('currency tests', () => {
    describe('USD tests', () => {
        it('attaches the euro sign to the left of the string if user not logged in', () => {
            const str = v4();
            const request = {} as Request
            const result = formatCurrency(str, request);
            expect(result).toBeDefined()
            expect(result.length).toBe(str.length + 1)
            expect(result.substring(0,1)).toBe('€')
        })
        // it('attaches the usd sign to the left of the string if user IS logged in', () => {
        //     const str = v4();
        //     const request = {
        //         user: {}
        //     } as Request
        //     const result = formatCurrency(str, request);
        //     expect(result).toBeDefined()
        //     expect(result.length).toBe(str.length + 1)
        //     expect(result.substring(0,1)).toBe('$')
        // })
    })
})