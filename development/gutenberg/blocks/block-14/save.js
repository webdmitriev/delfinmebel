import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title, subTitle, buttonText, buttonLink, imageOneUrl, imageOneId, imageTwoUrl, imageTwoId } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-14`,
  });

  return (
    <div {...blockProps}>
      <div class="container">
        {imageOneUrl && (
          <img
            src={imageOneUrl}
            alt="alto"
            className="block-bg-01"
            loading="lazy"
            decoding="async"
          />
        )}
        {imageTwoUrl && (
          <img
            src={imageTwoUrl}
            alt="alto"
            className="block-bg-02"
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
              tagName="div"
              value={subTitle}
              className="descr"
            />
          }
          {buttonText && (<a href={buttonLink || '#'} target="_blank" rel="noopener noreferrer" class="link-vk">{buttonText}</a>)}
        </div>
      </div>
    </div>
  );
};

export default Save;