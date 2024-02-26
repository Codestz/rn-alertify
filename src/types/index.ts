export * from './Alert';
export * from './AlertIcon';
export * from './AlertProvider';
export * from './Theme';
export * from './AlertStyles';

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
