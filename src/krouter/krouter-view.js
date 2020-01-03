export default {
  render(h) {
    const {routeMap, current} = this.$router;
    console.log(routeMap, current)
    const component = routeMap[current].component || null;
    return h(component)
  }
}