import supabase from '../client';

export type Post = {
  id: number;
  username: string;
  npo: string;
  city: string;
  state: string;
  text: string;
  image: string;
  likeCount: number;
};

export type Comment = {
  id: number;
  postId: number;
  username: string;
  text: string;
  likeCount: number;
};

type PostRow = {
  id: number;
  user_name: string;
  npo_name: string;
  post_text: string;
  image_link: string;
  num_likes: number;
  Locations: {
    city_name: string;
    state_abbr: string;
  } | null;
};

type CommentRow = {
  id: number;
  post_id: number;
  user_name: string;
  comment_text: string;
  num_likes: number;
};

export async function getAllPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('Posts')
    .select(
      'id, user_name, npo_name, post_text, image_link, num_likes, Locations(city_name, state_abbr)',
    )
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Error fetching posts: ${error.message}`);
  }

  return (data as unknown as PostRow[]).map(row => ({
    id: row.id,
    username: row.user_name,
    npo: row.npo_name,
    city: row.Locations?.city_name ?? '',
    state: row.Locations?.state_abbr ?? '',
    text: row.post_text,
    image: row.image_link,
    likeCount: row.num_likes,
  }));
}

export async function getCommentsForPost(postId: number): Promise<Comment[]> {
  const { data, error } = await supabase
    .from('Comments')
    .select('id, post_id, user_name, comment_text, num_likes')
    .eq('post_id', postId)
    .order('created_at', { ascending: true });

  if (error) {
    throw new Error(`Error fetching comments: ${error.message}`);
  }

  return (data as unknown as CommentRow[]).map(row => ({
    id: row.id,
    postId: row.post_id,
    username: row.user_name,
    text: row.comment_text,
    likeCount: row.num_likes,
  }));
}
