const attributes = {
  title: { type: 'string', default: '' },
  titleColor: { type: 'string', default: '' },
  items: {
    type: 'array',
    default: [{
      imageURL: '',
      imageID: 0,
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
