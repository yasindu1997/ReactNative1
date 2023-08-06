import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

export default function RoundBotton(props) {
  return (
    <View>
        <TouchableOpacity style={{...styles.btn,backgroundColor:props.color}}>

        <Text style={{fontSize:20}}>{props.name}</Text>

        </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({

    btn:{

        width:'50%',
        height:70,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100
        
    }

})