export default class ListItem {
  constructor(initData) {
    const def = {
      timeRegistered: Date.now(),
      isDone: false,
      timer: 25 * 60,
      description: '',
      timeFinshed: null,
    };
    Object.assign(this, def, initData);
  }

  get name() {
    return this.vName;
  }

  set name(value) {
    if (!value.length) {
      throw new Error('no name');
    }
    this.vName = value;
  }

  toString() {
    return JSON.stringify(
      Object.assign(
        { name: this.name },
        ...Object.keys(this)
          .sort().filter(key => key !== 'vName')
          .map(key => ({ [key]: this[key] })),
      ),
    );
  }
}
