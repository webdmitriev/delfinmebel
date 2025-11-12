const attributes = {
  title: { type: 'string', default: '' },
  items: {
    type: 'array',
    default: [{
      content: ''
    }]
  },
  params: {
    type: 'array',
    default: [{
      imageURL: '',
      imageID: 0,
      content: ''
    }]
  }
};

export default attributes;
