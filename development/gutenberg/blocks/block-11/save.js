import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const {
    title,

    blockOneTitle,
    blockOneDescr,
    blockOneIconUrl,
    blockOneIconId,
    blockOneImageUrl,
    blockOneImageId,

    blockTwoTitle,
    blockTwoDescr,
    blockTwoIconUrl,
    blockTwoIconId,
    blockTwoImageUrl,
    blockTwoImageId,

    blockThreeTitle,
    blockThreeDescr,
    blockThreeIconUrl,
    blockThreeIconId,
    blockThreeImageUrl,
    blockThreeImageId
  } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-11`,
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
        <div class="block-items df-ce-ce">
          <div class="block-item block-item-01 df-fs-ce" style={{ backgroundImage: `url(${blockOneImageUrl})` }}>
            {blockOneIconUrl && (
              <img
                src={blockOneIconUrl}
                alt="alto"
                className="block-item__icon"
                loading="lazy"
                decoding="async"
              />
            )}
            {blockOneTitle &&
              <RichText.Content
                tagName="div"
                value={blockOneTitle}
                className="block-item__label"
              />
            }
            {blockOneDescr &&
              <RichText.Content
                tagName="div"
                value={blockOneDescr}
                className="block-item__descr"
              />
            }
          </div>

          <div class="block-item block-item-02 df-fs-ce" style={{ backgroundImage: `url(${blockTwoImageUrl})` }}>
            {blockTwoIconUrl && (
              <img
                src={blockTwoIconUrl}
                alt="alto"
                className="block-item__icon"
                loading="lazy"
                decoding="async"
              />
            )}
            {blockTwoTitle &&
              <RichText.Content
                tagName="div"
                value={blockTwoTitle}
                className="block-item__label"
              />
            }
            {blockTwoDescr &&
              <RichText.Content
                tagName="div"
                value={blockTwoDescr}
                className="block-item__descr"
              />
            }
          </div>

          <div class="block-item block-item-03 df-fs-ce" style={{ backgroundImage: `url(${blockThreeImageUrl})` }}>
            {blockThreeIconUrl && (
              <img
                src={blockThreeIconUrl}
                alt="alto"
                className="block-item__icon"
                loading="lazy"
                decoding="async"
              />
            )}
            {blockThreeTitle &&
              <RichText.Content
                tagName="div"
                value={blockThreeTitle}
                className="block-item__label"
              />
            }
            {blockThreeDescr &&
              <RichText.Content
                tagName="div"
                value={blockThreeDescr}
                className="block-item__descr"
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Save;