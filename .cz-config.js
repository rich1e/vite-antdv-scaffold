/**
 * @see https://github.com/leonardoanalista/cz-customizable/blob/master/cz-config-EXAMPLE.js
 * @see https://github.com/Landish/cz-gitmoji
 * @see https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen
 */
module.exports = {
  // type 类型（定义之后，可通过上下键选择）
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ 新增功能',
    },
    {
      value: ':bug: fix',
      name: '🐛 修复 bug',
    },
    {
      value: ':memo: docs',
      name: '📝 文档变更',
    },
    {
      value: ':bulb: comments',
      name: '💡 添加注释',
    },
    {
      value: ':tada: initial',
      name: '🎉 初始化提交',
    },
    {
      value: ':lipstick: style',
      name: '💄 代码格式（不影响功能，例如空格、分号等格式修正）',
    },
    {
      value: ':recycle: refactor',
      name: '♻️ 代码重构（不包括 bug 修复、功能新增）',
    },
    {
      value: ':zap: perf',
      name: '⚡️ 性能优化',
    },
    {
      value: ':white_check_mark: test',
      name: '✅ 添加、修改测试用例',
    },
    {
      value: ':construction_worker: build',
      name: '👷 构建流程、外部依赖变更（如修改 npm 包、修改 webpack 配置等）',
    },
    {
      value: ':wrench: ci',
      name: '🔧 修改 CI 配置',
    },
    {
      value: ':arrow_up: upgrade',
      name: '⬆️ 升级依赖包',
    },
    {
      value: ':arrow_down: downgrade',
      name: '⬇️ 降级依赖包',
    },
    {
      value: ':rocket: chore',
      name: '🚀 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
    },
    {
      value: ':bookmark: release',
      name: '🔖 版本发布或创建版本标签',
    },
    {
      value: ':truck: rename',
      name: '🚚 代码移动或者重命名',
    },
    {
      value: ':fire: remove',
      name: '🔥 代码删除',
    },
    {
      value: ':rewind: revert',
      name: '⏪️ 回滚 commit',
    },
  ],

  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['components', '组件相关'],
    ['api', 'api 相关'],
    ['config', '配置相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['ant-design-vue', '对 ant-design-vue 的调整'],
    ['typescript', '完善 typescript 定义'],
    ['other', '其他修改'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value}(${description})`,
    };
  }),

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // 针对每一个 type 去定义对应的 scopes，例如 fix
  /*
  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'e2eTest' },
      { name: 'unitTest' }
    ]
  },
  */

  // 交互提示信息
  messages: {
    type: '确保本次提交遵循开发规范！\n选择你要提交的类型：',
    scope: '\n选择一个 scope（可选）：',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope：',
    subject: '填写简短精炼的变更描述：\n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行：\n',
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\n',
    confirmCommit: '确认提交？',
  },

  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  allowCustomScopes: true,

  /**
   * @see https://github.com/leoforfree/cz-customizable/blob/65d364656a0bd61b8146a3e42cdd720158ebcc96/questions.js#L163
   * 由于由于使用了emoji，allowBreakingChanges 配置会有影响
   */
  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  // allowBreakingChanges: ['feat', 'fix'],

  // 跳过要询问的步骤
  // skipQuestions: ['body'],

  breaklineChar: '|', // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
  // subject 限制长度
  subjectLimit: 100,
};
