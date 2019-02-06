function onChevronClick() {
  document.getElementById('first-section').scrollIntoView();
}

$( document ).ready(function() {
  AOS.init({
    duration: 750,
    easing: 'ease-in-out-cubic',
  });
  var chevron = document.getElementById('chevron');
  chevron.onclick = onChevronClick;
});
