import app from "../app";
import request from 'supertest'

describe('guests routes', () => {
    describe('welcome endpoint', () => {
        // beforeAll()
        // beforeEach()
        // afterAll()
        afterEach(()=>{})
            it('returns 404 on GET to /welcome', async () => {
            const response = await request(app).get('/welcome');
            // const response = await request(app).post('/welcome').send({

            });
            expect(response.statusCode).toBe(404)
        })        
        it('diplays the welcome page on GET', async () => {
            const response = await request(app).get('/guests/welcome');
            expect(response.statusCode).toBe(200)
            console.log(response)
            expect(response.text).toContain('Connect using GitHub')
        })        
    })
})