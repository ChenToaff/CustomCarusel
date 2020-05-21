function CustomCarousel() {
  manageCarousel();

  $(".btn-prev, .btn-next").click(function () {
    moveCarousel(this);
  });
  $(window).resize(manageCarousel);

  function manageCarousel() {
    $(".CustomCarousel").each(function () {
      resizeCarousel(this);
    });
  }

  //Resizes the carusel and sets items width.
  function resizeCarousel(carousel) {
    const parentWidth = $(carousel).width();
    prevBtn = $(carousel).find(".btn-prev");
    nextBtn = $(carousel).find(".btn-next");
    prevBtn.hide();
    nextBtn.hide();
    let inner = $(carousel).find(".CustomCarousel-inner");

    const items = $(inner).find(".item");
    const itemsCount = $(inner).find(".item").length;
    let pad = $(carousel).attr("data-padding");
    if (pad == NaN) pad = 0;
    else $(inner).css("padding-right", pad);

    $(items).hide();
    let widthCount = 0 + parseInt(pad);
    let visibleItems = 0;
    $(items).each(function () {
      $(this).css("padding-left", pad);
      widthCount += $(this).outerWidth();
      if (widthCount <= parentWidth) {
        visibleItems++;
        $(this).show();
      }
    });
    if (items.length > visibleItems) {
      prevBtn.show();
      nextBtn.show();
    }
  }

  //Moves the items on button press.
  function moveCarousel(btn) {
    const inner = $($(btn).parent()).find(".CustomCarousel-inner");
    let items = inner.find(".item");
    let visibleItems = $(items).find(":visible").length;
    let amount = visibleItems;

    if (items.length - visibleItems < visibleItems)
      amount = items.length - visibleItems;

    const condition = $(btn).hasClass("btn-prev");
    items.hide();
    items = inner.find(".item");
    for (let i = 0; i < amount; i++) {
      if (condition) {
        items[0].before(items[items.length - 1]);
      } else {
        items[items.length - 1].after(items[0]);
      }
    }
    resizeCarousel(inner.parent());
  }
}
