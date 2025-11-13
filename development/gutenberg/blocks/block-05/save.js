import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ({ attributes }) => {
  const { title } = attributes;

  const blockProps = useBlockProps.save({
    className: 'block-05'
  });

  return (
    <div {...blockProps}>
      <div className="container">
        {title && (
          <RichText.Content
            tagName="h2"
            className="popular-products-title"
            value={title}
          />
        )}

        <div
          className="popular-products-container"
          data-popular-products="true"
        />
      </div>
    </div>
  );
};

export default Save;