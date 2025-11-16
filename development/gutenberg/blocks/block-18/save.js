import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title, subTitle } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-18`,
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
        {title &&
          <RichText.Content
            tagName="div"
            value={subTitle}
            className="descr"
          />
        }
        <div
          className="products-color df-fs-fs w-100p"
          data-popular-products="true"
        />
      </div>
    </div>
  );
};

export default Save;