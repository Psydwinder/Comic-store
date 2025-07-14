export const allComicsQuery = `
  *[_type == "comic"]{
    _id,
    title,
    issue,
    slug,
    description,
    price,
    stock,
    releaseDate,
    "coverImage": coverImage.asset->url,
    "categories": categories[]->title,
    "authors": authors[]->name,
    "artists": artists[]->name,
    "publisher": publisher->name
  }
`;


export const comicBySlugQuery = `
  *[_type == "comic" && slug.current == $slug][0]{
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
