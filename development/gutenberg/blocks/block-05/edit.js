import { useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import mainBlockImg from '../../../../admin/assets/img/blocks/block-05.jpg';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const { title } = attributes;

  const [viewMode, setViewMode] = useState('edit'); // 'preview' | 'edit'

  const blockProps = useBlockProps({
    className: 'development block-05'
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
            <span className="block-info-title">🎨 Популярные товары</span>
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Edit;