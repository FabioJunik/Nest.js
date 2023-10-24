export class Quiz {
  id: string;
  name: string;

  constructor(props: { name: string }, id?: string) {
    Object.assign(this, props);
  }
}
