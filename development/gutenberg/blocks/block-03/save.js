import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-03`,
  });

  return (
    <div {...blockProps}>
      <div class="container">
        {title &&
          <RichText.Content
            tagName="h2"
            value={title}
            className="h2"
          />
        }
      </div>
    </div>
  );
};

export default Save;