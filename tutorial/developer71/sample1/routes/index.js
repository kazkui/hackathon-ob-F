// モジュールのロード
const express = require('express');
const router = express.Router();

/**
 * ルーティングの設定
 */

// ルートパス「/」にアクセスした場合の処理
router.get('/', function(request, response) {
    response.send('Hello New World!');
});

// 「/rakus」にアクセスした場合の処理
router.get('/rakus', function(request, response) {
    response.send('Hello New Rakus!');
});

// ルーティングオブジェクトを外部ファイルへエクスポートする
module.exports = router;
