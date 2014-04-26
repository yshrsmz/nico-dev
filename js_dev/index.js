$(function() {
    var _d = document,
        icons = _d.getElementsByClassName('pageHeadNavi')[0].getElementsByClassName('icons'),
        Tab;

    Tab = function (settings) {
        this._init(settings);
    };

    Tab.prototype = {
        _selectedPage:undefined,
        _tabs:[],
        _pages:[],
        _setUp:{
            tabsSelector:'',
            pagesSelector:''
        },
        _init: function (settings) {
            var _d = document,
                that = this,
                pages;

            that._setUp = settings;

            that._tabs = _d.querySelectorAll(that._setUp.tabsSelector);
            that._pages = _d.querySelectorAll(that._setUp.pagesSelector);

            pages = that._pages;

            for (var i = 0, len = pages.length; i < len; i++) {
                if ($(pages[i]).hasClass('selected')) {
                    that.selectedPage = pages[i];
                }
            }

            $(document).on('click', that._setUp.tabsSelector, function(e) {
                e.preventDefault();
                that.onTabClick(this);
            });
        },
        onTabClick: function(eventTarget){

            console.log('test');
            var that = this,
                tabs = that._tabs,
                pages = that._pages,
                targetPageId;
                num;

            for (var i = 0, len = tabs.length; i < len; i++ ){
                if (tabs[i].innerHTML === eventTarget.innerHTML) {
                    $(tabs[i]).addClass('selected');
                    targetPageId = tabs[i].getAttribute('data-show-id');
                } else {
                    $(tabs[i]).removeClass('selected');
                }
            }

            for (var i = 0, len = pages.length; i < len; i++) {
                var _page = pages[i];

                if (_page.id === targetPageId) {
                    $(_page).addClass('selected');
                } else {
                    $(_page).removeClass('selected');
                }
            }
        }
    };

    // タブの初期化
    // 生放送/オススメ/ボカロ
    new Tab({
        tabsSelector: '.jscTopTabs .contentTabsList li',
        pagesSelector: '.jscTopTabs .tabContents'
    });

    // ニュース/注目ワード
    new Tab({
        tabsSelector: '.jscMiddleTabs .contentTabsList li',
        pagesSelector: '.jscMiddleTabs .tabContents'
    });

    new Tab({
        tabsSelector: '.jscBottomTabs .contentTabsList li',
        pagesSelector: '.jscBottomTabs .tabContents'
    });

    // メニュー
    $(document).on('click', '.pageHeader .pageHeadNavi .icons', function(e) {
        var targetId = this.getAttribute('data-target-nav');

        // メニューの出し分け
        for (var i = 0, len = icons.length; i < len; i++) {
            var curId = icons[i].getAttribute('data-target-nav'),
                styleMethod;

            if (curId === targetId) {
                styleMethod = 'addClass';

                if ($(this).hasClass('active')) {
                    styleMethod = 'removeClass';
                }
            } else {
                styleMethod = 'removeClass';
            }
            $('#' + curId)[styleMethod]('active');
            $(icons[i])[styleMethod]('active');
        }


    });


    // 注目カテゴリの初期化
//    Nico_CategoryAllianceController.setAdsBaseUrl("http://ads.nicovideo.jp/");
//    Nico_CategoryAllianceController.setCategoryAllianceArea("#jsCategoryAlliance");
//    Nico_CategoryAllianceController.fetchAdsList([271,271,271,271,271,271]);
//    Nico_CategoryAllianceController.fetchTopAd(466);


});