/*import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getCollection } from "astro:content";

export async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}*/
import rss from "@astrojs/rss";

export const get = async () => {
  // Data fetching, etc.

  return rss({
    title: "example",
    description: "Some example description",
    site: "https://example.pages.dev", //import.meta.env.SITE,
    items: [
      {
        link: "/foo",
        title: "Foo",
        pubDate: "2022-01-02",
      },
    ],
  });
};