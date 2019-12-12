import express from 'express';
import Track from './tracksModel';
import asyncHandler from 'express-async-handler';

const router = express.Router();// eslint-disable-line

router.get('/', asyncHandler(async (req, res) => {
  const tracks = await Track.find();
  return res.send(tracks);
}));


router.post('/', asyncHandler(async (req, res) => {
    const newTrack = req.body;
    if (newTrack) {
          const track = await Track.create(newTrack);
          return res.status(201).send({track});
      } else {
         return handleError(res, err);
      }
}));


router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const track = await Track.findById(id);
    return res.send({track});
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const track = await Track.findById(req.params.id);
  if (!track) return res.send(404);
  await track.remove();
  return res.status(204).send(track);
}));



/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;