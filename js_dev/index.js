$(function() {
    // タブの初期化

    // 注目カテゴリの初期化
    Nico_CategoryAllianceController.setAdsBaseUrl("http://ads.nicovideo.jp/");
    Nico_CategoryAllianceController.setCategoryAllianceArea("#jsCategoryAlliance");
    Nico_CategoryAllianceController.fetchAdsList([271,271,271,271,271,271]);
    Nico_CategoryAllianceController.fetchTopAd(466);


});