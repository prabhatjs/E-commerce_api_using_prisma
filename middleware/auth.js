import express from "express";
import jwt from 'jsonwebtoken';
import prisma from "../DB/db.config.js";

export const authmidd = async (req, res, next) => {
    try {
        // 1. Get token from header
        const token = req.headers.authorization?.split(" ")[1]; // Assuming Bearer token
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }
        // 2. Verify the token
        const payload = jwt.verify(token, "Secratekeyhere");
        // 3. Fetch user from the database
        const user = await prisma.users.findFirst({ where: { id: payload.userId } });
        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }
        // 4. Attach user to the request
        req.user = user;
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Unauthorized: Token has expired" });
        }
        // For any other errors, return a 500 status
        console.error("Error during authentication:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
