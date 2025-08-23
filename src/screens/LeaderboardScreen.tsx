import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useProgressStore } from '../state/useProgressStore';
import { lightTheme, darkTheme } from '../theme';

export default function LeaderboardScreen() {
  const { getEffectiveTheme } = useSettingsStore();
  const { xp } = useProgressStore();
  
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  // Mock data for demo
  const mockLeaderboard = [
    { rank: 1, name: 'RustMaster', xp: 1250, avatar: '🦀' },
    { rank: 2, name: 'CodeNinja', xp: 1100, avatar: '🥷' },
    { rank: 3, name: 'ByteBuster', xp: 950, avatar: '💪' },
    { rank: 4, name: 'You', xp: xp, avatar: '👤' },
    { rank: 5, name: 'DevGuru', xp: 800, avatar: '🧠' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Weekly Leaderboard</Text>
          <Text style={styles.subtitle}>See how you rank among learners</Text>
        </View>

        <View style={styles.podium}>
          {mockLeaderboard.slice(0, 3).map((player, index) => (
            <View key={player.rank} style={[styles.podiumPosition, index === 0 && styles.firstPlace]}>
              <View style={styles.rankBadge}>
                <Text style={styles.rankText}>{player.rank}</Text>
              </View>
              <Text style={styles.avatar}>{player.avatar}</Text>
              <Text style={styles.playerName}>{player.name}</Text>
              <Text style={styles.playerXP}>{player.xp} XP</Text>
            </View>
          ))}
        </View>

        <View style={styles.leaderboardList}>
          {mockLeaderboard.map((player) => (
            <View key={player.rank} style={[
              styles.playerRow,
              player.name === 'You' && styles.currentPlayerRow
            ]}>
              <View style={styles.playerInfo}>
                <Text style={styles.playerRank}>#{player.rank}</Text>
                <Text style={styles.playerAvatar}>{player.avatar}</Text>
                <Text style={[
                  styles.playerNameList,
                  player.name === 'You' && styles.currentPlayerName
                ]}>
                  {player.name}
                </Text>
              </View>
              <Text style={[
                styles.playerXPList,
                player.name === 'You' && styles.currentPlayerXP
              ]}>
                {player.xp} XP
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Ionicons name="information-circle-outline" size={20} color={theme.colors.info} />
          <Text style={styles.infoText}>
            Leaderboard resets every Monday. Keep learning to climb the ranks!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.md,
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  podium: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
  },
  podiumPosition: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    marginHorizontal: theme.spacing.xs,
  },
  firstPlace: {
    backgroundColor: theme.colors.accent + '20',
    borderWidth: 2,
    borderColor: theme.colors.accent,
  },
  rankBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  rankText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  avatar: {
    fontSize: 32,
    marginBottom: theme.spacing.sm,
  },
  playerName: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
  },
  playerXP: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
  },
  leaderboardList: {
    marginBottom: theme.spacing.lg,
  },
  playerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
  },
  currentPlayerRow: {
    backgroundColor: theme.colors.primary + '20',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  playerRank: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '700',
    color: theme.colors.textSecondary,
    width: 30,
  },
  playerAvatar: {
    fontSize: 24,
    marginRight: theme.spacing.md,
  },
  playerNameList: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
    flex: 1,
  },
  currentPlayerName: {
    fontWeight: '600',
    color: theme.colors.primary,
  },
  playerXPList: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  currentPlayerXP: {
    color: theme.colors.primary,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.info + '20',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.info + '40',
  },
  infoText: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.text,
    marginLeft: theme.spacing.sm,
    flex: 1,
    lineHeight: 18,
  },
});
