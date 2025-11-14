import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title, blockSuptitle, blockTitle, blockDescr, imageUrl, imageId } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-10`,
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
        <div class="block-ozon">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="alto"
              className="block-ozon__image"
              loading="lazy"
              decoding="async"
            />
          )}
          {blockSuptitle &&
            <RichText.Content
              tagName="div"
              value={blockSuptitle}
              className="block-ozon__suptitle"
            />
          }

          <div class="block-ozon__wrap">
            {blockTitle &&
              <RichText.Content
                tagName="div"
                value={blockTitle}
                className="block-ozon__title"
              />
            }
            <div class="block-ozon__name">ozon</div>
          </div>
          {blockDescr &&
            <RichText.Content
              tagName="div"
              value={blockDescr}
              className="descr"
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Save;