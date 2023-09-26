$('.thumbnail').on('click', function() {
    var clicked = $(this);
    var newSelection = clicked.data('big');
    var newDescription = clicked.data('description');
    
    // Update the main image
    $('.primary img').attr("src", newSelection);

    // Update the image description
    $('.image-description').text(newDescription);

    // Add and remove selected class
    clicked.parent().find('.thumbnail').removeClass('selected');
    clicked.addClass('selected');
});
