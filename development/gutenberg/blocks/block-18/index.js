import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import save from './save';
import attributes from './attributes';

registerBlockType('theme/block-18', {
  title: 'ЛДСП',
  category: 'landing',
  icon: 'admin-customizer',
  description: ' ',
  attributes,
  edit,
  save
});

console.log('✅ block-18');