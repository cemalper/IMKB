import axios from 'axios';
import deviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
import {stockApiURL} from '../constants';
import {encrypt, decrypt} from '../utils/Crypto';
const api = axios.create({
  baseURL: stockApiURL,
});

api.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

api.interceptors.response.use(response => {
  console.log('Starting Response', response);
  return response;
});

const handShakeApi = api.post('handshake/start', {
  deviceId: deviceInfo.getDeviceId(),
  systemVersion: deviceInfo.getSystemVersion(),
  platformName: deviceInfo.getSystemName(),
  deviceModel: deviceInfo.getDeviceName(),
  manifacturer: deviceInfo.getManufacturer(),
});

const isNeedTokenRenew = tokenLife => {
  if (!tokenLife) {
    return true;
  }
  return Math.floor((new Date(tokenLife) - new Date()) / 1000 / 60) < 16;
};

export const token = async () => {
  try {
    await AsyncStorage.removeItem('handShake');
    let handShake = await AsyncStorage.getItem('handShake');
    handShake = handShake && JSON.parse(handShake);
    if (!handShake || (handShake && isNeedTokenRenew(handShake.lifeTime))) {
      handShake = (await handShakeApi).data;
      await AsyncStorage.setItem('handShake', JSON.stringify(handShake));
    }

    return handShake;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

export const stockListRequest = async period => {
  const handShake = await token();
  const periodEncrypted = encrypt(period, handShake.aesKey, handShake.aesIV);
  const data = {period: periodEncrypted};
  const headers = {'X-VP-Authorization': handShake.authorization};
  try {
    const response = await api.post('stocks/list', data, {headers});

    if (!response.data.status.isSuccess) {
      throw new Error(response.data.status.error);
    }

    response.data.stocks.forEach(record => {
      record.symbol = decrypt(record.symbol, handShake.aesKey, handShake.aesIV);
    });

    return response.data;
  } catch (ex) {
    console.log(ex.response);
    throw ex;
  }
};

export const stockDetailRequest = async id => {
  const handShake = await token();
  const idEncrypted = encrypt(id.toString(), handShake.aesKey, handShake.aesIV);
  const data = {id: idEncrypted};
  const headers = {'X-VP-Authorization': handShake.authorization};
  try {
    const response = await api.post('stocks/detail', data, {headers});

    if (!response.data.status.isSuccess) {
      throw new Error(response.data.status.error);
    }

    response.data.symbol = decrypt(
      response.data.symbol,
      handShake.aesKey,
      handShake.aesIV,
    );

    return response.data;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

export default api;
