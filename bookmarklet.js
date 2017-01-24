javascript:(
  function() {
    var fra=document.getElementsByName("Main")[0];
    var doc=fra.contentDocument.documentElement;
    var sel=doc.getElementsByTagName("select")[0];
    var frm=doc.getElementsByTagName("form")[0];
    var tbl=doc.getElementsByTagName("table")[1];
    var mmyy=sel.options[sel.selectedIndex].innerText;
    var res = [];
    for(var i=1; i<tbl.rows.length; i++) {
      var dd=tbl.rows[i].cells[0].innerText;
      var v=tbl.rows[i].cells[1].innerText;
      v=v.replace(/\./g, "");
      v=v.replace(",", ".");
      var ddmmyy=dd.concat("/".concat(mmyy));
      var dmy=ddmmyy.split("/");
      var dt=new Date(dmy[2], dmy[1]-1, dmy[0], 12, 0, 0, 0);
      var yymmdd = ddmmyy.slice(6) + "/" + ddmmyy.slice(3,5) + "/" + ddmmyy.slice(0,2);
      var num=/[0-9\-\.\,]+/;
      if(num.test(v)) {
          console.log(yymmdd.concat(" ".concat(v)));
      }
    }
    sel.selectedIndex = sel.selectedIndex + 1;
    frm.submit()
  }
)();
