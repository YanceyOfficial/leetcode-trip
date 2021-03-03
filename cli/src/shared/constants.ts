import { cwd } from 'process'

export enum Category {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
  Others = 'Others',
}

export const srcPath = `${cwd()}/src/LeetCode`

export const docPath = `${cwd()}/leetcode-docs`
