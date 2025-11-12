import { useCallback } from '@wordpress/element';
import { MediaUpload, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export function useAttributeList(attributes, setAttributes, key) {
  const list = attributes[key] || [];

  const setList = useCallback(
    (newList) => setAttributes({ [key]: newList }),
    [key, setAttributes]
  );

  const add = useCallback(
    (itemTemplate = {}) => setList([...list, { ...itemTemplate }]),
    [list, setList]
  );

  const remove = useCallback(
    (index) => setList(list.filter((_, i) => i !== index)),
    [list, setList]
  );

  const update = useCallback(
    (index, field, value) =>
      setList(list.map((item, i) => (i === index ? { ...item, [field]: value } : item))),
    [list, setList]
  );

  const moveUp = useCallback(
    (index) => {
      if (index === 0) return;
      const newList = [...list];
      [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
      setList(newList);
    },
    [list, setList]
  );

  const moveDown = useCallback(
    (index) => {
      if (index === list.length - 1) return;
      const newList = [...list];
      [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
      setList(newList);
    },
    [list, setList]
  );

  // --------------------------
  // 🧠 Новый метод: MediaUpload renderer
  // --------------------------
  const renderImageControl = (param, index, field = 'image') => (
    <MediaUpload
      onSelect={(media) =>
        update(index, field, {
          id: media.id,
          url: media.url,
          alt: media.alt || '',
        })
      }
      allowedTypes={['image']}
      value={param[field]?.id}
      render={({ open }) => (
        <div className="repeater-image">
          {param[field]?.url ? (
            <div className="repeater-image-preview">
              <img
                src={param[field].url}
                alt={param[field].alt || ''}
                style={{
                  width: '84px',
                  height: '84px',
                  marginBottom: '8px',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  border: '1px solid #ddd',
                }}
              />
              <div className="repeater-image-controls">
                <Button onClick={open} variant="secondary" size="small">
                  ✍️ {__('Заменить', 'theme')}
                </Button>
                <Button
                  isDestructive
                  onClick={() => update(index, field, { id: 0, url: '', alt: '' })}
                  variant="secondary"
                  size="small"
                >
                  ❌ {__('Удалить', 'theme')}
                </Button>
              </div>
            </div>
          ) : (
            <Button onClick={open} variant="primary" size="small">
              {__('Добавить изображение', 'theme')}
            </Button>
          )}
        </div>
      )}
    />
  );

  // --------------------------
  // ✍️ Рендер для текста (RichText)
  // --------------------------
  const renderTextControl = (item, index, field = 'content', options = {}) => (
    <RichText
      tagName={options.tagName || 'div'}
      placeholder={options.placeholder || __('Введите текст...', 'theme')}
      value={item[field]}
      onChange={(value) => update(index, field, value)}
      className={options.className || 'repeater-content'}
    />
  );

  return { list, add, remove, update, moveUp, moveDown, setList, renderImageControl, renderTextControl };
}
