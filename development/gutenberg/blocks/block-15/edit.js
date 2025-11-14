import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { RadioControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { useAttributeList } from '../../hooks/useAttributeList';
import mainBlockImg from '../../../../admin/assets/img/blocks/block-15.jpg';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const { title, params } = attributes;

  const [viewMode, setViewMode] = useState('edit'); // 'preview' | 'edit'

  // Используем хук для params
  const paramsList = useAttributeList(attributes, setAttributes, 'params');

  const blockProps = useBlockProps({
    className: 'development block-15'
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
            <span className="block-info-title">🎨 Контакты</span>
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
              <div className="repeater-items">
                <span className="block-label">{__('Блоки', 'theme')}</span>

                {params.map((param, index) => (
                  <div key={index} className="repeater-item">
                    <div className="items-control">
                      <div className="items-control__buttons">
                        <Button onClick={() => paramsList.moveUp(index)} disabled={index === 0}>⬅️</Button>
                        <Button onClick={() => paramsList.moveDown(index)} disabled={index === params.length - 1}>➡️</Button>
                      </div>
                      <Button isDestructive onClick={() => paramsList.remove(index)}>❌</Button>
                    </div>

                    {paramsList.renderImageControl(param, index)}

                    <RichText
                      tagName="div"
                      placeholder={__('Лейбл...', 'theme')}
                      value={param.label}
                      onChange={(value) => paramsList.update(index, 'label', value)}
                      className="repeater-content"
                    />
                    <RichText
                      tagName="div"
                      placeholder={__('Текст, ссылка, email...', 'theme')}
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