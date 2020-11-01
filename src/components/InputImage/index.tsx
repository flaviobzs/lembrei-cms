import React, { useEffect } from "react";
import { 
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { Container, Image } from './styles';

interface InputImageProps {
  imageUri: string;
  onChangeImage: Function;
}

const InputImage: React.FC<InputImageProps> = ({ imageUri, onChangeImage }) => {
  
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("Você precisa habilitar a permissão para uso da camera");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "tem certeza que quer apagar a imagem?", [
        { text: "Sim", onPress: () => onChangeImage(null) },
        { text: "Não" },
      ]);
  };

  const selectImage = async () => {
    try {      
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Container>
        {!imageUri && (
          <MaterialCommunityIcons color="#232129" name="camera" size={40} />
        )}
        {imageUri && <Image source={{ uri: imageUri }}  />}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default InputImage;
