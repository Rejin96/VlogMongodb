const express = require("express");
const {getVlog,addVlog, updateVlog,deleteVlog}= require("../controllers/vlogController");

const router = express.Router();

router.get("/",getVlog);
router.post("/",addVlog);
router.put("/:id",updateVlog);
router.delete("/:id",deleteVlog);


module.exports = router;