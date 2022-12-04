# LeetCode Trip

![Build Status](https://github.com/YanceyOfficial/leetcode-trip/actions/workflows/github-actions.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/YanceyOfficial/leetcode-trip/pulls)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Code Style](https://camo.githubusercontent.com/c83b8df34339bd302b7fd3fbb631f99ba25f87f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d70726574746965722d6666363962342e737667)
[![Node](https://img.shields.io/badge/node-%3E%3Dv16.16.0-success.svg)](https://nodejs.org/en/)
[![Rust](https://img.shields.io/badge/rust-%3E%3Dv1.25.1-red.svg)](https://www.rust-lang.org/tools/install)
[![DependaBot](https://camo.githubusercontent.com/1fe7004c016a5ab641008b9579409c784eaa1725/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446570656e6461626f742d656e61626c65642d626c75652e737667)](https://dependabot.com/)
[![codecov](https://codecov.io/gh/YanceyOfficial/leetcode-trip/branch/master/graph/badge.svg)](https://codecov.io/gh/YanceyOfficial/leetcode-trip)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e0f64194d78841e38021984b6a52ef7b)](https://www.codacy.com/gh/YanceyOfficial/leetcode-trip/dashboard?utm_source=github.com&utm_medium=referral&utm_content=YanceyOfficial/leetcode-trip&utm_campaign=Badge_Grade)

⭐️ _Found it cool? Want more updates?_ [**Show your support by giving a ⭐️**](https://github.com/YanceyOfficial/leetcode-trip/stargazers)

## Introduction

Data structures and algorithms implemented in JavaScript and Rust with explanations. The algorithm questions include, but are not limited to LeetCode, _Coding Interviews: Questions, Analysis and Solutions_ and _Algorithms, 4th Edition_. Visit [LeetCode Trip](https://algorithm.yanceyleo.com/) for more information. The website is powered by [docusaurus](https://docusaurus.io/).

## lt-cli

[![NPM](https://nodeico.herokuapp.com/@yancey-inc/lt-cli.svg)](https://npmjs.com/package/@yancey-inc/lt-cli)

LeetCode Trip comes with a built-in CLI which can be used to generate template markdown files, statistical analysis, upgrade itself. While you can install lt-cli globally on your machine, it's much better to install it locally project by project. If you would like not to install it globally, use `pnpm generator` and `pnpm statistics` instead.

### Install

Using pnpm:

`pnpm i @yancey-inc/lt-cli -g`

![lt-cli](https://edge.yancey.app/beg/lt-cli.gif)

## Contributing

The main purpose of this repository is to continue to evolve LeetCode Trip, making it faster and easier to use. Development of LeetCode Trip happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving LeetCode Trip.

### [Code of Conduct](./CODE_OF_CONDUCT.md)

LeetCode Trip has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](./CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](./CONTRIBUTING.md)

Read our [contributing guide](./CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to LeetCode Trip.

### Good Issues

Please make sure to read the [Issue Reporting Checklist](./.github/ISSUE_TEMPLATE/bug_report.md) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

### Semantic Commit

LeetCode Trip follows the [Angular Team's Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit), your commit will be checked by commitlint, please use `git cz` instead of `git commit`. For this reason, you might install [`commitizen`](https://github.com/commitizen/cz-cli) globally.

### Algolia Search

Unfortunately, LeetCode Trip is [not compliant with algolia's checklist](https://docsearch.algolia.com/docs/who-can-apply), we must [run the crawler by ourselves](https://docsearch.algolia.com/docs/run-your-own).
Please create `.env` in root path.

```bash
# DO NOT UPLOAD THIS FILE TO PUBLIC!!!
# .env
APPLICATION_ID=YOUR_ALGOLIA_APP_ID
API_KEY=YOUR_ALGOLIA_API_KEY
```

After a successful build, execute the following script.

```bash
docker run --env-file=.env -e "CONFIG=$(cat ./algolia-config.json | jq -r tostring)" algolia/docsearch-scraper
```

## License

LeetCode Trip is licensed under the terms of the [MIT licensed](https://opensource.org/licenses/MIT).
