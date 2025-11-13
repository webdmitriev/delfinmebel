import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import save from './save';
import attributes from './attributes';

registerBlockType('theme/block-07', {
  title: 'Блок: Видео',
  category: 'landing',
  icon: 'admin-customizer',
  description: ' ',
  attributes,
  edit,
  save
});

console.log('✅ block-07');