import {
  ClassKeyInferable,
  ClassKeyOfStyles,
  ClassNameMap as MuiClassNameMap,
  WithStyles as MuiWithStyles,
} from '@mui/styles/withStyles';

export { default as ThemeProvider } from '@mui/material/styles/ThemeProvider';
export { default as useTheme } from '@mui/material/styles/useTheme';
export { default as useMediaQuery } from '@mui/material/useMediaQuery';
export type {
  ClassKeyOfStyles,
  CreateCSSProperties,
  CSSProperties,
  StyledComponentProps,
} from '@mui/styles/withStyles';
export { default as withStyles } from '@mui/styles/withStyles';

export {
  alpha,
  darken,
  getContrastRatio,
  getLuminance,
  hexToRgb,
  lighten,
  rgbToHex,
} from '@mui/system/colorManipulator';

export { default as createPalette } from '@mui/material/styles/createPalette';
export type {
  Channels,
  ColorPartial,
  CommonColors,
  Palette,
  PaletteAugmentColorOptions,
  PaletteColor,
  PaletteColorOptions,
  PaletteOptions,
  PaletteTonalOffset,
  PartialTypeObject,
  TypeAction,
  TypeBackground,
  TypeDivider,
  TypeObject,
  TypeText,
} from '@mui/material/styles/createPalette';
export { default as createGenerateClassName } from '@mui/styles/createGenerateClassName/createGenerateClassName';
export { default as createStyles } from '@mui/styles/createStyles';
export { default as makeStyles } from '@mui/styles/makeStyles';
export { default as StylesProvider } from '@mui/styles/StylesProvider';
export { default as withTheme } from '@mui/styles/withTheme';

export type {
  Breakpoint,
  SimplePaletteColorOptions,
  Theme,
  ThemeOptions,
} from '@mui/material/styles';
export * from './lib/Typography';

export type WithStyles<
  StylesType extends ClassKeyInferable<any, any>,
  IncludeTheme extends boolean | undefined = false
> = MuiWithStyles<StylesType, IncludeTheme>;

export type ClassNameMap<ClassKey extends string = string> =
  MuiClassNameMap<ClassKey>;
export type ClassMap<StylesType extends ClassKeyInferable<any, any>> =
  ClassNameMap<ClassKeyOfStyles<StylesType>>;
