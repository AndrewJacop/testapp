async function getAllAdsWithAPI() {
  const newList: Ad[] = [];
  const res = await fetch("http://localhost:3000/api/ads", {
    cache: "no-store",
  });
  const data = await res.json();
  data.map((ele: Ad) => {
    newList.push(ele);
  });
  return newList;
}

export const revalidate = 0; //Very important

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  const lst: Ad[] = await getAllAdsWithAPI();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>All</p>
      {lst.map((ele: Ad, index: number) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center my-5">
            <h1 className="text-4xl font-bold"> {ele.title} </h1>
            <p className="text-xl"> {ele.imgLink} </p>
          </div>
        );
      })}
    </main>
  );
}
