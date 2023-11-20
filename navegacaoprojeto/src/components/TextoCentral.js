import React from 'react-native'
import { View, Text } from 'react-native'

export default props => {
    <View style={{flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.corFundo
    }}>
      <Text style={{
        fontSize: 50,
        color: props.corTexto
    }}>
        {props.children}
      </Text>
    </View>
}