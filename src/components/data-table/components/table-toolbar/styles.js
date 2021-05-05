import { lighten, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
        {
          color: theme.palette.primary.main,
          backgroundColor: lighten(theme.palette.primary.light, 0.85),
        },
  title: {
    flex: '1 1 100%',
  },
}));

export default useStyles;
