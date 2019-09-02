import CryptoJS from 'crypto-js';

export const encrypt = (text, key, iv) => {
  return CryptoJS.AES.encrypt(text, CryptoJS.enc.Base64.parse(key), {
    iv: CryptoJS.enc.Base64.parse(iv),
  }).toString();
};

export const decrypt = (encryptedText, key, iv) => {
  return CryptoJS.AES.decrypt(encryptedText, CryptoJS.enc.Base64.parse(key), {
    iv: CryptoJS.enc.Base64.parse(iv),
  }).toString(CryptoJS.enc.Utf8);
};
