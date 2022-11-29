const{Router} = require("express");
const router = Router();
const PhotoCtrl = require ("../controller/photo.controller")


router.get("/photos", PhotoCtrl.photo);
router.post("/photos",PhotoCtrl.postPhoto)
router.put("/photos", PhotoCtrl.photoUp);
router.delete("/photos", PhotoCtrl.photoDel);
router.delete("/del", PhotoCtrl.photoDel2);
module.exports = router;