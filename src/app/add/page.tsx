"use client";
async function addNewAd() {
  const newAd: Ad = {
    id: "101",
    title: "new Add",
    imgLink: "http://example.com/",
    query: "",
    href: "",
  };
  const res = await fetch("http://localhost:3000/api/ads", {
    method: "POST",
    body: JSON.stringify(newAd),
  });
  if (res.ok) console.log("added successfully");
  else console.log("Ad not added");
}
export default function Add() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Add</p>
      <button
        className="h-32 bg-green-700"
        onClick={() => {
          addNewAd();
        }}>
        add new one
      </button>
    </main>
  );
}
