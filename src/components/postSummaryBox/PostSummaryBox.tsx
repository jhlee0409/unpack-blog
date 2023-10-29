import Link from "next/link";
import classes from "./PostSummaryBox.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export const PostSummaryBox = (post: { [key: string]: any }) => (
  <div className={classes.container}>
    <p>{post.date}</p>
    <p className={classes.title}>{post.title}</p>
    <p className={classes.summary}>{post.summary}</p>
    <div className={classes.tagBox}>
      {post.tags.map((i: string) => (
        <span key={i}>{i}</span>
      ))}
    </div>
  </div>
);
