declare module 'react-native-uuid' {
  declare type UUIDGenerator = () => string;

  declare export var v4: UUIDGenerator;
}
