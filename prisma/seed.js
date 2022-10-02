const { PrismaClient } = require('@prisma/client')
const { categories, challenges }= require('../helpers/data.js')
const prisma = new PrismaClient()

const load = async () => {
    try {
        await prisma.challenges.createMany({
            data: challenges
          })
          console.log('Added challenges data')
    } catch (e) {
      console.error(e)
      process.exit(1)
    } finally {
      await prisma.$disconnect()
    }
  }
  load()