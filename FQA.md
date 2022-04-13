# FQA

## Windows 环境下 husky 的配置。

```
"husky": {
  "hooks": {
    "prepare-commit-msg": "exec < /dev/tty && npx cz --hook || true"
  }
}
```

Windows 命令执行环境，必须使用 CMD 或者 PowerShell。Git Bash 中会出现异常。

参考：

https://github.com/commitizen/cz-cli#husky

https://github.com/commitizen/cz-cli/issues/709

https://github.com/commitizen/cz-cli/issues/627
