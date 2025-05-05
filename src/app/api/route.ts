import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "src", "data", "sample.txt");
  const output = await readFile(filePath, "utf-8");
  return Response.json({
    output,
  });
}
