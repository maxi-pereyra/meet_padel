import React, { useCallback } from 'react';
import { Pressable, Text, StyleSheet, PressableStateCallbackType, ViewStyle, TextStyle } from 'react-native';

import { Colors } from '../config';

type ButtonProps = {
  children?: React.ReactNode;
  onPress: () => void;
  activeOpacity?: number;
  borderless?: boolean;
  title?: string;
  style?: ViewStyle;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  activeOpacity = 0.3,
  borderless = false,
  title,
  style
}) => {
  const _style = useCallback(({ pressed }: PressableStateCallbackType): ViewStyle[] => [
    style as ViewStyle,
    { opacity: pressed ? activeOpacity : 1 }
  ], [style, activeOpacity]);

  if (borderless) {
    return (
      <Pressable onPress={onPress} style={_style}>
        <Text style={styles.borderlessButtonText}>{title}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={_style}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderlessButtonText: {
    fontSize: 16,
    color: Colors.blue
  } as TextStyle
});
