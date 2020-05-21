function CustomCarousel() {
  let itemWidth;
  let visibleItems;
  resizeCarousel();

  $(".btn-prev, .btn-next").click(function () {
    moveCarousel(this);
  });
  $(window).resize(resizeCarousel);

  //Resizes the carusel and sets items width.
  function resizeCarousel() {
    const sampwidth = $(".CustomCarousel").width();
    const bodyWidth = $("body").width();
    $(".CustomCarousel-inner").each(function () {
      $(this).hide();
      const itemsCount = $(this).find(".item").length;
      const pad = $(this).parent().attr("data-padding");
      const itemsSplit = $(this).parent().attr("data-items").split(",");

      if (bodyWidth >= 1200) {
        visibleItems = itemsSplit[4];
      } else if (bodyWidth >= 992) {
        visibleItems = itemsSplit[3];
      } else if (bodyWidth >= 768) {
        visibleItems = itemsSplit[2];
      } else if (bodyWidth >= 576) {
        visibleItems = itemsSplit[1];
      } else {
        visibleItems = itemsSplit[0];
      }
      itemWidth = sampwidth / visibleItems;
      $(this).hide();
      $(this).css({
        width: itemWidth * itemsCount,
      });

      $(this)
        .find(".item")
        .each(function () {
          $(this).css("padding-left", pad + "px");
          $(this).outerWidth(itemWidth);
        });
      $(this).show();
      prevBtn = $(this).parent().find(".btn-prev");
      nextBtn = $(this).parent().find(".btn-next");
      if (itemWidth * itemsCount <= bodyWidth) {
        prevBtn.addClass("over");
        nextBtn.addClass("over");
      } else {
        prevBtn.removeClass("over");
        nextBtn.removeClass("over");
      }
    });
  }

  //Moves the items on button press.
  function moveCarousel(btn) {
    const inner = $($(btn).parent()).find(".CustomCarousel-inner");
    let amount = visibleItems;

    if (inner.find(".item").length - visibleItems < visibleItems)
      amount = inner.find(".item").length - visibleItems;

    const condition = $(btn).hasClass("btn-prev");
    for (let i = 0; i < amount; i++) {
      items = inner.find(".item");
      if (condition) items[0].before(items[items.length - 1]);
      else items[items.length - 1].after(items[0]);
    }
  }
}
