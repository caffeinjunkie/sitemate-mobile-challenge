import {Button, Image, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Colors} from "@/constants/Colors";

type SearchBoxProps = {
  value: string,
  onSearch: () => void,
  onChange: (val: string) => void
}

export function SearchBox(props: SearchBoxProps) {
  const { onSearch, value, onChange } = props;

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textInput}
        placeholder="Watchu lookin for?"
        placeholderTextColor="#ababab"
        onChangeText={onChange}
        value={value}
      />
      <TouchableOpacity style={styles.button} onPress={onSearch}>
        <Image
          source={require('@/assets/images/magnifying-glass.png')}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ababab',
    borderRadius: 8,
    padding: 4
  },
  textInput: {
    flex: 0.85,
  },
  button: {
    flex: 0.15,
    backgroundColor: Colors.light.tint,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchIcon: {
    height: 16,
    width: 16,
  },
})