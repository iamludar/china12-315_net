jQuery(document).ready(function () {
	
jQuery("#btnQuery").click(function(){

 
 var code = jQuery('#txt_code').val();
    jQuery('#result_info').text("正在查询中,请稍等...");
    jQuery('#result_ico').attr("src", "images/code_warring.png");
    if (code.length <= 0) {
        jQuery("#txt_code").focus();
        return false;
    }
    if (code.length < 10) {
        jQuery('#result_info').text("您所输入的防伪编码(" + code + ")无效,请核实.");
        jQuery('#result_ico').attr("src", "images/code_warring.png");
        jQuery('#resultModal').modal({
            backdrop: true,
            keyboard: true,
            show: true
        })
        return false;
    }
    var reg = new RegExp("^[0-9]*$");
    if (!reg.test(code)) {
        jQuery('#result_info').text("您所输入的防伪编码(" + code + ")无效,请核实.");
        jQuery('#result_ico').attr("src", "images/code_warring.png");
        jQuery('#resultModal').modal({
            backdrop: true,
            keyboard: true,
            show: true
        })
        return false;
    }
 jQuery.getJSON(   "http://www.400-315.com/fwqueryjson.ashx?callback=?",
                    { FwCode: code },

                    function(data) {
jQuery('#result_info').text(data.QueryResult);
if(data.CodeState==1){
jQuery('#result_ico').attr("src", "images/code_true.png");}
else{
	jQuery('#result_ico').attr("src", "images/code_false.png");
}
            jQuery('#resultModal').modal({
                backdrop: "static",
                keyboard: false,
                show: true
            })
                

       });
  });
});
