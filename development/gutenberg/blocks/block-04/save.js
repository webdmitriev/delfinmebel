import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { selectedCategories } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-04`,
  });

  return (
    <div {...blockProps}>
      {selectedCategories && selectedCategories.length > 0 && (
        <div class="container">
          {selectedCategories.map((cat, index) => (
            <a key={index} href={cat.link} class="block-category">
              <p class="block-category__name">{cat.name}</p>
              {cat.description && <p class="block-category__descr">{cat.description}</p>}
              {cat.image?.url ? (
                <img
                  src={cat.image.url}
                  alt={cat.name}
                  className="block-category__image"
                />
              ) : (
                <img
                  src="data:image/gif;base64,R0lGODlhBwAFAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAUAAAIFjI+puwUAOw=="
                  alt={cat.name}
                  className="block-category__image"
                />
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
