Image2 is an enhanced image plugin for CKEditor that supports image captions,
CSS class-based alignment and centering.

Requirements
------------

This module requires CKEditor Standard or Full version to be installed in your
site's libraries folder. CKEditor version 4.4 or higher is recommended. This
module should work with both the ckeditor module OR the Wysiwyg API module,
but currently has only been tested against the WYSIWYG API module.

Known Limitations
-----------------

The Media module is partially compatible with Image2 -- once you insert an
image with the Media module right-clicking or double clicking the image does
nothing: the form must be submitted and edited again before you can access
the Image2 popup; the Media module popup is no longer accesible.

Installation
------------

1.  Ensure the Wysiwyg API or the CKEditor module is installed and configured.

2.  Ensure Ckeditor Standard or Full package is downloaded from ckeditor.com
    and installed to the `sites/all/libraries` folder.

3.  Download and install this module

4.  Download the Image2 plugin and its dependencies from the links below; be
    sure to download versions that are compatible with your version of CKeditor.

        * [Image2](http://ckeditor.com/addons/image2)
        * [Widget](http://ckeditor.com/addons/widget)
        * [Line Utilities](http://ckeditor.com/addons/lineutils)
        * [Dialog UI](http://ckeditor.com/addons/dialogui)

    Note that the Dialog module and Clipboard plugins are also required but
    already come packaged with the Standard CKeditor build.

    The downloaded zip files should be unzipped into the
    `sites/all/libraries/ckeditor/plugins` folder.

    Optionally, you can run the make file from your drupal root to automatically
    download the plugins to the correct location:

        $ drush make sites/all/modules/ckeditor_image2/ckeditor_image2.make --no-core

5.  Enable the CKeditor Image2 module.

6.  Add an image inside an editor (eg using the Media module button integration).

7.  Save the node.

8.  Edit the node, double click the image to see the Image2 Properties dialog popup.
