import { PrismaClient } from '@prisma/client';

//PrismaDB singleton
let prisma_instance : PrismaClient;

export class PrismaDB extends PrismaClient {
    constructor() {
        if (!prisma_instance) {
            super();
            prisma_instance = this;
        }
        return prisma_instance;
    }
}