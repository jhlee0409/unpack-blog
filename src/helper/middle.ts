import matter from "gray-matter";
import path from "path";
import fs from "fs";

export const getSubPostCategory = (big: string) => {
  const files = fs.readdirSync(path.join(`src/app/(mdx)/${big}`));
  return files;
};

export const getPostCategory = () => {
  const files = fs.readdirSync(path.join("src/app/(mdx)"));

  const result = files
    .filter((c) => !c.includes(".tsx"))
    .map((big) => ({
      title: big,
      subCategories: getSubPostCategory(big),
    }));
  return result;
};

export const getPosts = (folder: string) => {
  const [big, sub] = folder.split("/");
  const posts = fs.readdirSync(path.join(`src/app/(mdx)/${big}/${sub}`));
  const fileContents = posts
    .filter((v) => !v.includes(".tsx"))
    .map((item) => {
      const { data } = matter(
        fs.readFileSync(
          path.join(`src/app/(mdx)/${big}/${sub}/${item}/page.mdx`),
          "utf8"
        )
      );
      return {
        data: Object.assign(data, { mainCategory: big, subCategory: sub }),
        path: `/${big}/${sub}/${item}`,
      };
    });

  return fileContents;
};
