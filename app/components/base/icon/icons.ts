import {
  LogOut,
  SettingsOutline,
  LogIn,
  AddOutline,
  CubeOutline,
} from "@vicons/ionicons5";

export type IconName = keyof typeof icons;

export const icons = {
  logout: LogOut,
  settings: SettingsOutline,
  login: LogIn,
  add: AddOutline,
  cube: CubeOutline,
};
