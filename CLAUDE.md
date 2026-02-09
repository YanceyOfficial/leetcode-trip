# Claude Code Instructions

This document contains instructions for Claude Code when working on this repository.

## Adding New LeetCode Problems

When adding a new LeetCode problem, you must create **TWO** files:

### 1. JavaScript Solution File

**Location:** `src/leetcode/javascript/{difficulty}/{number}.{chinese-title}.js`

**Path components:**

- `{difficulty}`: easy, medium, or hard
- `{number}`: problem number (e.g., 766)
- `{chinese-title}`: Chinese title in simplified Chinese (e.g., 托普利茨矩阵)

**File format:**

```javascript
/*
 * @lc app=leetcode.cn id={number} lang=javascript
 *
 * [{number}] {chinese-title}
 */

// @lc code=start
/**
 * @param {type} paramName
 * @return {type}
 */
var functionName = function (params) {
  // Implementation
}
// @lc code=end
```

### 2. MDX Documentation File

**Location:** `leetcode-docs/{difficulty}/{number}-{kebab-case-name}.mdx`

**Path components:**

- `{difficulty}`: easy, medium, or hard
- `{number}`: problem number
- `{kebab-case-name}`: English title in kebab-case (e.g., is-toeplitz-matrix)

**File format:**

```mdx
---
id: {number}-{kebab-case-name}
title: {English Title}
sidebar_label: {number}. {English Title}
---

## Problem

{Problem description in English}

:::note Constraints:

- Constraint 1
- Constraint 2

:::

:::info Examples

\```bash
Input: input example
Output: output example
Explanation: explanation
\```

:::

## Solution

{Solution explanation in English}

**Time Complexity**: O(...)
**Space Complexity**: O(...)

\```ts
// Solution code
\```
```

## Workflow

When the user provides a LeetCode problem URL:

1. Fetch problem details (title, difficulty, description, constraints, examples)
2. Create the JavaScript solution file in the appropriate difficulty folder
3. Create the MDX documentation file with:
   - Problem description in English
   - Constraints
   - Examples
   - Solution explanation
   - Time and space complexity analysis
4. Verify both files are created correctly

## Key Requirements

- **JavaScript files**: Use Chinese titles for file names (e.g., `766.托普利茨矩阵.js`)
- **MDX files**: Use English titles and write all content in English (e.g., `766-is-toeplitz-matrix.mdx`)
- **File naming**: Use kebab-case for MDX file names
- **Code documentation**: Include proper JSDoc comments in JavaScript files
- **MDX content**: Add detailed explanations with time and space complexity analysis in English
