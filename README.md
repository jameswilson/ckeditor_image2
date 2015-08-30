This module is an extension to the CKEditor module for Drupal. It also supports
CKEditor installed through the Wysiwyg module.

This module helps you replace the default Image plugin that comes with
CKEditor with the new Enhanced Image plugin, which has support for image
captions via HTML5 `<figure>` and `<figcaption>` tags, CSS class-based
alignment, centering, and responsive resizing.

Requirements
------------

This module requires CKEditor Standard or Full version to be installed in your
site's libraries folder. CKEditor version 4.4 or higher is recommended. The
module also depends on the Libraries API version 2.x.

Installation
------------

1.  Download the CKEditor Standard or Full package from CKEditor.com and
    place it in the `sites/all/libraries` folder.

2.  Download and install this module. Ensure the Libraries API and either the
    Wysiwyg API or the CKEditor module are also enabled and configured.

3.  Download the Enhanced Image (image2) plugin and its dependencies from the
    links below; be sure to download versions that are compatible with your
    version of CKEditor.

    * [Enhanced Image](http://ckeditor.com/addon/image2)
    * [Widget](http://ckeditor.com/addon/widget)
    * [Line Utilities](http://ckeditor.com/addon/lineutils)
    * [Dialog User Interface](http://ckeditor.com/addon/dialogui)

    The downloaded plugin files should be unzipped inside the
    `sites/all/libraries/ckeditor/plugins` folder.

    Note 1: although the Dialog and Clipboard plugins are also listed as
    dependencies on the Image2 plugin page, they already come packaged
    with both the Standard and Full CKEditor builds.

    Note 2: An example Drush make file has been provided with this module to
    facilitate this download and installation step, which may be executed from
    your Drupal site root to automatically download the plugins to the correct
    location:

        $ drush make sites/all/modules/ckeditor_image2/ckeditor_image2.make.example --no-core

4.  Enable the CKEditor Image2 module. Ensure your Text formats allow the
    following tags: `<img> <div> <figure> <figcaption>`. Then ensure the
    Image2 plugin is enabled in one of the following ways, depending on the
    module in use:

    * Wysiwyg API module: Enable the Image plugin in the Wysiwyg profile
      settings and the Enhanced Image2 plugin will be used automatically.
    * CKEditor module: Enable the Enhanced Image2 widget plugin (checkbox) under
      the "Editor Appearance" section of the CKEditor profile config screen.

Usage
-----

1.  Create a node and add an image inside an editor using the Image icon/button
    in the CKEditor toolbar.

2.  Double-click the image to popup the Image2 Properties dialog and select
    alignment options or enable the caption text option.  You may also select
    the image and then use the text alignment buttons in the editor toolbar to
    affect the alignment.

3.  Example responsive layouts are provided by ckeditor_images2.responsive.css
    which may be overridden or disabled in your theme according to your image
    size requirements and breakpoints.


Known Limitations
-----------------

1.  Media module integration.

    The Media module is partially compatible with Image2 -- once you insert an
    image with the Media module right-clicking or double-clicking the image
    does nothing: the form must be submitted and edited again before you can
    access the Image2 popup; the Media module popup is no longer accesible.

    We've had success with the following patches to version 7.x-1.4 or greater:

    * [Issue #2433083](https://www.drupal.org/node/2433083)
        Media - Wysiwyg token not converted if media-image is not first class.
        [patch file](https://www.drupal.org/files/issues/media-wysiwyg-ckeditor-image2-2433083-3.patch)
    * [Issue #2428005](https://www.drupal.org/node/2428005)
        Media - Wysiwyg data no properly converted because of a js error.
        [patch file](https://www.drupal.org/files/issues/media_fix.patch)

2.  Filtered HTML text format

    The Filtered HTML text format provided by Drupal 7's standard installation
    profile comes pre-configured with an option enabled to "Convert line breaks
    into HTML". This interferes with the Enhanced Image2 plugin's HTML template
    that adds line breaks around the `<figcaption>` tag resulting in extra
    whitespace above and below the caption text because the linebreaks
    are converted to <br> tags:

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
