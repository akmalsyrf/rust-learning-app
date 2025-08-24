import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme } from '../theme';

interface XPBadgeProps {
  xp: number;
  size?: 'small' | 'medium' | 'large';
  showIcon?: boolean;
  showLabel?: boolean;
  animated?: boolean;
}

export default function XPBadge({ 
  xp, 
  size = 'medium', 
  showIcon = true, 
  showLabel = true,
  animated = false 
}: XPBadgeProps) {
  const { getEffectiveTheme } = useSettingsStore();
  
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const getIconSize = () => {
    switch (size) {
      case 'small': return 16;
      case 'medium': return 20;
      case 'large': return 24;
      default: return 20;
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'small': return 12;
      case 'medium': return 16;
      case 'large': return 20;
      default: return 16;
    }
  };

  const getLabelSize = () => {
    switch (size) {
      case 'small': return 10;
      case 'medium': return 12;
      case 'large': return 14;
      default: return 12;
    }
  };

  const formatXP = (xp: number) => {
    if (xp >= 1000000) return `${(xp / 1000000).toFixed(1)}M`;
    if (xp >= 1000) return `${(xp / 1000).toFixed(1)}K`;
    return xp.toString();
  };

  const getXPLevel = (xp: number) => {
    if (xp >= 10000) return 'legend';
    if (xp >= 5000) return 'expert';
    if (xp >= 1000) return 'advanced';
    if (xp >= 500) return 'intermediate';
    if (xp >= 100) return 'beginner';
    return 'newbie';
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'legend': return '#FFD700'; // Gold
      case 'expert': return '#C0C0C0'; // Silver
      case 'advanced': return '#CD7F32'; // Bronze
      case 'intermediate': return theme.colors.primary;
      case 'beginner': return theme.colors.success;
      case 'newbie': return theme.colors.textSecondary;
      default: return theme.colors.accent;
    }
  };

  const level = getXPLevel(xp);
  const levelColor = getLevelColor(level);

  const getSizeStyle = () => {
    const sizeKey = `container${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles;
    return styles[sizeKey];
  };

  return (
    <View style={[
      styles.container, 
      getSizeStyle(),
      animated && styles.animatedContainer
    ]}>
      {showIcon && (
        <Ionicons 
          name="star" 
          size={getIconSize()} 
          color={levelColor} 
        />
      )}
      
      <View style={styles.textContainer}>
        <Text style={[
          styles.xpNumber, 
          { fontSize: getTextSize(), color: levelColor }
        ]}>
          {formatXP(xp)}
        </Text>
        
        {showLabel && (
          <Text style={[
            styles.xpLabel, 
            { fontSize: getLabelSize() }
          ]}>
            XP
          </Text>
        )}
      </View>
      
      {size === 'large' && (
        <Text style={[
          styles.levelBadge,
          { 
            fontSize: getLabelSize(),
            backgroundColor: levelColor + '20',
            borderColor: levelColor + '40',
            color: levelColor
          }
        ]}>
          {level.toUpperCase()}
        </Text>
      )}
    </View>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerSmall: {
    gap: theme.spacing.xs,
  },
  containerMedium: {
    gap: theme.spacing.sm,
  },
  containerLarge: {
    gap: theme.spacing.sm,
  },
  animatedContainer: {
    // Add animation styles if needed
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  xpNumber: {
    fontWeight: '700',
    lineHeight: 1.2,
  },
  xpLabel: {
    color: theme.colors.textSecondary,
    fontWeight: '500',
    marginTop: -2,
  },
  levelBadge: {
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    fontWeight: '600',
    overflow: 'hidden',
  },
});
