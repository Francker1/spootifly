import { shallow } from 'enzyme';
import AlbumCard from '../../../../../../app/core/components/common/album-card/view';

describe('Tests in AlbumView component', () => {
  const data = {
    name: 'Un album',
    release_date: '2021-07-30',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273ebd6d297f2cdeeadb58243a0',
        width: 640,
      },
    ],
    artists: [
      {
        href: 'https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C',
        id: '0du5cEVh5yTK9QJze8zA0C',
        name: 'Bruno Mars',
        type: 'artist',
      },
    ],
  };

  const { name, release_date, images, artists } = data;
  const wrapper = shallow(
    <AlbumCard name={name} release_date={release_date} images={images} artists={artists} />,
  );

  test('should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('tag <figure> should exists in component', () => {
    const figure = wrapper.find('figure');
    expect(figure).not.toBe(false);
  });

  test('should have an image with src', () => {
    const img = wrapper.find('CardImg');
    expect(img.props().src).toBe(data[1]?.url);
  });
});
