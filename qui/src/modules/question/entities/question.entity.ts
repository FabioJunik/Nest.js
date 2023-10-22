import crypto from 'crypto';

export class Question {
  readonly id: string;
  description: string;

  constructor(props: { description: string }, id?: string) {
    Object.assign(this, props);
    this.id = id ?? crypto?.randomUUID();
  }
}
