import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react';

const buttonTheme = defineStyleConfig({
  variants: {
    primary: {
      borderRadius: '8px',
      bgColor: '#7D69F4',
      color: 'White',
      _hover: {
        bgColor: '#9A77FF',
      },
      _focus: {
        bgColor: '#5C59C5',
      },
      _disabled: {
        bgColor: '#D2D5EB',
        color: 'White',
        pointerEvents: 'none',
      },
    },
    secondary: {
      borderRadius: '8px',
      borderWidth: 1,
      borderColor: '#D2D5EB',
      bgColor: 'White',
      color: 'Black',
      _hover: {
        bgColor: '#F3F4FD',
      },
      _focus: {
        bgColor: '#E9EBFF',
      },
      _disabled: {
        color: '#D2D5EB',
      },
    },
    tertiary: {
      borderRadius: '8px',
      bgColor: '#67F6C3',
      fontWeight: 500,
      color: '#211C2B',
      _hover: {
        bgColor: '#8BFFD5',
      },
      _focus: {
        bgColor: '#25EDB1',
      },
      _disabled: {
        bgColor: '#D2D5EB',
        color: 'White',
        pointerEvents: 'none',
      },
    },
    unstyled: {
      color: 'Black',
      _hover: {
        textDecoration: 'none',
        color: '#7D69F4',
      },
      _disabled: {
        color: '#D2D5EB',
      },
    },
    unstyled_primary: {
      color: 'Black',
      _hover: {
        textDecoration: 'none',
        color: '#7D69F4',
      },
      _disabled: {
        color: '#D2D5EB',
      },
    },
    unstyled_tertiary: {
      color: '#8BFFD5',
      padding: 0,
      _hover: {
        textDecoration: 'none',
      },
      _disabled: {
        color: '#D2D5EB',
      },
    },
    link_primary: {
      fontFamily: 'Roboto',
      color: '#7D69F4',
      padding: 0,
      _hover: {
        textDecoration: 'none',
        fontWeight: '700',
      },
      _disabled: {
        color: '#D2D5EB',
      },
    },
    link_secondary: {
      fontFamily: 'Roboto',
      color: 'Black',
      padding: 0,
      _hover: {
        textDecoration: 'none',
        fontWeight: '700',
      },
      _disabled: {
        color: '#D2D5EB',
      },
    },
    link_tertiary: {
      fontFamily: 'Roboto',
      color: 'MintGreen.4',
      padding: 0,
      _hover: {
        textDecoration: 'none',
        fontWeight: '700',
      },
      _disabled: {
        color: '#D2D5EB',
      },
    },
    tab_selected: {
      color: '#7D69F4',
      _hover: {
        bg: 'rgb(125 105 244 / 15%)',
      },
      bgColor: 'rgb(125 105 244 / 15%)',
    },
    tab_unselected: {
      color: 'Gray.6',
      _hover: {
        bg: 'rgb(125 105 244 / 15%)',
      },
      bgColor: 'transparent',
    },
    round_button_primary: {
      borderRadius: 'full',
      height: '40px',
      width: '40px',
      color: 'white',
      bgColor: '#7D69F4',
      justifyContent: 'center',
      _hover: {
        bgColor: 'Purple.4',
      },
      _focus: {
        bgColor: 'Purple.4',
      },
      _disabled: {
        color: 'Purple.2',
        pointerEvents: 'none',
      },
    },
    round_button_secondary: {
      borderRadius: 'full',
      height: '40px',
      width: '40px',
      bgColor: '#F3F4FD',
      color: 'Black',
      _hover: {
        bgColor: '#E9EBFF',
      },
    },
    round_button_light: {
      borderRadius: 'full',
      height: '40px',
      width: '40px',
      color: 'Gray.7',
      bgColor: 'transparent',
      _hover: {
        bgColor: '#F3F4FD',
      },
      _focus: {
        bgColor: '#E9EBFF',
      },
      _disabled: {
        color: '#E9EBFF',
        bgColor: 'transparent',
      },
    },
    primary_icon_button: {
      borderRadius: 'full',
      height: '40px',
      width: '40px',
      color: 'white',
      _hover: {
        bgColor: 'BluePurple.5',
      },
      _active: {
        bgColor: 'BluePurple.5',
      },
    },
    social_button: {
      borderWidth: 1,
      borderColor: '#D2D5EB',
      height: '50px',
      size: 'lg',
      width: '100%',
      color: 'Black',
      fontSize: 'md',
      fontWeight: 400,
      _hover: {
        bgColor: '#F3F4FD',
      },
      _disabled: {
        filter: 'grayscale(90%)',
        opacity: 0.5,
      },
    },
    nav_button: {
      bgColor: 'transparent',
      borderRadius: 'none',
      fontFamily: 'Roboto',
      fontWeight: 500,
      color: 'white',
      px: 5,
      _hover: {
        bgColor: 'rgba(151, 158, 216, 0.2)',
      },
      _active: {
        bgColor: 'rgba(151, 158, 216, 0.2)',
      },
      _disabled: {
        color: '#D2D5EB',
      },
    },
    outline_button: {
      borderRadius: '8px',
      border: '1px solid #DFE4F6',
      fontFamily: 'body',
      fontSize: '14px',
      color: '#070014',
    },
  },
});

const customTheme = extendTheme({
  components: { Button: buttonTheme },
});

export default customTheme;
