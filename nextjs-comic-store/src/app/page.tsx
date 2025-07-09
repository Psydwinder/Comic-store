// src/app/page.tsx
import { client } from "@/sanity/client";
import { allComicsQuery } from "@/sanity/queries";
import { Comic } from "@/types/comic";

export default async function HomePage() {
  const comics: Comic[] = await client.fetch(allComicsQuery);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Comic Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comics.map((comic) => (
          <div key={comic._id} className="border p-4 rounded">
            <img
              src={comic.coverImage}
              alt={comic.title}
              className="mb-2 h-64 object-cover"
            />
            <h2 className="text-xl font-semibold">{comic.title}</h2>
            <p className="text-sm text-gray-600">{comic.description}</p>
            <p className="font-bold mt-2">£{comic.price}</p>
            <p className="text-xs">Stock: {comic.stock}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
