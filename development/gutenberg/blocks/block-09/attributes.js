const attributes = {
  title: { type: 'string', default: 'Часто задаваемые вопросы' },
  subTitle: { type: 'string', default: 'Остались вопросы? Посмотрите ответы' },
  blockTitle: { type: 'string', default: 'Как выбрать ростовую группу для школьной мебели, чтобы избежать проблем с Роспотребнадзором?' },
  blockButtonText: { type: 'string', default: 'Посмотреть таблицу ростовых групп' },
  blockButtonLink: { type: 'string', default: '/' },
  blockHtml: { type: 'string', default: '<iframe width="720" height="405" src="https://rutube.ru/play/embed/9d9c1ee3d39d0f414b4441b5fe6fb6bb/" style="border: none;" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' },
  items: {
    type: 'array',
    default: []
  },
};

export default attributes;
