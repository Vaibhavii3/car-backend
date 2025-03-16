const express = require('express');
const { getAllServices, getServiceById, getPackagesByService } = require('../controllers/serviceController');

const router = express.Router();

router.get('/', getAllServices);
router.get('/:serviceId', getServiceById);
router.get('/:serviceId/packages', getPackagesByService);

module.exports = router;
