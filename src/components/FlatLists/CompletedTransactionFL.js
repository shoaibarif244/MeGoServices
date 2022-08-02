import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import Theme from '../../Utils/Theme';
import styles from './Style';

const CompletedTransactionFL = props => {
  const {navigation, data} = props;

  return (
    <>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.wrapFLBtn}>
            <View style={styles.flexRow}>
              <View style={{width: '20%'}}>
                <View style={styles.wrapImgProfile1}>
                  <Image
                    source={item.imgProfile}
                    style={styles.imgProfile}
                    resizeMode={'center'}
                  />
                </View>
              </View>
              <View style={styles.flex80}>
                <View style={{width: '45%'}}>
                  <Text style={styles.txtName}>{item.name}</Text>
    
                  <Text style={styles.txtDesignation}>{item.designation}</Text>
                </View>
                <View style={{width: '48%'}}>
                  <Text
                    style={{
                      ...styles.txtAmount1,
                      alignSelf: 'flex-end',
                      color: Theme.parrot,
                    }}>
                    <Text
                      style={{
                        ...styles.txtAmount1,
                        alignSelf: 'flex-end',
                        color: Theme.greish,
                      }}>
                      {item.status}
                      {'  '}
                    </Text>
                    {item.amount}
                  </Text>
                  <Text style={styles.txtDate}>{item.date}</Text>
                </View>
              </View>
            </View>
          </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default CompletedTransactionFL;
