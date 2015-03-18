/**
 * Custom CKEditor configurations.
 */
CKEDITOR.editorConfig = function(config) {

  // Do not allow inline css for width and height, because this
  // breaks responsive.
  config.disallowedContent = 'img{width,height}';
  // Instead use image2 alignment classes which are used to adjust width and
  // height, and depend on Media module presets to define image size.
  config.image2_alignClasses = [ 'align-left', 'align-center', 'align-right' ];
};
