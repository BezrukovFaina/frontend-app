// types.ts

// Define a type alias to represent the type of a user
type UserType = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
};

// Define a type alias to represent the type of a post
type PostType = {
  id: number;
  title: string;
  content: string;
  author: UserType;
  comments: CommentType[];
};

// Define a type alias to represent the type of a comment
type CommentType = {
  id: number;
  content: string;
  author: UserType;
};

// Define a type alias to represent the type of a reply
type ReplyType = {
  id: number;
  content: string;
  author: UserType;
};

// Define a type alias to represent the type of a notification
type NotificationType = {
  id: number;
  type: 'new_comment' | 'new_reply';
  content: string;
  user: UserType;
};

// Define a type alias to represent the type of the application state
type AppState = {
  posts: PostType[];
  comments: CommentType[];
  replies: ReplyType[];
  notifications: NotificationType[];
  userId: number | null;
  username: string | null;
};