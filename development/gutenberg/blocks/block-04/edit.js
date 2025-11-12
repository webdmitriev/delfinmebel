import { useState, useEffect } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { CheckboxControl, RadioControl, Spinner, Button } from '@wordpress/components';
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

  // Эффект для очистки удаленных категорий при изменении categories
  useEffect(() => {
    if (categories.length > 0 && selectedCategories.length > 0) {
      cleanupDeletedCategories();
    }
  }, [categories]); // Запускаем когда categories обновляются

  // Очистка удаленных категорий из selectedCategories
  const cleanupDeletedCategories = () => {
    const existingCategoryIds = categories.map(cat => cat.id);
    const validSelectedCategories = selectedCategories.filter(id =>
      existingCategoryIds.includes(id)
    );

    // Если есть невалидные категории, обновляем атрибуты
    if (validSelectedCategories.length !== selectedCategories.length) {
      console.log('Очистка: было', selectedCategories.length, 'стало', validSelectedCategories.length);
      setAttributes({
        selectedCategories: validSelectedCategories
      });
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

  // Функция для ручной очистки несуществующих категорий
  const handleCleanup = () => {
    const existingCategoryIds = categories.map(cat => cat.id);
    const validSelectedCategories = selectedCategories.filter(id =>
      existingCategoryIds.includes(id)
    );

    setAttributes({
      selectedCategories: validSelectedCategories
    });
  };

  // Получаем только существующие выбранные категории
  const existingSelectedCategories = selectedCategories.filter(id =>
    categories.some(cat => cat.id === id)
  );

  // Получаем несуществующие выбранные категории
  const deletedCategories = selectedCategories.filter(id =>
    !categories.some(cat => cat.id === id)
  );

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

          {/* Показываем предупреждение о несуществующих категориях */}
          {deletedCategories.length > 0 && (
            <div style={{
              background: '#fff3cd',
              border: '1px solid #ffeaa7',
              borderRadius: '4px',
              padding: '12px',
              marginBottom: '16px'
            }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: '#856404' }}>
                {__('Найдены удаленные категории', 'theme')}
              </p>
              <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#856404' }}>
                {__('Некоторые выбранные категории были удалены из системы', 'theme')}
              </p>
              <Button
                variant="secondary"
                onClick={handleCleanup}
                style={{ fontSize: '12px' }}
              >
                {__('Очистить несуществующие категории', 'theme')}
              </Button>
            </div>
          )}

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
                <br />
                {__('Выбрано категорий:', 'theme')} {existingSelectedCategories.length}
                {deletedCategories.length > 0 && (
                  <span style={{ color: '#dc3545' }}>
                    {' '}(+{deletedCategories.length} {__('удаленных', 'theme')})
                  </span>
                )}
              </div>
            </>
          )}
        </div>
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
              {/* Показываем предупреждение в режиме редактирования */}
              {deletedCategories.length > 0 && (
                <div style={{
                  background: '#fff3cd',
                  border: '1px solid #ffeaa7',
                  borderRadius: '4px',
                  padding: '12px',
                  marginBottom: '16px'
                }}>
                  <p style={{ margin: '0', color: '#856404' }}>
                    {__('⚠️ Некоторые выбранные категории были удалены', 'theme')}
                  </p>
                </div>
              )}

              {existingSelectedCategories.length > 0 && (
                <div className="selected-categories">
                  {existingSelectedCategories.map(id => {
                    const cat = categories.find(c => c.id === id);
                    return (
                      <div key={id} style={{
                        marginBottom: '8px',
                        padding: '8px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '4px'
                      }} className="selected-category">
                        <div style={{ fontWeight: 'bold' }}>{cat?.name}</div>
                        {cat?.description && (
                          <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                            {cat.description}
                          </div>
                        )}
                        {cat?.image && (
                          <img
                            src={cat.image.url}
                            alt=""
                            style={{
                              width: '80px',
                              height: '80px',
                              objectFit: 'cover',
                              marginTop: '8px',
                              borderRadius: '4px'
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Показываем удаленные категории отдельно */}
              {deletedCategories.length > 0 && (
                <div className="deleted-categories" style={{ marginTop: '16px' }}>
                  <h4 style={{
                    marginBottom: '12px',
                    color: '#dc3545',
                    fontSize: '14px'
                  }}>
                    {__('Удаленные категории (будут автоматически удалены):', 'theme')}
                  </h4>
                  {deletedCategories.map(id => (
                    <div key={id} style={{
                      marginBottom: '4px',
                      padding: '4px 8px',
                      background: '#f8d7da',
                      border: '1px solid #f5c6cb',
                      borderRadius: '4px',
                      fontSize: '12px',
                      color: '#721c24'
                    }}>
                      ID: {id} {__('(категория удалена)', 'theme')}
                    </div>
                  ))}
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