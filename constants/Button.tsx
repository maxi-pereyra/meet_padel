import React, { useCallback } from 'react';
import { Pressable, Text, StyleSheet, PressableProps, ViewStyle, TextStyle, StyleProp } from 'react-native';


import { Colors } from '@/config';

interface CustomButton {
    children?: React.ReactNode,
    onPress: () => void,
    activeOpacity?: number,
    borderless?: boolean,
    title?: string,
    style?: ViewStyle | TextStyle,
}

export const Button: React.FC<CustomButton> = ({
    children, 
    onPress, 
    activeOpacity = 0.3, 
    borderless = false, 
    title, 
    style, 
}) => {
    const _style = useCallback(
        ({ pressed }: { pressed: boolean }) => [
          style as StyleProp<ViewStyle>,
          { opacity: pressed ? activeOpacity : 1 }
        ], 
        [style, activeOpacity]
      );

      if (borderless) {
        return (
          <Pressable onPress={onPress} style={_style}>
            <Text style={styles.borderlessButtonText}>{title}</Text>
          </Pressable>
        );
      }
    
      return (
        <Pressable onPress={onPress} style={_style} >
          {children}
        </Pressable>
      );
}

const styles = StyleSheet.create({
    text: {
      color: Colors.white,
      fontSize: 16,
      textAlign: "center",
      padding: 10,
    },
    borderlessButtonText: {
        fontSize: 16,
        color: Colors.blue
      },
  });