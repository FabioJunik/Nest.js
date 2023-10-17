import crypto from 'crypto';

export class Quiz {
  private id: string;
  private name: string;

  constructor(props: { name: string }, id: string) {
    this.id = id ?? crypto?.randomUUID();
  }
}
