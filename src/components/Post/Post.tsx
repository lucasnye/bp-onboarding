import { Image, Text, View } from 'react-native';
import HeartIcon from '~/assets/heart-icon.svg';
import ShareIcon from '~/assets/messenger-icon.svg';
import ProfilePlaceholder from '~/assets/profile-placeholder-icon.svg';
import styles from './styles';

type PostProps = {
  username: string;
  npo: string;
  city: string;
  state: string;
  text: string;
  image: string;
  likeCount: number;
};

export default function Post({
  username,
  npo,
  city,
  state,
  text,
  image,
  likeCount,
}: PostProps) {
  return (
    <View style={styles.post}>
      <View style={styles.profileRow}>
        <ProfilePlaceholder width={40} height={40} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>
            <Text style={styles.bold}>{username}</Text>
            <Text> at </Text>
            <Text style={styles.bold}>{npo}</Text>
          </Text>
          <Text style={styles.location}>
            {city}, {state}
          </Text>
        </View>
      </View>

      <Image
        source={{ uri: image }}
        style={styles.postImage}
        resizeMode="cover"
      />

      <Text style={styles.caption}>{text}</Text>

      <Text style={styles.likes}>
        {likeCount} {likeCount === 1 ? 'like' : 'likes'}
      </Text>

      <View style={styles.actionsRow}>
        <HeartIcon width={24} height={21} />
        <ShareIcon width={23} height={20} />
      </View>
    </View>
  );
}
