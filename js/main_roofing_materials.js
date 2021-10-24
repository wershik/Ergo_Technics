$(function(){

  $('.header-burger').on('click', function(){
    $('.header-menu-list').slideToggle();
  });



  // first
  $('#op_btn_1').click(function () {
    $('#invisible_tab_1').slideUp();
  });
  $('#cl_btn_1').click(function () {
    $('#invisible_tab_1').slideDown();
  });

  // second
  $('#op_btn_2').click(function () {
    $('#invisible_tab_2').slideUp();
  });
  $('#cl_btn_2').click(function () {
    $('#invisible_tab_2').slideDown();
  });

  // third
  $('#op_btn_3').click(function () {
    $('#invisible_tab_3').slideUp();
  });
  $('#cl_btn_3').click(function () {
    $('#invisible_tab_3').slideDown();
  });

  // fourth
  $('#op_btn_4').click(function () {
    $('#invisible_tab_4').slideUp();
  });
  $('#cl_btn_4').click(function () {
    $('#invisible_tab_4').slideDown();
  });

});
