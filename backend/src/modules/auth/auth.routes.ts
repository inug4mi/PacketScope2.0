import { Router } from "express";

const router = Router();

router.post("/register", (_req, res) => {
  res.status(201).json({
    message: "Ruta de registro alcanzada correctamente",
  });
});

export default router;