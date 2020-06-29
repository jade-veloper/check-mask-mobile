import React from 'react';
import { Alert } from 'react-native';
import { ContextProvider } from 'react-simplified-context';
import * as Location from 'expo-location';
import axios from 'axios';

import Navigator from './Navigator';
import LoadingScreen from './screens/LoadingScreen';

export default class App extends React.Component {
  state = {
    isLoading: true,
    store: [],
  };
  getMaskStore = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${latitude}&lng=${longitude}&m=300`
    );
    this.setState({ isLoading: false, store: data.stores });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getMaskStore(latitude, longitude);
    } catch (error) {
      Alert.alert(
        '위치 정보 확인 실패',
        '위치 정보를 사용할 수 있도록 설정하세요'
      );
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return (
      <ContextProvider store={this.state.store}>
        {isLoading ? <LoadingScreen /> : <Navigator />}
      </ContextProvider>
    );
  }
}
