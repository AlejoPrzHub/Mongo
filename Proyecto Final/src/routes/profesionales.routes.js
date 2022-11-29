const{Router} = require("express");
const router = Router();
const ProfessionalCtrl = require ("../controller/profesionales.controller")


router.get("/Professional", ProfessionalCtrl.getProfessional);
router.post("/Professional",ProfessionalCtrl.postProfessional)
router.put("/Professional", ProfessionalCtrl.putProfessional);
router.delete("/Professional", ProfessionalCtrl.delProfessional);
module.exports = router;