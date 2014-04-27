# 超チューニング祭でやったこと

- htmlの圧縮・組み直し
  - grunt-contrib-htmlmin
  - index_dev.htmlが圧縮前のhtml。圧縮後がindex.html
  
- 画像をCSSスプライトにまとめる
  - grunt-spiritesheet-generator
  
- CSSを一つにまとめ、不要部分の削除・圧縮
  - sass, csso
  
- jQueryをやめてZepto.jsに変更

- 一部JavaScriptの書き直し

- JavaScriptを一つにまとめる
  - uglify.js
  
- 画像をスクロールに合わせて遅延読み込み
  - LazyLoad.js
  
- 画像の減色
  - imageoptim, imagealpha
  
詳しくはGruntfile.jsとpackage.jsonに

作成: [yshrsmz](http://github.com/yshrsmz), [alterf](http://github.com/alterf)