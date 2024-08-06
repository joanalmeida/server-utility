import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  console.log(`Got a request for ${request.url}`);
  console.log(`Search params: ${request.nextUrl.searchParams}`);
  return new Response("Ok!", { status: 200 });
}
