export default {
  functional: true,
  props: {
    name: String,
    renderFunc: Function
  },
  render: (h, context) => {
    return context.props.renderFunc(h, context.props.name)
  }
}
