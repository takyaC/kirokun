# きろくん紹介サイト

活動記録アプリ「きろくん」の紹介サイトです。Jekyllで静的HTMLを生成し、GitHub Pagesへ公開しています。

## ローカルで確認

```sh
bundle install
bundle exec jekyll serve
```

## アクセス分析

Aptabaseを使用します。`_config.yml`の`aptabase_app_key`が空の場合、SDKは読み込まれず、イベントも送信されません。

Web用App Keyはブラウザへ配信される公開識別子です。管理画面の認証情報やAPIトークンなどの秘密情報は、リポジトリへ保存しないでください。

## ライセンス

このサイトにはBay Jekyll themeを基にしたコードが含まれます。ライセンスは[LICENSE.md](LICENSE.md)を参照してください。
