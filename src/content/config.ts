import { defineCollection, z } from "astro:content";

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      colombia: z.string().url(),
      espana: z.string().url(),
      usa: z.string().url(),
    })
  })
});

export const collection = { books };