import React, {Component, useState} from 'react';
import {StyleSheet, View, Image, Share, Text,Linking} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Feather, MaterialCommunityIcons, AntDesign} from '../../Utils/Exports';
import {Title, Drawer} from 'react-native-paper';
import Modal from '../../Components/Modals/Modals';
import Theme from '../../Utils/Theme';
import { auth } from '../../Utils/Exports';
import { OwnerRememberMeAction } from '../../redux/actions';
import {useDispatch} from 'react-redux';
export function Gym_DrawerContent({props, navigation}) {
  const [loader, Setloader] = useState(false);
    const dispatch = useDispatch();
  const logout = () => {
    Setloader(true);
    auth.signOut().then(() => {
            dispatch(OwnerRememberMeAction(false));
      navigation.replace('SplashScreen');
      Setloader(false);
    });
    // navigation.replace('LoginScreen');
    // return;
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Hey, I highly recommend the Roadgains App, so you can stay fit wherever you go! , AppLink :https://linktr.ee/roadgainsapp',
        url: 'https://linktr.ee/roadgainsapp',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Theme.primary}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Feather
                    name="menu"
                    color={Theme.white}
                    size={Theme.iconSize}
                  />
                  <Title
                    style={{
                      ...styles.title,
                      left: '10%',
                      color: Theme.white,
                    }}>
                    Menu
                  </Title>
                </View>
                <MaterialCommunityIcons
                  name="close"
                  color={Theme.white}
                  size={Theme.iconSize}
                  onPress={() => navigation.closeDrawer()}
                />
              </View>
            </View>
          </View>
          <Text
            style={{
              color: Theme.txtWhite,
              fontSize: Theme.txtMedium,
              fontWeight: '900',
              left: '7%',
              marginTop: '7%',
            }}>
            Hey, nice to have you here!
          </Text>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={styles.img}
                  source={require('../../Assets/profileIcon.png')}
                />
              )}
              label="Profile"
              labelStyle={{color: Theme.white}}
              onPress={() => navigation.navigate('Gym_Profile')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={styles.img}
                  source={require('../../Assets/Home.png')}
                />
              )}
              label="Home"
              labelStyle={{color: Theme.white}}
              onPress={() => navigation.navigate('Gym_HomeScreen')}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={styles.img}
                  source={require('../../Assets/notes.png')}
                />
              )}
              label="Messages"
              labelStyle={{color: Theme.white}}
              onPress={() => navigation.navigate('Gym_Messages')}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={styles.img}
                  source={require('../../Assets/setting.png')}
                />
              )}
              label="Settings"
              labelStyle={{color: Theme.white}}
              onPress={() => navigation.navigate('Gym_Settings')}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={styles.img}
                  source={require('../../Assets/feedbackIcon.png')}
                />
              )}
              label="Feedbacks"
              labelStyle={{color: Theme.white}}
              onPress={() => navigation.navigate('Gym_Feedbacks')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={styles.img}
                  source={require('../../Assets/HotNewsIcon.png')}
                />
              )}
              label="Hot News"
              labelStyle={{color: Theme.white}}
              onPress={() =>
                Linking.openURL('https://www.roadgains.com/hot-news')
              }
            />
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="share-all"
                  color={Theme.white}
                  size={Theme.iconSize}
                />
              )}
              label="Send Invite"
              labelStyle={{color: Theme.white,right:'5%'}}
              onPress={() => onShare()}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={Theme.white}
              size={Theme.iconSize}
            />
          )}
          label="Log-out"
          labelStyle={{color: Theme.white}}
          onPress={() => logout()}
        />
      </Drawer.Section>
      <Modal
        loader={loader}
        loaderIndicator={true}
        label={'Logging out please wait...'}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    // backgroundColor: Theme.black,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: Theme.white,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: Theme.white,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {marginTop: 15},
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#1f65ff',
    borderTopWidth: 1,
  },
  img: {
    width: 20,
    height: 20,
  },
  imgs: {
    width: 14,
    height: 22,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
