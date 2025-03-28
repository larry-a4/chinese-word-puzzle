# 中文词汇测验 (Chinese Vocabulary Quiz)

这是一个基于Next.js开发的中文词汇测验应用，帮助用户学习和记忆中文词汇。

## 功能特点

- 20个难度递增的关卡
- 每关10个问题
- 根据关卡自动调整词汇难度
- 计时系统（每关60秒）
- 星级评分系统（1-3星）
- 防止词汇重复出现
- 支持拼音显示
- 响应式设计

## 技术栈

- Next.js 15.2.4
- React 19
- TypeScript
- Tailwind CSS

## 运行步骤

1. 克隆项目
```bash
git clone [项目地址]
cd chinesepuzzle
```

2. 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

4. 在浏览器中访问
打开 [http://localhost:3000](http://localhost:3000) 查看应用

## 游戏规则

1. 每关包含10个问题
2. 每个问题有4-6个选项（随关卡提升而增加）
3. 每关时间限制为60秒
4. 正确率要求：
   - ≥90%：3星
   - ≥70%：2星
   - ≥60%：1星
   - <60%：需要重试
5. 如果用时超过限制的80%，星级会降低一级
6. 每关词汇不会重复出现

## 难度系统

- 关卡1-4：基础词汇（HSK1-2水平）
- 关卡5-8：常用词汇（HSK2-3水平）
- 关卡9-12：进阶词汇（HSK3-4水平）
- 关卡13-16：中高级词汇（HSK4-5水平）
- 关卡17-20：高级词汇（HSK5-6水平）

## 项目结构

```
chinesepuzzle/
├── src/
│   ├── app/
│   │   ├── page.tsx      # 主页面组件
│   │   ├── layout.tsx    # 布局组件
│   │   └── globals.css   # 全局样式
│   └── data/
│       └── words.ts      # 词汇数据
├── public/               # 静态资源
└── package.json         # 项目配置
```

## 开发说明

- 使用 `npm run dev` 启动开发服务器
- 使用 `npm run build` 构建生产版本
- 使用 `npm run start` 启动生产服务器
- 使用 `npm run lint` 运行代码检查

## 注意事项

1. 确保Node.js版本兼容（建议使用最新的LTS版本）
2. 如果遇到模块导入错误，检查 `tsconfig.json` 中的路径配置
3. 确保所有依赖都正确安装

## 贡献指南

欢迎提交Issue和Pull Request来帮助改进这个项目。

## 许可证

MIT License
