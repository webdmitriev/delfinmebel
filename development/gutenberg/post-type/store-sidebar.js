const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody, TextControl, ToggleControl, Button, Dashicon } = wp.components;
const { useSelect, useDispatch } = wp.data;
const { Fragment } = wp.element;

const StoreSidebar = () => {
  const postType = useSelect((select) => select('core/editor').getCurrentPostType(), []);

  // Ограничиваем только для 'store'
  if (postType !== 'store') return null;

  const postMeta = useSelect(
    (select) => select('core/editor').getEditedPostAttribute('meta') || {},
    []
  );
  const { editPost } = useDispatch('core/editor');

  const updateMeta = (key, value) => {
    editPost({ meta: { ...postMeta, [key]: value } });
  };

  const gallery = Array.isArray(postMeta.gallery) ? postMeta.gallery : [];

  const addImagesToGallery = () => {
    const frame = wp.media({
      title: 'Выберите изображения',
      button: { text: 'Добавить' },
      multiple: true,
    });

    frame.on('select', () => {
      const selection = frame.state().get('selection').toArray();
      const urls = selection.map((att) => att.toJSON().url);
      updateMeta('gallery', [...gallery, ...urls]);
    });

    frame.open();
  };

  const removeImageFromGallery = (index) => {
    const newGallery = [...gallery];
    newGallery.splice(index, 1);
    updateMeta('gallery', newGallery);
  };

  return (
    <Fragment>
      <PluginSidebarMoreMenuItem
        target="store-sidebar"
        icon="admin-post"
      >
        Настройки работы
      </PluginSidebarMoreMenuItem>

      <PluginSidebar
        name="store-sidebar"
        title="Настройки работы"
        icon="admin-post"
      >
        <PanelBody title="Основные поля" initialOpen={true}>
          <TextControl
            label="Артикул"
            value={postMeta.articulate || ''}
            onChange={(val) => updateMeta('articulate', val)}
          />
          <TextControl
            label="Новая цена"
            value={postMeta.price_new || ''}
            onChange={(val) => updateMeta('price_new', val)}
          />
          <TextControl
            label="Старая цена"
            value={postMeta.price_old || ''}
            onChange={(val) => updateMeta('price_old', val)}
          />
          <TextControl
            label="Описание"
            value={postMeta.custom_excerpt || ''}
            onChange={(val) => updateMeta('custom_excerpt', val)}
          />
          <ToggleControl
            label="Популярная работа"
            checked={!!postMeta.is_popular}
            onChange={(val) => updateMeta('is_popular', val)}
          />
        </PanelBody>

        <PanelBody title="Галерея" initialOpen={true}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {gallery.map((url, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <img
                  src={url}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                />
                <Button
                  icon="no-alt"
                  onClick={() => removeImageFromGallery(i)}
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px',
                    width: '18px',
                    height: '18px',
                    minWidth: '18px',
                    padding: '0',
                    borderRadius: '50%',
                    background: '#f44336',
                    color: '#fff',
                  }}
                />
              </div>
            ))}
          </div>
          <Button isPrimary onClick={addImagesToGallery} style={{ marginTop: '10px' }}>
            Добавить изображения
          </Button>
        </PanelBody>
      </PluginSidebar>
    </Fragment>
  );
};

registerPlugin('store-sidebar', { render: StoreSidebar });
