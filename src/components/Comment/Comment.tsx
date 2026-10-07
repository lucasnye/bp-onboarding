import { Text, View } from 'react-native';
import HeartIcon from '~/assets/heart-icon.svg';
import ProfilePlaceholder from '~/assets/profile-placeholder-icon.svg';
import styles from './styles';

type CommentProps = {
  username: string;
  text: string;
  likeCount: number;
};

export default function Comment({ username, text, likeCount }: CommentProps) {
  return (
    <View style={styles.commentRow}>
      <ProfilePlaceholder width={32} height={32} />
      <View style={styles.commentBody}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{username}</Text> {text}
        </Text>
        <Text style={styles.commentLikes}>
          {likeCount} {likeCount === 1 ? 'like' : 'likes'}
        </Text>
      </View>
      <HeartIcon width={16} height={14} style={styles.commentHeart} />
    </View>
  );
}
