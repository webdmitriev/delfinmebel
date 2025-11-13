import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import save from './save';
import attributes from './attributes';

registerBlockType('theme/block-05', {
  title: 'Популярные товары',
  category: 'landing',
  icon: 'admin-customizer',
  description: ' ',
  attributes,
  edit,
  save,
  example: {
    attributes: {
      title: 'Превью заголовка',
      subTitleOne: 'Превью подзаголовка',
    },
  },
});

console.log('✅ block-05');