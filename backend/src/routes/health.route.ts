import { Router } from "express";
import { timeStamp } from "node:console";

const router = Router();

router.get("/health", (req, res) => {
    res.json({
        status: "OK",
        service: "AI Documentation Generator",
        timeStamp: new Date().toISOString(),
    });
});

export default router;