export class EventStructure {
  static execute(arg0: any): void | PromiseLike<void> {
    throw new Error("Method not implemented.");
  }
  name: string = "";
  once: boolean = false;
  static once: any;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(..._args: unknown[]) {
    throw new Error("Unsupported operation.");
  }
}
