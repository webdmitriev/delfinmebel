import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { RadioControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import mainBlockImg from '../../../../admin/assets/img/blocks/block-03.jpg';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const { title, subTitle, buttonText, buttonLink, imageOneUrl, imageOneId, imageTwoUrl, imageTwoId } = attributes;

  const [viewMode, setViewMode] = useState('edit'); // 'preview' | 'edit'

  const onSelectImageOne = (media) => { setAttributes({ imageOneUrl: media.url, imageOneId: media.id }) };
  const onRemoveImageOne = () => { setAttributes({ imageOneUrl: '', imageOneId: 0 }) };

  const onSelectImageTwo = (media) => { setAttributes({ imageTwoUrl: media.url, imageTwoId: media.id }) };
  const onRemoveImageTwo = () => { setAttributes({ imageTwoUrl: '', imageTwoId: 0 }) };

  const blockProps = useBlockProps({
    className: 'development block-14'
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
            <span className="block-info-title">🎨 Баннер (vk)</span>
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
              <div className="rich-text" style={{ 'marginBottom': '16px' }}>
                <span className="block-label">{__('Кнопка', 'theme')}</span>
                <RichText
                  tagName="div"
                  value={buttonText}
                  onChange={(value) => setAttributes({ buttonText: value })}
                  placeholder={__('Кнопка - текст...', 'theme')}
                  allowedFormats={[]}
                />
                <RichText
                  tagName="div"
                  value={buttonLink}
                  onChange={(value) => setAttributes({ buttonLink: value })}
                  placeholder={__('Кнопка - ссылка...', 'theme')}
                  allowedFormats={[]}
                />
              </div>
              <div className="block-images">
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={onSelectImageOne}
                    allowedTypes={['image']}
                    value={imageOneId}
                    render={({ open }) => (
                      <div className="advanced-block-image">
                        <span className="advanced-block-image__title">Картинка 1</span>
                        {imageOneUrl ? (
                          <>
                            <img
                              src={imageOneUrl}
                              className="advanced-image-preview"
                              alt=""
                              style={{ borderRadius: '8px' }}
                            />
                            <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                              <Button onClick={open} variant="secondary" size="small">
                                ✏️ {__('Change', 'theme')}
                              </Button>
                              <Button
                                onClick={onRemoveImageOne}
                                variant="tertiary"
                                size="small"
                                isDestructive
                              >
                                🗑 {__('Delete', 'theme')}
                              </Button>
                            </div>
                          </>
                        ) : (
                          <Button onClick={open} variant="primary">
                            📷 {__('Add image', 'theme')}
                          </Button>
                        )}
                      </div>
                    )}
                  />
                </MediaUploadCheck>

                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={onSelectImageTwo}
                    allowedTypes={['image']}
                    value={imageTwoId}
                    render={({ open }) => (
                      <div className="advanced-block-image">
                        <span className="advanced-block-image__title">Картинка 2</span>
                        {imageTwoUrl ? (
                          <>
                            <img
                              src={imageTwoUrl}
                              className="advanced-image-preview"
                              alt=""
                              style={{ borderRadius: '8px' }}
                            />
                            <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                              <Button onClick={open} variant="secondary" size="small">
                                ✏️ {__('Change', 'theme')}
                              </Button>
                              <Button
                                onClick={onRemoveImageTwo}
                                variant="tertiary"
                                size="small"
                                isDestructive
                              >
                                🗑 {__('Delete', 'theme')}
                              </Button>
                            </div>
                          </>
                        ) : (
                          <Button onClick={open} variant="primary">
                            📷 {__('Add image', 'theme')}
                          </Button>
                        )}
                      </div>
                    )}
                  />
                </MediaUploadCheck>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Edit;