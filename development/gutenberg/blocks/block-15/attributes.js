const attributes = {
  title: { type: 'string', default: '' },
  params: {
    type: 'array',
    default: [{
      imageURL: '',
      imageID: 0,
      label: '',
      content: ''
    }]
  },
};

export default attributes;
