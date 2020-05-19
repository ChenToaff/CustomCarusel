function CustomCarousel() {
  var itemsMainDiv = ".CustomCarousel";
  var itemsDiv = ".CustomCarousel-inner";
  var itemWidth = "";
  var incno = 0;

  $(".leftLst, .rightLst").click(function () {
    moveCarousel(this);
  });

  resizeCarousel();

  $(window).resize(function () {
    resizeCarousel();
  });

  //this function define the size of the items
  function resizeCarousel() {
    $(this).hide();
    var id = 0;
    var sampwidth = $(itemsMainDiv).width();
    var bodyWidth = $("body").width();
    $(itemsDiv).each(function () {
      id++;
      var itemNumbers = $(this).find(".item").length;
      var itemsSplit = $(this).parent().attr("data-items").split(",");
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
      $(this)
        .find(".item")
        .each(function () {
          $(this).outerWidth(itemWidth);
        });
      $(this).show();
      $(".leftLst").addClass("over");
      if (itemWidth * itemNumbers > bodyWidth)
        $(".rightLst").removeClass("over");
      else $(".rightLst").addClass("over");
    });
  }

  //this function used to move the items
  function moveCarousel(btn) {
    var el = "#" + $(btn).parent().attr("id");
    var leftBtn = ".leftLst";
    var rightBtn = ".rightLst";
    var translateXval = "";
    var divStyle = $(el + " " + itemsDiv).css("transform");
    var values = divStyle.match(/-?[\d\.]+/g);
    var xds = Math.abs(values[4]);
    if ($(btn).hasClass("leftLst")) {
      translateXval = parseInt(xds) - parseInt(itemWidth * incno);
      $(el + " " + rightBtn).removeClass("over");

      if (translateXval <= itemWidth / 2) {
        translateXval = 0;
        $(el + " " + leftBtn).addClass("over");
      }
    } else {
      var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
      translateXval = parseInt(xds) + parseInt(itemWidth * incno);
      $(el + " " + leftBtn).removeClass("over");

      if (translateXval >= itemsCondition - itemWidth / 2) {
        translateXval = itemsCondition;
        $(el + " " + rightBtn).addClass("over");
      }
    }
    $(el + " " + itemsDiv).css(
      "transform",
      "translateX(" + -translateXval + "px)"
    );
  }
}
