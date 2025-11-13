import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { RadioControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { useAttributeList } from '../../hooks/useAttributeList';
import mainBlockImg from '../../../../admin/assets/img/blocks/block-07.jpg';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const { title, items } = attributes;

  const [viewMode, setViewMode] = useState('edit'); // 'preview' | 'edit'

  // Используем хук для items
  const itemsList = useAttributeList(attributes, setAttributes, 'items');

  const blockProps = useBlockProps({
    className: 'development block-07'
  });

  return (
    <>
      <InspectorControls>
        <VideoHelpPanel />
        <ContentPanel attributes={attributes} setAttributes={setAttributes} />
      </InspectorControls>

      <div {...blockProps}>
        <div className="advanced-block">
          <div className="block-info">
            <span className="block-info-title">🎨 Блок: Заголовок</span>
            <RadioControl
              selected={viewMode}
              options={[
                { label: __('Preview ✍️', 'theme'), value: 'preview' },
                { label: __('Редактирование ☺️', 'theme'), value: 'edit' },
              ]}
              onChange={(value) => setViewMode(value)}
            />
          </div>

          {viewMode === 'preview' && (
            <img
              src={mainBlockImg}
              className="preview-image"
              alt=""
              style={{ borderRadius: '8px' }}
            />
          )}

          {viewMode === 'edit' && (
            <div className="advanced-block-content">
              <div className="rich-text" style={{ 'marginBottom': '16px' }}>
                <span className="block-label">{__('Заголовок', 'theme')}</span>
                <RichText
                  tagName="div"
                  value={title}
                  onChange={(value) => setAttributes({ title: value })}
                  placeholder={__('Заголовок...', 'theme')}
                  allowedFormats={[]}
                />
              </div>

              {/* Повторяющиеся элементы */}
              <div className="repeater-items">
                <span className="block-label">{__('Текстовые блоки', 'theme')}</span>

                {items.map((item, index) => (
                  <div key={index} className="repeater-item">
                    <div className="items-control">
                      <div className="items-control__buttons">
                        <Button onClick={() => itemsList.moveUp(index)} disabled={index === 0}>⬆️</Button>
                        <Button onClick={() => itemsList.moveDown(index)} disabled={index === items.length - 1}>⬇️</Button>
                      </div>
                      <Button isDestructive onClick={() => itemsList.remove(index)}>❌</Button>
                    </div>

                    {/* Контент (html + plain text) */}
                    {itemsList.renderDualTextControl(item, index, 'item', {
                      label: __('Контент', 'theme'),
                    })}
                  </div>
                ))}

                <Button
                  onClick={() => itemsList.add({ html: '', content: '' })}
                  className="add-repeater-item"
                >
                  {__('+ Добавить элемент', 'theme')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Edit;