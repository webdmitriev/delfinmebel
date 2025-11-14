import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title, items, params } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-13`,
  });

  return (
    <div {...blockProps}>
      <div className="block-lines">
        <div className="block-line block-line-01"></div>
        <div className="block-line block-line-02"></div>
        <div className="block-line block-line-03"></div>
        <div className="block-line block-line-04"></div>
        <div className="block-line block-line-05"></div>
        <div className="block-line block-line-06"></div>
        <div className="block-line block-line-07"></div>
        <div className="block-line block-line-08"></div>
        <div className="block-line block-line-09"></div>
        <div className="block-line block-line-10"></div>
        <div className="block-line block-line-11"></div>
        <div className="block-line block-line-12"></div>
        <div className="block-line block-line-13"></div>
        <div className="block-line block-line-14"></div>
        <div className="block-line block-line-15"></div>
        <div className="block-line block-line-16"></div>
        <div className="block-line block-line-17"></div>
        <div className="block-line block-line-18"></div>
        <div className="block-line block-line-19"></div>
        <div className="block-line block-line-20"></div>
        <div className="block-line block-line-21"></div>
        <div className="block-line block-line-22"></div>
        <div className="block-line block-line-23"></div>
        <div className="block-line block-line-24"></div>
      </div>
      <div className="container df-sp-fe">
        <div className="block-content">
          {title &&
            <RichText.Content
              tagName="h2"
              value={title}
              className="h2"
            />
          }
          {items.length > 0 && (
            <>
              {items.map((item, index) => (
                <div key={index} className="block-item df-fs-fs w-100p">
                  {item.image?.url && <img src={item.image.url} alt={item.image.alt || ''} className="block-item__icon" />}
                  <RichText.Content
                    tagName="div"
                    value={item.content}
                    className="descr"
                  />
                </div>
              ))}
            </>
          )}
        </div>
        <div className="block-policy df-sp-fs w-100p">
          {params.length > 0 && (
            <>
              {params.map((item, index) => (
                <div key={index} className="block-item">
                  {item.image?.url && <img src={item.image.url} alt={item.image.alt || ''} className="block-item__icon" />}
                  <RichText.Content
                    tagName="div"
                    value={item.content}
                    className="descr"
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Save;