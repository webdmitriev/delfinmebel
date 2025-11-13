const attributes = {
  title: { type: 'string', default: '' },
  selectedCategories: {
    type: 'array',
    default: [],
    items: {
      type: 'object'
    }
  },
};

export default attributes;
