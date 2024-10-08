import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { INITIAL_CONTENT_MAX_WIDTH } from '../constants';

const borderRadius = 6;

export default {
  exampleButton: {
    width: '100%',
    p: 0,
    borderRadius,
    maxWidth: '250px',
  },
  textArea: {
    backgroundColor: 'white',
    color: 'black',
    pointerEvents: 'none',
    width: '100%',
    borderRadius,
  },
  header: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 1.5,
    px: 2,
    mb: 0.5,
    flexShrink: 0,
    mx: '12px',
    borderRadius: 1,
  },
  headerLeftSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
  },
  initialContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    gap: 2,
    maxWidth: INITIAL_CONTENT_MAX_WIDTH,
  },
  introductionTitle: {
    fontSize: { xs: '24px', sm: '48px' },
    textAlign: 'center',
    lineHeight: { xs: '32px', sm: '56px' },
  },
  brandIcon: {
    fontSize: { xs: 35, md: 55 },
    display: 'flex',
    '@media (max-height: 600px)': {
      display: 'none',
    },
  },
  examplesContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '@media (max-height: 550px)': {
      display: 'none',
    },
  },
  promptExamples: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    py: '1rem',
    overflowX: 'auto',
  },
  title: {
    textTransform: 'uppercase',
    ml: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  toolbar: { display: 'flex', justifyContent: 'end' },
  boardGridContainer: {
    overflow: 'auto',
    flexGrow: 1,
    display: 'flex',
  },
} satisfies Record<string, SxProps>;
