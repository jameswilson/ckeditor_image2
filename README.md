Image2 is an enhanced image plugin for CKEditor that supports image captions,
CSS class-based alignment and centering.

This module effectively replaces the default Image plugin that comes with
CKEditor with the Enhanced Image plugin.

Requirements
------------

This module requires CKEditor Standard or Full version to be installed in your
site's libraries folder. CKEditor version 4.4 or higher is recommended. This
module should work with both the CKEditor module OR the Wysiwyg API module,
but currently has only been tested against the Wysiwyg API module.

Installation
------------

1.  Ensure the Wysiwyg API or the CKEditor module is installed and configured.

2.  Ensure CKEditor Standard or Full package is downloaded from ckeditor.com
    and installed to the `sites/all/libraries` folder.

3.  Download and install this module.

4.  Download the Image2 plugin and its dependencies from the links below; be
    sure to download versions that are compatible with your version of CKEditor.

    * [Image2](http://ckeditor.com/addon/image2)
    * [Widget](http://ckeditor.com/addon/widget)
    * [Line Utilities](http://ckeditor.com/addon/lineutils)
    * [Dialog UI](http://ckeditor.com/addon/dialogui)

    Note that the Dialog and Clipboard plugins are also listed as dependencies
    on the Image2 plugin page, but they already come packaged with the Standard
    CKEditor build.

    The downloaded zip files should be unzipped into the
    `sites/all/libraries/ckeditor/plugins` folder.

    Optionally, you can run the make file from your drupal root to automatically
    download the plugins to the correct location:

        $ drush make sites/all/modules/ckeditor_image2/ckeditor_image2.make --no-core

5.  Enable the CKEditor Image2 module. Ensure your Text formats allow the <img>,
    <div>, <figure>, and <figcaption> tags.  Then ensure the Image2 plugin is
    enabled in one of the following ways, depending on which module is in use:

    * Wysiwyg module: Enable the Image plugin in the Wysiwyg profile settings
      and the Enhanced Image2 plugin will be used automatically.
    * CKEditor module: Enable the Enhanced Image2 widget plugin (checkbox) under
      the "Editor Appearance" section of the CKEditor profile config screen.

6.  Create a node and add an image inside an editor using the Image icon/button
    in the CKeditor toolbar.

7.  Double-click the image to popup the Image2 Properties dialog and select
    alignment options or enable the caption text option.

8.  Example responsive layouts are provided in ckeditor_images2.responsive.css
    files, which may be overridden or disabled in your theme according
    to your image size requirements and breakpoints.


Known Limitations
-----------------

1.  Media module integration.

    The Media module is partially compatible with Image2 -- once you insert an
    image with the Media module right-clicking or double-clicking the image
    does nothing: the form must be submitted and edited again before you can
    access the Image2 popup; the Media module popup is no longer accesible.

    We've had success with the following patches to Media module version 7.x-1.4
    or greater:

    * [Issue #2433083](https://www.drupal.org/node/2433083)
        Media - Wysiwyg token not converted if media-image is not first class.
        [patch file](https://www.drupal.org/files/issues/media-wysiwyg-ckeditor-image2-2433083-3.patch)
    * [Issue #2428005](https://www.drupal.org/node/2428005)
        Media - Wysiwyg data no properly converted because of a js error.
        [patch file](https://www.drupal.org/files/issues/media_fix.patch)

2.  Filtered HTML text format

    The Filtered HTML text format provided by Drupal 7's standard installation
    profile is configured to "Convert line breaks into HTML" by default. This
    interferes with the Enhanced Image2 plugin's HTML template that adds line
    breaks around the <figcaption> tag resulting in extra whitespace above and
    below the caption text because the linebreaks are converted to <br> tags:

        <figure>
          <img>
          <br>
          <figcaption></figcaption>
          <br>
        </figure>

    Therefore, the following CSS rule is added to ckeditor_image2.theme.css as
    a workaround:

        figure > br {
          display: none;
        }

    This is a somewhat hacky solution, so if a pure DOM-based solution is
    desired, then it is best to disable the "Convert line breaks" option on
    all Text Formats that use CKEditor on the backend.
