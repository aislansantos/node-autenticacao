import { Request, Response, NextFunction } from "express";

export const Auth = {
    private: (req: Request, res: Response, next: NextFunction) => {
        // Fazer verificação de autenticação.
        let success = false;

        if (success) {
            return next();
        }
        // Erro 403 - não permitido;
        return res.status(403).json({ error: "Não autorizado" });
    }
}