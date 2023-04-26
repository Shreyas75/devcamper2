// @desc            Get all Bootcamps
// @route           GET /api/v1/bootcamps
// @access          Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: "Show all Bootcamps" });
};

// @desc            Get Single Bootcamp
// @route           GET /api/v1/bootcamps/:id
// @access          Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Show Bootcamp ${req.params.id}` });
};

// @desc            Create a New Bootcamp
// @route           POST /api/v1/bootcamps
// @access          Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: "Create New Bootcamp" });
};

// @desc            Update a Bootcamp
// @route           PUT /api/v1/bootcamps/:id
// @access          Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update Bootcamp ${req.params.id}` });
};

// @desc            Delete a Bootcamp
// @route           DELETE /api/v1/bootcamps/:id
// @access          Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete Bootcamp ${req.params.id}` });
};
