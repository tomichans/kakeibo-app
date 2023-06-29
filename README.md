This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# kakeibo-app
https://github.com/tomichans/kakeibo-app

## Overview（概要）
収入・支出等を記入するWeb帳簿アプリケーション。

## Demo（デモ）

## Usage（使い方）
- アプリケーションのダウンロード
  >> git clone https://github.com/tomichans/kakeibo-app.git

- 実行方法
1. 開発サーバー実行
  >> npm run dev
# or
  >> yarn dev
# or
  >> pnpm dev

2. 以下URLへ接続
  >> http://localhost:3000

## Requirement（環境）
環境構築方法は以下URLを参考。

Next.js最速セットアップ
https://zenn.dev/a_da_chi/articles/181ea4ccc39580

## Note（注意事項）
- 命名規則
  - コンポーネント：パスカルケース
　　　　　　　　　 ※index.tsxは小文字
  - 変数名（tsx）：キャメルケース
  - クラス名（css）：キャメルケース
  - 関数名（tsx）：キャメルケース

  ※パスカルケース
　 （例）var hogeData; // good
　 　　　var hogedata; // bad
 　　　　var HogeData; // bad
  ※キャメルケース
 　（例）var HogeData; // good
　 　　　var hogedata; // bad
　 　　　var hogeData; // bad

  - ブランチ名：
　　　　　新規機能開発ブランチ → feature/developerName/index
　　　　　バグ修正ブランチ → bug/developerName/index

- インデント
  - tsx；スペース4
  - css；スペース4

## Author（文書）
- 要件定義書
- 画面設計書

## References（参考文献）
- NextJs公式ドキュメント
https://nextjs.org/docs

- Vercel GitHub
https://github.com/vercel/next.js/
