// import React, { useState } from 'react'
// import { View,Text } from 'react-native'
// import { SelectList } from 'react-native-dropdown-select-list'

// const Bölge=()=>{ 
//     const [selected,setSelected]=useState("")
//     return(
//         <View style={{paddingHorizontal:20,paddingVertical:50,flex:1}}>

//         </View>
//     )
// }


import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Bölge = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const items = [
    { label: 'Seçenek 1', value: 'option1' },
    { label: 'Seçenek 2', value: 'option2' },
    { label: 'Seçenek 3', value: 'option3' },
  ];

  return (
    <View style={styles.container}>
      <DropDownPicker
        items={items}
        defaultValue={selectedValue}
        containerStyle={{ height: 40 }}
        style={styles.dropDown}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={styles.dropDownContainer}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDown: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dropDownContainer: {
    backgroundColor: '#fafafa',
  },
});

export default Bölge;

