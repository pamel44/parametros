import { View, Text, Button, ScrollView } from 'react-native'

export default function HomeScreen ({navigation}) {
    const alunos = [
        {id:1, nome:"João", idade: 16, curso: "Enfermagem", cidade: "Manoel Ribas"},
        {id:2, nome:"José", idade: 19, curso: "Agronomia", cidade: "Curitiba" },
        {id:3, nome:"Kauan", idade: 26, curso: "Engenharia Cívil", cidade: "Pitanga"}
    ];

    return(
        <ScrollView contentContainerStyle={{padding:20}}>
            <Text style = {{fontSize: 20, marginBottom: 10 }}>
                lista de alunos:
            </Text>

            {alunos.map((aluno)=>(
                <View key ={aluno.id} style={{marginBottom: 10}}>
                <Button 
                    title = {aluno.nome}
                    onPress = {()=> navigation.navigate ('Detalhes', {aluno})}
                />
                </View>
            ))};
        </ScrollView>
    );
}