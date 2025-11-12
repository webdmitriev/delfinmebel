import { useState } from '@wordpress/element';
import {
  useBlockProps,
  RichText,
  InspectorControls
} from '@wordpress/block-editor';
import { Button, RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { useAttributeList } from '../../hooks/useAttributeList';
import mainBlockImg from '../../../../admin/assets/img/blocks/block-01.jpg';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const {
    title,
    items,
    params
  } = attributes;

  const [viewMode, setViewMode] = useState('edit'); // 'preview' | 'edit'

  const blockProps = useBlockProps({
    className: 'development block-01'
  });

  // Используем хук для items
  const itemsList = useAttributeList(attributes, setAttributes, 'items');
  // и для params
  const paramsList = useAttributeList(attributes, setAttributes, 'params');

  return (
    <>
      <InspectorControls>
        <VideoHelpPanel />
        <ContentPanel attributes={attributes} setAttributes={setAttributes} />
      </InspectorControls>

      <div {...blockProps}>
        <div className="advanced-block">
          <div className="block-info" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
            <span className="block-info-title">🎨 Главный блок</span>
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
                  tagName="h1"
                  value={title}
                  onChange={(value) => setAttributes({ title: value })}
                  placeholder={__('Заголовок...', 'theme')}
                  allowedFormats={['core/bold']}
                />
              </div>

              <div className="repeater-items">
                <span className="block-label">{__('Текстовой блок', 'theme')}</span>

                {items.map((item, index) => (
                  <div key={index} className="repeater-item">
                    <div className="items-control">
                      <div className="items-control__buttons">
                        <Button onClick={() => itemsList.moveUp(index)} disabled={index === 0}>⬅️</Button>
                        <Button onClick={() => itemsList.moveDown(index)} disabled={index === items.length - 1}>➡️</Button>
                      </div>
                      <Button isDestructive onClick={() => itemsList.remove(index)}>❌</Button>
                    </div>

                    {/* ✍️ Теперь одной строкой */}
                    {itemsList.renderTextControl(item, index, 'content')}
                  </div>
                ))}

                <Button
                  onClick={() => itemsList.add({ content: '' })}
                  className="add-repeater-item"
                >
                  {__('+ Добавить элемент', 'theme')}
                </Button>
              </div>

              <div className="repeater-items">
                <span className="block-label">{__('Блоки', 'theme')}</span>

                {params.map((param, index) => (
                  <div key={index} className="repeater-item">
                    <div className="items-control">
                      <div className="items-control__buttons">
                        <Button onClick={() => paramsList.moveUp(index)} disabled={index === 0}>⬅️</Button>
                        <Button onClick={() => paramsList.moveDown(index)} disabled={index === items.length - 1}>➡️</Button>
                      </div>
                      <Button isDestructive onClick={() => paramsList.remove(index)}>❌</Button>
                    </div>

                    {paramsList.renderImageControl(param, index)}

                    <RichText
                      tagName="div"
                      placeholder={__('Введите текст...', 'theme')}
                      value={param.content}
                      onChange={(value) => paramsList.update(index, 'content', value)}
                      className="repeater-content"
                    />
                  </div>
                ))}

                <Button
                  onClick={() => paramsList.add({ image: { id: 0, url: '', alt: '' }, content: '' })}
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