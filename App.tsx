import * as React from 'react';
import { Text, View, StyleSheet , FlatList , Image } from 'react-native';
import Constants from 'expo-constants';

const dados = ([
  {
    id:1, 
    nome:'Meci Careca',
    foto:'https://pbs.twimg.com/profile_images/1358528753350115328/RZKRNQbt_400x400.jpg',
    ddd: '66',
    telefone: '3898941',
    email: 'mecicareca@gmail.com',
	  },
	  {
	    id:2, 
	    nome:'CR7 Careca',
	    foto:'https://www.impala.pt/wp-content/uploads/2020/02/nova-gente-76794-noticia-cristiano-ronaldo-daqui-10-anos-imagem-do-craque-careca-e-de-bigode-dificil.jpg',
	    ddd: '66',
	    telefone: '3548798',
	    email: 'CR7@gmail.com',
	  },
	  {
	    id:3, 
	    nome:'Neymar Careca',
	    foto:'https://pbs.twimg.com/media/EQYCkTlUUAEcHSz?format=jpg&name=small',
	    ddd: '66',
	    telefone: '546484546',
	    email: 'adultoney@gmail.com',
  },
  
]);

export default function App() {
  const renderItemAgenda = ({item})=>{
    return(
      <View style = {styles.itens}>
          <Image 
            style={styles.containerFlatListImage}
            source={{uri:item.foto}}
          />
        <View>
          <Text>{item.nome}</Text>
          <Text>({item.ddd}) {item.telefone}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
      
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Agenda</Text>
      <FlatList 
        data={dados}
        keyExtractor={(item)=>item.id}
        renderItem={renderItemAgenda}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerFlatListImage:{
    height:50,
    width:50,
    //backgroundColor:'blue',
    borderRadius:50,
    marginRight:5,
  },
  itens: {
    fontSize: 50,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    margin: 5,
  },
  texto:{
    fontSize: 40,
  },
});