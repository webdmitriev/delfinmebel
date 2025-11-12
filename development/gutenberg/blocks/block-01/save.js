import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const {
    title,
    titleColor,
    items,
    params,
    videoMP4,
    videoWEBM,
    videoPoster
  } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-01`,
  });

  return (
    <main {...blockProps}>
      {videoMP4 && (
        <div className="block-01-video df-fe-fe">
          <video autoPlay muted loop playsInline preload="metadata" poster={videoPoster.url} aria-hidden="true">
            {videoWEBM && <source src={videoWEBM.url} type="video/webm" />}
            <source src={videoMP4.url} type="video/mp4" />
          </video>
        </div>
      )}

      <div className="container">
        {title &&
          <RichText.Content
            tagName="h1"
            value={title}
            className="h1"
            data-color={titleColor}
          />
        }

        {items.length > 0 && (
          <div className="block-items df-fs-st w-100p">
            {items.map((item, index) => (
              <RichText.Content
                key={index}
                tagName="div"
                value={item.content}
                className="block-item"
              />
            ))}
          </div>
        )}
      </div>

      {params.length > 0 && (
        <div className="data-items df-sp-fs">
          {params.map((item, index) => (
            <div key={index} className="data-item">
              {item.image?.url && <img src={item.image.url} alt={item.image.alt || ''} />}
              <RichText.Content
                tagName="span"
                value={item.content}
                className="advantages-item__content"
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Save;