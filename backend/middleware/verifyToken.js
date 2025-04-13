import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) return res.status(401).json({ success: false, message: "Não autorizado - Sem toke" });
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) return res.status(401).json({ success: false, message: "Não autorizado - Token inválido" });

		req.userId = decoded.userId;
		next();
	} catch (error) {
		console.log("Erro no método verifyToken ", error);
		return res.status(500).json({ success: false, message: "Erro de servidor" });
	}
};
