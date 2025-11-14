import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title, params } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-15`,
  });

  return (
    <div {...blockProps}>
      <div class="container df-sp-st">
        {title &&
          <RichText.Content
            tagName="h2"
            value={title}
            className="h2"
          />
        }
        {params.length > 0 && (
          <>
            {params.map((item, index) => (
              <div key={index} className="block-item df-sp-ce w-100p">
                {item.image?.url && (<div class="block-item__icon df-ce-ce"><img src={item.image.url} alt="alto" /></div>)}
                <div class="block-item__content">
                  <RichText.Content
                    tagName="div"
                    value={item.label}
                    className="block-item__label"
                  />
                  <RichText.Content
                    tagName="div"
                    value={item.content}
                    className="block-item__descr"
                  />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Save;