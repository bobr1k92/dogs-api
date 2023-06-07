import ContentLoader from 'react-content-loader';

export const DogSkeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox='0 0 400 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='3' cy='-40' r='15' />
    <rect x='195' y='68' rx='2' ry='2' width='140' height='10' />
    <rect x='195' y='91' rx='2' ry='2' width='140' height='10' />
    <rect x='-1' y='54' rx='2' ry='2' width='182' height='182' />
    <rect x='196' y='115' rx='0' ry='0' width='139' height='10' />
  </ContentLoader>
);
