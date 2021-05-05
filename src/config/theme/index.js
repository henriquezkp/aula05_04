import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

import 'typeface-montserrat';

export default createMuiTheme(
  {
    palette: {
      primary: {
        // light: será calculada com base em palette.primary.main,
        main: '#2b385b',
        // dark: será calculada com base em palette.primary.main,
        // contrastText: será calculada para contrastar com palette.primary.main
      },
      secondary: {
        main: '#e16e0e',
      },
      contrastThreshold: 3,
      // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
      // dois índices dentro de sua paleta tonal.
      // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: [
        'Montserrat',
        'serif',
      ].join(','),
      fontSize: 14,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'html, body': {
            WebkitFontSmoothing: 'auto',
            backgroundColor: '#f7f7f7',
            color: '#2b385b',
          },
        },
      },
      MuiFab: {
        root: {
          bottom: '20px',
          right: '30px',
          position: 'fixed',
        },
      },
    },
  },
  ptBR,
);
