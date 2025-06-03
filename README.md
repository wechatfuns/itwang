# Deno 反向代理服务器

这是一个使用 Deno 实现的简单反向代理服务器。

## 功能特点

- 支持所有 HTTP 方法
- 自动转发请求头
- 错误处理
- 简单易用

## 使用方法

1. 确保已安装 Deno（https://deno.com/）

2. 克隆此仓库：
   ```bash
   git clone <your-repo-url>
   cd deno-proxy
   ```

3. 修改配置：
   在 `proxy.ts` 文件中修改 `targetUrl` 变量为你想要代理的目标服务器地址。

4. 运行服务器：
   ```bash
   deno task start
   ```

服务器将在 http://localhost:8000 启动。

## 部署到 Deno Deploy

1. 访问 https://dash.deno.com/
2. 创建新项目
3. 连接你的 GitHub 仓库或直接部署 `proxy.ts` 文件

## 配置说明

- 默认端口：8000
- 默认目标服务器：https://api.example.com（请根据需要修改）

## 注意事项

- 确保有适当的网络权限（--allow-net）
- 在生产环境中建议添加适当的安全措施
- 可以根据需要修改错误处理逻辑 