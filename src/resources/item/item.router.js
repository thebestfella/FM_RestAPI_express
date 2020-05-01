import { Router } from 'express'

const router = Router()

// /api/item
router
  .route('/')
  .get((req, res) => {
    res.send({ me: 'get cat' })
  })
  .post((req, res) => {
    res.send({ me: 'post cat' })
  })

// /api/item/:id
router
  .route('/:id')
  .get((req, res) => {
    res.send({ me: 'get cat id' })
  })
  .put((req, res) => {
    res.send({ me: 'put cat id' })
  })
  .delete((req, res) => {
    res.send({ me: 'delete cat id' })
  })

//export default router
