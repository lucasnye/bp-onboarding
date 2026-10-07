import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import { typography } from '@/styles/typography';

export default StyleSheet.create({
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
  },
});
