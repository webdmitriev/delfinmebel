const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody, TextControl, ToggleControl } = wp.components;
const { useSelect, useDispatch } = wp.data;
const { Fragment } = wp.element;

const LdspSidebar = () => {
  const postType = useSelect((select) => select('core/editor').getCurrentPostType(), []);

  // Ограничиваем только для 'ldsp'
  if (postType !== 'ldsp') return null;

  const postMeta = useSelect(
    (select) => select('core/editor').getEditedPostAttribute('meta') || {},
    []
  );
  const { editPost } = useDispatch('core/editor');

  const updateMeta = (key, value) => {
    editPost({ meta: { ...postMeta, [key]: value } });
  };

  return (
    <Fragment>
      <PluginSidebarMoreMenuItem
        target="ldsp-sidebar"
        icon="admin-post"
      >
        Настройки ЛДСП
      </PluginSidebarMoreMenuItem>

      <PluginSidebar
        name="ldsp-sidebar"
        title="Настройки ЛДСП"
        icon="admin-post"
      >
        <PanelBody title="Основные поля" initialOpen={true}>
          <TextControl
            label="Артикул"
            value={postMeta.articulate || ''}
            onChange={(val) => updateMeta('articulate', val)}
          />
          <ToggleControl
            label="Популярная?"
            checked={!!postMeta.is_popular}
            onChange={(val) => updateMeta('is_popular', val)}
          />
        </PanelBody>
      </PluginSidebar>
    </Fragment>
  );
};

registerPlugin('ldsp-sidebar', { render: LdspSidebar });
