/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Base64UploadAdapter,
	Bold,
	Essentials,
	FontColor,
	FontSize,
	Image,
	ImageResize,
	ImageUpload,
	Paragraph
];

export default Editor;
