import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
  tr: {
    headerTitle: 'VERIPARK',
    headerSubTitle: 'IMKB Hisse Senetleri/Endeksler',
    stocksIndices: 'IMKB Hisse ve Endeksler',
    increasing: 'Yükselenler',
    decreasing: 'Düşenler',
    volume30: 'Hacme Göre - 30',
    volume50: 'Hacme Göre - 50',
    volume100: 'Hacme Göre - 100',
    isoStocksIndices: 'IMKB Hisse Senetleri ve Endeksler',
    mainPageButton: 'IMKB Hisse Senetleri/Endeksler',
    search: 'Ara',
    unexpectedError: 'Beklenmeyen Bir Hata Oluştu!',
    OK: 'Tamam',
  },
  en: {
    headerTitle: 'VERIPARK',
    headerSubTitle: 'ISE Stocks / Indices',
    stocksIndices: 'ISE Stocks and Indices',
    increasing: 'Rising',
    decreasing: 'sagging',
    volume30: 'By Volume - 30',
    volume50: 'By Volume - 50',
    volume100: 'By Volume - 100',
    isoStocksIndices: 'ISE Stocks and Indices',
    mainPageButton: 'ISE Stocks / Indices',
    search: 'Search',
    unexpectedError: 'An Unexpected Error Occurred!',
    OK: 'OK',
  },
});

export default strings;
