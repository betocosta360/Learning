module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: ['expo-router/babel'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
  }
}}