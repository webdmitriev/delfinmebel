import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title } = attributes;

  const blockProps = useBlockProps.save({
    className: `marquee-container`,
  });

  return (
    <div {...blockProps}>
      <div class="marquee-content" data-repeat="10" data-speed="80">
        {title &&
          <RichText.Content
            tagName="div"
            value={title}
            className="marquee-item"
          />
        }
      </div>
    </div>
  );
};

export default Save;