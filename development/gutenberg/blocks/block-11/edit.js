import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { RadioControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import mainBlockImg from '../../../../admin/assets/img/blocks/block-11.jpg';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const {
    title,

    blockOneTitle,
    blockOneDescr,
    blockOneIconUrl,
    blockOneIconId,
    blockOneImageUrl,
    blockOneImageId,

    blockTwoTitle,
    blockTwoDescr,
    blockTwoIconUrl,
    blockTwoIconId,
    blockTwoImageUrl,
    blockTwoImageId,

    blockThreeTitle,
    blockThreeDescr,
    blockThreeIconUrl,
    blockThreeIconId,
    blockThreeImageUrl,
    blockThreeImageId
  } = attributes;

  const [viewMode, setViewMode] = useState('edit'); // 'preview' | 'edit'

  // Handlers
  const onSelectIconOne = (media) => { setAttributes({ blockOneIconUrl: media.url, blockOneIconId: media.id }) };
  const onRemoveIconOne = () => { setAttributes({ blockOneIconUrl: '', blockOneIconId: 0 }) };
  const onSelectImageOne = (media) => { setAttributes({ blockOneImageUrl: media.url, blockOneImageId: media.id }) };
  const onRemoveImageOne = () => { setAttributes({ blockOneImageUrl: '', blockOneImageId: 0 }) };

  const onSelectIconTwo = (media) => { setAttributes({ blockTwoIconUrl: media.url, blockTwoIconId: media.id }) };
  const onRemoveIconTwo = () => { setAttributes({ blockTwoIconUrl: '', blockTwoIconId: 0 }) };
  const onSelectImageTwo = (media) => { setAttributes({ blockTwoImageUrl: media.url, blockTwoImageId: media.id }) };
  const onRemoveImageTwo = () => { setAttributes({ blockTwoImageUrl: '', blockTwoImageId: 0 }) };

  const onSelectIconThree = (media) => { setAttributes({ blockThreeIconUrl: media.url, blockThreeIconId: media.id }) };
  const onRemoveIconThree = () => { setAttributes({ blockThreeIconUrl: '', blockThreeIconId: 0 }) };
  const onSelectImageThree = (media) => { setAttributes({ blockThreeImageUrl: media.url, blockThreeImageId: media.id }) };
  const onRemoveImageThree = () => { setAttributes({ blockThreeImageUrl: '', blockThreeImageId: 0 }) };

  const blockProps = useBlockProps({
    className: 'development block-11'
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

              {/* block - 01 */}
              <div className="rich-text rich-text-block" style={{ 'marginBottom': '16px' }}>
                <span className="block-label">{__('Заголовок блока', 'theme')}</span>
                <RichText
                  tagName="div"
                  style={{ 'marginBottom': '8px' }}
                  value={blockOneTitle}
                  onChange={(value) => setAttributes({ blockOneTitle: value })}
                  placeholder={__('Заголовок блока...', 'theme')}
                  allowedFormats={[]}
                />
                <RichText
                  tagName="div"
                  style={{ 'marginBottom': '8px' }}
                  value={blockOneDescr}
                  onChange={(value) => setAttributes({ blockOneDescr: value })}
                  placeholder={__('Описание блока...', 'theme')}
                  allowedFormats={[]}
                />
                <div className="block-images">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={onSelectIconOne}
                      allowedTypes={['image']}
                      value={blockOneIconId}
                      render={({ open }) => (
                        <div className="advanced-block-image">
                          <span className="advanced-block-image__title">Иконка блока</span>
                          {blockOneIconUrl ? (
                            <>
                              <img
                                src={blockOneIconUrl}
                                className="advanced-image-preview"
                                alt=""
                                style={{ borderRadius: '8px' }}
                              />
                              <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                                <Button onClick={open} variant="secondary" size="small">
                                  ✏️ {__('Change', 'theme')}
                                </Button>
                                <Button
                                  onClick={onRemoveIconOne}
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
                              📷 {__('Add icon', 'theme')}
                            </Button>
                          )}
                        </div>
                      )}
                    />
                  </MediaUploadCheck>

                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={onSelectImageOne}
                      allowedTypes={['image']}
                      value={blockOneImageId}
                      render={({ open }) => (
                        <div className="advanced-block-image">
                          <span className="advanced-block-image__title">Картинка блока</span>
                          {blockOneImageUrl ? (
                            <>
                              <img
                                src={blockOneImageUrl}
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
                </div>
              </div>

              {/* block - 02 */}
              <div className="rich-text rich-text-block" style={{ 'marginBottom': '16px' }}>
                <span className="block-label">{__('Заголовок блока', 'theme')}</span>
                <RichText
                  tagName="div"
                  style={{ 'marginBottom': '8px' }}
                  value={blockTwoTitle}
                  onChange={(value) => setAttributes({ blockTwoTitle: value })}
                  placeholder={__('Заголовок блока...', 'theme')}
                  allowedFormats={[]}
                />
                <RichText
                  tagName="div"
                  style={{ 'marginBottom': '8px' }}
                  value={blockTwoDescr}
                  onChange={(value) => setAttributes({ blockTwoDescr: value })}
                  placeholder={__('Описание блока...', 'theme')}
                  allowedFormats={[]}
                />
                <div className="block-images">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={onSelectIconTwo}
                      allowedTypes={['image']}
                      value={blockTwoIconId}
                      render={({ open }) => (
                        <div className="advanced-block-image">
                          <span className="advanced-block-image__title">Иконка блока</span>
                          {blockTwoIconUrl ? (
                            <>
                              <img
                                src={blockTwoIconUrl}
                                className="advanced-image-preview"
                                alt=""
                                style={{ borderRadius: '8px' }}
                              />
                              <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                                <Button onClick={open} variant="secondary" size="small">
                                  ✏️ {__('Change', 'theme')}
                                </Button>
                                <Button
                                  onClick={onRemoveIconTwo}
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
                              📷 {__('Add icon', 'theme')}
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
                      value={blockTwoImageId}
                      render={({ open }) => (
                        <div className="advanced-block-image">
                          <span className="advanced-block-image__title">Картинка блока</span>
                          {blockTwoImageUrl ? (
                            <>
                              <img
                                src={blockTwoImageUrl}
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

              {/* block - 03 */}
              <div className="rich-text rich-text-block" style={{ 'marginBottom': '16px' }}>
                <span className="block-label">{__('Заголовок блока', 'theme')}</span>
                <RichText
                  tagName="div"
                  style={{ 'marginBottom': '8px' }}
                  value={blockThreeTitle}
                  onChange={(value) => setAttributes({ blockThreeTitle: value })}
                  placeholder={__('Заголовок блока...', 'theme')}
                  allowedFormats={[]}
                />
                <RichText
                  tagName="div"
                  style={{ 'marginBottom': '8px' }}
                  value={blockThreeDescr}
                  onChange={(value) => setAttributes({ blockThreeDescr: value })}
                  placeholder={__('Описание блока...', 'theme')}
                  allowedFormats={[]}
                />
                <div className="block-images">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={onSelectIconThree}
                      allowedTypes={['image']}
                      value={blockThreeIconId}
                      render={({ open }) => (
                        <div className="advanced-block-image">
                          <span className="advanced-block-image__title">Иконка блока</span>
                          {blockThreeIconUrl ? (
                            <>
                              <img
                                src={blockThreeIconUrl}
                                className="advanced-image-preview"
                                alt=""
                                style={{ borderRadius: '8px' }}
                              />
                              <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                                <Button onClick={open} variant="secondary" size="small">
                                  ✏️ {__('Change', 'theme')}
                                </Button>
                                <Button
                                  onClick={onRemoveIconThree}
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
                              📷 {__('Add icon', 'theme')}
                            </Button>
                          )}
                        </div>
                      )}
                    />
                  </MediaUploadCheck>

                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={onSelectImageThree}
                      allowedTypes={['image']}
                      value={blockThreeImageId}
                      render={({ open }) => (
                        <div className="advanced-block-image">
                          <span className="advanced-block-image__title">Картинка блока</span>
                          {blockThreeImageUrl ? (
                            <>
                              <img
                                src={blockThreeImageUrl}
                                className="advanced-image-preview"
                                alt=""
                                style={{ borderRadius: '8px' }}
                              />
                              <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                                <Button onClick={open} variant="secondary" size="small">
                                  ✏️ {__('Change', 'theme')}
                                </Button>
                                <Button
                                  onClick={onRemoveImageThree}
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