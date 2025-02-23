# PokéAPI ポケモン一覧検索アプリ

このアプリは、[PokéAPI](https://pokeapi.co/)から初代151匹のポケモンデータを取得し、検索機能でフィルタリング可能な一覧ページです。


## 使用技術
- Next.js 
- Tailwind CSS
- PokéAPI (https://pokeapi.co/)

## セットアップ方法

### 1. Next.js プロジェクトの作成

```bash
npx create-next-app@latest [プロジェクト名]
```

### 2. 必要パッケージのインストール

```bash
npm install
```

### 3. Tailwind CSSの設定
#### 3-1. Tailwind CSSのインストール

```bash
npm install -D tailwindcss postcss autoprefixer
```

#### 3-2. Tailwind CSSの初期設定ファイルの作成、コンテンツパスの設定

```bash
npx tailwindcss init
```

#### 3-3. コンテンツパスの設定
`tailwind.config.js` 内で、Tailwind CSS が適用対象とするファイルのパスを設定します。

#### 3-4. CSSにディレクティブを追加

`styles/globals.css` に Tailwind CSS のディレクティブを追加します。

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## 4. 開発サーバーの起動
開発サーバーの起動し、ブラウザで http://localhost:3000 を開いて動作確認を行います。

```bash
npm run dev
```

## 5. Dockerを用いた起動手順
### 5-1. Dockerfile, docker-compose.ymlの作成
プロジェクトのルートディレクトリ内に、`Dockerfile` と `docker-compose.yml` を作成します。

### 5-2. DockerDesktopを起動
Docker Desktopを起動し、ターミナルで以下のコマンドを実行します。

```bash
docker-compose up --build
```

### 5-3. ブラウザで動作確認
ブラウザで http://localhost:3000 を開いて動作確認を行います。


## **実装時間**
4時間