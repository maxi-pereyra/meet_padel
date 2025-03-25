import React from 'react';
import { TextInput as RNTextInput, TextInputProps, ViewStyle, View } from 'react-native';

import { Icon } from './Icon';
import { Button } from './Button';
import { Colors } from '../config';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type CustomTextInputProps = TextInputProps & {
  width?: string | number;
  leftIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  rightIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
  handlePasswordVisibility?: () => void;
};

export const TextInput: React.FC<CustomTextInputProps> = ({
  width = '100%',
  leftIconName,
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        borderRadius: 8,
        flexDirection: 'row',
        padding: 12,
        marginVertical: 12,
        width,
        borderWidth: 1,
        borderColor: Colors.mediumGray
      } as ViewStyle}
    >
      {leftIconName ? (
        <Icon
          name={leftIconName}
          size={22}
          color={Colors.mediumGray}
          style={{ marginRight: 10 }}
        />
      ) : null}
      <RNTextInput
        style={{
          flex: 1,
          width: '100%',
          fontSize: 18,
          color: Colors.black
        }}
        placeholderTextColor={Colors.mediumGray}
        {...otherProps}
      />
      {rightIcon ? (
        <Button onPress={handlePasswordVisibility ?? (() => {})}>
          <Icon
            name={rightIcon}
            size={22}
            color={Colors.mediumGray}
            style={{ marginRight: 10 }}
          />
        </Button>
      ) : null}
    </View>
  );
};
