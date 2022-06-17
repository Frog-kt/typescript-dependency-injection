# typescript-dependency-injection
TSでDIやってみる

# ディレクトリ構成

```
├── application
│   └── usecase         ... domain/serviceを用いてビジネスロジックを実行
├── domain
│   ├── entitiy         ...
│   ├── repository      ...
│   └── service         ...
├── helper
│   ├── error           ... エラーハンドラ
│   └── util            ... 共通処理
├── infrastructure
│   ├── repositoryImpl  ... domain/repositoryの実装クラス
│   └── serviceImpl     ... domain/serviceの実装クラス
└── presentation
    ├── controller      ... routerから呼び出される
    ├── handler         ... router関連
    ├── interceptor     ... controller共通処理
    └── security        ... 認証、CSRFトークン処理
```