import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '0',
    width: 'fit-content',
    _disabled: {
      opacity: 1,
    },
  },
  variants: {
    primary: {
      borderRadius: '8px',
      bgColor: 'Purple.3',
      color: 'White',
      _hover: {
        bgColor: 'Purple.1',
      },
      _focus: {
        bgColor: 'BluePurple.1',
      },
      _disabled: {
        bgColor: 'Gray.1',
        color: 'White',
        pointerEvents: 'none',
      },
    },
    secondary: {
      borderRadius: '8px',
      borderWidth: 1,
      borderColor: 'Gray.1',
      bgColor: 'White',
      color: 'Black',
      _hover: {
        bgColor: 'Gray.3',
      },
      _focus: {
        bgColor: 'Gray.2',
      },
      _disabled: {
        color: 'Gray.1',
      },
    },
    tertiary: {
      fontFamily: 'Poppins',
      borderRadius: '8px',
      bgColor: 'MintGreen.1',
      fontWeight: 500,
      color: 'Black.1',
      _hover: {
        bgColor: 'MintGreen.2',
      },
      _focus: {
        bgColor: 'MintGreen.3',
      },
      _disabled: {
        bgColor: 'Gray.1',
        color: 'White',
        pointerEvents: 'none',
      },
    },
    unstyled: {
      color: 'Black',
      _hover: {
        textDecoration: 'none',
        color: 'Purple.3',
      },
      _disabled: {
        color: 'Gray.1',
      },
    },
    unstyled_primary: {
      color: 'Black',
      _hover: {
        textDecoration: 'none',
        color: 'Purple.3',
      },
      _disabled: {
        color: 'Gray.1',
      },
    },
    unstyled_tertiary: {
      color: 'MintGreen.2',
      padding: 0,
      _hover: {
        textDecoration: 'none',
      },
      _disabled: {
        color: 'Gray.1',
      },
    },
    link_primary: {
      fontFamily: 'Roboto',
      color: 'Purple.3',
      padding: 0,
      _hover: {
        textDecoration: 'none',
        fontWeight: '700',
      },
      _disabled: {
        color: 'Gray.1',
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
        color: 'Gray.1',
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
        color: 'Gray.1',
      },
    },
    tab_selected: {
      color: 'Purple.3',
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
      bgColor: 'Purple.3',
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
      bgColor: 'Gray.3',
      color: 'Black',
      _hover: {
        bgColor: 'Gray.2',
      },
    },
    round_button_light: {
      borderRadius: 'full',
      height: '40px',
      width: '40px',
      color: 'Gray.7',
      bgColor: 'transparent',
      _hover: {
        bgColor: 'Gray.3',
      },
      _focus: {
        bgColor: 'Gray.2',
      },
      _disabled: {
        color: 'Gray.2',
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
      borderColor: 'Gray.1',
      height: '50px',
      size: 'lg',
      width: '100%',
      color: 'Black',
      fontSize: 'md',
      fontWeight: 400,
      _hover: {
        bgColor: 'Gray.3',
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
        color: 'Gray.1',
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
  sizes: {
    xs: {
      height: '32px',
    },
    sm: {
      height: '40px',
      paddingX: '2rem',
    },
    md: {
      height: '48px',
      paddingY: '1.425rem',
    },
    lg: {
      height: '56px',
      borderRadius: '8px',
      padding: '1.6rem 2rem',
    },
  },
  defaultProps: {},
};
