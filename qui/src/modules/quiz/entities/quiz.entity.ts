import crypto from 'crypto';

export class Quiz {
  id: string;
  name: string;

  constructor(props: { name: string }, id: string) {
    this.id = id ?? crypto?.randomUUID();
  }
}
