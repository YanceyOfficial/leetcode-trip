import assert from 'assert'

interface IDifferenceArray {
  increment(i: number, j: number, val: number): void
  result(): number[]
}

export class DifferenceArray implements IDifferenceArray {
  private diff: number[] = []

  constructor(readonly nums: number[]) {
    assert.ok(nums.length > 0)

    this.diff[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1]
    }
  }

  private get len() {
    return this.diff.length
  }

  public increment(i: number, j: number, val: number): void {
    this.diff[i] += val

    if (j + 1 < this.len) {
      this.diff[j + 1] -= val
    }
  }

  public result(): number[] {
    const res = new Array(this.len)
    res[0] = this.diff[0]

    for (let i = 1; i < this.len; i++) {
      res[i] = this.diff[i] + res[i - 1]
    }

    return res
  }
}
