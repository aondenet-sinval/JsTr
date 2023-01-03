$(".imageslow").click(function() { $(this).slideTogle("slow") })
const handleClick = ()=> {
  $(".imageslow").fadeOut().show(300).slideUp().slideToggle()
  const parA = $("p.para1").css("background-color", "blue").show()
}
