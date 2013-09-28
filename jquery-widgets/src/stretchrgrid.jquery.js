(function($){

  $.fn.stretchrgrid = function(options){

    var $this = $(this);

    options = options || {};
    options.pagesize = options.pagesize || 10;
    options.paginationMaxItems = options.paginationMaxItems || 10;
    var currentPage = $this.attr("data-stretchrgrid-page") || 1;
    currentPage = parseInt(currentPage);

    options.client.at(options.path).limit(options.pagesize).page(currentPage, options.pagesize).params("total",1).read(function(response){

      $this.empty();
      var resources = response.resources();
      var items = resources.items();

      // collect columns
      var columns = {};
      for (var i in items) {
        var item = items[i].data();
        for (var key in item) {
          columns[key] = true;
        }
      }

      // build columns
      var theadrow = $("<tr>");
      for (var i in columns) {
        $("<th>").text(i).appendTo(theadrow);
      }
      $this.append($("<thead>").append(theadrow));

      // add rows
      for (var i in items) {
        var row = $("<tr>");
        var item = items[i].data();
        for (var i in columns) {
          $("<td>").text(JSON.stringify(item[i])).appendTo(row);
        }
        $this.append(row);
      }

      // pagination?
      if (options.pagination) {

        var $pager = $(options.pagination);
        var pageCount = resources.pagecount(options.pagesize);
        var minPage = Math.max(1, currentPage - (options.paginationMaxItems/2));
        var maxPage = Math.max(options.paginationMaxItems+1, currentPage + (options.paginationMaxItems/2));

        var existingItems = $pager.find("li");
        var counter = 0;
        for (var i = minPage; i < maxPage; i++) {

          var item = existingItems[counter] || $("<li>").appendTo($pager);
          item = $(item);

          if (i == currentPage) {
            item.addClass("active");
          } else {
            item.removeClass("active");
          }

          var link = item.find("a")[0] || $("<a>").attr("href","javascript:void(0);").appendTo(item).click(function(){

            var $item = $(this);
            $this
              .attr("data-stretchrgrid-page", $item.data("page"))
              .stretchrgrid(options)
            ;

          })
          ;
          link = $(link);
          link.text(i).data("page",i);

          counter++;
        };

      }

    });

  };

})(jQuery);
