const colors = {
  grays: {
    2: '#F8F8F8',
    5: '#F2F2F2',
    bg: '#EAEAEA',
    9: '#DDDDDD',
    32: '#AEAEAE',
    86: '#1E1E23',
    darkest: '#0F0F0F',
  },
  white: '#FFFFFF',
  yellow: '#FFF000',
  pink: '#FF007F',
  pinkLight: '#ffa6d2',
  purple: '#3F0091',
  purpleLight: '#7947bb',
  tint: 'rgba(black, 0.3)',
  
}
const themeLight = true;
const bgColor = themeLight ? colors.grays[2] : colors.grays[86]
const buttonBg = themeLight ? colors.pink : colors.yellow
export {
  themeLight,
  bgColor,
  buttonBg
}
export default colors