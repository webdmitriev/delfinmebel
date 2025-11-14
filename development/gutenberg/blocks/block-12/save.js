import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title, subTitle, imageUrl, thumbnailUrl } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-12`,
  });

  return (
    <div {...blockProps}>
      <div class="container df-fe-ce">
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt="alto"
            className="block-bg"
            loading="lazy"
            decoding="async"
          />
        )}
        <div class="block-wrap">
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
              className="descr"
            />
          }
          {imageUrl && (
            <img
              src={imageUrl}
              alt="alto"
              className="image-block"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Save;