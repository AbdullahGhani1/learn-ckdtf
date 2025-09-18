export type Duck = {
  name: string;
  age: number;
  type: string;
  color: string;
  favouriteFood?: string; // Optional property
};

export type DuckColor = 'White' | 'Brown' | 'Black' | 'Green' | 'Mixed';
export enum DuckType {
  MALLARD = 'Mallard',
  MUSCOVY = 'Muscovy',
  PEKIN = 'Pekin',
}
