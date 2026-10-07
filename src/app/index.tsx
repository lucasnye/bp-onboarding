import type {
  Comment as CommentData,
  Post as PostData,
} from '~/api/supabase/queries/query';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Comment from '@/components/Comment/Comment';
import Post from '@/components/Post/Post';
import colors from '@/styles/colors';
import { typography } from '@/styles/typography';
import { getAllPosts, getCommentsForPost } from '~/api/supabase/queries/query';

export default function App() {
  const [posts, setPosts] = useState<PostData[] | null>(null);
  const [commentsByPostId, setCommentsByPostId] = useState<
    Record<number, CommentData[]>
  >({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);

        const commentLists = await Promise.all(
          fetchedPosts.map(post => getCommentsForPost(post.id)),
        );

        const grouped: Record<number, CommentData[]> = {};
        fetchedPosts.forEach((post, index) => {
          grouped[post.id] = commentLists[index];
        });
        setCommentsByPostId(grouped);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load posts');
      }
    }

    loadPosts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
      >
        {error ? (
          <View style={styles.stateContainer}>
            <Text style={styles.stateText}>{error}</Text>
          </View>
        ) : posts === null ? (
          <View style={styles.stateContainer}>
            <ActivityIndicator color={colors.text} />
            <Text style={styles.stateText}>Loading...</Text>
          </View>
        ) : posts.length === 0 ? (
          <View style={styles.stateContainer}>
            <Text style={styles.stateText}>No posts yet.</Text>
          </View>
        ) : (
          posts.map(post => (
            <View key={post.id} style={styles.postBlock}>
              <Post
                username={post.username}
                npo={post.npo}
                city={post.city}
                state={post.state}
                text={post.text}
                image={post.image}
                likeCount={post.likeCount}
              />

              <View style={styles.divider} />

              <View style={styles.comments}>
                {(commentsByPostId[post.id] ?? []).map(comment => (
                  <Comment
                    key={comment.id}
                    username={comment.username}
                    text={comment.text}
                    likeCount={comment.likeCount}
                  />
                ))}
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  postBlock: {
    marginBottom: 24,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.divider,
    marginTop: 16,
  },
  comments: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  stateContainer: {
    paddingTop: 48,
    alignItems: 'center',
    gap: 8,
  },
  stateText: {
    ...typography.p1,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
