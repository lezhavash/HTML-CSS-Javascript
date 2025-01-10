const express = require('express');
const tourController = require('./../controllers/tourController.js');

const router = express.Router();

router.param('id', tourController.checkID);

const checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  }
  next();
};

router
  .route('/')
  .get(tourController.getAllTours)
  .post(checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.delateTour);

module.exports = router;

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', delateTour);
