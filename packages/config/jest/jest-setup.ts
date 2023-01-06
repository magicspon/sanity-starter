// Global setup for Jest, will run once per test file
import { reseedDatabase } from '@project/api/test/seed'
import { prisma } from '@project/db'

beforeEach(async () => {
  await reseedDatabase()
})

afterAll(() => {
  // Disconnect Prisma from the database after all tests are complete
  // to avoid open handles stopping Jest from exiting
  prisma.$disconnect()
})
