import React from "react-native";
import { View } from "react-native";
import AlunoCard from "./alunocard";

export default function DetailsScreen({route}) {
    const {aluno } = route.params;

    return(
        <View style = {{flex:1}}>
            <AlunoCard aluno={aluno} />
        </View>
    )
};