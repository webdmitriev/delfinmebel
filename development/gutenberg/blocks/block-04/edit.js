import { useState, useEffect } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { CheckboxControl, RadioControl, Spinner, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import mainBlockImg from '../../../../admin/assets/img/blocks/block-04.jpg';
import VideoHelpPanel from './controls/VideoHelpPanel';

const Edit = ({ attributes, setAttributes }) => {
  const { selectedCategories = [] } = attributes;

  const [viewMode, setViewMode] = useState('edit');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- Загрузка категорий ---
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

  useEffect(() => {
    if (!isLoading && categories.length > 0 && selectedCategories.length > 0) {
      const existingIds = categories.map((cat) => cat.id);
      const validSelected = selectedCategories.filter((cat) =>
        existingIds.includes(cat.id)
      );

      if (validSelected.length !== selectedCategories.length) {
        console.log(
          '🧹 Очистка: удалено',
          selectedCategories.length - validSelected.length,
          'категорий'
        );
        setAttributes({ selectedCategories: validSelected });
      }
    }
  }, [isLoading, categories]);

  // --- Выбор / снятие категории ---
  const toggleCategory = (catId) => {
    const cat = categories.find((c) => c.id === catId);
    if (!cat) return;

    const exists = selectedCategories.some((c) => c.id === cat.id);

    if (exists) {
      setAttributes({
        selectedCategories: selectedCategories.filter((c) => c.id !== cat.id),
      });
    } else {
      const catData = {
        id: cat.id,
        name: cat.name,
        description: cat.description,
        image: cat.image ? { url: cat.image.url } : null,
        link: cat.link || (cat.slug ? `/store/${cat.slug}` : ''),
      };

      setAttributes({
        selectedCategories: [...selectedCategories, catData],
      });
    }
  };

  const blockProps = useBlockProps({
    className: 'development block-04',
  });

  return (
    <>
      <InspectorControls>
        <VideoHelpPanel />
        <PanelBody title={__('Категории магазина', 'theme')} initialOpen={true}>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {isLoading ? (
              <div style={{ textAlign: 'center' }}>
                <Spinner />
                <p>{__('Загрузка категорий...', 'theme')}</p>
              </div>
            ) : (
              <>
                {categories.map((cat) => (
                  <CheckboxControl
                    key={cat.id}
                    label={cat.name}
                    checked={selectedCategories.some((c) => c.id === cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                  />
                ))}
                <div style={{ marginTop: '16px', fontSize: '12px', color: '#666' }}>
                  {__('Выбрано категорий:', 'theme')} {selectedCategories.length}
                </div>
              </>
            )}
          </div>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="advanced-block">
          <div className="block-info">
            <span className="block-info-title">🎨 Блок категорий</span>
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
            <div className="selected-categories">
              {selectedCategories.length > 0 ? (
                selectedCategories.map((cat) => (
                  <div key={cat.id} className="selected-category">
                    <div className="category-name">{cat.name}</div>
                    {cat.description && (
                      <div className="category-description">{cat.description}</div>
                    )}
                    {cat.image?.url && (
                      <img
                        src={cat.image.url}
                        alt={cat.name}
                        style={{
                          width: '80px',
                          height: '80px',
                          objectFit: 'cover',
                          marginTop: '8px',
                          borderRadius: '4px',
                        }}
                      />
                    )}
                  </div>
                ))
              ) : (
                <p style={{ color: '#888' }}>{__('Нет выбранных категорий', 'theme')}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Edit;
