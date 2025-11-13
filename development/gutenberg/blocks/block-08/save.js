import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title, subTitle } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-08`,
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

        {subTitle &&
          <RichText.Content
            tagName="p"
            value={subTitle}
            className="sub_title"
          />
        }

        <div
          className="block-pictures df-fs-st"
          data-popular-products="true"
        />
      </div>
    </div>
  );
};

export default Save;