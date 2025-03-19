import express from "express";
import { 
  getAllServices, 
  getServiceById, 
  getPackagesByService 
} from "../controllers/serviceController.js";

const router = express.Router();

router.get("/", getAllServices);
router.get("/:serviceId", getServiceById);
router.get("/:serviceId/packages", getPackagesByService);

export default router;
