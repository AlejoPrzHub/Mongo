const{Router} = require("express");
const router = Router();
const PeliculasCtrl = require ("../controller/peliculas.controller")


router.get("/Peliculas", PeliculasCtrl.getPeliculas);
router.get("/Peliculas/actor", PeliculasCtrl.getActor_Peliculas);
router.get("/Peliculas/director", PeliculasCtrl.getDirector_Peliculas);
router.get("/Peliculas/guionista", PeliculasCtrl.getGuionista_Peliculas);
router.get("/Peliculas/productora", PeliculasCtrl.getProductora_Peliculas);

router.post("/Peliculas",PeliculasCtrl.postPeliculas);
router.post("/Peliculas/actor",PeliculasCtrl.postActor_Peliculas);
router.post("/Peliculas/director",PeliculasCtrl.postDirector_Peliculas);
router.post("/Peliculas/guionista",PeliculasCtrl.postGuionista_Peliculas);

router.put("/Peliculas", PeliculasCtrl.putPeliculas);

router.delete("/Peliculas", PeliculasCtrl.delPeliculas);
router.delete("/Peliculas/actor", PeliculasCtrl.delActor_Peliculas);
router.delete("/Peliculas/director", PeliculasCtrl.delDirector_Peliculas);
router.delete("/Peliculas/guionista", PeliculasCtrl.delGuionista_Peliculas);

module.exports = router;