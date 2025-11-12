import { useState, useEffect } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { CheckboxControl, RadioControl, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import mainBlockImg from '../../../../admin/assets/img/blocks/block-04.jpg';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const {
    title, selectedCategories
  } = attributes;

  const [viewMode, setViewMode] = useState('edit');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Загрузка всех категорий
  const loadAllCategories = async () => {
    setIsLoading(true);

    try {
      let allCategories = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const response = await fetch(
          `${window.wpApiSettings.root}wp/v2/store_categories?per_page=100&page=${page}`
        );

        const data = await response.json();
        allCategories = [...allCategories, ...data];

        const totalPages = parseInt(response.headers.get('X-WP-TotalPages')) || 1;
        hasMore = page < totalPages;
        page++;
      }

      setCategories(allCategories);
    } catch (error) {
      console.error('Error loading categories:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAllCategories();
  }, []);

  const toggleCategory = (catId) => {
    if (selectedCategories.includes(catId)) {
      setAttributes({
        selectedCategories: selectedCategories.filter(id => id !== catId),
      });
    } else {
      setAttributes({
        selectedCategories: [...selectedCategories, catId],
      });
    }
  };

  const blockProps = useBlockProps({
    className: 'development block-04'
  });

  return (
    <>
      <InspectorControls>
        <VideoHelpPanel />
        <ContentPanel attributes={attributes} setAttributes={setAttributes} />
        <div style={{ padding: '16px 8px', maxHeight: '400px', overflowY: 'auto' }}>
          <p>{__('Выберите категории', 'theme')}</p>

          {isLoading ? (
            <div style={{ textAlign: 'center' }}>
              <Spinner />
              <p>{__('Загрузка категорий...', 'theme')}</p>
            </div>
          ) : (
            <>
              {categories.map(cat => (
                <CheckboxControl
                  key={cat.id}
                  label={cat.name}
                  checked={selectedCategories.includes(cat.id)}
                  onChange={() => toggleCategory(cat.id)}
                />
              ))}

              <div style={{ marginTop: '16px', fontSize: '12px', color: '#666' }}>
                {__('Загружено категорий:', 'theme')} {categories.length}
              </div>
            </>
          )}
        </div>
      </InspectorControls>

      {/* Остальной код без изменений */}
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
              {selectedCategories.length > 0 && (
                <div className="selected-categories">
                  {selectedCategories.map(id => {
                    const cat = categories.find(c => c.id === id);
                    return (
                      <div key={id} style={{ marginBottom: '8px' }} className="selected-category">
                        <span className="category-name">{cat?.name}</span>
                        <span className="category-description">{cat?.description}</span>
                        {cat?.image && (
                          <img
                            src={cat.image.url}
                            alt=""
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Edit;