const attributes = {
  title: { type: 'string', default: '' },
  titleColor: { type: 'string', default: '' },
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
  },
  videoMP4: {
    type: 'object',
    default: { id: 0, url: '', title: '' }
  },
  videoWEBM: {
    type: 'object',
    default: { id: 0, url: '', title: '' }
  },
  videoPoster: {
    type: 'object',
    default: { id: 0, url: '', alt: '' }
  }
};

export default attributes;
