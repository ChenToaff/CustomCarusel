function CustomCarousel() {
  let itemWidth = "";
  let incno = 0;
  resizeCarousel();

  $(".leftLst, .rightLst").click(function () {
    moveCarousel(this);
  });
  $(window).resize(function () {
    resizeCarousel();
  });

  //Resizes the carusel and sets items width.
  function resizeCarousel() {
    let id = 0;
    const sampwidth = $(".CustomCarousel").width();
    const bodyWidth = $("body").width();
    $(".CustomCarousel-inner").each(function () {
      $(this).hide();
      id++;
      const itemNumbers = $(this).find(".item").length;
      const itemsSplit = $(this).parent().attr("data-items").split(",");
      $(this)
        .parent()
        .attr("id", "CustomCarousel" + id);

      if (bodyWidth >= 1200) {
        incno = itemsSplit[4];
      } else if (bodyWidth >= 992) {
        incno = itemsSplit[3];
      } else if (bodyWidth >= 768) {
        incno = itemsSplit[2];
      } else if (bodyWidth >= 576) {
        incno = itemsSplit[1];
      } else {
        incno = itemsSplit[0];
      }
      itemWidth = sampwidth / incno;
      $(this).hide();
      $(this).css({
        transform: "translateX(0px)",
        width: itemWidth * itemNumbers,
      });
      $(this).show();
      $(this)
        .find(".item")
        .each(function () {
          $(this).outerWidth(itemWidth);
        });

      $(".leftLst").addClass("over");
      if (itemWidth * itemNumbers > bodyWidth)
        $(".rightLst").removeClass("over");
      else $(".rightLst").addClass("over");
    });
  }

  //Moves the items on button press.
  function moveCarousel(btn) {
    const parent = "#" + $(btn).parent().attr("id");
    const leftBtn = ".leftLst";
    const rightBtn = ".rightLst";
    let newX;
    const inner = $(parent + " .CustomCarousel-inner");
    const divStyle = inner.css("transform");
    const oldX = Math.abs(divStyle.match(/-?[\d\.]+/g)[4]);

    if ($(btn).hasClass("leftLst")) {
      newX = parseInt(oldX) - parseInt(itemWidth * incno);
      $(parent + " " + rightBtn).removeClass("over");

      if (newX <= itemWidth / 2) {
        $(parent + " " + leftBtn).addClass("over");
        if (newX < 0) {
          newX = 0;
        }
      }
    } else {
      const itemsCondition = inner.width() - $(parent).width();
      newX = parseInt(oldX) + parseInt(itemWidth * incno);
      $(parent + " " + leftBtn).removeClass("over");

      if (itemsCondition == oldX) {
        //inner.addClass("Repeat");
        inner.animate({
          step: function () {
            $(this).css(" transform", "translateX(-100%)");
          },
        });
        //abc
        //inner.css("animation", "Repeat 0.5s ease");

        //setTimeout(function () {
        //  inner.css("transition", "transform 1s ease");
        //  inner.css("transform", "translateX(0px)");
        //}, 5);
        $(parent + " " + leftBtn).addClass("over");
        return;
      }
      if (newX > itemsCondition - itemWidth / 2) {
        newX = itemsCondition;
      }
    }
    inner.css("transform", "translateX(" + -newX + "px)");
  }
}
