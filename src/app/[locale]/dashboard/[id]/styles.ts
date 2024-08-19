import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';

export default {
  topbar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    p: 1,
  },
  promptContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    px: 1,
  },
} satisfies Record<string, SxProps>;
