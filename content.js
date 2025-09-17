function removePixnetAds() {
  const selectors = [
    // 影片廣告
    "#videoAdUi", ".videoAdUi",
    "div[class^='InstreamDom_player']",
    ".ImaAd-module_root_2DAhA",
    "[data-ref='imaAd']",
    "video[title='Advertisement']",

    // Google / Criteo 廣告容器
    ".GoogleActiveViewElement",

    // 痞客邦廣告容器
    "#MIB_ad", ".ad-pixnet", ".ad-container", ".ad-unit",
    "[id^='ad-']",
    ".ins-ad", ".pixnet-recommend-ad", ".article-ad",

    // 達人推薦 / 置入廣告
    "#trialsquad-post",
    "aside[data-advertisement='true']"
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.remove());
  });
}

// 頁面載入後清理一次
removePixnetAds();

// 監控 DOM 動態插入
new MutationObserver(removePixnetAds)
  .observe(document.body, { childList: true, subtree: true });
