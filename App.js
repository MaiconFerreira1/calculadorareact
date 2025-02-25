import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import CustomButton from './componentes/CustomButtom/CustomButtom';
import TextInputBox from './componentes/TextInputBox/TextInputBox';
import FuncaoSoma from './acoes/FuncaoSoma';
import funcaoSubtracao from './acoes/FuncaoSubtracao';
import funcaoMultiplicacao from './acoes/FuncaoMultiplicacao';
import funcaoDivisao from './acoes/FuncaoDivisao';


export default function App() {
const [number1, setNumber1] = useState('');
const [number2, setNumber2] = useState('');
return (
<View style={styles.container}>
<StatusBar style="auto" />
<Text style={styles.title}>Calculadora</Text>
<TextInputBox
value={number1}
onChangeText={setNumber1}
placeholder="Digite o primeiro número"
keyboardType="numeric"
/>
<TextInputBox
value={number2}
onChangeText={setNumber2}
placeholder="Digite o segundo número"
keyboardType="numeric"
/>

<View style={styles.buttonContainer}>
<CustomButton
title="+"
onPress={() => FuncaoSoma(number1,number2)}
style={styles.button}
/>

<CustomButton
title="-"
onPress={() => funcaoSubtracao(number1,number2)}
style={styles.button}
/>

<CustomButton
title="*"
onPress={() => funcaoMultiplicacao(number1,number2)}
style={styles.button}
/>

<CustomButton
title="/"
onPress={() => funcaoDivisao(number1,number2)}
style={styles.button}
/>

</View>

</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
title: {
fontSize: 24,
marginBottom: 20,
},

buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 10
}
});
WeakMap
