const BootcampSchema = require('../models/Model');
const assyncErr = require('../models/asyncErr');
const Error = require('../utils/errorResponse');

// GET all Bootcamps
const getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await BootcampSchema.find(req.params);
    if (!bootcamp) {
      res.status(400).json({ sucess: false, error: 'Nada encontrado' });
    } else {
      res.status(200).json({ sucess: true, data: bootcamp });
    }
  } catch (error) {
    
    res.status(400).json({ sucess: false, error: err });
  }
  // res.status(200).json({ sucess: true, message: 'get all items' });
};

// GET a single Bootcamp
const getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootcampSchema.findById(req.params.id);
    if (!bootcamp) {
      res.status(400).json({ sucess: false, error: 'Id não encontrado' });
    } else {
      res.status(200).json({ sucess: true, data: bootcamp });
    }
  } catch (err) {
    res.status(400).json({ sucess: true, err });
  }

  // res
  //   .status(200)
  //   .json({ sucess: true, message: `Get item of id: ${req.params.id}` });
};

// POST a Bootcamp
const postBootcamp = assyncErr(async (req, res, next) => {

  const bootcamp = await BootcampSchema.create(req.body);
    if (bootcamp) {
      res.status(201).json({ sucess: true, data: bootcamp })};
});

// PUT a item
const putBootcamp = assyncErr(async (req, res, next) => {
    const bootcamp = await BootcampSchema.findByIdAndUpdate(
      req.params.id, req.body,{ new: true, runValidators: true, },);

    if (!bootcamp) {
      return next( new Error('Erro ao encontra o id', 404));
    } 
    res.status(201).json({ success: true, data: bootcamp });
});

// Delete a item
const delBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootcampSchema.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      res.status(400).json({ sucess: false, error: 'Id não encontrado' });
    } else {
      res.status(201).json({ sucess: true, message: {} });
    }
  } catch (error) {
    res.status(400).json({ sucess: false, error });
  }

  // res.status(201).json({
  //   sucess: true,
  //   message: `Delete a item using id: ${req.params.id}`,
  // });
};

module.exports = {
  getBootcamps,
  getBootcamp,
  postBootcamp,
  putBootcamp,
  delBootcamp,
};
