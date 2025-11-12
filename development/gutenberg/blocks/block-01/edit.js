import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Button, RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { useAttributeList } from '../../hooks/useAttributeList';
import mainBlockImg from '../../../../admin/assets/img/blocks/block-01.jpg';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const {
    title,
    titleColor,
    items,
    params,
    videoMP4,
    videoWEBM,
    videoPoster
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
                <RichText
                  tagName="div"
                  value={titleColor}
                  onChange={(value) => setAttributes({ titleColor: value })}
                  placeholder={__('Текст для окрашивания', 'theme')}
                  allowedFormats={[]}
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

              <div className="video-section">
                <span className="block-label">{__('Видео фон', 'theme')}</span>

                <div className="video-controls">
                  {/* MP4 */}
                  <MediaUpload
                    onSelect={(media) =>
                      setAttributes({ videoMP4: { id: media.id, url: media.url, title: media.title } })
                    }
                    allowedTypes={['video']}
                    value={videoMP4?.id}
                    render={({ open }) => (
                      <div className="video-upload">
                        {videoMP4?.url ? (
                          <>
                            <video
                              src={videoMP4.url}
                              controls
                              style={{
                                width: '100%',
                                maxHeight: '180px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                              }}
                            />
                            <div className="video-actions">
                              <Button onClick={open}>✏️ {__('Заменить MP4', 'theme')}</Button>
                              <Button
                                isDestructive
                                onClick={() => setAttributes({ videoMP4: { id: 0, url: '', title: '' } })}
                              >
                                ❌ {__('Удалить', 'theme')}
                              </Button>
                            </div>
                          </>
                        ) : (
                          <Button onClick={open} variant="primary">
                            {__('Загрузить MP4', 'theme')}
                          </Button>
                        )}
                      </div>
                    )}
                  />

                  {/* WEBM */}
                  <MediaUpload
                    onSelect={(media) =>
                      setAttributes({ videoWEBM: { id: media.id, url: media.url, title: media.title } })
                    }
                    allowedTypes={['video']}
                    value={videoWEBM?.id}
                    render={({ open }) => (
                      <div className="video-upload">
                        {videoWEBM?.url ? (
                          <>
                            <video
                              src={videoWEBM.url}
                              controls
                              style={{
                                width: '100%',
                                maxHeight: '180px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                              }}
                            />
                            <div className="video-actions">
                              <Button onClick={open}>✏️ {__('Заменить WEBM', 'theme')}</Button>
                              <Button
                                isDestructive
                                onClick={() => setAttributes({ videoWEBM: { id: 0, url: '', title: '' } })}
                              >
                                ❌ {__('Удалить', 'theme')}
                              </Button>
                            </div>
                          </>
                        ) : (
                          <Button onClick={open} variant="secondary">
                            {__('Загрузить WEBM', 'theme')}
                          </Button>
                        )}
                      </div>
                    )}
                  />

                  {/* Poster */}
                  <MediaUpload
                    onSelect={(media) =>
                      setAttributes({ videoPoster: { id: media.id, url: media.url, alt: media.alt } })
                    }
                    allowedTypes={['image']}
                    value={videoPoster?.id}
                    render={({ open }) => (
                      <div className="video-poster">
                        {videoPoster?.url ? (
                          <>
                            <img
                              src={videoPoster.url}
                              alt={videoPoster.alt || ''}
                              style={{
                                width: '100%',
                                maxHeight: '180px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                              }}
                            />
                            <div className="video-actions">
                              <Button onClick={open}>✏️ {__('Заменить постер', 'theme')}</Button>
                              <Button
                                isDestructive
                                onClick={() => setAttributes({ videoPoster: { id: 0, url: '', alt: '' } })}
                              >
                                ❌ {__('Удалить', 'theme')}
                              </Button>
                            </div>
                          </>
                        ) : (
                          <Button onClick={open} variant="secondary">
                            {__('Добавить постер', 'theme')}
                          </Button>
                        )}
                      </div>
                    )}
                  />
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