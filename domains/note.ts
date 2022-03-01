export class Note {
  constructor(
    private readonly _id: number,
    private readonly _content: string,
    private readonly _updatedAt: DateTimeString = new Date().toISOString(),
  ) {}

  public get id(): number {
    return this._id
  }

  public get content(): string {
    return this._content
  }

  public get updatedAt(): DateTimeString {
    return this._updatedAt
  }
}
