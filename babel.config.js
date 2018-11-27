module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ["component", {
    "libraryName": "mint-ui",
    "style": true,
    }],
    {
      name: 'vux-ui'
    }
  ],

}
