import { expect, it } from 'bun:test'
import { app } from '../server/index'
import { connectToDatabase, disconnectFromDatabase } from '../database'


  it('GET /api retorna mensagem', async () => {
    const res = await app.handle(new Request('http://localhost/api'))
    expect(res.status).toBe(200)
    const text = await res.text()
    expect(text).toBe('Hello Elysia')
  })

  it('GET /api/movies return film list', async () => {
    await connectToDatabase()
    const res = await app.handle(new Request('http://localhost/api/movies'))
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(Array.isArray(data)).toBe(true)
    await disconnectFromDatabase()
  })
