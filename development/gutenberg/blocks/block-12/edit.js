import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { RadioControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import mainBlockImg from '../../../../admin/assets/img/blocks/block-12.jpg';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const { title, subTitle, imageUrl, imageId, thumbnailUrl, thumbnailId } = attributes;

  const [viewMode, setViewMode] = useState('edit'); // 'preview' | 'edit'

  const onSelectImage = (media) => { setAttributes({ imageUrl: media.url, imageId: media.id }) };
  const onRemoveImage = () => { setAttributes({ imageUrl: '', imageId: 0 }) };

  const onSelectThumbnail = (media) => { setAttributes({ thumbnailUrl: media.url, thumbnailId: media.id }) };
  const onRemoveThumbnail = () => { setAttributes({ thumbnailUrl: '', thumbnailId: 0 }) };

  const blockProps = useBlockProps({
    className: 'development block-12'
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
            <span className="block-info-title">🎨 Баннер</span>
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
              <div className="block-images">
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={onSelectImage}
                    allowedTypes={['image']}
                    value={imageId}
                    render={({ open }) => (
                      <div className="advanced-block-image">
                        <span className="advanced-block-image__title">Иконка под текстом</span>
                        {imageUrl ? (
                          <>
                            <img
                              src={imageUrl}
                              className="advanced-image-preview"
                              alt=""
                              style={{ borderRadius: '8px' }}
                            />
                            <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                              <Button onClick={open} variant="secondary" size="small">
                                ✏️ {__('Change', 'theme')}
                              </Button>
                              <Button
                                onClick={onRemoveImage}
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
                    onSelect={onSelectThumbnail}
                    allowedTypes={['image']}
                    value={thumbnailId}
                    render={({ open }) => (
                      <div className="advanced-block-image">
                        <span className="advanced-block-image__title">Фоновая картинка</span>
                        {thumbnailUrl ? (
                          <>
                            <img
                              src={thumbnailUrl}
                              className="advanced-image-preview"
                              alt=""
                              style={{ borderRadius: '8px' }}
                            />
                            <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                              <Button onClick={open} variant="secondary" size="small">
                                ✏️ {__('Change', 'theme')}
                              </Button>
                              <Button
                                onClick={onRemoveThumbnail}
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