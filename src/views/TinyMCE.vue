<script setup lang="ts">
import { ref } from 'vue';
import Editor from '@tinymce/tinymce-vue'

const plugins = ref('link image media table code autolink lists directionality anchor emoticons charmap searchreplace')
const toolbar = ref('undo redo | cut copy paste pastetext | blocks fontfamily fontsize | bold italic blockquote | forecolor backcolor | ltr rtl | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat')

const fontFormats = ref("Faruma=Faruma; Arial=Arial,sans-serif; Times New Roman=Times New Roman,Times,serif; Traditional Arabic=Traditional Arabic")
const init = ref({
  plugins: plugins.value,
  toolbar: toolbar.value,
  font_family_formats: fontFormats.value,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images_upload_handler: (blobInfo: any) => {
    return new Promise((resolve, reject) => {
      // This is a basic example that creates a base64 data URL
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = () => {
        reject('Failed to load file');
      };
      reader.readAsDataURL(blobInfo.blob());
    });
  },
  // Optional: configure file picker options
  file_picker_types: 'image',
  automatic_uploads: true,
  image_advtab: true,
  image_class_list: [
    { title: 'None', value: '' },
    { title: 'Float Left', value: 'float-left' },
    { title: 'Float Right', value: 'float-right' },
  ],
  valid_elements: '*[*]',
  extended_valid_elements: 'img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name|style]',
  noneditable_class: 'mceNonEditable',
  forced_root_block: false,
  noneditable_noneditable_class: 'mceNonEditable',
  content_style: `
    .float-left {
      float: left;
      margin: 2em;
    }
    .float-right {
      float: right;
      margin: 2em;
    }
    img {
      display: inline-block;
    }
  `,
})

</script>

<template>
  <div>
    <h1>TinyMCE</h1>
  </div>
  <div>
    <Editor apiKey="2d9st31wujoutawe4mbzqsqqmf5389jv9au9wl2kygm93fiz" :init="init" />
  </div>
</template>

<style>
.tox-editor-container {
  min-height: 100%;
  border: 1px solid #ccc;
}

.float-left {
  float: left;
  margin: 2em;
}

.float-right {
  float: right;
  margin: 2em;
}
</style>
