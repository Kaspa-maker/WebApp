import express from 'express';
import Driver from './driverModel';
import asyncHandler from 'express-async-handler';
import drivers from './driver';

const router = express.Router(); // eslint-disable-line



router.get('/', async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (error) {
    handleError(res, error.message);
  }
});

// Create a contact, using async handler
{/*router.post('/', asyncHandler(async (req, res) => {
  const driver = await Driver.create(req.body);
  res.status(201).json(driver);
}));*/}



router.post('/', asyncHandler(async (req, res) => {
  const newDriver = req.body;
  if (newDriver) {
        const driver = await Driver.create(newDriver);
        return res.status(201).send({driver});
    } else {
       return handleError(res, err);
    }
}));


router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const driver = await Driver.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!driver) return res.sendStatus(404);
  return res.json(200, driver);
}));


router.delete('/:id', asyncHandler(async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  if (!driver) return res.send(404);
  await driver.remove();
  return res.status(204).send(driver);
}));


/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
};

export default router;