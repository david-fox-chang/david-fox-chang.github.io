class List extends Array {
  constructor(type) {
    super();
    Object.assign(this, { type });
    window[this.type] = this;
    this.vTimeUsed = {
      queue: 'timeRegistered',
      done: 'timeFinshed',
    }[type];
  }

  push(item) {
    super.push(item);
  }

  wakeup(data) {
    const { listType, items } = JSON.parse(data);
    this.type = listType;
    items.forEach(item => this.push(item));
  }

  toString() {
    const timeType = this.vTimeUsed;
    return JSON.stringify({
      listType: this.type,
      data: [...this.sort(
        ({ [timeType]: time1 }, { [timeType]: time2 }) => (time1 - time2),
      )],
    });
  }
}

export default class ListCollect {
  constructor() {
    this.queue = new List('queue');
    this.done = new List('done');
  }

  add(item) {
    this.queue.push(item);
  }
}
