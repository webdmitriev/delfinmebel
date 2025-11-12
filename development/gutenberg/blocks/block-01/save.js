import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const {
    title,
    items,
    params
  } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-01`,
  });

  return (
    <main {...blockProps}>
      <div className="container df-sp-ce">
        <div className="mgu-main__content">
          {title && (
            <RichText.Content
              tagName="h1"
              value={title}
              className="h1"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Save;
