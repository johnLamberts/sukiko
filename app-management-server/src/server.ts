
import colors from "colors.ts";
import { connectoDB } from "@/common/database";
import express, { Application } from "express";

colors?.enable();


const app: Application = express();

// ----------------------------------------------------
// Establish Connection

connectoDB(process?.env.MONGODB_URL as string, process?.env.MONGODB_COLLECTION_NAME as string)

// ----------------------------------------------------


export default app;
