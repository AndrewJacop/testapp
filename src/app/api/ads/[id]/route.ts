import { redirect } from "next/navigation";
import { adsData } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const ad = adsData.find((ad) => ad.id === params.id);
  if (!ad) redirect("/api/ads");
  return Response.json(ad);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const idx = adsData.findIndex((ad) => ad.id === params.id);
  const body = await request.json();
  const newAd = {
    id: adsData[idx].id,
    title: body.title ?? adsData[idx].title,
    imgLink: body.imgLink ?? adsData[idx].imgLink,
    href: body.href ?? adsData[idx].href,
    query: body.query ?? adsData[idx].query,
  };
  adsData[idx] = newAd;
  return Response.json(adsData[idx]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const idx = adsData.findIndex((ad) => ad.id === params.id);
  const deletedAd = adsData[idx];
  adsData.splice(idx, 1);
  return Response.json(deletedAd);
}
