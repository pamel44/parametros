import React from 'react-native';
import { View, Text, Button } from "react-native";
import { useState } from 'react';

export default function AlunoCard({aluno}){
    const [dados, setDados] = useState(aluno);
    console.log(aluno);
    
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Nome : {dados.nome}</Text>
            <Text>idade: {dados.idade}</Text>
            <Text>curso : {dados.curso}</Text>
            <Text>cidade : {dados.cidade}</Text>
            <Text>{ dados.idade >= 18 ? "Maior de idade" :" Menor de idade"}</Text>
            <Button 
            title="mudar curso para ADS "
            onPress = { ()=> setDados ({...dados, curso: 'ADS'})}
            />
        </View>

);



}
