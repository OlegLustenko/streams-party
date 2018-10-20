import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import {
  youtubeSearchCreator,
} from './youtube-search';

import {SearchBar} from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';

describe('(Component) YoutubeSearch', () => {
  // -> DRY, SOLID
  // -> Fast Independent repeatability self-validation timely
  let props;
  const YTSearchSpy = sinon.spy();
  const localStorageMock = {
    getItem: sinon.spy(),
  };

  function generateWrapper(passedProps) {
    const defaultProps = {
      YTSearch: YTSearchSpy,
    };

    props = {...defaultProps, ...passedProps};

    const YoutubeSearch = youtubeSearchCreator({
      api: YTSearchSpy,
      localStorage: localStorageMock,
    });

    return shallow(<YoutubeSearch {...props} />);
  }

  let wrapper;
  beforeEach(() => {
    wrapper = generateWrapper();
  });

  afterEach(() => {
    YTSearchSpy.resetHistory();
  });

  it('should renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('it should render SearchBar', () => {
    expect(wrapper.find(SearchBar).exists()).toBe(true);
  });

  it('it should render SearchBar', () => {
    expect(wrapper.find(VideoDetail).exists()).toBe(true);
  });

  it('it should pass correct onSearchTermChange to SearchBar', () => {
    const actual = wrapper.find(SearchBar).prop('onSearchTermChange');

    expect(actual).toEqual(expect.any(Function));
  });

  it('it should pass correct props to VideoDetail', () => {
    const mockData = 'mockData';
    wrapper.find(VideoList).simulate('videoSelect', mockData); // stub

    const actual = wrapper.find(VideoDetail).props();
    const expectedProps = {
      selectedVideo: mockData,
    };

    expect(actual).toMatchObject(expectedProps);
  });

  it('it should call YTSearch on componentDidMount mount once', () => {
    expect(YTSearchSpy.calledOnce).toBe(true);
  });

  it.skip('it should pass correct props to YTSearch on search term change', () => {
    wrapper.find(SearchBar).simulate('searchTermChange', 'MOCK TERM FROM INPUT');
    console.log(YTSearchSpy.args);
    expect(YTSearchSpy.withArgs({})).toBe(true);
  });
});
