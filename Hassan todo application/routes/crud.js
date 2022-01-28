const express = require('express')
const router = express.Router()

const {
  getAllData,
  getOneData,
  updateData,
  deleteData,
  createData,
} = require('../controllers/crud')

router.route('/').get(getAllData).post(createData)
router.route('/:userId').get(getOneData).patch(updateData).delete(deleteData)

module.exports = router
