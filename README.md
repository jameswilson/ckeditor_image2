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

5.  Enable the CKEditor Image2 module and ensure your Text formats and Wysiwyg
    profiles are configured appropriately. Enable the Image or Image2 plugin
    in the Wysiwyg profile settings. If Image plugin is enabled, Image2 will
    be substituted automatically.

6.  Add an image inside an editor (e.g. using the Media module button
    integration).

7.  Double click the image to see the Image2 Properties dialog popup, and
    select alignment options or enable the caption.

8.  Theme alignment classes, `figure` and `figcaption` elements to taste
    with CSS.


Known Limitations
-----------------

The Media module is partially compatible with Image2 -- once you insert an
image with the Media module right-clicking or double clicking the image does
nothing: the form must be submitted and edited again before you can access
the Image2 popup; the Media module popup is no longer accesible.

We've had success with the following patches to Media module version 7.x-1.4
or greater:

* [Issue #2433083](https://www.drupal.org/node/2433083)
    Media - Wysiwyg token not converted if media-image is not first class.
    [patch file](https://www.drupal.org/files/issues/media-wysiwyg-ckeditor-image2-2433083-3.patch)
* [Issue #2428005](https://www.drupal.org/node/2428005)
    Media - Wysiwyg data no properly converted because of a js error.
    [patch file](https://www.drupal.org/files/issues/media_fix.patch)
