const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody, TextControl, ToggleControl, Button, Dashicon } = wp.components;
const { useSelect, useDispatch } = wp.data;
const { Fragment } = wp.element;

const WorksSidebar = () => {
  const postType = useSelect((select) => select('core/editor').getCurrentPostType(), []);

  // Ограничиваем только для 'works'
  if (postType !== 'works') return null;

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
        target="works-sidebar"
        icon="admin-post"
      >
        Настройки работы
      </PluginSidebarMoreMenuItem>

      <PluginSidebar
        name="works-sidebar"
        title="Настройки работы"
        icon="admin-post"
      >
        <PanelBody title="Основные поля" initialOpen={true}>
          <TextControl
            label="Директор"
            value={postMeta.director || ''}
            onChange={(val) => updateMeta('director', val)}
          />
          <TextControl
            label="Город"
            value={postMeta.city || ''}
            onChange={(val) => updateMeta('city', val)}
          />
          <TextControl
            label="Описание"
            value={postMeta.description || ''}
            onChange={(val) => updateMeta('description', val)}
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

registerPlugin('works-sidebar', { render: WorksSidebar });
