const getters = {
  links: ({ links }) => links,
}
const state = () => ({
  links: [
    {
      title: 'Главная',
      to: '/',
    },
    {
      title: 'О нас',
      to: '/about',
    },
    {
      title: 'Города',
      to: '/cities',
    },
  ],
})

export default {
  getters,
  state,
}
