jQuery(document).ready(function ($) {
  let frame;
  $('.upload_image_button').on('click', function (e) {
    e.preventDefault();

    if (frame) {
      frame.open();
      return;
    }

    frame = wp.media({
      title: 'Выберите изображение категории',
      button: { text: 'Использовать' },
      multiple: false
    });

    frame.on('select', function () {
      const attachment = frame.state().get('selection').first().toJSON();
      $('#store_category_image').val(attachment.id);
      $('#store_category_image_preview').html('<img src="' + attachment.url + '" style="max-width:150px;height:auto;" />');
    });

    frame.open();
  });
});
