import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Button, RadioControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { useAttributeList } from '../../hooks/useAttributeList';
import mainBlockImg from '../../../../admin/assets/img/blocks/block-09.jpg';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const { title, subTitle, blockTitle, blockButtonText, blockButtonLink, blockHtml, items } = attributes;

  const [viewMode, setViewMode] = useState('edit'); // 'preview' | 'edit'

  // Используем хук для items
  const itemsList = useAttributeList(attributes, setAttributes, 'items');

  const blockProps = useBlockProps({
    className: 'development block-09'
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
            <span className="block-info-title">🎨 FAQ</span>
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
              <div className="rich-text" style={{ 'marginBottom': '16px' }}>
                <span className="block-label">{__('Подзаголовок', 'theme')}</span>
                <RichText
                  tagName="div"
                  value={subTitle}
                  onChange={(value) => setAttributes({ subTitle: value })}
                  placeholder={__('Подзаголовок...', 'theme')}
                  allowedFormats={[]}
                />
              </div>
              <div className="block-faq" style={{ 'marginBottom': '16px' }}>
                <div className="rich-text" style={{ 'marginBottom': '16px' }}>
                  <span className="block-label">{__('Заголовок блока', 'theme')}</span>
                  <RichText
                    tagName="div"
                    value={blockTitle}
                    onChange={(value) => setAttributes({ blockTitle: value })}
                    placeholder={__('Заголовок блока...', 'theme')}
                    allowedFormats={[]}
                  />
                </div>
                <div className="rich-texts">
                  <div className="rich-text rich-text-50" style={{ 'marginBottom': '16px' }}>
                    <span className="block-label">{__('Кнопка - (текст)', 'theme')}</span>
                    <RichText
                      tagName="div"
                      value={blockButtonText}
                      onChange={(value) => setAttributes({ blockButtonText: value })}
                      placeholder={__('Кнопка - (текст)', 'theme')}
                      allowedFormats={[]}
                    />
                  </div>
                  <div className="rich-text rich-text-50" style={{ 'marginBottom': '16px' }}>
                    <span className="block-label">{__('Кнопка - (ссылка)', 'theme')}</span>
                    <RichText
                      tagName="div"
                      value={blockButtonLink}
                      onChange={(value) => setAttributes({ blockButtonLink: value })}
                      placeholder={__('Кнопка - (ссылка)', 'theme')}
                      allowedFormats={[]}
                    />
                  </div>
                  <TextareaControl
                    placeholder={__('HTML контент...', 'theme')}
                    value={blockHtml}
                    onChange={(value) => setAttributes({ blockHtml: value })}
                    className="repeater-content"
                    rows={6}
                    style={{ marginBottom: '8px' }}
                  />
                </div>
              </div>
              <div className="repeater-items">
                <span className="block-label">{__('Текстовой блок', 'theme')}</span>

                {items.map((item, index) => (
                  <div key={index} className="repeater-item repeater-item-full">
                    <div className="items-control">
                      <div className="items-control__buttons">
                        <Button onClick={() => itemsList.moveUp(index)} disabled={index === 0}>⬅️</Button>
                        <Button onClick={() => itemsList.moveDown(index)} disabled={index === items.length - 1}>➡️</Button>
                      </div>
                      <Button isDestructive onClick={() => itemsList.remove(index)}>❌</Button>
                    </div>

                    {itemsList.renderTwoTextControl(item, index)}
                  </div>
                ))}

                <Button
                  onClick={() => itemsList.add({ content: '' })}
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