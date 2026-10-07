import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import { typography } from '@/styles/typography';

export default StyleSheet.create({
  commentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 16,
  },
  commentBody: {
    flex: 1,
  },
  bold: {
    fontWeight: '700',
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
