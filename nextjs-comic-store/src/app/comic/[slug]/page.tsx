import { client } from "@/sanity/client";
import { comicBySlugQuery } from "@/sanity/queries";
import { Comic } from "@/types/comic";
import { notFound } from "next/navigation";

interface ComicPageProps {
  params: { slug: string };
}

export default async function ComicPage({ params }: ComicPageProps) {
  const comic: Comic | null = await client.fetch(comicBySlugQuery, {
    slug: params.slug,
  });

  if (!comic) return notFound();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      {comic.coverImage && (
        <img
          src={comic.coverImage}
          alt={comic.title}
          className="w-full h-auto rounded shadow mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-4">{comic.title}</h1>

      {comic.description && (
        <p className="mb-4 text-gray-700">{comic.description}</p>
      )}

      <p className="font-semibold text-xl mb-2">£{comic.price}</p>
      <p className="text-sm text-gray-600">In stock: {comic.stock}</p>

      <p className="text-sm text-gray-600 mt-2">
        Categories: {comic.categories?.join(", ") || "None"}
      </p>
      <p className="text-sm text-gray-600">
        Authors: {comic.authors?.join(", ") || "Unknown"}
      </p>
      <p className="text-sm text-gray-600">
        Release Date:{" "}
        {comic.releaseDate
          ? new Date(comic.releaseDate).toLocaleDateString()
          : "TBA"}
      </p>
    </main>
  );
}



// import { client } from "@/sanity/client";
// import { comicBySlugQuery } from "@/sanity/queries";
// import { Comic } from "@/types/comic";
// import { notFound } from "next/navigation";

// interface ComicPageProps {
//   params: { slug: string };
// }

// export default async function ComicPage({ params }: ComicPageProps) {
//   const comic: Comic | null = await client.fetch(comicBySlugQuery, {
//     slug: params.slug,
//   });

//   if (!comic) return notFound();

//   return (
//     <main className="p-8 max-w-3xl mx-auto">
//       <img
//         src={comic.coverImage}
//         alt={comic.title}
//         className="w-full h-auto rounded shadow mb-6"
//       />
//       <h1 className="text-3xl font-bold mb-4">{comic.title}</h1>
//       <p className="mb-4 text-gray-700">{comic.description}</p>
//       <p className="font-semibold text-xl mb-2">£{comic.price}</p>
//       <p className="text-sm text-gray-600">In stock: {comic.stock}</p>
//       <p className="text-sm text-gray-600 mt-2">
//         Categories: {comic.categories.join(", ")}
//       </p>
//       <p className="text-sm text-gray-600">
//         Authors: {comic.authors.join(", ")}
//       </p>
//       <p className="text-sm text-gray-600">
//         Release Date: {new Date(comic.releaseDate).toLocaleDateString()}
//       </p>
//     </main>
//   );
// }
