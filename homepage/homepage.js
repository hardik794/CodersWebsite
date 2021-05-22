function postToGoogle() {
  var field1 = $("#fn").val();
  var field2 = $("#ln").val();
  var field3 = $("#email").val();
  var field4 = $("#subject").val();

  if (field1 =="") {
    alert('Please Fill Your First Name');
    document.getElementById("fn").focus();
    return false;
  }
  if (field2 =="") {
    alert('Please Fill Your Last Name');
    document.getElementById("ln").focus();
    return false;
  }
  if (field3 =="") {
    alert('Please Fill Your Email');
    document.getElementById("email").focus();
    return false;
  }
  if (field4 =="") {
    alert('Please Fill Your FeedBack');
    document.getElementById("subject").focus();
    return false;
  }

  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfuJjc_ReW_zWYv0yahWmK0oEzHCY64dKj1BZJdcq79cJ-YIw/formResponse?",
    data: { "entry.1946610629": field1, "entry.904993646": field2, "entry.1751258242": field3,"entry.909223136":field4 },
    type: "POST",
    dataType: "xml",
    
    success: function (d) {
      
    },
    error: function() {
      swal({
        imageUrl: 'emoji.jpg',
        title: 'THANK YOU!',
        text: 'Your feedback has been succesfully Received',
        showConfirmButton: true,
      });
      // swal("Thank you","For Your Feedback","success");

      $("#form")[0].reset();
      // setInterval(' location.reload()', 2400);
    }
  });
  return false;
}
/*nav link change active */
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('nav ul li');
  let fromTop = window.scrollY;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
});
