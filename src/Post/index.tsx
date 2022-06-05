import { Props } from "./index.types";

export function Post({ author, content }: Props) {
  return (
    <div>
      <h1>{author}</h1>
      <p>{content}</p>
    </div>
  );
}
