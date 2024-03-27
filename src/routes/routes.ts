import { Router } from "express";

import * as ApiController from "../controller/api.Controller";

const router = Router();

router.get("/ping", ApiController.ping);
router.get("/register", ApiController.register);
router.get("/login", ApiController.login);
router.get("/list", ApiController.list);




export default router;