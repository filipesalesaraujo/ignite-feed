interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

export interface Props extends Author{
  author: Author;
  content: string;
  publishedAt: Date;
}
