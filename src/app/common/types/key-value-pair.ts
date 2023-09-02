export interface IKeyValuePair<K, V> {
  key: K;
  value: V;
}

export class KeyValuePair<K, V> implements IKeyValuePair<K, V> {
  constructor();
  constructor(key: K, value: V);
  constructor(key?: K, value?: V) {
    this.key = key!;
    this.value = value!;
  }

  public key!: K;
  public value!: V;
}
