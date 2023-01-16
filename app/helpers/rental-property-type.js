import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export default helper(function rentalPropertyType([type]) {
  if (communityPropertyTypes.includes(type)) {
    return 'Community';
  }

  return 'Standalone';
});
