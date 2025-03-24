import { TextInput as RNTextInput, TextInputProps , View, Button} from "react-native";
import { Colors } from "@/config";

interface CustomTextInputProps extends TextInputProps {}

export default function TextInput (props: CustomTextInputProps) {
    return (
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 8,
            flexDirection: 'row',
            padding: 12,
            marginVertical: 12,
            width: '100%',
            borderWidth: 1,
            borderColor: Colors.mediumGray
          }}
        >
          {/* {leftIconName ? (
            <Icon
              name={leftIconName}
              size={22}
              color={Colors.mediumGray}
              style={{ marginRight: 10 }}
            />
          ) : null} */}
          <RNTextInput
            {...props}
            style={{
              flex: 1,
              width: '100%',
              fontSize: 18,
              color: Colors.black
            }}
            placeholderTextColor={Colors.mediumGray}
          />
          {/* {rightIcon ? (
            <Button onPress={handlePasswordVisibility}>
              <Icon
                name={rightIcon}
                size={22}
                color={Colors.mediumGray}
                style={{ marginRight: 10 }}
              />
            </Button>
          ) : null} */}
        </View>
      );
}