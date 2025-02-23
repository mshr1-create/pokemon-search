FROM node:18-alpine

WORKDIR /app

# 依存関係のインストールのため,jsonファイルをコピー
COPY package*.json ./
RUN npm install

# プロジェクト全体をコピー
COPY . .

# ポート3000を開放
EXPOSE 3000

# 開発サーバーを起動
CMD ["npm", "run", "dev"]