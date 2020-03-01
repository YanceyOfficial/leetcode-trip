# Leetcode Trip

~~刷 leetcode~~ Data Structures and Algorithms with JavaScript.

## 大 O 复杂度表示法

### 为什么需要复杂度分析

通过计算一个算法执行的时间和占用的内存大小并不准确: 比如 i9 CPU 跑的程序 i3 CPU 跑的程序时间一定是不同的; 再如对于小规模的数据排序, 插入排序可能反倒会比快速排序要快. 因此这种方法的测试结果非常依赖测试环境, 并且测试结果受数据规模的影响很大.

### 时间复杂度

时间复杂度是对一个算法运行时间长短的度量, 常见的时间复杂度有 O<sub>(1)</sub> < O<sub>(logn)</sub> < O<sub>(n)</sub> < O<sub>(nlogn)</sub> < O<sub>(n<sup>2</sup>)</sub> < O<sub>(n<sup>3</sup>)</sub> < O<sub>(2<sup>n</sup>)</sub> < O<sub>(n!)</sub> < O<sub>(n<sup>n</sup>)</sub>.

### 空间复杂度

空间复杂度是一个算法运行过程中临时占用存储空间大小的度量, 它包含下面几种:

- 一维空间: 如一个字符串变量, 空间复杂度为 O<sub>(1)</sub>
- 线性空间: 如一个一维数组, 空间复杂度为 O<sub>(n)</sub>
- 二维空间: 如一个二维数组, 空间复杂度为 O<sub>(n<sup>2</sup>)</sub>
- 递归空间: 对于递归, 在计算机运行程序时, 会专门分配一块内存, 用来存储“方法调用栈”, “方法调用栈” 包含进栈和出栈两个行为.

### 最好情况时间复杂度

最好情况时间复杂度就是, 在最理想的情况下, 执行这段代码的时间复杂度.

### 最坏情况时间复杂度

最坏情况时间复杂度就是, 在最糟糕的情况下, 执行这段代码的时间复杂度.

## 数据结构

- [栈](./DataStructures/Stack)
- [队列](./DataStructures/Queue)
- [链表](./DataStructures/LinkedList)
- [集合](./DataStructures/Set)
- [字典](./DataStructures/Dictionary)
- [树](./DataStructures/Tree)
- 堆
- 图

## 算法设计

- [递归算法](./AlgorithmDesign/Recursive)
- 回溯算法
- 动态规划
- 贪心算法
- 分治算法
- ...

## leetcode

- 菜鸟级

  - 两数相加
  - 整数反转
  - 回文数
  - ...

- 中级

  - Z 字形变换
  - 全排列
  - ...

- 高级

  - ...

## License

Leetcode Trip is licensed under the terms of the [MIT licensed](https://opensource.org/licenses/MIT).
