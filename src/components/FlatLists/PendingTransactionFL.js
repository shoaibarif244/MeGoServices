import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import Theme from '../../Utils/Theme';
import styles from './Style';

const PendingTransactionFL = props => {
  const {navigation, data} = props;

  return (
    <>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <>
              <TouchableOpacity style={styles.wrapFLBtn} >
                <View style={styles.flexRow}>
                  <View style={{width: '20%'}}>
                    <Image
                      source={item.imgProfile}
                      style={styles.imgProfile1}
                    />
                  </View>
                  <View style={styles.flex80}>
                    <View style={{ width: '45%'}}>
                      <Text style={styles.txtName}>{item.name}</Text>

                      <Text style={styles.txtDesignation}>
                        {item.designation}
                      </Text>
                    </View>
                    <View style={{width: '48%'}}>
                      <View
                        style={styles.flexAlignJustify}>
                        {item.SecurePayment ? (
                          <View style={styles.wrapRequestPayment}>
                            <Text style={styles.txtRequestPay}>
                            Secure payment
                            </Text>
                          </View>
                        ) : (
                          <Text>
                           {' '}
                          </Text>
                        )}
                        <Text style={{...styles.txtAmount1,color:Theme.errorColor}}>{item.amount}</Text>
                        
                      </View>
                      <Text style={styles.txtDate}>{item.date}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};
export default PendingTransactionFL;
