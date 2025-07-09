export const allComicsQuery = `
  *[_type == "comic"]{
    _id,
    title,
    slug,
    description,
    price,
    "coverImage": coverImage.asset->url,
    "categories": categories[]->title,
    "authors": authors[]->name,
    releaseDate,
    stock
  }
`