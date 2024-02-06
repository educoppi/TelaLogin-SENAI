import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, TextInput, Pressable} from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
        uri:'https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png'
      }}
      />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Login"
          value={text}
          />
          <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          placeholder='Senha'
          secureTextEntry={true}
          />
      </SafeAreaView>
        <Pressable 
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'red' : 'black',
            },
            styles.button,
          ]}
        >
          Entrar
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  logo: {
    width: 400,
    height: 100,
    margin: 100,
  },
  input: {
    height: 40, 
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    borderRadius: 10,

    color: 'white',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    marginTop: 15,
  },
});