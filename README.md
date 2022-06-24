# 開発環境

## 起動方法

1. VSCode Remote Container - 「Reopen Container」
2. docker exec -it atomic-design-samples ash -c "yarn --cwd /home/app/src dev"
   - ※ ASH でログインして yarn dev をしている

## コンテナ外から開発コンテナにログインしたい場合

`docker exec -it atomic-design-samples ash`

## ログイン後の各種コマンド

※ 詳細は package.json を参照

### 開発モードで起動

`yarn --cwd /home/app/src dev`

### Storybook の起動

`yarn --cwd /home/app/src storybook`

### 単体テスト

`yarn --cwd /home/app/src test`

---

## 環境構成について

### Nuxt3

- 内部利用の Vite が ESModule を読み込む

### Storybook

- 内蔵の WebPack を経由して読み込むので .storybook 内で WebPack の設定
- ESModule が動いている
- Storybook のテストを jest からチェックするために vue-jest を利用している

### Jest(27 系)

- ESModule は動かない
- CommonJS で読み込むので babel によって ESModule => CommoJS に変換して実行する

## 妥協点

- 旧式の Swiper を利用している

  - Swiper の最新版は CommonJS に対応していない
  - Jest で Swiper の ESM を変換しようとするも、どうしてもうまくいかないため、仕方なく CommonJS に対応している 6.8.4 にダウングレードする

- jest は 28 系が最新だが 27 系を利用している

## 作業メモ

- jest27 系は CommonJS に変換しないと動作しない

  - Swiper8 系 も CommonJS に変換 => 変換に失敗( TypeError: Class constructor Swiper cannot be invoked without 'new')
  - Swiper は 6 系以前は CommonJS にも対応しているのでこちらを利用する

- ts-jest28 は ESModule に対応できる

  - 他の jest 系も 28 にあげないといけない
  - vue-jest はまだ[未対応](https://github.com/vuejs/vue-jest/issues/467)
  - vue-jest は storybook で jest 連携させるのに必須だから jest は 27 系を使うしかない

- ~~環境構築時 @intlify/nuxt3 は nuxt@3.0.0-rc.2 以降に対応できていない~~ 対応されて Hack 不要になった
  - https://github.com/intlify/nuxt3/issues/64
  - nuxt@3.0.0-rc.1 を利用する
  - @nuxtjs/tailwindcss も(5.0.3 以降は内部で nuxt の rc2 を利用するので)5.0.2 を利用する
