// 画像ギャラリー機能を動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスナーをアタッチして
// クリックされたときにメイン画像をサムネイル画像に対応するものに差し替えること
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");

  //画像情報(右ペイン)の要素を捕捉し変数に入れておく
  let galleryInfo = document.querySelector("#gallery-info");
  let title       = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");

  thumbnails.forEach(function(thumbnail) {
    // 大画像をプリロードする
    let newImageSrc  = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;

    thumbnail.addEventListener("click", function() {
      // クリックされたサムネイル画像をメイン画像として設定する
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);

      //サムネイルの選択画像を変更する
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      //画像の情報(右ペイン)を、選択した画像に合わせて更新する
      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
