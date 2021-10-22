import admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import { AppModule } from './app.module'

import express from 'express'
import cors from 'cors'

admin.initializeApp()

const db = admin.firestore()
const app = express()

async function getAllowOriginList() {
  return db.doc(`cors/main`)
    .get()
    .then((doc) => {
      return doc.get('allow_origin') as string[]
    })
}

const corsOptionsDelegate = async function (req, callback) {
  const allowlist = await getAllowOriginList()
  const corsOptions = allowlist.indexOf(req.header('Origin')) !== -1
    ? { origin: true }
    : { origin: false }
  callback(null, corsOptions)
}
app.use(cors(corsOptionsDelegate))

const createNestServer = async (expressInstance: any) => {
  const nestApp = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  )
  return nestApp.init()
}

createNestServer(app).then(() => console.log('Nest Ready')).catch

export const api = functions.region('asia-northeast1').https.onRequest(app)
