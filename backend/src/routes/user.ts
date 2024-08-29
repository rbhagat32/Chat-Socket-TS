import express from "express";
import { isLoggedIn } from "../middlewares/auth.js";
import {
  searchUser,
  getRequests,
  getUser,
  respondRequest,
  sendRequest,
  updateDetails,
} from "../controllers/user.js";
const router = express.Router();

router.use(isLoggedIn);
router.get("/get-user", getUser);
router.get("/search-user", searchUser);
router.post("/send-request/:id", sendRequest);
router.get("/get-requests", getRequests);
router.post("/respond-request/:id", respondRequest);
router.put("/update-details", updateDetails);

export default router;
