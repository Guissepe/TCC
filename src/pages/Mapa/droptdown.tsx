import { circleMarker } from "leaflet";
import React, { Component } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withTheme } from "styled-components";

class FlatListDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: "",
    };

    this.arrayNew = [
      { name: "	J. Colina" },
      { name: "Sadia" },
      { name: "Incubatorio" },
      { name: "Santa Luzia" },
      { name: "Bairro da Luz" },
      { name: "Unisep" },
      { name: "Parque Industrial" },
      { name: "Colegio" },
      { name: "Secretaria de saúde" },
      { name: "Verdes Campos" },
      { name: "Secr. de saúde J. da Colina" },
      { name: "Bairro Esperança" },
      { name: "Vizivale" },
      { name: "Ind. Latreille" },
      { name: "Margarida" },
      { name: "Abb" },
    ];
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "1%",
          backgroundColor: "#000000",
        }}
      />
    );
  };

  searchItems = (text) => {
    const newData = this.arrayNew.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
      value: text,
    });
  };

  renderHeader = () => {
    return (
      <TextInput
        style={{
          height: "5vw",
          borderWidth: 1,
          backgroundColor: "white",
        }}
        placeholder="   Pesquise... "
        onChangeText={(text) => this.searchItems(text)}
        value={this.state.value}
      />
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: "1000%",
          position: "absolute",
          alignSelf: "center",
          justifyContent: "center",
          top: -45,
          right: 78,
        }}
      >
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={this.arrayNew}>
              <Text style={{ padding: 1, backgroundColor: "white" }}>
                {item.name}{" "}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default FlatListDropDown;
