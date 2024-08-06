import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  console.log(`Got a request for ${request.url}`);
  console.log(`Search params: ${request.nextUrl.searchParams}`);
  const body = await request.json();
  console.log(body);
  return new Response("Ok!", { status: 200 });
}
