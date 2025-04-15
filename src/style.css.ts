import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const btn = style({
  borderRadius: '24px',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '12px',
  flexDirection: 'column',
  gap: '24px',
  borderRadius: '2rem',
  backgroundColor: '#fff',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const img = style({
  margin: '1rem auto 4px',
});

const switcher = style({
  backgroundColor: '#fff',
  padding: '4px',
  borderRadius: '20px',
  display: 'grid',
  gap: '8px',
  gridTemplateColumns: '1fr 1fr',
});

const switcherBtn = recipe({
  base: {
    padding: '4px 8px',
    borderRadius: '20px',
    textAlign: 'center',
    width: '112px',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: '#EBECF9',
      },
    },
  },
});

const containerBottom = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

export const btmContent = style({
  padding: 0,
});

const logo = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1rem',
  position: 'relative',
  width: '100%',
});

const logoQ = style({
  position: 'absolute',
  right: '0',
  top: '6px',
});

const swSlideCalc = style({
  width: '100%',
  maxWidth: '320px',
});

const pagination = recipe({
  base: {
    width: '8px',
    height: '8px',
    borderRadius: '8px',
    backgroundColor: '#000000',
    opacity: 0.25,
  },
  variants: {
    selected: {
      true: {
        width: '32px',
        opacity: 1,
      },
    },
  },
});

const paginations = style({
  display: 'flex',
  gap: '8px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  img,
  switcher,
  switcherBtn,
  btmContent,
  containerBottom,
  btn,
  logo,
  logoQ,
  swSlideCalc,
  paginations,
  pagination,
};
