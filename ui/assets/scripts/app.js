import $ from 'jquery';

// Hamburger menu for small screens
$('.hamburger_menu').on('click', () => $('ul').toggle());


// Login user according to their account type
$('.login-btn').on('click', () => {
  const radioValue = $("input[name='user_type']:checked").val();
  if (radioValue === 'customer') {
    // Customer landing page
    $('.card form').attr('action', './temp/user_menu_list.html');
  } else {
    // Caterer landing page
    $('.card form').attr('action', './temp/manage_meals.html');
  }
});
