import t from 'chalk'
import n from 'clear'
import e from 'figlet'
import o from 'inquirer'
import {
  readdirSync as a,
  readFileSync as r,
  existsSync as s,
  writeFileSync as i,
} from 'node:fs'
import c from 'inquirer-autocomplete-prompt'
import { paramCase as m } from 'param-case'
import l from 'ora'
import { sleep as u } from 'yancey-js-util'
import { execa as p } from 'execa'
import d from 'node-fetch'
import { compareVersions as f } from 'compare-versions'
var y
!(function (t) {
  ;(t.Easy = 'easy'), (t.Medium = 'medium'), (t.Hard = 'hard')
})(y || (y = {}))
const $ = `${process.cwd()}/src/leetcode/javascript`,
  g = `${process.cwd()}/src/leetcode/rust`,
  h = `${process.cwd()}/leetcode-docs`,
  b = [{ name: y.Easy }, { name: y.Medium }, { name: y.Hard }],
  w = (t, n, e) => {
    const o = r(`${$}/${t}/${n}`, { encoding: 'utf-8' }),
      [a, i] = n.split('.'),
      { functionName: c, functionBody: l } = ((t) => {
        const n = t.match(/\/\/ @lc code=start([\s\S]*)?\/\/ @lc code=end/im)
        if (Array.isArray(n)) {
          const t = n[1],
            e = t.match(/var([\s\S]*?)=/i)
          if (Array.isArray(e)) {
            const n = e[1].trim()
            return { functionBody: t, functionName: m(n) }
          }
          throw new Error('Can not get the function name string.')
        }
        throw new Error('Can not get the function body string.')
      })(o),
      u = `${h}/${t.toLowerCase()}/${a}-${c}.mdx`
    return s(u)
      ? '文件已存在, 请重新选择.'
      : !!e || {
          outPath: u,
          meta: { serial: a, title: i, functionName: c, functionBody: l },
        }
  }
o.registerPrompt('autocomplete', c)
const v = async () => {
    n(),
      console.log(
        t.blue(
          e.textSync('LEETCODE TRIP', {
            horizontalLayout: 'default',
            verticalLayout: 'default',
          }),
        ),
      )
    const { dir: r } = await o.prompt([
        { type: 'list', message: '请选择难度: ', name: 'dir', choices: b },
      ]),
      s = a(`${$}/${r}`).sort((t, n) => +t.split('.')[0] - +n.split('.')[0])
    const { file: c } = await ((t, n) =>
      o.prompt([
        {
          type: 'autocomplete',
          message: '请选择文件: ',
          name: 'file',
          pageSize: 20,
          source: (t, e) => n.filter((t) => t.includes(e || '')),
          validate: (n) => w(t, n.name || '', !0),
        },
      ]))(r, s)
    await (async (t, n) => {
      const e = w(t, n)
      if ('object' != typeof e) return
      const {
          outPath: o,
          meta: { serial: a, title: r, functionBody: s, functionName: c },
        } = e,
        m = l('正在创建中...').start()
      await u(),
        i(
          o,
          ((t, n, e, o) =>
            `---\nid: ${t}-${e}\ntitle: ${n}\nsidebar_label: ${t}. ${n}\nkeywords:\n  - HashMap\n---\n\n:::success Tips\n题目类型: HashMap\n\n相关题目:\n\n- [1. 两数之和](/leetcode/easy/1-two-sum)\n\n:::\n\n## 题目\n\n这里是题目这里是题目这里是题目这里是题目这里是题目\n\n:::info 示例\n\n输入:\n\n输出:\n:::\n\n## 题解\n\n这里是题解这里是题解这里是题解这里是题解这里是题解\n\nimport Tabs from '@theme/Tabs'\nimport TabItem from '@theme/TabItem'\n\n<Tabs>\n  <TabItem value="JavaScript" label="JavaScript" default>\n\n\`\`\`ts\n${o}\n\`\`\`\n\n</TabItem>\n<TabItem value="Rust" label="Rust">\n\n\`\`\`rust\nimpl Solution {\n  \n}\n\`\`\`\n\n</TabItem>\n</Tabs>\n`)(
            a,
            r,
            c,
            s,
          ),
        ),
        i(`${g}/src/${t}/${a}.${r}.rs`, 'pub fn foo() -> i32 {}'),
        m.stop(),
        l().succeed('模版创建成功!')
    })(r, c)
  },
  T = a(`${$}/${y.Easy}`).length,
  E = a(`${$}/${y.Medium}`).length,
  I = a(`${$}/${y.Hard}`).length,
  S = T + E + I,
  H = [
    { category: y.Easy, count: T },
    { category: y.Medium, count: E },
    { category: y.Hard, count: I },
    { category: 'Total', count: S },
  ],
  M = () => {
    console.table(H)
  },
  j = async (n) => {
    const e = await (async () => {
        const t = await d('https://registry.npmjs.org/@yancey-inc/lt-cli'),
          n = await t.json(),
          { latest: e } = n['dist-tags']
        return e
      })(),
      o = 1 === f(e, n)
    return (
      o
        ? console.log(
            t.red(`\n最新版本为 v${e}, 你的版本 v${n} 已落后, 正在升级中.`),
          )
        : console.log(t.green(`\n已经是最新版本 v${e}, 无需升级.`)),
      o
    )
  },
  x = async (n) => {
    const e = l('正在检索最新版本...').start(),
      o = await j(n)
    e.stop(),
      o &&
        (await (async () => {
          const n = l('正在升级...').start()
          try {
            await p(
              'pnpm',
              ['install', '@yancey-inc/lt-cli@latest', '-g', '--verbose'],
              { stdio: 'inherit' },
            ),
              l().succeed('升级成功!')
          } catch (n) {
            console.log(t.red(n))
          } finally {
            n.stop()
          }
        })())
  }
export { v as bootstrap, M as showStatistics, x as upgrade }
