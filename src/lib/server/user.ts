import { PrismaDB } from "./db";
import type { User } from "@prisma/client";

const DB = new PrismaDB();

export async function getUserFromEmail(googleId: string): Promise<User | null> {
    let userDB : User | null = null;

    try {
        userDB = await DB.user.findUnique({
            where: {
                email: googleId
            }
        });
    } catch(e) {
        console.log(e);
    }

    return userDB;
}
