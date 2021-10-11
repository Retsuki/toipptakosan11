import * as functions from 'firebase-functions'
import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import { AppModule } from './app.module'

import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors({ origin: true }))

const createNestServer = async (expressInstance: any) => {
  const nestApp = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  ) 
  return nestApp.init()
}

createNestServer(app)
.then(() => console.log('Nest Ready'))
.catch

export const api = functions.region('asia-northeast1').https.onRequest(app);
