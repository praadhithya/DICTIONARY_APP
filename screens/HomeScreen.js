import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  styles
} from 'react-native';
import { Header } from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class HomeScreen extends React.Component 
{
  constructor() 
  {
    super();
    this.state = {
      text: '',
      chunks: [],
    };
  }

  render()
  {
    return (
      <SafeAreaProvider>
      <View style={styles1.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'DICTIONARY APP',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <TextInput
          style={styles1.inputBox}
          onChangeText={text => {
            this.setState({ 
              text: text ,
              isSearchPressed:false,
              word:"Loading...",
              lexicalCategory:'',
              examples:[],
              defination:''
            });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles1.searchButton}
          onPress={() => {
            this.setState({isSearchPressed:true})
            this.getWord(this.state.text)
          }}>
             <Text style={styles1.buttonText}>GO</Text>
         </TouchableOpacity>

            <View style={styles1.outputContainer}>
            <Text style={{fontSize:20}}>
            {
              this.state.isSearchPressed&&this.state.word==="Loading..."
              ?this.state.word
              :""
            }
            </Text>
            {
              this.state.word!=="Loading..."

            }
            </View>



           <View style={styles1.detailsContainer}>
             <Text style={styles1.detailsTitle}> 
             Word :{" "}
              </Text>
              <Text style={{fontSize:18}}>
                {this.state.word}
              </Text>
             </View>

             <View style={styles1.detailsContainer}>
             <Text style={styles1.detailsTitle}> 
              Type :{" "}
              </Text>
              <Text style={{fontSize:18}}>
                {this.state.lexicalCategory}
              </Text>
             </View>

             <View style={{flexDirection:'row',flexWrap:'wrap'}}>
               <Text style={styles1.detailsContainer}>
                 Definition:{" "}
                 </Text>
                 <Text style={{fontSize:18}}>
                  {this.state.definition}
               </Text>
             </View>

          
       </View>
       </SafeAreaProvider>
     )
   }



  getWord = (word) => 
  {
  var searchKeyword=word.toLowerCase()
  var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
  return fetch(url)
  .then((data)=>{     
    if(data.status===200)
    {
      return data.json()
    }
    else
    {
      return null
    }
  })
  .then((response)=>{
    var responseObject = response

    if (responseObject)
    {
      var wordDate = responseObject.definition[0]
      var definition=wordDate.description
      var lexicalCategory=wordDate.wordtype

      this.setState({
      "word" : this.state.text,
      "definition":definition,
      "lexicalCategory":lexicalCategory
      })
    }
    else
    {
      this.setState
      ({
        "word" : this.state.text,
        "definition":"Not Found",
      })
    }
  })
  
 }
}

const styles1 = StyleSheet.create({
  container: {
    flex: 13,
    backgroundColor: '#b8b8b8',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  detailsTitle: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  outputContainer: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '100%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '100%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  chunkButton:{
    
  }
});