import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
import colors from '../styles/colors';
import { typography } from '../styles/typography';

const POST_IMAGE_URI =
  'https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.post}>
          <View style={styles.profileRow}>
            <ProfilePlaceholder width={40} height={40} />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>
                <Text style={styles.bold}>neha32</Text>
                <Text> at </Text>
                <Text style={styles.bold}>Mission Bit</Text>
              </Text>
              <Text style={styles.location}>San Francisco, CA</Text>
            </View>
          </View>

          <Image
            source={{ uri: POST_IMAGE_URI }}
            style={styles.postImage}
            resizeMode="cover"
          />

          <Text style={styles.caption}>
            This past weekend, I taught at Mission Bit. I was working with a
            group of 10 high school students who were building their first
            web pages. They were all really eager to learn, and I'm glad I
            signed up. Highly recommend to any other software engineers
            interested in volunteering! Sign up here:
            https://missionbit.org/get-involved/volunteer-with-us/
          </Text>

          <Text style={styles.likes}>3 likes</Text>

          <View style={styles.actionsRow}>
            <HeartIcon width={24} height={21} />
            <ShareIcon width={23} height={20} />
          </View>

          <Text style={styles.date}>February 1</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.comments}>
          <View style={styles.commentRow}>
            <ProfilePlaceholder width={32} height={32} />
            <View style={styles.commentBody}>
              <Text style={styles.commentText}>
                <Text style={styles.bold}>eshab</Text> This non-profit
                organization seems like a great place to volunteer at, I'll
                be there!
              </Text>
              <Text style={styles.commentLikes}>2 likes</Text>
            </View>
            <HeartIcon width={16} height={14} style={styles.commentHeart} />
          </View>

          <View style={styles.commentRow}>
            <ProfilePlaceholder width={32} height={32} />
            <View style={styles.commentBody}>
              <Text style={styles.commentText}>
                <Text style={styles.bold}>kyama</Text> Thanks for sharing!
              </Text>
              <Text style={styles.commentLikes}>1 like</Text>
            </View>
            <HeartIcon width={16} height={14} style={styles.commentHeart} />
          </View>

          <View style={styles.commentRow}>
            <ProfilePlaceholder width={32} height={32} />
            <View style={styles.commentBody}>
              <Text style={styles.commentText}>
                <Text style={styles.bold}>slucas</Text> assignment 1 done!
              </Text>
              <Text style={styles.commentLikes}>1 like</Text>
            </View>
            <HeartIcon width={16} height={14} style={styles.commentHeart} />
          </View>
        </View>
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
  post: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    ...typography.p1,
    color: colors.text,
  },
  bold: {
    fontWeight: '700',
  },
  location: {
    ...typography.p3,
    color: colors.textSecondary,
    marginTop: 2,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1.47,
    borderRadius: 8,
    backgroundColor: colors.placeholder,
    marginBottom: 12,
  },
  caption: {
    ...typography.p1,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 10,
  },
  likes: {
    ...typography.p2,
    color: colors.text,
    marginBottom: 12,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  date: {
    ...typography.p3,
    color: colors.textSecondary,
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
  commentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 16,
  },
  commentBody: {
    flex: 1,
  },
  commentText: {
    ...typography.p2,
    color: colors.text,
    lineHeight: 19,
  },
  commentLikes: {
    ...typography.p3,
    color: colors.textSecondary,
    marginTop: 4,
  },
  commentHeart: {
    marginTop: 2,
  },
});
