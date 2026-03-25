import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const changeLog = defineCollection({
  loader: file("src/content/changeLog/changeLog.json"),
  schema: z.object({
    id: z.number(),
    year: z.number(),
    date: z.string(),
    change: z.string(),
  }),
});

export const collections = { changeLog };
