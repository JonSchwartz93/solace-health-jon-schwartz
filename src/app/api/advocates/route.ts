import db from "../../../db";
import { advocates } from "../../../db/schema";
// import { advocateData } from "../../../db/seed/advocates";

export async function GET() {
  try {
    // Uncomment this line to use a database
    const data = await db.select().from(advocates);
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: "Database connection failed" }, { status: 500 });
  }

  // const data = advocateData;
}
