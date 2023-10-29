import Link from "next/link";
import classes from "./PostListCard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export const PostListCard = (post: {
  data: {
    [key: string]: any;
  } & {
    mainCategory: string;
    subCategory: string;
  };
  path: string;
}) => (
  <Link href={post.path}>
    <div className={classes.container}>
      <p>{post.data.date}</p>
      <p className={classes.title}>{post.data.title}</p>
      <p className={classes.summary}>{post.data.summary}</p>
      <div className={classes.tagBox}>
        {post.data.tags.map((i: string) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </div>
  </Link>
);
