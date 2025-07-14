import {defineField, defineType} from 'sanity'

export const product = defineType ({
  name: 'comic',
  title: 'Comic',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),

    defineField({
        name: 'issue',
        title: 'Issue',
        type: 'number',
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96
        }
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot:true},
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
    }),
    defineField({
        name: 'price',
        title: 'Price (£)',
        type: 'number',
    }),

    defineField({
        name: 'stock',
        title: 'Stock',
        type: 'number',
    }),

     defineField({
        name: 'releaseDate',
        title: 'Release Date',
        type: 'date',
    }),

    defineField({
  name: 'categories',
  title: 'Categories',
  type: 'array',
  of: [{ type: 'reference', to: [{ type: 'category' }] }],
}),
defineField({
  name: 'authors',
  title: 'Author(s)',
  type: 'array',
  of: [{ type: 'reference', to: [{ type: 'author' }] }],
}),
defineField({
  name: 'artists',
  title: 'Artist(s)',
  type: 'array',
  of: [{ type: 'reference', to: [{ type: 'artist' }] }],
}),
defineField({
  name: 'publisher',
  title: 'Publisher',
  type: 'reference',
  to: [{ type: 'publisher' }],
}),
    // defineField({
    //     name: 'categories',
    //     title: 'Categories',
    //     type: 'string'
    // }),
    // defineField({
    //   name: 'authors',
    //   title: 'Author(s)',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'artists',
    //   title: 'Artist(s)',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'publisher',
    //   title: 'Publisher',
    //   type: 'string'
    // })

]
})

export default product;