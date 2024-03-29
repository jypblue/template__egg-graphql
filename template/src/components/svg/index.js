import Vue from 'vue';
import SvgIcon from './svg-icon';

Vue.component('svg-icon', SvgIcon);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('@/assets/svg', false, /\.svg$/);
requireAll(req);
