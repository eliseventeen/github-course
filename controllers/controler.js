const BootcampSchema = require('../models/Model');

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
const postBootcamp = async (req, res, next) => {
  const bootcamp = await BootcampSchema.create(req.body);
  try {
    if (bootcamp) {
      res.status(201).json({ sucess: true, data: bootcamp });
    } else {
      res.status(400).json({ sucess: false, message: 'Req.body is undefined' });
    }
  } catch (err) {
    res.status(401).json({ sucess: false, message: 'Bad connection' });
  }

  // res.status(200).json({ sucess: true, message: 'post items in bootcamp' });
};

// PUT a item
const putBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootcampSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!bootcamp) {
      res.status(400).json({ sucess: false, error: 'Id não encontrado' });
    } else {
      res.status(201).json({ sucess: true, data: bootcamp });
    }
  } catch (err) {
    res.status(400).json({ sucess: false, error: err });
  }
  // res
  //   .status(201)
  //   .json({ sucess: true, message: `Put a item using id: ${req.params.id}` });
};

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
