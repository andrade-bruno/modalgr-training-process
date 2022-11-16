export const theme = {
  colors: {
    primary: '#41D3BE',
  },
  background: {
    light: '#F1F1F1',
    dark: '#222'
  },
  content: {
    light: '#FFF',
    dark: '#5C5B5E'
  },
  text: {
    light: 'grey',
    dark: '#FAFAFA'
  }
}

export const themeDark = {
  body: theme.background.dark,
  inside: theme.content.dark,
  text: theme.text.dark
}

export const themeLight = {
  body: theme.background.light,
  inside: theme.content.light,
  text: theme.text.light
}

export default theme;
