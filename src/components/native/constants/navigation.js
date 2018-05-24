import Colors from '../../../../native-base-theme/variables/commonColor';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: '#546e7a' },
    titleStyle: {
      color: '#ffffff', // Colors.textColor,
      alignSelf: 'center',
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
    },
    backButtonTintColor: '#ffffff', // Colors.textColor,
  },

  icons: {
    style: { color: 'white', height: 30, width: 30 },
  },
};
