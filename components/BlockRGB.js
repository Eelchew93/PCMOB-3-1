import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function BlockRGB(props) {
    const red = props.red;
    const green = props.green;
    const blue = props.blue;
 return (
   <View
     style={
        {
       backgroundColor: `rgb(${red}, ${green}, ${blue})`,
       padding: 30,
       width: "100%",
     }
    }
   ></View>
 );
}
