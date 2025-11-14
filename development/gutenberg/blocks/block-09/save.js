import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title, subTitle, blockTitle, blockButtonText, blockButtonLink, blockHtml, items } = attributes;

  const blockProps = useBlockProps.save({
    className: `block-09`,
  });

  return (
    <div {...blockProps}>
      <div class="container">
        <div class="block-title">
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
        </div>
        <div class="block-faq-block">
          {blockTitle &&
            <RichText.Content
              tagName="p"
              value={blockTitle}
              className="descr descr-title"
            />
          }
          {blockButtonText &&
            <a href={blockButtonLink || '#'} class="descr descr-popup">
              <RichText.Content
                tagName="span"
                value={blockButtonText}
              />
            </a>
          }
          {blockHtml &&
            <div dangerouslySetInnerHTML={{ __html: blockHtml }} />
          }
        </div>
        <div class="faq-accordion">
          {items && items.map((item, index) => (
            <div class="panel" key={index}>
              <div class="panel-heading "><RichText.Content tagName="span" value={item.text_title} /> <div class="heading-button"></div></div>
              <div class="panel-collapse">
                <div class="panel-body"><RichText.Content tagName="span" value={item.text_content} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Save;