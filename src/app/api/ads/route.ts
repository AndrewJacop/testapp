import { NextRequest } from "next/server";
import { adsData } from "./data";

export const revalidate = 0; //Very important
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredList = query
    ? adsData.filter((ad) => ad.title.includes(query))
    : adsData;
  return Response.json(filteredList);
}
export async function POST(req: Request) {
  const ad = await req.json();
  const newAd = {
    id: `${adsData.length + 1}`,
    title: ad.title,
    imgLink: ad.imgLink,
    href: ad.href,
    query: ad.query,
  };
  adsData.push(newAd);
  return new Response(JSON.stringify(newAd), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
