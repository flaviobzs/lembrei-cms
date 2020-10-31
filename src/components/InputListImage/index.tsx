import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// import { Container } from './styles';

import InputImage from "../InputImage";

interface Image {
  props: any;
}

interface InputListProps {
  imageUris: Image[];
  onRemoveImage: any;
  onAddImage: any;
}

const InputListImage: React.FC<InputListProps> = ({
  imageUris,
  onRemoveImage,
  onAddImage,
}) => {
  const scrollView = useRef();

  return (
    // <View>
    <ScrollView
      ref={scrollView}
      horizontal
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {/* /* lista de imagens  */}

        {imageUris.map((uri) => (
          <View key={uri} style={styles.image}>
            <InputImage
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <InputImage onChangeImage={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    // marginRight: 10,
  },
});

export default InputListImage;
