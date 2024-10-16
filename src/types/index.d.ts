interface Post {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: Author;
  likes: number;
  comments: any[];
}

interface Author {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

interface PaginatedData<T> {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  page: number;
  items: number;
  data: T[];
}
