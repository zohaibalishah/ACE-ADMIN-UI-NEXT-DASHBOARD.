export * from "./enums";

export interface IAction {
  title: string;
  icon: React.ReactElement;
  onClick?: () => void;
}
