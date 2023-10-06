export class CircularArray<T> {
  private maxSize: number
  private array: T[]

  constructor(maxSize: number) {
    this.maxSize = maxSize
    this.array = []
  }

  add(item: T) {
    if (this.array.length < this.maxSize) {
      this.array.push(item)
    } else {
      this.array.shift()
      this.array.push(item)
    }
  }

  toArray() {
    return this.array.slice()
  }
}
