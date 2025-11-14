import { useState } from '@wordpress/element';
import {
  useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck
} from '@wordpress/block-editor';
import { RadioControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import mainBlockImg from '../../../../admin/assets/img/blocks/block-03.jpg';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const { title, blockSuptitle, blockTitle, blockDescr, imageUrl, imageId } = attributes;

  const [viewMode, setViewMode] = useState('edit'); // 'preview' | 'edit'

  // Handlers
  const onSelectImage = (media) => {
    setAttributes({
      imageUrl: media.url,
      imageId: media.id,
    });
  };

  const onRemoveImage = () => {
    setAttributes({ imageUrl: '', imageId: 0 });
  };

  const blockProps = useBlockProps({
    className: 'development block-10'
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
              <div className="rich-container">
                <div className="rich-text" style={{ 'marginBottom': '16px' }}>
                  <span className="block-label">{__('Лейбл блока', 'theme')}</span>
                  <RichText
                    tagName="div"
                    value={blockSuptitle}
                    onChange={(value) => setAttributes({ blockSuptitle: value })}
                    placeholder={__('Лейбл блока...', 'theme')}
                    allowedFormats={[]}
                  />
                </div>
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
                <div className="rich-text" style={{ 'marginBottom': '16px' }}>
                  <span className="block-label">{__('Описание блока', 'theme')}</span>
                  <RichText
                    tagName="div"
                    value={blockDescr}
                    onChange={(value) => setAttributes({ blockDescr: value })}
                    placeholder={__('Описание блока...', 'theme')}
                    allowedFormats={[]}
                  />
                </div>
                <div className="advanced-block-images">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={onSelectImage}
                      allowedTypes={['image']}
                      value={imageId}
                      render={({ open }) => (
                        <div className="advanced-block-image">
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Edit;