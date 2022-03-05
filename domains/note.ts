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
    const d = new Date(this.updatedAt)
    const year = d.getFullYear()
    const month = zeroPadding(d.getMonth() + 1)
    const day = zeroPadding(d.getDate())
    const hour = zeroPadding(d.getHours())
    const minute = zeroPadding(d.getMinutes())
    return `${year}-${month}-${day} ${hour}:${minute}`
  }

  public toJSON() {
    return {
      id: this.id,
      content: this.content,
      updatedAt: this.updatedAt,
    }
  }
}

function zeroPadding(base: string | number, length = 2) {
  return String(base).padStart(length, '0')
}

export interface NoteJson {
  id: Note['id']
  content: Note['content']
  updatedAt: Note['updatedAt']
}
