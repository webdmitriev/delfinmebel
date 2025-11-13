import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title, items } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-07`,
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

        <div class="items-video">
          {items && items.map((item, index) => (
            // item-video
            <div key={index} className={`item-video ${index >= 3 ? 'hidden-video' : ''}`}>
              {item.item_html && (
                <div dangerouslySetInnerHTML={{ __html: item.item_html }} />
              )}

              {item.item_plain && (
                <RichText.Content
                  tagName="p"
                  value={item.item_plain}
                  className="item-descr"
                />
              )}
            </div>
          ))}
        </div>
        <div className="show-more-container">
          <button className="show-more-btn" id="showMoreVideos">Показать ещё</button>
        </div>
      </div>
    </div>
  );
};

export default Save;