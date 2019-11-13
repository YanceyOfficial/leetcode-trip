export class Node {
  private left: number | null

  private right: number | null

  constructor(private readonly key: number) {
    this.key = key
    this.left = null
    this.right = null
  }
}
