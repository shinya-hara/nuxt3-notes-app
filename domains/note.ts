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

  /**
   * 更新日時をフォーマットして返す
   * @returns {string} YYYY-MM-DD HH:mm
   */
  public get formattedUpdatedAt(): string {
    return new Date(this.updatedAt).toLocaleString()
  }

  public toJSON() {
    return {
      id: this.id,
      content: this.content,
      updatedAt: this.updatedAt,
    }
  }
}

export interface NoteJson {
  id: Note['id']
  content: Note['content']
  updatedAt: Note['updatedAt']
}
