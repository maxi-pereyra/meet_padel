import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextStyle } from 'react-native';

type IconProps = {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  color?: string;
  style?: TextStyle;
};

export const Icon: React.FC<IconProps> = ({ name, size, color, style }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
};