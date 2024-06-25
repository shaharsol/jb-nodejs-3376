import getModel from "./factory"
import mongoose from '../../db/mongo'
describe('some shit', () => {
    it('returns a valid model', () => {
        const model = getModel();
        expect(model).toBeDefined()
    })
})